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
        Schema::create('posts', function (Blueprint $table) {
            $table->id('Postid');
            $table->integer('PostCatId');           
            $table->integer('idUser');
            $table->text('Description');
            $table->string('newsTitle');
            $table->text('Context');
            $table->dateTime('news_DateCreated');
            $table->tinyInteger('Status')->default('1');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('posts');
    }
};
