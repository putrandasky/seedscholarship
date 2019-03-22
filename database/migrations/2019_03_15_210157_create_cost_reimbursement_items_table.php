<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCostReimbursementItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cost_reimbursement_items', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('cost_advance_id');
            $table->date('date');
            $table->string('item');
            $table->string('actual_cost');
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
        Schema::dropIfExists('cost_reimbursement_items');
    }
}
