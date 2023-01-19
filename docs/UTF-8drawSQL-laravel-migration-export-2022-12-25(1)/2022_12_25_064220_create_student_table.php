<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStudentTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::disableForeignKeyConstraints();

        Schema::create('student', function (Blueprint $table) {
            $table->id()->foreign('attendance.student_id');
            $table->string('name');
            $table->bigInteger('surname');
            $table->bigInteger('other_names')->nullable();
            $table->string('student_no');
            $table->string('identity_no');
            $table->string('passport_no');
            $table->enum('gender')->default('male,female');
            $table->bigInteger('country_id');
            $table->string('blood_group');
            $table->date('birth_date');
            $table->string('place_of_birth');
            $table->string('mother_name');
            $table->string('father_name');
            $table->string('email');
            $table->string('phone_no');
            $table->string('phone_no_1');
            $table->string('phone_no_2');
            $table->string('address');
            $table->string('student_status')->comment('01');
            $table->string('ogr_hakk')->comment('Hakvar,');
            $table->string('not_sistemi')->comment('listeden seçilecek');
            $table->date('ayrilma_tarihi');
            $table->string('ayrilma_nedeni')->nullable()->comment('1.');
            $table->date('register_date');
            $table->boolean('hazirlik_okudum');
            $table->tinyInteger('hazirlik_donem_sayi')->default(1);
            $table->string('giris_turu')->comment('(Def. Value “2-Sınavsız Geçiş”)');
            $table->string('giris_puan_turu')->nullable();
            $table->bigInteger('giris_puan')->nullable();
            $table->bigInteger('genel_not_ortalama');
            $table->string('notes');
            $table->bigInteger('user_id');
            $table->string('diploma_tur')->nullable();
            $table->bigInteger('diploma_not');
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
        Schema::dropIfExists('student');
    }
}
