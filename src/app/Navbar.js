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
    { name: 'Dashboard', href: '/dashboard', current: true },
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

    function handleChangeTab() {
        if(1> 0){

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
                                    src="data:image/jpeg;base64,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"
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
