import {Account} from './account.model';

export interface SaldoBonus {
  granted?: boolean;
  saldo?: number;
  account?: Account;
  grantedBonus?: number;
}
