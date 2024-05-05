// import React from 'react'

export default function Navbar() {
  return (
    <nav className="bg-lime-800 dark:bg-cyan-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="src/assets/star-wars-logo-png-transparent.png"
            className="h-14 w-16"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            {/* StarWars */}
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            {/* <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/> */}
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-orange-500 md:dark:bg-cyan-700 dark:border-orange-500">
            <li>
              <a
                href="/starships"
                className="block py-2 px-3 text-white  rounded md:bg-transparent md:hover:text-black md:p-0 dark:text-black font-bold"
                aria-current="page"
              >
                Star Ships
              </a>
            </li>
            <li>
              <a
                href="/vehicles"
                className="block py-2 px-3 text-white  rounded md:bg-transparent md:hover:text-black md:p-0 dark:text-black font-bold"
              >
                Vehicles
              </a>
            </li>
            <li>
              <a
                href="/species"
                className="block py-2 px-3 text-white  rounded md:bg-transparent md:hover:text-black md:p-0 dark:text-black font-bold"
              >
                Species
              </a>
            </li>
            <li>
              <a
                href="/planets"
                className="block py-2 px-3 text-white  rounded md:bg-transparent md:hover:text-black md:p-0 dark:text-black font-bold"
              >
                Planets
              </a>
            </li>
            <li>
              <a
                href="/people"
                className="block py-2 px-3 text-white  rounded md:bg-transparent md:hover:text-black md:p-0 dark:text-black font-bold"
              >
                People
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
