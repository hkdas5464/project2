//import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from './styles.module.css';
import SideNav from '@/app/dashboard/sidenav';
import Home from '../../../pages/Youtube_page';

export default function Page() {
  return (
    // These are Tailwind classes:
    <main className="flex min-h-screen flex-col p-6">
      <div className=" h-20 shrink-0 items-end rounded-lg bg-gray-700 p-4 md:h-14 sm:h-20">
        <h1 className=' text-center text-pretty text-white font-bold'>18वीं सदी के मध्य का भारत | Explained by Madhukar Kotawe | Modern History of India | UPSC 2024-25
        </h1>
      </div>
      <Home />
    </main>
  )
}

