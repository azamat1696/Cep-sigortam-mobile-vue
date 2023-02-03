<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCourseTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::disableForeignKeyConstraints();

        Schema::create('course', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('course_no');
            $table->string('description');
            $table->bigInteger('department_id');
            $table->foreign('department_id')->references('id')->on('department');
            $table->boolean('Status')->default(true);
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
        Schema::dropIfExists('course');
    }
}
