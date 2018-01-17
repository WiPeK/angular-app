import {GrantedVoucher} from './granted-voucher.model';

export interface ActualVoucher {
  id?: string;
  name?: string;
  grantedVouchers?: GrantedVoucher[];
}
