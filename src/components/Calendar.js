import React, { useState } from 'react'
import { 
    eachDayOfInterval,
    isEqual,
    add,
    endOfMonth, 
    format, 
    formatDistance, 
    parse, 
    formatRelative, 
    startOfMonth, 
    startOfToday, 
    subDays,
    endOfWeek, 
    isSameMonth, 
    isToday,
    getDay,
    parseISO,
    isSameDay,
} from 'date-fns'
import { Fragment } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { Menu, Transition } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline'

const events = [
  {
    id: 1,
    name: 'Leslie Alexander',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    startDatetime: '2023-06-29T13:00',
    endDatetime: '2023-06-29T14:30',
  },
  // More meetings...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Calendar() {
    let today = startOfToday();
    const [selectedDay, setSelectedDay] = useState(today);
    const [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'));
    let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date());
    let newDays = eachDayOfInterval({ start: firstDayCurrentMonth, end: endOfMonth(firstDayCurrentMonth) })

    function nextMonth() {
        let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 }) 
        setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
    }

    function previousMonth() {
        let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 }) 
        setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
    }

    let selectedDayEvents = events
        .filter((events) => 
        isSameDay(parseISO(events.startDatetime), selectedDay));

  return (
    <div style={{ width: '52%', position: 'absolute', left: '49%', top: '15%' }}>
        <div className="sm:grid sm:grid-cols-2 sm:divide-x sm:divide-gray-200">
        <div className="md:pr-14">
            <div className="flex items-center">
            <h2 className="flex-auto text-sm font-semibold text-gray-900">{format(firstDayCurrentMonth, 'MMMM yyyy')}</h2>
            <button
                type="button"
                onClick={previousMonth}
                className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
            >
                <span className="sr-only">Previous month</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
                type="button"
                onClick={nextMonth}
                className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
            >
                <span className="sr-only">Next month</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            </div>
            <div className="mt-10 grid grid-cols-7 text-center text-xs leading-6 text-gray-500">
            <div>S</div>
            <div>M</div>
            <div>T</div>
            <div>W</div>
            <div>T</div>
            <div>F</div>
            <div>S</div>
            </div>
            <div className="mt-2 grid grid-cols-7 text-sm">
            {newDays.map((day, dayIdx) => (
                <div key={day.toString()}
                className={classNames(
                    // dayIdx > 6 && 'border-t border-gray-200',
                    dayIdx === 0 && colStartClasses[getDay(day)],
                    'py-2'
                )}>
                <button
                    type="button"
                    onClick={() => (setSelectedDay(day))}
                    className={classNames(
                    isEqual(day, selectedDay) && 'text-white',
                    !isEqual(day, selectedDay) && isToday(day) && 'text-indigo-600',
                    !isEqual(day, selectedDay) && isToday(day) && isSameMonth(day, firstDayCurrentMonth) && 'text-gray-900',
                    !isEqual(day, selectedDay) && isToday(day) && !isSameMonth(day, firstDayCurrentMonth) && 'text-gray-400',
                    isEqual(day, selectedDay) && isToday(day) && 'bg-indigo-600',
                    isEqual(day, selectedDay) && !isToday(day) && 'bg-gray-900',
                    !isEqual(day, selectedDay) && 'hover:bg-gray-200',
                    (isEqual(day, selectedDay) || isToday(day)) && 'font-semibold',
                    'mx-auto flex h-8 w-8 items-center justify-center rounded-full'
                    )}
                >
                    <time dateTime={format(day, 'yyyy-MM-dd')}>{format(day, 'd')}</time>
                </button>
                {events.some((event) => isSameDay(parseISO(event.startDatetime), day)
                ) && (<div className='w-1 h-1 mx-auto mt-1 rounded-full bg-sky-500'></div>)}

                </div>
            ))}
            </div>
        </div>
        <section className="mt-12 md:mt-0 md:pl-14">
            <h2 className="text-base font-semibold leading-6 text-gray-900">
            Schedule for <time dateTime={format(selectedDay, 'yyyy-MM-dd')}>{format(selectedDay, 'MMM dd, yyyy')}</time>
            </h2>
            <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
            {selectedDayEvents.length > 0 ? (
            selectedDayEvents.map((events) => (
                <Event events={events} key={events.name} />
            ))
            ): <p>No Events for today.</p>}
            </ol>
        </section>
        </div>
    </div>
  )
}

function Event({ events }) {
    let startDateTime = parseISO(events.startDatetime);
    let endDateTime = parseISO(events.endDatetime);
    return (
            <li
                key={events.id}
                className="group flex items-center space-x-4 rounded-xl px-4 py-2 focus-within:bg-gray-100 hover:bg-gray-100"
                >
                <img src={events.image} alt="" className="h-10 w-10 flex-none rounded-full" />
                <div className="flex-auto">
                    <p className="text-gray-900">{events.name}</p>
                    <p className="mt-0.5">
                    <time dateTime={events.startDatetime}>
                        {format(startDateTime, 'hh:mm a')}
                        </time> -{' '}
                    <time dateTime={events.endDatetime}>{format(endDateTime, 'hh:mm a')}</time>
                    </p>
                </div>
                <Menu as="div" className="relative opacity-0 focus-within:opacity-100 group-hover:opacity-100">
                    <div>
                    <Menu.Button className="-m-2 flex items-center rounded-full p-1.5 text-gray-500 hover:text-gray-600">
                        <span className="sr-only">Open options</span>
                        <EllipsisVerticalIcon className="h-6 w-6" aria-hidden="true" />
                    </Menu.Button>
                    </div>

                    <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                    >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                            <a
                                href="#"
                                className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                                )}
                            >
                                Edit
                            </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                            <a
                                href="#"
                                className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                                )}
                            >
                                Cancel
                            </a>
                            )}
                        </Menu.Item>
                        </div>
                    </Menu.Items>
                    </Transition>
                </Menu>
            </li>
    );
}

let colStartClasses = [
    '',
    'col-start-2',
    'col-start-3',
    'col-start-4',
    'col-start-5',
    'col-start-6',
    'col-start-7',
]