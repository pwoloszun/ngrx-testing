import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { handlers } from './default-handlers';

export const server = setupServer(...handlers);

type ServerMethod = 'get' | 'put' | 'post' | 'patch' | 'delete';

interface StubOptions {
  delay?: number;
}

function serverUseJsonApi(method: ServerMethod, path: string, respJsonData: any, options: StubOptions): void {
  const fullUrl = getApiUrl(path);
  server.use(
    rest[method](fullUrl, (req, res, ctx) => {
      const args = [
        ctx.json(respJsonData),
      ];
      if (options.delay !== undefined) {
        args.unshift(ctx.delay(options.delay));
      }
      return res(...args);
    }),
  );
}

export const stubServerApi = {
  get(path: string, respJsonData: any, options: StubOptions = {}): void {
    serverUseJsonApi('get', path, respJsonData, options);
  },

  patch(path: string, respJsonData: any, options: StubOptions = {}): void {
    serverUseJsonApi('patch', path, respJsonData, options);
  },

  post(path: string, respJsonData: any, options: StubOptions = {}): void {
    serverUseJsonApi('post', path, respJsonData, options);
  },
};

const BASE_URL = ``;

function getApiUrl(path: string): string {
  return `${BASE_URL}${path}`;
}
