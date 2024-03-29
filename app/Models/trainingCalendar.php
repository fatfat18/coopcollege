<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class trainingCalendar extends Model
{
    public $timestamps = false;
    protected $guarded = [];
    use HasFactory;
    protected $primaryKey = 'idCV';

    public function events(){
        return $this->hasMany(courseVenue::class, 'idCV', 'idCV');
    }

    public function event(){
        return $this->hasOne(courseVenue::class, 'idCV', 'idCV');
    }
}
