export interface ScheduledFransfer {
  account?: Account;
  transferId: string;
  trans_state: string;
  ben_iban: string;
  balance: string;
  trans_date: Date;

}
