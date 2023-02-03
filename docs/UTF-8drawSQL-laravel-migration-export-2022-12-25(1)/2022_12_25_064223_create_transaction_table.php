<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTransactionTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::disableForeignKeyConstraints();

        Schema::create('transaction', function (Blueprint $table) {
            $table->id();
            $table->string('transaction_no');
            $table->string('description')->nullable();
            $table->bigInteger('student_id');
            $table->foreign('student_id')->references('id')->on('student');
            $table->bigInteger('user_id')->comment('en son işlem yapan');
            $table->bigInteger('department_id');
            $table->foreign('department_id')->references('id')->on('department');
            $table->bigInteger('semester_id');
            $table->string('currency_type');
            $table->date('islem_tarih');
            $table->date('vade_tarih');
            $table->bigInteger('amount_payed')->comment('evrak tutarı');
            $table->dateTime('created_at');
            $table->bigInteger('updated_at');
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
        Schema::dropIfExists('transaction');
    }
}
