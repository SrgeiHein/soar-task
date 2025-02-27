import React, { useState, useEffect } from "react";
import { CardIcon, CardIcon2 } from "../components/icons";
import { SendIcon } from "../components/icons/SendIcon";
import {
  Card,
  Transaction,
  WeeklyActivityData,
  ExpenseData,
  TransferUser,
} from "../types/dashboard";
import { api } from "../services/api";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
  PieChart,
  Pie,
  Sector,
  Area,
  AreaChart,
  Tooltip,
} from "recharts";
import { weeklyData, expenseData, pageData } from "../mock/chartMock";
import { mockTransferUsers } from "../mock/transferMock";
import { barChartConfig, pieChartConfig } from "../config/chartConfig";

const Dashboard = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [weeklyActivity, setWeeklyActivity] =
    useState<WeeklyActivityData | null>(null);
  const [expenseStats, setExpenseStats] = useState<ExpenseData | null>(null);

  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [amount, setAmount] = useState<string>("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [transferUsers, setTransferUsers] =
    useState<TransferUser[]>(mockTransferUsers);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          cardsData,
          transactionsData,
          weeklyData,
          expenseData,
          usersData,
        ] = await Promise.all([
          api.getCards(),
          api.getRecentTransactions(),
          api.getWeeklyActivity(),
          api.getExpenseStats(),
          api.getTransferUsers(),
        ]);

        setCards(cardsData);
        setTransactions(transactionsData);
        setWeeklyActivity(weeklyData);
        setExpenseStats(expenseData);
        setTransferUsers(usersData);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchData();
  }, []);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) =>
        prev + 1 >= transferUsers.length ? 0 : prev + 1
      );
      setIsAnimating(false);
    }, 300);
  };

  const handleUserSelect = (userName: string) => {
    setSelectedUser(userName === selectedUser ? null : userName);
  };

  const handleSendMoney = async () => {
    if (!selectedUser || !amount) return;

    try {
      const response = await api.sendTransfer(selectedUser, amount);
      if (response.success) {
        setSuccessMessage(response.message);
        setShowSuccess(true);
        setAmount("");
        setSelectedUser(null);

        // Hide success message after 3 seconds
        setTimeout(() => {
          setShowSuccess(false);
          setSuccessMessage("");
        }, 3000);
      }
    } catch (error) {
      console.error("Error sending money:", error);
    }
  };

  const handleSeeAll = () => {
    console.log("See all clicked");
  };

  // Get exactly 3 users starting from current index
  const visibleUsers = Array.from({ length: 3 }, (_, i) => {
    const index = (currentIndex + i) % transferUsers.length;
    return transferUsers[index];
  });

  return (
    <div className=" p-6 bg-[#F3F3F3] h-full overflow-y-auto overflow-x-hidden">
      <div className="flex flex-col lg:flex-row gap-[30px] pb-4">
        <div className="w-full">
          <div className="flex items-center justify-between mb-6 px-2">
            <h2 className="text-[22px] font-semibold text-[#343C6A]">
              My Cards
            </h2>
            <h2
              onClick={handleSeeAll}
              className="text-[17px] font-semibold text-[#343C6A] hidden lg:block cursor-pointer transition-transform duration-200 hover:scale-105 active:scale-95"
            >
              See All
            </h2>
          </div>

          <div className="">
            <div className="flex overflow-x-auto pb-4 gap-[30px] snap-x snap-mandatory hover-scrollbar lg:max-w-[730px] max-w-full">
              <div className="flex gap-[30px] w-full pr-[-20px]">
                {cards.map((card) => (
                  <div
                    key={card.id}
                    className={`lg:min-w-[350px] min-w-full h-[235px] rounded-2xl pt-6 text-white overflow-hidden font-lato flex flex-col snap-start ${
                      card.isLight
                        ? "bg-white border border-[#DFEAF2]"
                        : "bg-gradient-to-r from-[#5B5A6F] to-black"
                    }`}
                  >
                    <div className="flex justify-between items-start mb-8 px-6">
                      <div>
                        <p
                          className={`text-[12px] mb-0 ${
                            card.isLight ? "text-[#718EBF]" : "text-white"
                          }`}
                        >
                          Balance
                        </p>
                        <p
                          className={`text-[20px] font-semibold ${
                            card.isLight ? "text-[#343C6A]" : "text-white"
                          }`}
                        >
                          ${card.balance.toLocaleString()}
                        </p>
                      </div>
                      <img
                        src={
                          card.isLight
                            ? "/assets/Chip_Card2.png"
                            : "/assets/Chip_Card.png"
                        }
                        alt="Chip"
                        className="w-8 h-8"
                      />
                    </div>
                    <div className="flex justify-stretch items-start mb-7 px-6">
                      <div>
                        <p
                          className={`text-[12px] ${
                            card.isLight
                              ? "text-[#718EBF]"
                              : "text-white opacity-70"
                          }`}
                        >
                          CARD HOLDER
                        </p>
                        <p
                          className={`font-semibold text-[15px] mt-0 ${
                            card.isLight ? "text-[#343C6A]" : "text-white"
                          }`}
                        >
                          {card.cardHolder}
                        </p>
                      </div>
                      <div>
                        <p
                          className={`text-[12px] ${
                            card.isLight
                              ? "text-[#718EBF]"
                              : "text-white opacity-70"
                          }`}
                        >
                          VALID THRU
                        </p>
                        <p
                          className={`font-semibold text-[15px] mt-0 ${
                            card.isLight ? "text-[#343C6A]" : "text-white"
                          }`}
                        >
                          {card.validThru}
                        </p>
                      </div>
                    </div>

                    <div
                      className={`flex items-center justify-between px-6 flex-grow py-4 ${
                        card.isLight
                          ? "bg-white border-t border-[#DFEAF2]"
                          : "bg-gradient-to-b from-white/15 to-transparent"
                      }`}
                    >
                      <p
                        className={`font-semibold text-[22px] ${
                          card.isLight ? "text-[#343C6A]" : "text-white"
                        }`}
                      >
                        {card.cardNumber}
                      </p>
                      {card.isLight ? (
                        <CardIcon2 className="opacity-50" />
                      ) : (
                        <CardIcon className="opacity-50" />
                      )}
                    </div>
                  </div>
                ))}
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
          <div className="h-[235px] w-full lg:min-w-[390px] rounded-2xl bg-white border border-[#DFEAF2] p-7 font-lato">
            <div className="h-full hover-scrollbar">
              <div className="space-y-4">
                {transactions.map((transaction) => (
                  <div
                    key={transaction.id}
                    className="flex items-center gap-5 mb-5 last:mb-0"
                  >
                    <img
                      src={transaction.icon}
                      alt={transaction.title}
                      className="w-12 h-12 flex-shrink-0"
                    />

                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-semibold text-[16px] text-[#232323]">
                            {transaction.title}
                          </p>
                          <p className="font-[15px] text-[#718EBF]">
                            {transaction.date}
                          </p>
                        </div>
                        <span
                          className={`${
                            transaction.amount > 0
                              ? "text-[#41D4A8]"
                              : "text-[#FF4B4A]"
                          } font-semibold`}
                        >
                          {transaction.amount > 0 ? "+" : ""}$
                          {Math.abs(transaction.amount).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
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

        <div className="flex flex-col lg:flex-row lg:gap-[40px]">
          <div className="lg:flex-[2] bg-white rounded-2xl pl-6 pt-6">
            <div className="h-[322px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={weeklyActivity?.data || weeklyData.data}
                  margin={barChartConfig.chart.margin}
                  barSize={barChartConfig.chart.barSize}
                  barGap={barChartConfig.chart.barGap}
                >
                  <CartesianGrid
                    strokeDasharray={barChartConfig.grid.strokeDasharray}
                    vertical={barChartConfig.grid.vertical}
                    stroke={barChartConfig.grid.stroke}
                  />
                  <XAxis
                    dataKey={barChartConfig.xAxis.dataKey}
                    axisLine={barChartConfig.xAxis.axisLine}
                    tickLine={barChartConfig.xAxis.tickLine}
                    tick={barChartConfig.xAxis.tick}
                    padding={barChartConfig.xAxis.padding}
                  />
                  <YAxis
                    axisLine={barChartConfig.yAxis.axisLine}
                    tickLine={barChartConfig.yAxis.tickLine}
                    tick={barChartConfig.yAxis.tick}
                    domain={barChartConfig.yAxis.domain}
                    ticks={barChartConfig.yAxis.ticks}
                  />
                  <Legend
                    verticalAlign={barChartConfig.legend.verticalAlign}
                    align={barChartConfig.legend.align}
                    iconType={barChartConfig.legend.iconType}
                    iconSize={barChartConfig.legend.iconSize}
                    wrapperStyle={barChartConfig.legend.wrapperStyle}
                    formatter={(value, entry) => (
                      <span style={{ marginRight: barChartConfig.legend.gap }}>
                        {value}
                      </span>
                    )}
                  />
                  {barChartConfig.bars.map((bar) => (
                    <Bar
                      key={bar.dataKey}
                      dataKey={bar.dataKey}
                      name={bar.name}
                      fill={weeklyData.colors[bar.dataKey]}
                      radius={bar.radius}
                    />
                  ))}
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="block lg:hidden">
            <h2 className="text-[22px] font-semibold text-[#343C6A] mt-8 mb-6">
              Expense Statistics
            </h2>
          </div>

          <div className="lg:flex-1 bg-white rounded-2xl pl-6 pt-6">
            <div className="h-[322px]  flex items-center justify-center">
              <PieChart
                width={pieChartConfig.width}
                height={pieChartConfig.height}
              >
                <Pie
                  data={
                    expenseStats?.datasets?.[0]?.data.map((value, index) => ({
                      percentage: `${value}%`,
                      name: expenseStats.labels[index],
                      value,
                      fill: expenseStats.datasets[0].backgroundColor[index],

                      offset: pieChartConfig.offset[index],
                    })) ||
                    expenseData.datasets[0].data.map((value, index) => ({
                      percentage: `${value}%`,
                      name: expenseData.labels[index],
                      value,
                      fill: expenseData.datasets[0].backgroundColor[index],

                      offset: pieChartConfig.offset[index],
                    }))
                  }
                  cx={pieChartConfig.cx}
                  cy={pieChartConfig.cy}
                  innerRadius={pieChartConfig.innerRadius}
                  outerRadius={pieChartConfig.outerRadius}
                  paddingAngle={pieChartConfig.paddingAngle}
                  dataKey={pieChartConfig.dataKey}
                  nameKey={pieChartConfig.nameKey}
                  activeIndex={[0, 1, 2, 3]}
                  activeShape={(props: any) => {
                    const RADIAN = Math.PI / 180;
                    const { cx, cy, midAngle, fill, payload } = props;
                    const cos = Math.cos(-midAngle * RADIAN);
                    const sin = Math.sin(-midAngle * RADIAN);
                    const offset = payload.offset;

                    return (
                      <g>
                        <Sector
                          {...props}
                          fill={fill}
                          transform={`translate(${offset * cos},${
                            offset * sin
                          })`}
                        />
                        <text
                          x={cx + (props.outerRadius + offset) * cos}
                          y={cy + (props.outerRadius + offset) * sin}
                          fill={pieChartConfig.label.fill}
                          textAnchor="middle"
                          dominantBaseline="middle"
                          style={{
                            fontSize: pieChartConfig.label.fontSize,
                            fontFamily: pieChartConfig.label.fontFamily,
                          }}
                        ></text>
                      </g>
                    );
                  }}
                  label={({
                    cx,
                    cy,
                    midAngle,
                    innerRadius,
                    outerRadius,
                    value,
                    name,
                    percentage,
                    payload,
                  }) => {
                    const RADIAN = Math.PI / 180;
                    const cos = Math.cos(-midAngle * RADIAN);
                    const sin = Math.sin(-midAngle * RADIAN);
                    const offset = payload.offset;

                    // Calculate base position for the segment
                    const radius =
                      innerRadius + (outerRadius - innerRadius) * 0.5;
                    let x = cx + radius * cos;
                    let y = cy + radius * sin;

                    // Apply offset for exploded effect
                    x += offset * cos;
                    y += offset * sin;

                    return (
                      <text
                        x={x}
                        y={y}
                        fill={pieChartConfig.label.fill}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        style={{
                          fontSize: pieChartConfig.label.fontSize,
                          fontFamily: pieChartConfig.label.fontFamily,
                        }}
                      >
                        <tspan x={x} dy="-0.5em">
                          {percentage}
                        </tspan>
                        <tspan x={x} dy="1.2em">
                          {name}
                        </tspan>
                      </text>
                    );
                  }}
                  labelLine={false}
                />
              </PieChart>
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
            <div className="min-w-[446px] min-h-[276px] bg-white rounded-2xl py-10 px-6">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-4 overflow-hidden">
                    <div
                      className={`flex items-center ${
                        isAnimating ? "animate-slideNext" : ""
                      }`}
                    >
                      {transferUsers.length > 0 &&
                        visibleUsers.map((user, index) => (
                          <div
                            key={user.name + index}
                            className="flex flex-col items-center gap-2 w-[120px] cursor-pointer"
                            onClick={() => handleUserSelect(user.name)}
                          >
                            <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
                              <img
                                src={user.image}
                                alt={user.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="text-center">
                              <p
                                className={`text-[16px] text-[#232323] ${
                                  selectedUser === user.name
                                    ? "font-extrabold"
                                    : "font-medium"
                                }`}
                              >
                                {user.name}
                              </p>
                              <p
                                className={`text-[15px] text-[#718EBF] ${
                                  selectedUser === user.name
                                    ? "font-semibold"
                                    : ""
                                }`}
                              >
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
              </div>

              <div className="mt-5">
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
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          placeholder="525.50"
                          className="w-full bg-[#F3F4F6] rounded-[30px] pl-6 pr-32 py-3.5 text-[15px] text-[#343C6A] focus:outline-none"
                        />
                      </div>
                      <button
                        onClick={handleSendMoney}
                        className={`bg-[#1B1D21] text-white rounded-[30px] px-8 py-3.5 flex items-center justify-center gap-2 transition-all duration-200 hover:bg-[#2a2d33] hover:scale-105 active:scale-95`}
                      >
                        Send
                        <SendIcon className="w-6 h-6 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {showSuccess && (
              <div className="mt-4 text-center text-green-600 font-medium animate-fade-in">
                {successMessage}
              </div>
            )}
          </div>

          <h2 className="lg:hidden text-[22px] font-semibold text-[#343C6A] font-inter mb-6 mt-6 px-2">
            Balance History
          </h2>
          <div className="w-full bg-white rounded-2xl pt-6 min-h-[276px]">
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart
                  data={pageData}
                  margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
                >
                  <CartesianGrid
                    strokeDasharray="5 5"
                    stroke="#EAEAEA"
                    vertical={true}
                    horizontal={true}
                  />
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{
                      fill: "#718EBF",
                      fontSize: 12,
                      fontFamily: "Lato",
                    }}
                    interval={0}
                    angle={0}
                    textAnchor="middle"
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{
                      fill: "#718EBF",
                      fontSize: 12,
                      fontFamily: "Lato",
                    }}
                    domain={[0, 800]}
                    ticks={[0, 200, 400, 600, 800]}
                  />
                  <Tooltip />
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0066FF" stopOpacity={0.4} />
                      <stop
                        offset="95%"
                        stopColor="#0066FF"
                        stopOpacity={0.05}
                      />
                    </linearGradient>
                  </defs>
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#0066FF"
                    strokeWidth={2}
                    fill="url(#colorValue)"
                    fillOpacity={1}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
