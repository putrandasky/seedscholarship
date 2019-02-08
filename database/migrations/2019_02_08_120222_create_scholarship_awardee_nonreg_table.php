<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateScholarshipAwardeeNonregTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('scholarship_awardee_nonreg', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('awardee_nonreg_id');
            $table->boolean('is_approved');
            $table->string('registration_code');
            $table->integer('scholarship_id');
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
        Schema::dropIfExists('scholarship_awardee_nonreg');
    }
}
