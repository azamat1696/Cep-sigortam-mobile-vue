<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSemesterTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::disableForeignKeyConstraints();

        Schema::create('semester', function (Blueprint $table) {
            $table->id()->foreign('grade.semester_id');
            $table->string('name');
            $table->bigInteger('academic_year_id');
            $table->foreign('academic_year_id')->references('id')->on('academic_year');
            $table->boolean('status');
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
        Schema::dropIfExists('semester');
    }
}
