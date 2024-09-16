"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import React from 'react';


const Navbar = () => {
    const pathName = usePathname()
    // const router = useRouter()
    const links = [
        {
            title: 'Posts',
            path: '/posts'
        },
        {
            title: 'Meals',
            path: '/meals'
        }
    ]
    const handler = () => {
    router.push("about")
}

    return (
        <div>
              <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
        <h6>
          Next<span className="text-orange-500 font-bold">Hero</span>
        </h6>
        <ul className="flex justify-between items-center space-x-4">
          {links.map((link) => (
            <Link
              className={`${pathName === link.path && "text-cyan-400"}`}
              key={link.path}
              href={link.path}
            >
              {link.title}
            </Link>
          ))}
        </ul>
        <button
          onClick={handler}
          className="bg-white text-black px-3 py-1 rounded-md"
        >
          Login
        </button>
      </nav>
        </div>
    );
};

export default Navbar;