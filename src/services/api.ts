import {
  Card,
  Transaction,
  WeeklyActivityData,
  ExpenseData,
  BalanceHistoryData,
  TransferUser,
  TransferResponse,
} from "../types/dashboard";
import { weeklyData, expenseData, balanceHistoryData } from "../mock/chartMock";
import { mockTransferUsers } from "../mock/transferMock";

const mockCards: Card[] = [
  {
    id: "1",
    balance: 5756,
    cardHolder: "Eddy Cusuma",
    validThru: "12/22",
    cardNumber: "3778 **** **** 1234",
  },
  {
    id: "2",
    balance: 5756,
    cardHolder: "Eddy Cusuma",
    validThru: "12/22",
    cardNumber: "3778 **** **** 1234",
    isLight: true,
  },
];

const mockTransactions: Transaction[] = [
  {
    id: "1",
    type: "withdrawal",
    title: "Deposit from my Card",
    date: "28 January 2021",
    amount: -850,
    icon: "/assets/card.png",
  },
  {
    id: "2",
    type: "deposit",
    title: "Deposit Paypal",
    date: "25 January 2021",
    amount: 2500,
    icon: "/assets/paypal.png",
  },
  {
    id: "3",
    type: "deposit",
    title: "Jemi Wilson",
    date: "21 January 2021",
    amount: 5400,
    icon: "/assets/coin.png",
  },
];

export const api = {
  getCards: async (): Promise<Card[]> => {
    return mockCards;
  },

  getRecentTransactions: async (): Promise<Transaction[]> => {
    return mockTransactions;
  },

  getWeeklyActivity: async (): Promise<WeeklyActivityData> => {
    return {
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
  },

  getExpenseStats: async (): Promise<ExpenseData> => {
    return expenseData;
  },

  getBalanceHistory: async (): Promise<BalanceHistoryData> => {
    return balanceHistoryData;
  },

  getTransferUsers: async (): Promise<TransferUser[]> => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    return mockTransferUsers;
  },

  sendTransfer: async (
    recipient: string,
    amount: string
  ): Promise<TransferResponse> => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Validate amount
    const numAmount = parseFloat(amount);
    if (isNaN(numAmount) || numAmount <= 0) {
      return {
        success: false,
        message: "Invalid amount",
      };
    }

    return {
      success: true,
      message: `Successfully sent ${amount} to ${recipient}`,
    };
  },
};
