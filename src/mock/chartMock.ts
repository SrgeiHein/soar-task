export const weeklyData = {
  data: [
    { name: "Sat", deposit: 200, withdraw: 450 },
    { name: "Sun", deposit: 150, withdraw: 320 },
    { name: "Mon", deposit: 220, withdraw: 300 },
    { name: "Tue", deposit: 300, withdraw: 450 },
    { name: "Wed", deposit: 200, withdraw: 160 },
    { name: "Thu", deposit: 250, withdraw: 350 },
    { name: "Fri", deposit: 300, withdraw: 400 },
  ],
  colors: {
    deposit: "#4D78FF",
    withdraw: "#232323",
  },
};

export const barChartConfig = {
  margin: { top: 20, right: 30, left: 20, bottom: 5 },
  barSize: 10,
  barGap: 4,
  grid: {
    strokeDasharray: "5 5",
    vertical: false,
    stroke: "#DFE5EE",
  },
  xAxis: {
    dataKey: "name",
    axisLine: false,
    tickLine: false,
    tick: {
      fill: "#718EBF",
      fontSize: 12,
      fontFamily: "Lato",
    },
    padding: { left: 10, right: 10 },
  },
  yAxis: {
    axisLine: false,
    tickLine: false,
    tick: {
      fill: "#718EBF",
      fontSize: 12,
      fontFamily: "Lato",
    },
    domain: [0, 500],
    ticks: [0, 100, 200, 300, 400, 500],
  },
  legend: {
    verticalAlign: "top",
    align: "right",
    iconType: "circle",
    iconSize: 8,
    wrapperStyle: {
      paddingBottom: 20,
      paddingLeft: 50,
      fontSize: 15,
      fontFamily: "Lato",
      color: "#718EBF",
    },
  },
  bars: [
    {
      dataKey: "withdraw",
      name: "Withdraw",
      radius: [10, 10, 10, 10],
    },
    {
      dataKey: "deposit",
      name: "deposit",
      radius: [10, 10, 10, 10],
    },
  ],
};

export const expenseData = {
  labels: ["Bill Expenses", "Entertainment", "Investment", "Others"],
  datasets: [
    {
      data: [15, 35, 20, 30],
      backgroundColor: ["#FC7900", "#343C6A", "#396AFF", "#232323"],
      borderWidth: 0,
      offset: [20, 0, 10, 30],
    },
  ],
};

export const barOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
      align: "end" as const,
      labels: {
        usePointStyle: true,
        pointStyle: "circle",
        padding: 15,
        boxWidth: 15,
        boxHeight: 8,
        font: {
          size: 15,
          family: "Lato",
        },
        color: "#718EBF",
      },
    },
    tooltip: {
      enabled: false,
    },
    datalabels: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        font: {
          size: 12,
          family: "Lato",
        },
        color: "#718EBF",
        padding: 5,
      },
      border: {
        display: false,
      },
    },
    y: {
      grid: {
        color: "#DFE5EE",
        borderDash: [5, 5],
        drawBorder: false,
      },
      ticks: {
        stepSize: 100,
        font: {
          size: 12,
          family: "Lato",
        },
        color: "#718EBF",
        padding: 5,
      },
      border: {
        display: false,
      },
      min: 0,
      max: 500,
    },
  },
  layout: {
    padding: {
      top: 0,
      right: 20,
      left: 10,
      bottom: 0,
    },
  },
  barPercentage: 0.6,
  categoryPercentage: 0.35,
};

export const pieOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
    datalabels: {
      color: "#FFFFFF",
      font: {
        size: 12,
        weight: 500,
        family: "Lato",
        padding: 10,
      },
      formatter: (value: number, ctx: any) => {
        const label = ctx.chart.data.labels[ctx.dataIndex];
        return [`${value}%`, label];
      },
      anchor: "center" as const,
      align: "center" as const,
      offset: 0,
      textAlign: "center" as const,
    },
  },
  rotation: 40,
  radius: "100%",
};

export type PageDataType = {
  name: string;
  value: number;
};

export const pageData: PageDataType[] = [
  {
    name: "Jan",
    value: 300,
  },
  {
    name: "Feb",
    value: 420,
  },
  {
    name: "Mar",
    value: 350,
  },
  {
    name: "Apr",
    value: 500,
  },
  {
    name: "May",
    value: 380,
  },
  {
    name: "Jun",
    value: 450,
  },
  {
    name: "Jul",
    value: 200,
  },
  {
    name: "Aug",
    value: 300,
  },
  {
    name: "Sep",
    value: 450,
  },
  {
    name: "Oct",
    value: 750,
  },
  {
    name: "Nov",
    value: 200,
  },
  {
    name: "Dec",
    value: 580,
  },
];

export const balanceHistoryData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      data: [300, 420, 350, 500, 380, 450, 200, 300, 450, 750, 200, 580],
      borderColor: "#1814F3",
      tension: 0.4,
      fill: true,
      backgroundColor: "rgba(24, 20, 243, 0.3)",
      pointRadius: 0,
      borderWidth: 2,
    },
  ],
};

export const balanceHistoryOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
    datalabels: {
      display: false,
    },
  },
  elements: {
    line: {
      fill: true,
    },
  },
  scales: {
    x: {
      grid: {
        color: "#EAEAEA",
        borderDash: [5, 5],
      },
      ticks: {
        font: {
          size: 12,
          family: "Lato",
        },
        color: "#718EBF",
      },
      border: {
        display: false,
      },
    },
    y: {
      grid: {
        color: "#EAEAEA",
        borderDash: [5, 5],
      },
      ticks: {
        font: {
          size: 12,
          family: "Lato",
        },
        color: "#718EBF",
      },
      min: 0,
      max: 800,
      stepSize: 200,
      border: {
        display: false,
      },
    },
  },
};
