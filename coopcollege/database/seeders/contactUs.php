<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class contactUs extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\contactUs::create([
            'emailAdd'=>'head@climbs.coop', 
            'phoneNum'=>'0936545878', 
            'telNum'=>'819400', 
            'facebookLink'=>'facebook.com/coop', 
            'websiteLink'=>'www.climbs.coop',
            'Status'=>1
        ]);

      
    }
}
