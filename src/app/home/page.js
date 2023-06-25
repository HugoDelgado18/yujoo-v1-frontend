"use client"
import React, { useState, useEffect } from 'react';
import { Navbar } from '../Navbar.js';
import Calendar from '@/components/Calendar.js';
import useToken from '@/api/useToken.js';
import getUser from '@/api/getUser.js';
import EventList from '@/components/EventList.js';

const getUsername = localStorage.getItem('username')

export default function Home () {
    const {token, setToken} = useToken();
    const { isLoading, userData, userError } = getUser(getUsername);
    const [events, setEvents] = useState([]);

    if(!token){
        return location.href = '/'
    }
    useEffect(() => {
        if(!token) {
            return;
        }
        fetchEvents();
        
    }, [token]);

    async function fetchEvents() {
        let url = 'http://localhost:3000/events';
        return fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    setEvents(data);
                })
    }

    return(
        <>
        <Navbar />
        <Calendar events={events} />
        <EventList events={events} />
        </>
    );
};
