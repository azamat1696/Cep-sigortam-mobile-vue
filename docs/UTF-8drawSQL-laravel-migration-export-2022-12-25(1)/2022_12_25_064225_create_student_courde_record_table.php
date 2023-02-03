<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStudentCourdeRecordTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::disableForeignKeyConstraints();

        Schema::create('student_courde_record', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('student_id');
            $table->foreign('student_id')->references('id')->on('student');
            $table->bigInteger('section_id');
            $table->foreign('section_id')->references('id')->on('section');
            $table->bigInteger('semester_id');
            $table->foreign('semester_id')->references('id')->on('semester');
            $table->bigInteger('course_id');
            $table->foreign('course_id')->references('id')->on('course');
            $table->dateTime('created_at');
            $table->dateTime('udated_at');
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
        Schema::dropIfExists('student_courde_record');
    }
}
