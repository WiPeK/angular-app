export interface TransactionBonus {
  id?: string;
  freePayments?: number;
  freeAtmTransactions?: number;
  freePremiumPayments?: number;
  account?: Account;
  granted?: boolean;
}
