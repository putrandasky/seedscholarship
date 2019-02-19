<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDonorTransactionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('donor_transactions', function (Blueprint $table) {
            $table->increments('id');
            $table->date('trx_date');
            $table->integer('amount');
            $table->string('evidence');
            $table->string('verification');
            $table->string('invoice_no');
            $table->string('status_invoice');
            $table->integer('donor_id');
            $table->integer('period_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('donor_transactions');
    }
}
