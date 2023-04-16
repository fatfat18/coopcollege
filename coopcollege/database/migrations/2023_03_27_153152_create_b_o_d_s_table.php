<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('b_o_d_s', function (Blueprint $table) {
            $table->id('idBOD');
            $table->integer('ImagesId');
            $table->text('Prefix')->nullable();
            $table->text('Fname');
            $table->text('Lname');
            $table->text('Suffix')->nullable();
            $table->tinyInteger('Status')->default(1);
            $table->text('Position');
            $table->date('startDate');
            $table->date('endDate');
            $table->text('Address');
            $table->integer('coopId');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('b_o_d_s');
    }
};
