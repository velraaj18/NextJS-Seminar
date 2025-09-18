"use client";

import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const RightMenu = () => {
  return (
    <>
    <Disclosure
      as="nav"
      className="relative after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10"
    >
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
     <div className="relative flex h-16 items-center justify-end">
       <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Notification button */}
                <button
                  type="button"
                  className="relative rounded-full p-1 text-gray-400 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="size-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <MenuButton className="relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                    <img
                      className="size-8 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt="User avatar"
                    />
                  </MenuButton>

                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-800 py-1 outline -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                  >
                    <MenuItem>
                      <Link href="/profile" className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5">
                        Your profile
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link href="/settings" className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5">
                        Settings
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link href="/logout" className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5">
                        Sign out
                      </Link>
                    </MenuItem>
                  </MenuItems>
                </Menu>
              </div>
              </div>
              </div>
     </Disclosure>
    </>
)}

export default RightMenu