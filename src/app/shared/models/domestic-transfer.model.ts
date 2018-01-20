import {Account} from './account.model';
import {DomesticBeneficiary} from './domestic-beneficiary.model';

export interface DomesticTransfer {
  userAccount?: Account;
  beneficiary?: DomesticBeneficiary[] | string
  beneficiaryAccount?: string;
  address?: string;
  type?: any;
  amount?: number;
  title?: string;
  date?: string;
  template?: boolean;
  emailConfirm?: boolean;
  email?: string;
}
