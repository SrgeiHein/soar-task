import React from "react";
import {
  HomeIcon,
  AccountIcon,
  CreditCardIcon,
  EconometricsIcon,
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
  isActive?: boolean;
}

const Sidebar: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const navItems: NavItem[] = [
    {
      icon: <HomeIcon className="w-6 h-6" />,
      label: "Dashboard",
      isActive: true,
    },
    {
      icon: <TransferIcon className="w-6 h-6" />,
      label: "Transactions",
    },
    {
      icon: <AccountIcon className="w-6 h-6" />,
      label: "Accounts",
    },
    {
      icon: <InvestmentIcon className="w-6 h-6" />,
      label: "Investments",
    },
    {
      icon: <CreditCardIcon className="w-6 h-6" />,
      label: "Credit Cards",
    },
    {
      icon: <LoanIcon className="w-6 h-6" />,
      label: "Loans",
    },
    {
      icon: <ServiceIcon className="w-6 h-6" />,
      label: "Services",
    },
    {
      icon: <SettingIcon className="w-6 h-6" />,
      label: "Setting",
    },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity max-[760px]:block hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } max-[760px]:fixed max-[760px]:inset-y-0 max-[760px]:left-0 max-[760px]:transform max-[760px]:transition-transform max-[760px]:duration-300 max-[760px]:ease-in-out min-[760px]:translate-x-0 w-[250px] min-h-screen bg-white border-r border-gray-200 z-30`}
      >
        <div className="p-4">
          <div className="flex items-center space-x-3 mb-8">
            <LogoIcon className="w-6 h-8" />
            <span className="text-xl font-bold text-[#343C6A]">Soar Task</span>
          </div>

          <nav>
            {navItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className={`flex items-center space-x-3 p-3 rounded-lg mb-1 ${
                  item.isActive
                    ? "text-black"
                    : "text-[#B1B1B1] hover:bg-gray-100"
                }`}
              >
                <span className={item.isActive ? "text-black" : "text-[#B1B1B1]"}>
                  {item.icon}
                </span>
                <span className="font-medium pl-5">{item.label}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
