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
import { EditarPersonaComponent } from './pages/crud/containers/forms/editar-persona/editar-persona.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListaPersonaComponent,
    RegistrarPersonaComponent,
    DialogComponent,
    EditarPersonaComponent,
    FilterPipe,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
