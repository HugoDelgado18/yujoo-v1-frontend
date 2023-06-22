'use client'
import Image from 'next/image';
import react, { useState } from 'react';
import Home from './home/page';
import Login from './login/page';
import Signup from './signup/page';

export default function Base() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginFrame , setLoginFrame ] = useState(true);
  return (
    <>
    <main>
        {loggedIn ? <Home /> : loginFrame ? <Login loginFrame={loginFrame} setLoginFrame={setLoginFrame} loggedIn={loggedIn} setLoggedIn={setLoggedIn} /> : <Signup loginFrame={loginFrame} setLoginFrame={setLoginFrame} loggedIn={loggedIn} setLoggedIn={setLoggedIn} /> }
    </main>
    </>
  )
}
