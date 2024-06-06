"use client";
import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { Tabs, Tab, Card, CardBody, Button } from "@nextui-org/react";
import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher";

// import MyNavbar from "./Navbar";
import { cn } from "@/utils/cn";
import { Spotlight } from "@/components/ui/Spotlight";
import { VideoIcon } from './icons/VideoIcon';
import { NotesIcon } from './icons/NotesIcon';
import { PreviousYearQuestionIcon } from './icons/PreviousYearQuestionIcon.jsx';
import { AllInOneIcon } from './icons/AllInOneIcon';

export default function Home() {

  const [darkMode, setDarkMode] = React.useState(false);

  React.useEffect(() => {
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
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <Spotlight />
      {/* <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen p-4 rounded"> */}
        <div className="container mx-auto mt-10">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold">Good Morning, ABCE KUMAR</h1>
          
          </div>
          <p className="text-gray-500 dark:text-gray-400">Its 5th Saturday 2024</p>
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="col-span-2">
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg mb-4">
                  <h2 className="text-lg font-semibold mb-2">Awaiting Your Action</h2>
                  <p className="text-gray-500 dark:text-gray-400">You are all caught up on your tasks</p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                  <h2 className="text-lg font-semibold mb-2">Timely Suggestions</h2>
                  <p className="text-gray-500 dark:text-gray-400">Here you ll get updates on your article items</p>
                </div>
              </div>
              <div>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg mb-4">
                  <h2 className="text-lg font-semibold mb-2">Announcements</h2>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                  <h2 className="text-lg font-semibold mb-2">View all Apps</h2>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-4">Recommended To You</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4">
                  <Image
                    src="https://via.placeholder.com/150"
                    alt="Image 1"
                    className="w-full h-32 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-lg font-semibold mb-2">Understand Your People Network</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-2">Based on Your Role</p>
                  <a href="#" className="text-blue-500 dark:text-blue-300">View Org Cart</a>
                </div>
                <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4">
                  <Image
                    src="https://via.placeholder.com/150"
                    alt="Image 2"
                    className="w-full h-32 object-cover rounded-md mb-4"
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
  );
}
