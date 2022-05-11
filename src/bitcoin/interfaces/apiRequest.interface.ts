import { Method } from 'axios';

export interface ApiRequest {
  method: Method;
  data?: any;
  headers?: any;
  uri?: string;
  type?: string;
}
