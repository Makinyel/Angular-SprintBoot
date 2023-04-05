import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPersonaComponent } from './pages/crud/containers/list/lista-persona.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrarPersonaComponent } from './pages/crud/containers/forms/registrar-persona/registrar-persona.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './shared/dialog/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPersonaComponent,
    RegistrarPersonaComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
