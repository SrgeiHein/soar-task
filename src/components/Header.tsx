import React from "react";
import { useLocation } from "react-router-dom";
import { NotificationIcon, SettingIcon, MenuIcon } from "./icons";

interface HeaderProps {
  onMenuClick: () => void;
  isSidebarOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick, isSidebarOpen }) => {
  const location = useLocation();

  const getPageTitle = () => {
    switch (location.pathname) {
      case "/":
        return "Overview";
      case "/transactions":
        return "Transactions";
      case "/accounts":
        return "Accounts";
      case "/investments":
        return "Investments";
      case "/credit-cards":
        return "Credit Cards";
      case "/loans":
        return "Loans";
      case "/services":
        return "Services";
      case "/settings":
        return "Settings";
      default:
        return "Overview";
    }
  };

  return (
    <header className="bg-white">
      <div className="flex flex-col">
        {/* Top section */}
        <div className="flex items-center justify-between px-4 lg:px-6 py-3">
          <div className="flex items-center ">
            <button
              onClick={onMenuClick}
              className="max-[900px]:block hidden p-2 hover:bg-gray-100 rounded-lg"
            >
              <MenuIcon className="w-6 h-6" />
            </button>
            <span className="text-[#343C6A] text-[28px] max-[550px]:text-[20px] font-semibold max-[550px]:absolute max-[550px]:left-1/2 max-[550px]:-translate-x-1/2">
              {getPageTitle()}
            </span>
          </div>

          <div className="flex items-center gap-[30px] ">
            <div className="hidden min-[900px]:flex items-center space-x-2">
              <button className="p-2 bg-[#F5F7FA] rounded-full hover:bg-opacity-80">
                <SettingIcon className="w-5 h-5" />
              </button>
              <button className="p-2 bg-[#F5F7FA] rounded-full hover:bg-opacity-80">
                <NotificationIcon className="w-5 h-5" />
              </button>
            </div>
            <div className="h-10 w-10 rounded-full overflow-hidden">
              <img
                src="/assets/profile.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Search bar section - shows below on mobile */}
        <div className="px-4 lg:px-6 pb-4 min-[900px]:hidden">
          <div className={`${isSidebarOpen ? "static" : "relative"} w-full`}>
            <input
              type="text"
              placeholder="Search for something"
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#F5F7FA] text-sm focus:outline-none"
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
        <div className="hidden min-[900px]:block absolute right-[200px] top-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for something"
              className="w-[255px] pl-10 pr-4 py-2 rounded-xl bg-[#F5F7FA] text-sm focus:outline-none"
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
