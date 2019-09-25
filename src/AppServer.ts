import * as path from 'path';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import { Server } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import * as express from 'express';

export default class AppServer extends Server {
  constructor() {
    super(true);
    // Add config for app
    this.app.set('views', path.join(__dirname, '../views'));
    this.app.set('view engine', 'ejs');
    this.app.use(express.static(`${__dirname}/public`));
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }

  public start(port: number): void {
    // Router for index page
    this.app.get('/', (req: express.Request, res: express.Response) => {
      const title: string = 'api invoice';
      res.render('pages/invoice', { title });
    });

    this.app.listen(port, () => {
      Logger.Imp(`Server started on port: ${port}`);
      Logger.Imp(`Open browser: http://localhost:${port}`);
    });
  }
}
