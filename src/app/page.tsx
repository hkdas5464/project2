"use client";
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import { Tabs, Tab, Card, CardBody, Button } from "@nextui-org/react";
import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher";
import {Appicon} from './icons/Appicon';
// import MyNavbar from "./Navbar";
import { cn } from "@/utils/cn";
import { Spotlight } from "@/components/ui/Spotlight";
import { VideoIcon } from './icons/VideoIcon';
import { NotesIcon } from './icons/NotesIcon';
import { PreviousYearQuestionIcon } from './icons/PreviousYearQuestionIcon.jsx';
import { AllInOneIcon } from './icons/AllInOneIcon';
import {getCurrentDate} from '../utils/dateUtils';
import { IconWrapper } from './icons/IconWrapper';
import { BugIcon } from './icons/BugIcon';
import Footer from './pages/Footer';

export default function Home() {

  const [darkMode, setDarkMode] = useState(false);



  const currentDate = getCurrentDate();

  useEffect(() => {
    // Check the initial dark mode preference from localStorage or system preference
    const darkModePreference = localStorage.getItem('theme') === 'dark' ||
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(darkModePreference);
    if (darkModePreference) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <Spotlight />
      {/* <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen p-4 rounded"> */}
        <div className="container mx-auto mt-10">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold">Good Morning, ABCE KUMAR</h1>
          
          </div>
          <p className="text-gray-500 dark:text-gray-400">Its {currentDate}</p>
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="col-span-2">
                <div className="bg-gray-100 dark:text-gray-400 text-gray-800 dark:bg-gray-700 p-4 rounded-lg mb-4">
                  <h2 className="text-lg font-semibold mb-2">Awaiting Your Action</h2>
                  <p className="text-gray-500 dark:text-gray-400">You are all caught up on your tasks</p>
                </div>
                <div className="bg-gray-100 dark:text-gray-400 text-gray-800 dark:bg-gray-700 p-4 rounded-lg">
                  <h2 className="text-lg font-semibold mb-2">Timely Suggestions</h2>
                  <p className="text-gray-500 dark:text-gray-400">Here you ll get updates on your article items</p>
                </div>
              </div>
              <div>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg mb-4">
                  <h2 className="text-lg dark:text-gray-400 text-gray-800 font-bold mb-2">Announcements</h2>
                  <p>Comming Soon....</p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg dark:text-gray-400 text-gray-800">
                  <h2 className="text-lg font-semibold mb-2">View all Apps</h2>
                  <IconWrapper className="">
                                <Appicon  className=" fill-red-800 text-lg " />
                              </IconWrapper>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-4">Recommended To You</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4">
                  <Image
                    src="https://lh3.googleusercontent.com/pw/AP1GczPsPcgUVW8EjRmrnnsBmjsjqfue4sKPTU-Q7NusPy5w7S4GwneEE39ctIPjaQGSSf30SwqkQE5lhPFFSPSuap4TxZxff08i4wiyOeSN3ixukHSoYN5ppT4h3s81_a1Wviekk34n76rbtemrHmmit5Lr=w913-h913-s-no-gm?authuser=0"
                    width="150"
                    height="150"
                    alt="Image 1"
                    className=" w-3/4 h-32 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-lg font-semibold mb-2">Understand Your People Network</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-2">Based on Your Role</p>
                  <a href="#" className="text-blue-500 dark:text-blue-300">View Org Cart</a>
                </div>
                <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4">
                  <Image
                    src="https://lh3.googleusercontent.com/pw/AP1GczNpZYdqCzodC8kX2tyoTMZ4FS3yEnBfyzZ6y5zZorrOBC0t2kslUig6R_uogh9Pjb3O_XLFxv8Z51aeix3Uf9FUqdYgKA4VCvPsIYAgMiEMHCgSj1rgoGvntVulp5AUAVLNrc-2l8YmoqgUHr7XYR_6=w913-h913-s-no-gm?authuser=0"
                    width="150"
                    height="150"
                    alt="Image 2"
                    className="w-3/4 h-32 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-lg font-semibold mb-2">Showcase your Best Self with Your Profile</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-2">Based on your most popular actions.</p>
                  <a href="#" className="text-blue-500 dark:text-blue-300">Manage Profile</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
     
    </main>
    <Footer/>
    </>
  );
}
