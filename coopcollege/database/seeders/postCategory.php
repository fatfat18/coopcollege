<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class postCategory extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        
        foreach ([ 'News', 'Project' ] as $row) {
            \App\Models\postCat::create([
                'category'=>$row, 
              
            ]);
        }

        
    }
}
