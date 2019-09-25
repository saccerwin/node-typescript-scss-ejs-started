import * as dotenv from 'dotenv';

// Config read file from env
if (process.env && process.env.NODE_ENV) {
  dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
} else {
  dotenv.config({ path: '.env' });
}

let config: { [key: string]: any } = {};

// Config for server
config.SERVER_PORT = process.env.SERVER_PORT || 8080;
config.ROOT_API = '/api/v1';

export default config;
