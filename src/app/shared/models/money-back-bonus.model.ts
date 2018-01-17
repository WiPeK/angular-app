import {Account} from './account.model';

export interface MoneyBackBonus {
  granted?: boolean;
  account?: Account;
  grantedBonus?: number;
  mobileLoggingNumbers?: number;
  sumPaymentToAccount?: number;
  blikUseNumbers?: number;
}
