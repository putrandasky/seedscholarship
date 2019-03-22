<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCostReimbursementsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cost_reimbursements', function (Blueprint $table) {
            $table->increments('id');
            $table->string('reimbursement_number');
            $table->string('agenda');
            $table->integer('department_id');
            $table->integer('proposed_by');
            $table->date('proposed_date');
            $table->string('bank_name');
            $table->integer('account_number');
            $table->integer('approved_by');
            $table->date('approved_date');
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
        Schema::dropIfExists('cost_reimbursements');
    }
}
