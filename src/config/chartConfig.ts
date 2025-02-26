type BarDataKey = "withdraw" | "deposit";

interface BarConfig {
  dataKey: BarDataKey;
  name: string;
  radius: [number, number, number, number];
}

export const barChartConfig = {
  chart: {
    margin: { top: 20, right: 30, left: 20, bottom: 5 },
    barSize: 10,
    barGap: 4,
  },
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
    domain: [0, 500] as [number, number],
    ticks: [0, 100, 200, 300, 400, 500],
  },
  legend: {
    verticalAlign: "top" as const,
    align: "right" as const,
    iconType: "circle" as const,
    iconSize: 8,
    gap: 25,
    wrapperStyle: {
      paddingBottom: 20,
      gap: 20,
      fontSize: 15,
      fontFamily: "Lato",
      color: "#718EBF",
    },
  },
  bars: [
    {
      dataKey: "withdraw",
      name: "Withdraw",
      radius: [10, 10, 10, 10] as [number, number, number, number],
    },
    {
      dataKey: "deposit",
      name: "deposit",
      radius: [10, 10, 10, 10] as [number, number, number, number],
    },
  ] as BarConfig[],
};

export const pieChartConfig = {
  width: 300,
  height: 300,
  innerRadius: 0,
  outerRadius: 130,
  paddingAngle: 2,

  dataKey: "value",
  nameKey: "name",
  offset: [20, 5, 0, 7],
  cx: "50%",
  cy: "50%",
  label: {
    position: "center",
    offset: 25,
    fill: "#FFFFFF",
    fontSize: 14,
    fontFamily: "Lato",
  },
};
