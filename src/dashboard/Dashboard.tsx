import React, { useState } from "react";
import { CardIcon, CardIcon2 } from "../components/icons";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  LineElement,
  PointElement,
} from "chart.js";
import { Bar, Pie, Line } from "react-chartjs-2";
import DataLabels from "chartjs-plugin-datalabels";
import {
  weeklyData,
  expenseData,
  barOptions,
  pieOptions,
  balanceHistoryData,
  balanceHistoryOptions,
} from "../mock/chartMock";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  DataLabels
);

const Dashboard: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const users = [
    { name: "Livia Bator", role: "CEO", image: "/assets/talyor.png" },
    { name: "Randy Press", role: "Director", image: "/assets/randy.png" },
    { name: "Workman", role: "Designer", image: "/assets/work.png" },
    { name: "Sarah Parker", role: "Developer", image: "/assets/work.png" },
    { name: "Mike Johnson", role: "Manager", image: "/assets/talyor.png" },
  ];

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1 >= users.length ? 0 : prev + 1));
      setIsAnimating(false);
    }, 300);
  };

  // Get exactly 3 users starting from current index
  const visibleUsers = Array.from({ length: 3 }, (_, i) => {
    const index = (currentIndex + i) % users.length;
    return users[index];
  });

  return (
    <div className="p-6 bg-[#F3F3F3] h-full overflow-auto">
      <div className="flex flex-col lg:flex-row gap-[30px] pb-4">
        <div className="w-full lg:flex-[2]">
          <div className="flex items-center justify-between mb-6 px-2">
            <h2 className="text-[22px] font-semibold text-[#343C6A]">
              My Cards
            </h2>
            <h2 className="text-[17px] font-semibold text-[#343C6A] hidden lg:block">
              See All
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row justify-between  gap-[30px]">
            <div
              className="min-w-[350px] h-[235px] rounded-2xl pt-6 text-white overflow-hidden font-lato flex flex-col"
              style={{
                background:
                  "linear-gradient(107.38deg, #5B5A6F 2.61%, #000000 101.2%)",
              }}
            >
              <div className="flex justify-between items-start mb-8 px-6">
                <div>
                  <p className="text-[12px] mb-0 text-white">Balance</p>
                  <p className="text-[20px] font-semibold">$5,756</p>
                </div>
                <img
                  src="/assets/Chip_Card.png"
                  alt="Chip"
                  className="w-8 h-8"
                />
              </div>
              <div className="flex justify-stretch items-start mb-7 px-6">
                <div>
                  <p className="text-[12px] text-white opacity-70">
                    CARD HOLDER
                  </p>
                  <p className="font-semibold text-[15px] mt-0">Eddy Cusuma</p>
                </div>
                <div>
                  <p className="text-[12px] text-white opacity-70">
                    VALID THRU
                  </p>
                  <p className="font-semibold text-[15px] mt-0">12/22</p>
                </div>
              </div>

              <div className="w-full h-[1px] bg-white opacity-20"></div>

              <div
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 100%)",
                }}
                className="flex items-center justify-between px-6 flex-grow py-4"
              >
                <p className="font-semibold text-[22px] text-white">
                  3778 **** **** 1234
                </p>
                <CardIcon className="opacity-50" />
              </div>
            </div>

            <div className="h-[235px] min-w-[350px] rounded-2xl pt-6 text-white overflow-hidden font-lato flex flex-col bg-white border border-[#DFEAF2]">
              <div className="flex justify-between items-start mb-8 px-6">
                <div>
                  <p className="text-[12px] mb-0 text-[#718EBF]">Balance</p>
                  <p className="text-[20px] font-semibold text-[#343C6A]">
                    $5,756
                  </p>
                </div>
                <img
                  src="/assets/Chip_Card2.png"
                  alt="Chip"
                  className="w-8 h-8"
                />
              </div>
              <div className="flex justify-stretch items-start mb-7 px-6">
                <div>
                  <p className="text-[12px] text-[#718EBF]">CARD HOLDER</p>
                  <p className="font-semibold text-[15px] text-[#343C6A] mt-0">
                    Eddy Cusuma
                  </p>
                </div>
                <div>
                  <p className="text-[12px] text-[#718EBF]">VALID THRU</p>
                  <p className="font-semibold text-[15px] text-[#343C6A] mt-0">
                    12/22
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between px-6 bg-white flex-grow py-4 border-t border-[#DFEAF2]">
                <p className="font-semibold text-[22px] text-[#343C6A]">
                  3778 **** **** 1234
                </p>
                <CardIcon2 className="opacity-50" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:flex-1">
          <div className="flex items-center justify-between mb-6 px-2">
            <h2 className="text-[22px] font-semibold text-[#343C6A]">
              Recent Transaction
            </h2>
          </div>
          <div className="h-[235px] w-full lg:min-w-[350px] rounded-2xl bg-white border border-[#DFEAF2] p-7 font-lato">
            {/* Transaction Items */}
            <div className="space-y-4">
              <div className="flex items-center gap-5 mb-5">
                <img
                  src="/assets/card.png"
                  alt="Deposit"
                  className="w-12 h-12"
                />

                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-[16px] text-[#232323]">
                        Deposit from my Card
                      </p>
                      <p className="font-[15px] text-[#718EBF]">
                        28 January 2021
                      </p>
                    </div>
                    <span className="text-[#FF4B4A] font-semibold">-$850</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-5 mb-5">
                <img
                  src="/assets/paypal.png"
                  alt="PayPal"
                  className="w-12 h-12"
                />

                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-[16px] text-[#232323]">
                        Deposit Paypal
                      </p>
                      <p className="font-[15px] text-[#718EBF]">
                        25 January 2021
                      </p>
                    </div>
                    <span className="text-[#41D4A8] ">+$2,500</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <img src="/assets/coin.png" alt="User" className="w-12  h-12" />
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-[16px] text-[#232323]">
                        Jemi Wilson
                      </p>
                      <p className="font-[15px] text-[#718EBF]">
                        21 January 2021
                      </p>
                    </div>
                    <span className="text-[#41D4A8]">+$5,400</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-col lg:flex-row gap-[30px] mb-6 px-2">
          <div className="lg:flex-[2]">
            <h2 className="text-[22px] font-semibold text-[#343C6A]">
              Weekly Activity
            </h2>
          </div>
          <div className="lg:flex-1 hidden lg:block">
            <h2 className="text-[22px] font-semibold text-[#343C6A]">
              Expense Statistics
            </h2>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:gap-[30px]">
          <div className="lg:flex-[2] bg-white rounded-2xl pl-6 pt-6">
            <div className="h-[322px]">
              <Bar options={barOptions} data={weeklyData} />
            </div>
          </div>

          <div className="block lg:hidden">
            <h2 className="text-[22px] font-semibold text-[#343C6A] mt-8 mb-6">
              Expense Statistics
            </h2>
          </div>

          <div className="lg:flex-1 bg-white rounded-2xl pl-6 pt-6">
            <div className="h-[322px] flex items-center justify-center">
              <Pie options={pieOptions} data={expenseData} />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="hidden lg:flex lg:flex-row gap-[30px] mb-6 px-2">
          <div className="min-w-[446px] ">
            <h2 className="text-[22px] font-semibold text-[#343C6A] font-inter">
              Quick Transfer
            </h2>
          </div>
          <div className="">
            <h2 className="text-[22px] font-semibold text-[#343C6A] font-inter">
              Balance History
            </h2>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:gap-[30px]">
          <div>
            <h2 className="lg:hidden text-[22px] font-semibold text-[#343C6A] font-inter mb-6 px-2">
              Quick Transfer
            </h2>
            <div className="min-w-[446px] max-h-[276px] bg-white rounded-2xl p-6">
              <div className="">
                <div className="flex items-center gap-4 overflow-hidden pb-4">
                  <div
                    className={`flex items-center ${
                      isAnimating ? "animate-slideNext" : ""
                    }`}
                  >
                    {visibleUsers.map((user, index) => (
                      <div
                        key={user.name + index}
                        className="flex flex-col items-center gap-2 w-[120px]"
                      >
                        <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
                          <img
                            src={user.image}
                            alt={user.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="text-center">
                          <p className="text-[15px] font-semibold text-[#343C6A]">
                            {user.name}
                          </p>
                          <p className="text-[13px] text-[#718EBF]">
                            {user.role}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={handleNext}
                    disabled={isAnimating}
                    className="w-10 h-10 mr-2 bg-white rounded-full shadow-button flex items-center justify-center hover:bg-gray-50 hover:scale-105 active:scale-95 transition-all duration-200 disabled:opacity-50 disabled:hover:scale-100"
                  >
                    <img src="/assets/arrow.png" alt="arrow" />
                  </button>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex flex-row gap-8 items-center">
                  <div className="">
                    <label className="text-[#718EBF] text-[15px]">
                      Write Amount
                    </label>
                  </div>
                  <div className="w-2/3">
                    <div className="flex items-center">
                      <div className="flex-1 -mr-24">
                        <input
                          type="text"
                          placeholder="525.50"
                          className="w-full bg-[#F3F4F6] rounded-[30px] pl-6 pr-32 py-3.5 text-[15px] text-[#343C6A] focus:outline-none"
                        />
                      </div>
                      <button className="bg-[#1B1D21] text-white rounded-[30px] px-6 py-3.5 flex items-center justify-center gap-2 hover:bg-[#2a2d33] transition-colors">
                        Send
                        <img
                          src="/assets/send.svg"
                          alt="send"
                          className="w-4 h-4"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="lg:hidden text-[22px] font-semibold text-[#343C6A] font-inter mb-6 mt-6 px-2">
            Balance History
          </h2>
          <div className="w-full bg-white rounded-2xl p-6 max-h-[276px]">
            <div className="h-[200px]">
              <Line options={balanceHistoryOptions} data={balanceHistoryData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
