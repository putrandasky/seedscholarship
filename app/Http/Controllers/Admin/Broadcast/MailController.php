<?php

namespace App\Http\Controllers\Admin\Broadcast;

use App;
use App\Http\Controllers\Controller;
use App\Jobs\Admin\ProcessBroadcastEmail;
use Illuminate\Http\Request;
use Storage;

class MailController extends Controller
{
    public function index()
    {
        $data['period'] = App\Period::withCount('donorPeriods')->get();
        return $data;
    }
    public function indexBroadcast($broadcast_type_id)
    {
        $data = App\Broadcast::where('broadcast_type_id', $broadcast_type_id)->with([
            'sender' => function ($query) {
                $query->select('id', 'name');
            },
        ]);
        if ($broadcast_type_id == 1 || $broadcast_type_id == 2) {
            # code...
            $data_with_period = $data->with(['period' => function ($query) {
                $query->select('id', 'period', 'year');
            }]);
        }
        if ($broadcast_type_id == 3) {
            # code...
            $data_with_period = $data->with(['scholarship' => function ($query) {
                $query->select('id', 'name', 'year');
            }]);
        }

        return $data_with_period->get();

    }
    public function getBroadcastDetail($broadcast_type_id, $broadcast_id)
    {
        $data = App\Broadcast::where('id', $broadcast_id)->with([
            'broadcast_type',
            'sender' => function ($query) {
                $query->select('id', 'name');
            },
        ]);
        if ($broadcast_type_id == 1 || $broadcast_type_id == 2) {
            # code...
            $data_with_period = $data->with(['period' => function ($query) {
                $query->select('id', 'period', 'year');
            }]);
        }
        if ($broadcast_type_id == 3) {
            # code...
            $data_with_period = $data->with(['scholarship' => function ($query) {
                $query->select('id', 'name', 'year');
            }]);
        }
        $files = Storage::files("broadcast/{$broadcast_id}");
        $filename = [];
        if (count($files) > 0) {
            for ($i = 0; $i < count($files); $i++) {
                # code...
                $filename[$i]['name'] = pathinfo($files[$i])['basename'];
                $filename[$i]['size'] = Storage::size("broadcast/{$broadcast_id}/{$filename[$i]['name']}");
            }
        }
        return $data_with_period->first()->setAttribute('attachments', $filename);

    }
    public function showBroadcastAttachment(Request $request, $broadcast_id)
    {

        $newpathToFile = Storage::disk('local')->getDriver()->getAdapter()->applyPathPrefix("broadcast/{$broadcast_id}/{$request->filename}");
        return response()->file($newpathToFile);

    }
    public function composeData()
    {
        $data['periods'] = App\Period::withCount([
            'awardeePeriods' => function ($query) {
                $query->where('status', 'APPROVED');
            }, 'donorPeriods',
        ]
        )->get();
        $data['scholarship'] = App\Scholarship::withCount([
            'awardeeNonregScholarship' => function ($query) {
                $query->where('status', 'APPROVED');
            },
        ])->get();
        return $data;
    }
    public function postBroadcast(Request $request)
    {
        $item = json_decode($request->input('itemInput'), true);
        $broadcast = new App\Broadcast();
        $broadcast->from = auth('admin-api')->user()->id;
        $broadcast->title = $item['title'];
        $broadcast->content = $item['body'];
        $broadcast->period = $item['periods']; //to grouping period for AWARDEE, DONORS. grouping scholars Name for Scholarsip/non reg awardee
        $broadcast->broadcast_type_id = $item['groups']; //to grouping AWARDEE, DONORS, SCHOLARS/NON REG AWARDEE
        $broadcast->save();

        # code...
        if ($request->hasfile('itemFiles')) {
            # code...
            foreach ($request->file('itemFiles') as $file) {
                $file->storeAs("broadcast/{$broadcast->id}", $file->getClientOriginalName());
            }
        }

        if ($item['groups'] == 2) { // group 2 is Donor
            $users = App\Donor::whereHas('donorPeriods', function ($query) use ($item) {
                $query->where('period_id', $item['periods']);
            })->get(['id', 'email', 'name']);
        }
        if ($item['groups'] == 1) { // group 1 is Awardee
            $users = App\Awardee::whereHas('awardeePeriods', function ($query) use ($item) {
                $query->where('period_id', $item['periods']);
                $query->where('status', 'APPROVED');
            })->get(['id', 'email', 'name']);
        }
        if ($item['groups'] == 3) { // group 3 is Nonreg
            $users = App\AwardeeNonreg::whereHas('awardeeNonregScholarships', function ($query) use ($item) {
                $query->where('scholarship_id', $item['periods']);
                $query->where('status', 'APPROVED');
            })->get(['id', 'email', 'name']);
        }
        $data['broadcast_id'] = $broadcast->id;
        // return $data;
        foreach ($users as $user) {
            $data['user'] = $user;
            $broadcast_reader = new App\BroadcastReader();
            $broadcast_reader->broadcast_id = $broadcast->id;
            $broadcast_reader->status = 'RECORDED';
            if ($item['groups'] == 2) {
                $donor = App\Donor::find($user->id);
                $donor->broadcast_readers()->save($broadcast_reader);

            }
            if ($item['groups'] == 1) {
                $awardee = App\Awardee::find($user->id);
                $awardee->broadcast_readers()->save($broadcast_reader);
            }
            if ($item['groups'] == 3) {
                $nonreg = App\AwardeeNonreg::find($user->id);
                $nonreg->broadcast_readers()->save($broadcast_reader);
            }
            $data['broadcast_reader_id'] = $broadcast_reader->id;

            dispatch(new ProcessBroadcastEmail($data));
        }
        return response()->json(['status' => 'Success', 'message' => 'The messages ready for dispatched, will be broadcasted soon', 'broadcast_id' => $broadcast->id], 200);

    }

    public function sendBroadcastEmail(Request $request)
    {
        $data['period'] = App\Period::where('is_active', 1)->first();
        $donors = App\Donor::whereHas(
            'donorPeriods', function ($query) use ($request) {
                $query->where('period_id', '=', $request->period_id);
            })
            ->select('id', 'name', 'email', 'year', 're_registration_token')->get();
        foreach ($donors as $key => $data['donor']) {
            $data['donor']->re_registration_token = Str::random(100);
            $data['donor']->save();
            dispatch(new ProcessBroadcastEmailDonorReRegistration($data));
        }
        $broadcast = new App\Broadcast;
        $broadcast->from = auth('admin-api')->user()->id;
        $broadcast->title = "Undangan SEED Periode {$data['period']->period} Tahun {$data['period']->year}";
        $broadcast->content = "";
        $broadcast->accountable_type = "App/Donor";
        $broadcast->save();

    }

    public function indexReader($broadcast_id)
    {
        $broadcast_reader = App\BroadcastReader::where('broadcast_id', $broadcast_id)->with(
            ['accountable' => function ($query) {
                $query->select('id', 'name', 'email');
            },
            ])->get();
        return $broadcast_reader;
    }
}
