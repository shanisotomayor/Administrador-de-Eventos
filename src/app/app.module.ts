import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { App } from './app';
import { routes } from './app.routes';
import { appConfig } from './app.config';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    FormsModule,  
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppModule]
})
export class AppModule {}
