import {Currency} from './currency.model';

export interface Account {
  id?: string;
  accountNumber?: string;
  balance?: number;
  currency?: Currency;
  name?: string;
  blockedAmount?: number;
}
