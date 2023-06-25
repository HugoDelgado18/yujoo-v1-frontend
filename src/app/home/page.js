"use client"
import React, { useState } from 'react';
import { Navbar } from '../Navbar.js';
import Calendar from '@/components/Calendar.js';
import useToken from '@/api/useToken.js';

export default function Home () {
    const {token, setToken} = useToken();

    if(!token){
        return 
    }
    return(
        <>
        <Navbar />
        <Calendar />
        </>
    );
};
