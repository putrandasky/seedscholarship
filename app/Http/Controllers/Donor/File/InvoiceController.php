<?php

namespace App\Http\Controllers\Donor\File;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class InvoiceController extends Controller
{
    public function view()
    {
        $pdf = app('dompdf.wrapper');
        $pdf->getDomPDF()->set_option("enable_php", true);
        $pdf->loadView('pdf.InvoiceDonatur');
        $pdf->setPaper('b5','landscape');
        return $pdf->stream('test');
        // return view('attachment.ContractDonatur');
    }
}
