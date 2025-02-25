import React from "react";
import { NotificationIcon, SettingIcon, MenuIcon } from "./icons";

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="bg-white">
      <div className="flex flex-col">
        {/* Top section */}
        <div className="flex items-center justify-between px-4 lg:px-6 py-4">
          <div className="flex items-center space-x-4">
            <button
              onClick={onMenuClick}
              className="max-[760px]:block hidden p-2 hover:bg-gray-100 rounded-lg"
            >
              <MenuIcon className="w-6 h-6" />
            </button>
            <span className="text-[#343C6A] font-medium">Overview</span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden min-[760px]:flex items-center space-x-2">
              <button className="p-2 bg-[#F5F7FA] rounded-full hover:bg-opacity-80">
                <SettingIcon className="w-5 h-5" />
              </button>
              <button className="p-2 bg-[#F5F7FA] rounded-full hover:bg-opacity-80">
                <NotificationIcon className="w-5 h-5" />
              </button>
            </div>
            <div className="h-10 w-10 rounded-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=40&h=40&q=80"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Search bar section - shows below on mobile */}
        <div className="px-4 lg:px-6 pb-4 min-[760px]:hidden">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search for some"
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-[#F5F7FA] text-sm focus:outline-none"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <svg
                className="w-5 h-5 text-[#B1B1B1]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Desktop search bar - hidden on mobile */}
        <div className="hidden min-[760px]:block absolute right-[200px] top-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for something"
              className="w-[280px] pl-10 pr-4 py-2 rounded-lg bg-[#F5F7FA] text-sm focus:outline-none"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <svg
                className="w-5 h-5 text-[#B1B1B1]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
