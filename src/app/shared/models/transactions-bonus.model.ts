import {TransactionBonus} from './transaction-bonus.model';
import {Account} from './account.model';

export interface TransactionsBonus {
  granted?: boolean;
  transactionBonuses?: TransactionBonus[];
  account?: Account;
}
