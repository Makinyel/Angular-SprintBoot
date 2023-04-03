import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPersonaComponent } from './lista-persona/lista-persona.component';
import { from } from 'rxjs';
import {HttpClientModule} from '@Angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListaPersonaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
