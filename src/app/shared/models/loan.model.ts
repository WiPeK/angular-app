import {Account} from './account.model';

export interface Loan {
  account?: Account;
  amount: string;
  dateFrom: Date;
  dateTo: Date;
  id: string;
  name: string;
}
