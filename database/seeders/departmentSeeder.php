<?php

namespace Database\Seeders;

use App\Models\department;
use Faker\Provider\Lorem;
use Illuminate\Database\Seeder;

class departmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i=0; $i <5 ; $i++) {
            department::create([
                'name'          => 'Department '.$i.'',
                'description'   => "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, provident'.$i.'. ",
                'photo_path'    => 'department.jpg',
            ]);
    }
}
}
