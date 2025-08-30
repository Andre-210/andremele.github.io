import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { TITLE } from './config/config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
const title = TITLE;
