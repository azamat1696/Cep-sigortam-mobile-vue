<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGradeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::disableForeignKeyConstraints();

        Schema::create('grade', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('student_id');
            $table->foreign('student_id')->references('id')->on('student');
            $table->bigInteger('course_id');
            $table->foreign('course_id')->references('id')->on('course');
            $table->bigInteger('semester_id');
            $table->bigInteger('grade');
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
        Schema::dropIfExists('grade');
    }
}
