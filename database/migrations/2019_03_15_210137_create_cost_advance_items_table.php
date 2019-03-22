<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCostAdvanceItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cost_advance_items', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('cost_advance_id');
            $table->date('date');
            $table->string('item');
            $table->string('proposed_cost');
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
        Schema::dropIfExists('cost_advance_items');
    }
}
