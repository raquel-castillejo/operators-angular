import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// importamos elementos necesarios para el ejercicio: formularios, input, botón y checkbox
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

// añadidos míos:
// divisor
import {MatDividerModule} from '@angular/material/divider';
// tarjeta
import {MatCardModule} from '@angular/material/card'; 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    // importamos elementos necesarios para el ejercicio: formularios, input, botón y checkbox
		FormsModule,
		MatButtonModule,
		MatInputModule,
		MatCheckboxModule,
    MatDividerModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
