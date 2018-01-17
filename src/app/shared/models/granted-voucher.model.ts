import {ActualVoucher} from './actual-voucher.model';

export interface GrantedVoucher {
  id?: string;
  code?: string;
  account?: Account;
  actualVoucher?: ActualVoucher;
}
