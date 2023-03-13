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
        Schema::create('news_contexts', function (Blueprint $table) {
            $table->id('idnewsContext');
            $table->integer('idnewsCat');
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
        Schema::dropIfExists('news_contexts');
    }
};
