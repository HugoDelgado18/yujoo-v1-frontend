'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '../Navbar.js';

export default function Signup() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [location, setLocation] = useState('');
    const [age, setAge] = useState('');
    const [job, setJob] = useState('');
    const [about, setAbout] = useState('');
    const [hobbies, setHobbies] = useState('');
    const [distancePreference, setDistancePreference] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        const url = 'http://localhost:3000/api/users/login';
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setFirstName('');
        setLastName('');
        setUsername('');
        setPassword('');
        setLocation('');
        setAge('');
        setJob('');
        setAbout('');
        setDistancePreference('');
    }
    return (
        <>
        <Navbar />
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img 
            width="64" 
            height="64"
            className="mx-auto h-10 w-auto"
            src="https://img.icons8.com/external-filled-color-icons-papa-vector/32/external-Sharing-common-interest-RGB-color-icon-indemand-skills-filled-color-icons-papa-vector.png" 
            alt="external-Sharing-common-interest-RGB-color-icon-indemand-skills-filled-color-icons-papa-vector"
        />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleLogin} method="POST">
            <div>
                <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
                    First Name
                </label>
                <div className="mt-2">
                <input
                  id="firstName"
                  name="firstName"
                  type="firstName"
                  autoComplete="first name"
                  value={firstName}
                  required
                  onChange={(e) => setFirstName(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                </div>
            </div>

            <div>
                <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
                    Last Name
                </label>
                <div className="mt-2">
                <input
                  id="lastName"
                  name="lastName"
                  type="lastName"
                  autoComplete="last name"
                  value={lastName}
                  required
                  onChange={(e) => setLastName(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                </div>
            </div>

            <div>
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="username"
                  autoComplete="username"
                  value={username}
                  required
                  onChange={(e) => setUsername(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
                <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
                    Location
                </label>
                <select
                id="location"
                name="location"
                className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={location}
                onChange={(e) => setLocation(e.target.value)}
                >             
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                </select>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-y-6 sm:grid-cols-3 sm:gap-x-12 " >
                <div>
                  <label htmlFor="job" className="block text-sm font-medium text-gray-700">
                    Job
                  </label>
                  <div className="mt-2 ">
                    <input
                      type="text"
                      id="job"
                      name="job"
                      autoComplete="none"
                      onChange={(e) => setJob(e.target.value)}
                      className="block w-40 rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="Age" className="block text-sm font-medium text-gray-700 ml-10">
                    Age
                  </label>
                  <div className="mt-2 ml-4">
                    <input
                      type="text"
                      id="Age"
                      name="Age"
                      autoComplete="0"
                      onChange={(e) => setAge(e.target.value)}
                      className="block w-10 ml-5 rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="distancePreference" className="block text-sm font-medium text-gray-700 ml-3">
                    Distance (miles)
                  </label>
                  <div className="mt-2 ml-2">
                    <input
                      type="text"
                      id="distancePreference"
                      name="distancePreference"
                      autoComplete="0"
                      onChange={(e) => setDistancePreference(e.target.value)}
                      className="block w-10 rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Create Account
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already a member?
            <Link href="/login" className="pl-1 font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Go here
            </Link>
          </p>
        </div>
      </div>
        </>
    );
};