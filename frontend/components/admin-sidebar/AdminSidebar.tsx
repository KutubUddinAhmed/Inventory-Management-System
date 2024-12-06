"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { HiHome } from "react-icons/hi2";
import { FaCartFlatbedSuitcase } from "react-icons/fa6";
import { FaHandshake } from "react-icons/fa";
import { IoLogInOutline } from "react-icons/io5";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Link from "next/link";

function AdminSidebar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  function logoutFunction() {
    alert("Logout Button");
    setSidebarOpen(false); // Close sidebar after logout
  }

  return (
    <div className="relative md:h-screen flex">
      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden flex p-2">
        <HiMenuAlt3
          className="text-2xl"
          onClick={() => setSidebarOpen(!isSidebarOpen)}
        />
      </div>

      {/* Sidebar */}
      <div
        className={`fixed md:static top-0 left-0 h-screen min-w-[75%] md:min-w-full bg-white shadow-lg z-20 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        } md:translate-x-0 transition-transform duration-300`}
        onClick={(e) => e.stopPropagation()} // Prevent sidebar from closing when clicked inside
      >
        <div className="min-h-screen p-6">
          {/* Top Section */}
          <h1 className="text-2xl font-bold text-[#a05aff] mb-8 text-center">
            My Shop
          </h1>

          {/* Individual Buttons with Links */}
          <div className="space-y-8 flex flex-col">
            <Link href="/admin">
              <Button
                className="w-full flex justify-between items-center bg-[#1bcfb4] hover:bg-[#4bcbeb] py-6 hover:text-black"
                onClick={() => setSidebarOpen(false)} // Close sidebar on button click
              >
                <span>Dashboard</span>
                <HiHome className="text-xl" />
              </Button>
            </Link>

            <Link href="/admin/inventory">
              <Button
                className="w-full flex justify-between items-center bg-[#1bcfb4] hover:bg-[#4bcbeb] py-6 hover:text-black"
                onClick={() => setSidebarOpen(false)} // Close sidebar on button click
              >
                <span>Inventory</span>
                <FaCartFlatbedSuitcase className="text-xl" />
              </Button>
            </Link>

            <Link href="/admin/partner">
              <Button
                className="w-full flex justify-between items-center bg-[#1bcfb4] hover:bg-[#4bcbeb] py-6 hover:text-black"
                onClick={() => setSidebarOpen(false)} // Close sidebar on button click
              >
                <span>Partner</span>
                <FaHandshake className="text-xl" />
              </Button>
            </Link>

            <Button
              className="w-full flex justify-between items-center bg-[#ff6a6c] hover:bg-[#ff5154] py-6 hover:text-black"
              onClick={logoutFunction}
            >
              <span>Log Out</span>
              <IoLogInOutline className="text-xl" />
            </Button>
          </div>
        </div>
      </div>

      {/* Backdrop for Mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm z-10 md:hidden"
          onClick={() => setSidebarOpen(false)} // Close sidebar on backdrop click
        ></div>
      )}
    </div>
  );
}

export default AdminSidebar;
