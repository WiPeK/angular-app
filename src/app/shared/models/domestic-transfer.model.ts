import {Account} from './account.model';
import {DomesticBeneficiary} from './domestic-beneficiary.model';

export interface DomesticTransfer {
  id?: string;
  userAccount?: Account;
  beneficiary?: DomesticBeneficiary[];
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
