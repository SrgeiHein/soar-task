import { Card, Transaction, WeeklyActivityData, ExpenseData, BalanceHistoryData } from "../types/dashboard";
import { weeklyData, expenseData, balanceHistoryData } from "../mock/chartMock";

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
    return weeklyData;
  },

  getExpenseStats: async (): Promise<ExpenseData> => {
    return expenseData;
  },

  getBalanceHistory: async (): Promise<BalanceHistoryData> => {
    return balanceHistoryData;
  },
};
