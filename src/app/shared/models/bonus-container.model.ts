import {Account} from './account.model';
import {SaldoBonus} from './saldo-bonus.model';
import {VoucherBonus} from './voucher-bonus.model';
import {MoneyBackBonus} from './money-back-bonus.model';
import {TransactionsBonus} from './transactions-bonus.model';

export interface BonusContainer {
  account?: Account;
  saldoBonus?: SaldoBonus;
  voucherBonus?: VoucherBonus;
  moneyBackBonus?: MoneyBackBonus;
  transactionsBonus?: TransactionsBonus;
}
