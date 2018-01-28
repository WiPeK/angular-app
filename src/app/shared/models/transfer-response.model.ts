import {DomesticTransfer} from './domestic-transfer.model';

export const STATUS_OK = 'STATUS_OK';
export const STATUS_ERROR = 'STATUS_ERROR';

export interface TransferResponse {
  costs?: number;
  errors?: string[];
  status?: string;
  transfers?: DomesticTransfer[];
}
