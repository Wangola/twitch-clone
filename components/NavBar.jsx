import React, { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/assests/logo.png";
import { Menu, Transition } from "@headlessui/react";
import { BsPerson, BsSearch, BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineInbox, AiOutlineClose } from "react-icons/ai";
import { CgCrown } from "react-icons/cg";
import { BiMessage } from "react-icons/bi";
import { FiLogIn, FiLogOut, FiMoon, FiSun } from "react-icons/fi";
import { useSession, signIn, signOut } from "next-auth/react";
import { useTheme } from "next-themes";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function NavBar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const { data: session } = useSession();

  // console.log(session);

  // Dark Theme toggle
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Checks current system preference or changed based on click
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="fixed h-14 w-full flex flex-nowrap items-center p-4 bg-white dark:bg-[#18181b] mb-[2px] z-10">
      {/* Left Side */}
      <div className="flex grow items-center justify-start">
        <Link href="/" className="flex">
          <Image
            src={logo}
            alt="/"
            width="36"
            height="36"
            className="cursor-pointer z-10"
          />
        </Link>

        {session ? (
          <p className="font-bold pl-8 hover:text-[#9147ff] cursor-pointer">
            Following
          </p>
        ) : (
          <p></p>
        )}

        <p className="p-4 font-bold pl-8 hover:text-[#9147ff] cursor-pointer">
          Browse
        </p>

        {/* Three Dots */}
        <div className="p-4">
          <Menu as="div" className="relative text-left">
            <div className="flex">
              <Menu.Button>
                <BsThreeDotsVertical size={20} />
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
              <Menu.Items className="origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-[#1f1f23] ring-1 ring-white ring-opacity-5 focus:outline-none">
                <div className="py-2 px-3">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/missing"
                        className={classNames(
                          active
                            ? "bg-white text-black hover:bg-[#dfdfdf] dark:bg-[#3d3d40] dark:text-gray-100 rounded-md"
                            : "text-black dark:text-gray-200",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Settings
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/missing"
                        className={classNames(
                          active
                            ? "bg-white text-black hover:bg-[#dfdfdf] dark:bg-[#3d3d40] dark:text-gray-100 rounded-md"
                            : "text-black dark:text-gray-200",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Support
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/missing"
                        className={classNames(
                          active
                            ? "bg-white text-black hover:bg-[#dfdfdf] dark:bg-[#3d3d40] dark:text-gray-100 rounded-md"
                            : "text-black dark:text-gray-200",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        License
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>

      {/* Middle */}
      <div className="hidden md:flex grow-[2] items-center justify-center">
        <div className="bg-[#ebebeb] border-[#ebebeb] hover:border-[#c5c5c5] flex justify-between items-center max-w-[400px] w-full m-auto p-2 rounded-md border-2 dark:bg-[#3d3d40] dark:border-[#3d3d40] dark:hover:border-[#616166]">
          <div>
            <input
              type="text"
              className="bg-transparent border-none text-black dark:text-white focus:outline-none"
              placeholder="Search"
            />
          </div>
          <div>
            <BsSearch />
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="hidden md:flex grow items-center justify-end">
        {session ? (
          // If logged in
          <div className="flex items-center">
            <CgCrown
              size={30}
              className="rounded-md mr-3 p-1 hover:bg-[#f2f2f2] dark:hover:bg-[#3d3d40] cursor-pointer"
            />

            <AiOutlineInbox
              size={30}
              className="rounded-md mr-3 p-1 hover:bg-[#f2f2f2] dark:hover:bg-[#3d3d40] cursor-pointer"
            />

            <BiMessage
              size={30}
              className="rounded-md mr-3 p-1 hover:bg-[#f2f2f2] dark:hover:bg-[#3d3d40] cursor-pointer"
            />

            {/* Menu item list when logged in */}
            <Menu as="div" className="relative text-left">
              <div className="flex">
                <Menu.Button>
                  <Image
                    className="rounded-full"
                    src={session.user.image}
                    width={"35"}
                    height={"35"}
                  />
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
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-[#1f1f23] ring-1 ring-white ring-opacity-5 focus:outline-none">
                  <div className="py-2 px-3">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/account"
                          className={classNames(
                            active
                              ? "bg-white text-black hover:bg-[#dfdfdf] dark:bg-[#3d3d40] dark:text-gray-100 rounded-md"
                              : "text-black dark:text-gray-200",
                            "flex px-1.5 py-2 text-sm justify-start items-center"
                          )}
                        >
                          <BsPerson className="mr-2" /> Account
                        </a>
                      )}
                    </Menu.Item>

                    {/* Color theme change */}
                    {currentTheme === "dark" ? (
                      // Dark mode
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            onClick={() => setTheme("light")}
                            className={classNames(
                              active
                                ? "bg-[#3d3d40] text-gray-100 rounded-md"
                                : "text-gray-200",
                              "flex px-1.5 py-2 text-sm justify-start items-center"
                            )}
                          >
                            <FiSun className="mr-2" /> Dark Theme
                          </a>
                        )}
                      </Menu.Item>
                    ) : (
                      // Light mode
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            onClick={() => setTheme("dark")}
                            className={classNames(
                              active
                                ? "bg-white text-black rounded-md hover:bg-[#dfdfdf]"
                                : "text-black",
                              "flex px-1.5 py-2 text-sm justify-start items-center"
                            )}
                          >
                            <FiMoon className="mr-2" /> Dark Theme
                          </a>
                        )}
                      </Menu.Item>
                    )}

                    <p className="border-t border-gray-700 my-2"></p>

                    {/* Log out item*/}
                    <Menu.Item>
                      {({ active }) => (
                        <p
                          onClick={() => signOut()}
                          className={classNames(
                            active
                              ? "bg-white text-black hover:bg-[#dfdfdf] dark:bg-[#3d3d40] dark:text-gray-100 rounded-md"
                              : "text-black dark:text-gray-200",
                            "flex px-1.5 py-2 text-sm justify-start items-center"
                          )}
                        >
                          <FiLogOut className="mr-2" /> Logout
                        </p>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        ) : (
          // If logged out
          <div className="flex items-center">
            <CgCrown
              size={30}
              className="rounded-md mx-3 p-1 hover:bg-[#f2f2f2] dark:hover:bg-[#3d3d40] cursor-pointer"
            />
            <Link href={"/account"}>
              <button className="text-sm px-3 py-[6px] rounded-md font-bold mr-2 bg-[#f2f2f2] hover:bg-[#dfdfdf] dark:bg-[#2a2a2d] dark:hover:bg-[#3d3d40]">
                Login
              </button>
            </Link>
            <Link href={"/missing"}>
              <button className="text-white text-sm px-3 py-[6px] rounded-md font-bold bg-[#9147ff] mr-2 hover:bg-[#822dff]">
                Sign Up
              </button>
            </Link>

            {/* Person Icon list when logged out */}
            <Menu as="div" className="relative text-left">
              <div className="flex">
                <Menu.Button>
                  <BsPerson size={25} />
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
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-[#1f1f23] ring-1 ring-white ring-opacity-5 focus:outline-none">
                  <div className="py-2 px-3">
                    {currentTheme === "dark" ? (
                      // Dark mode
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            onClick={() => setTheme("light")}
                            className={classNames(
                              active
                                ? "bg-[#3d3d40] text-gray-100 rounded-md"
                                : "text-gray-200",
                              "flex px-1.5 py-2 text-sm justify-start items-center"
                            )}
                          >
                            <FiSun className="mr-2" /> Dark Theme
                          </a>
                        )}
                      </Menu.Item>
                    ) : (
                      // Light mode
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            onClick={() => setTheme("dark")}
                            className={classNames(
                              active
                                ? "bg-white text-black rounded-md hover:bg-[#dfdfdf]"
                                : "text-black",
                              "flex px-1.5 py-2 text-sm justify-start items-center"
                            )}
                          >
                            <FiMoon className="mr-2" /> Dark Theme
                          </a>
                        )}
                      </Menu.Item>
                    )}

                    <p className="border-t border-gray-700 my-2"></p>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/account"
                          className={classNames(
                            active
                              ? "bg-white text-black hover:bg-[#dfdfdf] dark:bg-[#3d3d40] dark:text-gray-100 rounded-md"
                              : "text-black dark:text-gray-200",
                            "flex px-1.5 py-2 text-sm font-bold justify-start items-center"
                          )}
                        >
                          <FiLogIn size={18} className="mr-2" />
                          Login
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        )}
      </div>

      {/* Hamburger Menu */}
      <div onClick={handleNav} className="block md:hidden z-10 cursor-pointer">
        {nav ? <AiOutlineClose /> : <AiOutlineMenu size={25} />}
      </div>

      {/* Mobile Menu */}
      <div
        className={
          nav
            ? "md:hidden fixed top-0 left-0 w-full h-screen bg-[#0e0e10] flex justify-center items-center ease-in duration-300"
            : "md:hidden fixed top-[-100%] left-0 w-full h-screen bg-[#0e0e10] flex justify-center items-center ease-in duration-300"
        }
      >
        <ul className="text-center">
          <li onClick={() => setNav(false)} className="p-4 text-3xl font-bold">
            <Link href={"/"}>Home</Link>
          </li>
          <li onClick={() => setNav(false)} className="p-4 text-3xl font-bold">
            <Link href={"/#live"}>Live Channels</Link>
          </li>
          <li onClick={() => setNav(false)} className="p-4 text-3xl font-bold">
            <Link href={"/#categories"}>Top Categories</Link>
          </li>
          <li onClick={() => setNav(false)} className="p-4 text-3xl font-bold">
            <Link href={"/account"}>Account</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
