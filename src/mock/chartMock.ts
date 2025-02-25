export const weeklyData = {
  labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
  datasets: [
    {
      label: "deposit",
      data: [200, 150, 220, 300, 200, 250, 300],
      backgroundColor: "#4D78FF",
      borderRadius: 12,
      barThickness: 8,
    },
    {
      label: "",
      data: [0, 0, 0, 0, 0, 0, 0],
      backgroundColor: "#FFFFFF",
      borderRadius: 12,
      barThickness: 8,
    },
    {
      label: "Withdraw",
      data: [450, 320, 300, 450, 160, 350, 400],
      backgroundColor: "#232323",
      borderRadius: 12,
      barThickness: 8,
    },
  ],
};

export const expenseData = {
  labels: ["Bill Expenses", "Others", "Investment", "Entertainment"],
  datasets: [
    {
      data: [15, 35, 20, 30],
      backgroundColor: ["#FC7900", "#232323", "#396AFF", "#343C6A"],
      borderWidth: 0,
      offset: [70, 30, 0, 20],
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
        color: "#EAEAEA",
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
