import {DictionaryItem} from '../models/distionary-item.model';

export class CustomDictionaryItemFactory {

  public static status_ok = new DictionaryItem('STATUS_OK', 'STATUS_OK');
  public static status_error = new DictionaryItem('STATUS_ERROR', 'STATUS_ERROR');
}
