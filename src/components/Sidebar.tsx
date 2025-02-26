import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  HomeIcon,
  AccountIcon,
  CreditCardIcon,
  InvestmentIcon,
  LoanIcon,
  ServiceIcon,
  SettingIcon,
  TransferIcon,
  LogoIcon,
} from "./icons";

interface NavItem {
  icon: React.ReactNode;
  label: string;
  path: string;
}

const Sidebar: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const location = useLocation();

  const getIcon = (
    Icon: React.ComponentType<{ className?: string; fill?: string }>,
    path: string
  ) => {
    const isActive = location.pathname === path;
    return <Icon className="w-6 h-6" fill={isActive ? "#232323" : "#B1B1B1"} />;
  };

  const navItems: NavItem[] = [
    {
      icon: getIcon(HomeIcon, "/"),
      label: "Dashboard",
      path: "/",
    },
    {
      icon: getIcon(TransferIcon, "/transactions"),
      label: "Transactions",
      path: "/transactions",
    },
    {
      icon: getIcon(AccountIcon, "/accounts"),
      label: "Accounts",
      path: "/accounts",
    },
    {
      icon: getIcon(InvestmentIcon, "/investments"),
      label: "Investments",
      path: "/investments",
    },
    {
      icon: getIcon(CreditCardIcon, "/credit-cards"),
      label: "Credit Cards",
      path: "/credit-cards",
    },
    {
      icon: getIcon(LoanIcon, "/loans"),
      label: "Loans",
      path: "/loans",
    },
    {
      icon: getIcon(ServiceIcon, "/services"),
      label: "Services",
      path: "/services",
    },
    {
      icon: getIcon(SettingIcon, "/settings"),
      label: "Settings",
      path: "/settings",
    },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity max-[900px]:block hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } max-[900px]:fixed max-[900px]:inset-y-0 max-[900px]:left-0 max-[900px]:transform max-[900px]:transition-transform max-[900px]:duration-300 max-[900px]:ease-in-out min-[900px]:translate-x-0 w-[250px] min-h-screen bg-white border-r border-gray-200 z-30`}
      >
        <div className="py-4 px-8">
          <div className="flex items-center space-x-3 mb-8">
            <LogoIcon className="w-6 h-8" />
            <span className="text-xl font-bold text-[#343C6A]">Soar Task</span>
          </div>

          <nav>
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                onClick={() => {
                  if (window.innerWidth < 900) {
                    onClose();
                  }
                }}
                className={`flex items-center space-x-3 py-3 rounded-lg mb-1 ${
                  location.pathname === item.path
                    ? "text-[#232323]"
                    : "text-[#B1B1B1] hover:bg-gray-100"
                }`}
              >
                {item.icon}
                <span className="font-semibold pl-5">{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
