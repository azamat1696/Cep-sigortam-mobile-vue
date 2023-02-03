<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAttendanceTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::disableForeignKeyConstraints();

        Schema::create('attendance', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('section_id');
            $table->foreign('section_id')->references('id')->on('section');
            $table->bigInteger('student_id');
            $table->boolean('Status');
            $table->date('assignedDate');
        });

        Schema::enableForeignKeyConstraints();
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('attendance');
    }
}
