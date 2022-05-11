import { Method } from 'axios';

export interface RpcRequest {
  method: Method;
  data: {
    method: string;
    params: any;
  };
  headers?: any;
}
