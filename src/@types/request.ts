import type { Request as DefaultRequest } from 'express';
import type { IncomingHttpHeaders } from 'http';

export type Request = {
  headers: {
    x_api_key: string;
  } & IncomingHttpHeaders;
} & DefaultRequest;
