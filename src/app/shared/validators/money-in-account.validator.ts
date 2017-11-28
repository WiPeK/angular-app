import {FormGroup, ValidatorFn} from '@angular/forms';
import {Account} from '../models/account.model';

export function moneyInAccountValidator(accountFieldName: string, amountFieldName: string): any {
  return (group: FormGroup): {[key: string]: any} => {
    if (group == null) {
      return null;
    }

    const account: Account = group.controls[accountFieldName].value;
    const amount: number = group.controls[amountFieldName].value;

    if (account.balance <= amount) {
      return {
        noEnoughMoney: true
      };
    }
    return null;
  }
}
