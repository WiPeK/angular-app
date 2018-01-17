import {Account} from './account.model';
import {GrantedVoucher} from './granted-voucher.model';

export interface VoucherBonus {
  granted?: boolean;
  grantedVouchers?: GrantedVoucher[];
  account?: Account;
}
