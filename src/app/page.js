'use client'
import Image from 'next/image';
import react, { useState } from 'react';
import Home from './home/page';
import Login from './login/page';
import Signup from './signup/page';
import useToken from '@/api/useToken';

export default function Base() {
  const [hasAccount, setHasAccount] = useState(true);
  const {token, setToken} = useToken();

  if(!token) {
    return (
       hasAccount ? <Login hasAccount={hasAccount} setHasAccount={setHasAccount} setToken={setToken} /> : <Signup hasAccount={hasAccount} setHasAccount={setHasAccount} setToken={setToken} />
    );
  };

  return (
    <>
    <main>
        <Home />
    </main>
    </>
  )
}
