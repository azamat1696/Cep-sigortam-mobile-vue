<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStudentRecordTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::disableForeignKeyConstraints();

        Schema::create('student_record', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('academic_year_id');
            $table->foreign('academic_year_id')->references('id')->on('academic_year');
            $table->bigInteger('semester_id');
            $table->foreign('semester_id')->references('id')->on('semester');
            $table->bigInteger('student_id');
            $table->foreign('student_id')->references('id')->on('student');
            $table->dateTime('created_at');
            $table->dateTime('updated_at');
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
        Schema::dropIfExists('student_record');
    }
}
