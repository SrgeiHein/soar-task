export interface Card {
  id: string;
  balance: number;
  cardHolder: string;
  validThru: string;
  cardNumber: string;
  isLight?: boolean;
}

export interface Transaction {
  id: string;
  type: "deposit" | "withdrawal" | "transfer";
  title: string;
  date: string;
  amount: number;
  icon: string;
}

export interface WeeklyActivityData {
  data: Array<{
    name: string;
    deposit: number;
    withdraw: number;
  }>;
  colors: {
    deposit: string;
    withdraw: string;
  };
}

export interface ExpenseData {
  labels: string[];
  datasets: {
    data: number[];
    backgroundColor: string[];
    borderWidth?: number;
    offset?: number[];
  }[];
}

export interface BalanceHistoryData {
  labels: string[];
  datasets: {
    data: number[];
    borderColor: string;
    tension: number;
    fill: boolean;
    backgroundColor: string;
    pointRadius: number;
    borderWidth: number;
  }[];
}

export interface TransferUser {
  name: string;
  role: string;
  image: string;
}

export interface TransferResponse {
  success: boolean;
  message: string;
}
