<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCostAdvancesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cost_advances', function (Blueprint $table) {
            $table->increments('id');
            $table->string('proposal_number');
            $table->string('proposal_status');
            $table->string('agenda');
            $table->integer('department_id');
            $table->string('proposed_by');
            $table->date('proposed_date');
            $table->string('bank_name');
            $table->integer('account_number');
            $table->integer('approved_by');
            $table->date('approved_date');
            $table->string('report_number');
            $table->string('report_status');
            $table->string('report_by');
            $table->date('report_date');
            $table->integer('report_approved_by');
            $table->date('report_approved_date');
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
        Schema::dropIfExists('cost_advances');
    }
}
