import AppServer from './AppServer';
import config from './config/config.dev';

const appServer = new AppServer();

appServer.start(config.SERVER_PORT);
