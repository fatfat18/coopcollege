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
        Schema::create('training_calendars', function (Blueprint $table) {
            $table->id('idTC');
            $table->integer('idCV');
            $table->integer('month_num');
            $table->text('month');
            $table->text('year');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('training_calendars');
    }
};
