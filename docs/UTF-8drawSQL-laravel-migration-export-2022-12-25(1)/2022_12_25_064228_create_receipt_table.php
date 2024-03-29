<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReceiptTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::disableForeignKeyConstraints();

        Schema::create('receipt', function (Blueprint $table) {
            $table->id();
            $table->string('receipt_no');
            $table->bigInteger('invoice_id');
            $table->foreign('invoice_id')->references('id')->on('invoice');
            $table->bigInteger('transaction_id');
            $table->foreign('transaction_id')->references('id')->on('transaction');
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
        Schema::dropIfExists('receipt');
    }
}
