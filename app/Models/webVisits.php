<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class webVisits extends Model
{
    use HasFactory;
    protected $guarded = [];
    protected $table = 'web_visits';
    public $timestamps = true; 
}
