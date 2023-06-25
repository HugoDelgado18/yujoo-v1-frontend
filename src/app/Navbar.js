"use client"
import React, { useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import { Fragment } from 'react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const user = {
    name: 'Rachel Hofstetter',
    email: 'Valkyrae@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  }

const navigation = [
    { name: 'Home', href: '/home', current: true },
    { name: 'Dashboard', href: '/dashboard', current: false },
    { name: 'Search', href: '/search', current: false },
    { name: 'Messages', href: '/messages', current: false },
  ]

  const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
  ]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function Navbar() {
    const [ navState, setNavState ] = useState({
        homeCurrent: false,
        dashboardCurrent: false,
        searchCurrent: false,
        messagesCurrent: false,
    });

    function handleChangeTab(e) {
        if(e.target.value === false){

        }
        setNavState({
            homeCurrent: false,
            dashboardCurrent: false,
            searchCurrent: false,
            messagesCurrent: false,
        });

    }
    return (
        <>
            {/* <h1>Navbar</h1> */}
            <Disclosure as="nav" className="border-b border-gray-200 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 justify-between">
                        <div className="flex">
                            <div className="flex flex-shrink-0 items-center">
                                <img 
                                width="42" 
                                height="42"
                                className="block h-8 w-auto lg:hidden"
                                src="https://img.icons8.com/external-filled-color-icons-papa-vector/32/external-Sharing-common-interest-RGB-color-icon-indemand-skills-filled-color-icons-papa-vector.png" 
                                alt="external-Sharing-common-interest-RGB-color-icon-indemand-skills-filled-color-icons-papa-vector"
                                />
                                <img 
                                width="42" 
                                height="42" 
                                className="hidden h-8 w-auto lg:block"
                                src="https://img.icons8.com/external-filled-color-icons-papa-vector/32/external-Sharing-common-interest-RGB-color-icon-indemand-skills-filled-color-icons-papa-vector.png" 
                                alt="external-Sharing-common-interest-RGB-color-icon-indemand-skills-filled-color-icons-papa-vector"
                                />
                            </div>
                            <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                                {
                                    navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current
                                                    ? 'border-indigo-500 text-gray-900'
                                                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                                                    'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium'
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                            onClick={() => item.current(true)}
                                        >
                                            {item.name}
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="hidden sm:ml-6 sm:flex sm:items-center justify-end">
                                <button
                                    type="button"
                                    className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                <span className="sr-only">View notifications</span>
                                <BellIcon className="h-6 w-6 mr-1 mt-2" aria-hidden="true" />
                                </button>

                                {/* Profile dropdown */}
                        
                        <Menu as="div" className="relative ml-3">
                            <div>
                                <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mt-3">
                                    <span className="sr-only">Open user menu</span>
                                    <img className="h-10 w-10 rounded-full" 
                                    src={user.imageUrl}
                                    alt="Profile picture" />
                                </Menu.Button>
                            </div>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    {
                                        userNavigation.map((item) => {
                                            <Menu.Item key={item.name}>
                                                {({ active }) => (
                                                    <a
                                                        href={item.href}
                                                        className={classNames(
                                                            active ? 'bg-gray-100' : '',
                                                            'block px-4 py-2 text-sm text-gray-700'
                                                        )}
                                                    >
                                                        {item.name}
                                                    </a>
                                                )}
                                            </Menu.Item>
                                    })}
                                </Menu.Items>
                            </Transition>
                        </Menu>
                        </div>
                    </div>
                </div>
            </Disclosure>
        </>
    );
};
