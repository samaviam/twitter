<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class AuthController extends Controller
{
    public function index()
    {
        return Inertia::render('Auth');
    }

    public function signup()
    {
        Inertia::modal('SignUp');

        return $this->index();
    }
}
