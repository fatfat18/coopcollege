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
        Schema::create('course_venues', function (Blueprint $table) {
            $table->id('idCV');
            $table->text('courseTitle');
            $table->text('Objectives');
            $table->text('Venue');
            $table->text('Cost');
        
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('course_venues');
    }
};
