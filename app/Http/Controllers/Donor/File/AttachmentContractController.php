<?php

namespace App\Http\Controllers\Donor\File;

use App;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class AttachmentContractController extends Controller
{
    public function view()
    {
        $pdf = app('dompdf.wrapper');
        $pdf->getDomPDF()->set_option("enable_php", true);
        $pdf->loadView('attachment.ContractDonaturAktif');
        $pdf->setPaper('a4');
        return $pdf->stream('test');
        // return view('attachment.ContractDonatur');
    }
    public function show(Request $request, $userId)
    {
        $data = App\Donor::whereHas('donorPeriods.period', function ($query) use ($request) {
            $query->where('year', '=', $request->year);
        })
            ->where([
                'id' => $userId,
            ])
            ->with([
                'collegeDepartment',
                'donorPeriods' => function ($query) use ($request) {
                    $query->whereHas('period', function ($query) use ($request) {
                        $query->where('year', '=', $request->year);
                    });
                },
                'donorPeriods.period',

            ])->first();

        $newpathToFile = Storage::disk('local')->getDriver()->getAdapter()->applyPathPrefix("contract/donor/{$data->donorPeriods[0]->period->period}/{$userId}/Surat Perjanjian Kerja Sama {$data->name}.pdf");
        return response()->file($newpathToFile);

    }
}
