import React, { useState, useEffect } from "react"

export default function getUser(username) {
    const [isLoading, setIsLoading] = useState(false);
    const [userData, setUserData] = useState(null);
    const [userError, setUserError] = useState(null);

    let url = 'http://localhost:3000/users/user/'

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            try {
                const response  = await fetch(url + username);
                const data = response?.json();
                setUserData(data);
                setIsLoading(false);
            } catch (error) {
                setUserError(error);
                setIsLoading(false);
            }
        }
        fetchData();
    }, [])


    return { isLoading, userData, userError };
}