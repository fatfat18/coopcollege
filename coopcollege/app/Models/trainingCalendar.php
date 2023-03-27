<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class trainingCalendar extends Model
{
    public $timestamps = false;
    protected $guarded = [];
    use HasFactory;

    public function events(){
        return $this->hasMany(courseVenue::class, 'idCV', 'idCV');
    }
}
