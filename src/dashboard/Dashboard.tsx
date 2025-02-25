import React from "react";
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
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Dashboard: React.FC = () => {
  const weeklyData = {
    labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Withdraw",
        data: [450, 320, 300, 450, 160, 350, 400],
        backgroundColor: "#343C6A",
        borderRadius: 20,
        barThickness: 20,
      },
      {
        label: "Deposit",
        data: [200, 150, 220, 300, 200, 250, 300],
        backgroundColor: "#4D78FF",
        borderRadius: 20,
        barThickness: 20,
      },
    ],
  };

  const expenseData = {
    labels: ["Entertainment", "Bill Expenses", "Investment", "Others"],
    datasets: [
      {
        data: [30, 15, 20, 35],
        backgroundColor: ["#343C6A", "#FF8F6B", "#4D78FF", "#1C1C1C"],
        borderWidth: 0,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          color: "#EAEAEA",
        },
        ticks: {
          stepSize: 100,
        },
      },
    },
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "right" as const,
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
    },
  };

  return (
    <div className="p-6 bg-[#F3F3F3] h-full overflow-y-auto overflow-x-hidden">
      <div className="flex gap-[30px] pb-4">
        <div className="flex-[2]">
          <div className="flex items-center justify-between mb-6 px-2">
            <h2 className="text-[22px] font-semibold text-[#343C6A]">
              My Cards
            </h2>
            <h2 className="text-[17px] font-semibold text-[#343C6A]">
              See All
            </h2>
          </div>

          <div className="flex justify-between gap-[30px]">
            <div
              className="min-w-[350px] h-[235px] rounded-2xl pt-6 text-white relative overflow-hidden font-lato flex flex-col"
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

            <div className="h-[235px] min-w-[350px] rounded-2xl pt-6 text-white relative overflow-hidden font-lato flex flex-col bg-white border border-[#DFEAF2]">
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
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6 px-2">
            <h2 className="text-[22px] font-semibold text-[#343C6A]">
              Recent Transaction
            </h2>
          </div>
          <div className="h-[235px] min-w-[320px] rounded-2xl bg-white border border-[#DFEAF2] p-6 font-lato">
            {/* Transaction Items */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FFF6E9] flex items-center justify-center">
                  <img
                    src="/assets/card-receive.png"
                    alt="Deposit"
                    className="w-5 h-5"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-semibold text-[#343C6A]">
                        Deposit from my Card
                      </p>
                      <p className="text-xs text-[#718EBF]">28 January 2021</p>
                    </div>
                    <span className="text-[#FF4B4B] font-semibold">-$650</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#E7F9F4] flex items-center justify-center">
                  <img
                    src="/assets/paypal.png"
                    alt="PayPal"
                    className="w-5 h-5"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium text-[#343C6A]">
                        Deposit PayPal
                      </p>
                      <p className="text-xs text-[#718EBF]">25 January 2021</p>
                    </div>
                    <span className="text-[#41D4A8] font-medium">+$2,500</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#E7F9F4] flex items-center justify-center">
                  <img src="/assets/user.png" alt="User" className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium text-[#343C6A]">
                        Jemi Wilson
                      </p>
                      <p className="text-xs text-[#718EBF]">21 January 2021</p>
                    </div>
                    <span className="text-[#41D4A8] font-medium">+$5,400</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex gap-[30px] mb-6 px-2">
          <div className="flex-[2]">
            <h2 className="text-[22px] font-semibold text-[#343C6A]">
              Weekly Activity
            </h2>
          </div>
          <div className="flex-1">
            <h2 className="text-[22px] font-semibold text-[#343C6A]">
              Expense Statistics
            </h2>
          </div>
        </div>

        <div className="flex gap-[30px]">
          <div className="flex-[2] bg-white rounded-2xl pl-6">
            <div className="h-[300px]">
              <Bar options={barOptions} data={weeklyData} />
            </div>
          </div>
          <div className="flex-1 bg-white rounded-2xl pl-6">
            <div className="h-[300px] flex items-center justify-center">
              <Pie options={pieOptions} data={expenseData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
