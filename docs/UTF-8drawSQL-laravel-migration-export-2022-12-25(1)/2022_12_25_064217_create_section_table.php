<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSectionTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::disableForeignKeyConstraints();

        Schema::create('section', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('section_no');
            $table->bigInteger('course_id');
            $table->foreign('course_id')->references('id')->on('course');
            $table->bigInteger('instructor_user_id')->nullable();
            $table->foreign('instructor_user_id')->references('id')->on('user');
            $table->date('theory_start_date')->nullable();
            $table->date('theory_end_date')->nullable();
            $table->date('practice_start_date')->nullable();
            $table->date('practice_end_date')->nullable();
            $table->dateTime('ic_denetim_tarih')->nullable();
            $table->bigInteger('ic_denetim_user_id')->nullable();
            $table->foreign('ic_denetim_user_id')->references('id')->on('user');
            $table->date('ders_imza_end_date')->nullable();
            $table->bigInteger('user_id')->comment('en son işlem yapan kişi');
            $table->foreign('user_id')->references('id')->on('user');
            $table->boolean('status')->default(1);
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
        Schema::dropIfExists('section');
    }
}
