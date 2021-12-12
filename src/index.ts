import eFetch from './commands/eFetch';
import eSearch from './commands/eSearch';
import eInfo from './commands/eInfo';

import { ApiKey, IPubmedApi, RetMode } from './types/PubmedApi';

export class PubmedApi implements IPubmedApi {
  retMode;
  apiKey;
  eFetch;
  eInfo;
  eSearch;

  constructor(retMode?: RetMode, apiKey?: ApiKey) {
    this.retMode = retMode ? retMode : 'json';
    this.apiKey = apiKey && apiKey !== '' ? `&api_key=${apiKey}` : '';
    this.eFetch = eFetch(this.retMode, this.apiKey);
    this.eInfo = eInfo(this.retMode, this.apiKey);
    this.eSearch = eSearch(this.retMode, this.apiKey);
  }
}
