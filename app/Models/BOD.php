<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BOD extends Model
{
    public $timestamps = false;
    protected $guarded = [];
    use HasFactory;


    public function image(){
        return $this->hasOne(images::class, 'imagesId', 'ImagesId');
    }
}
