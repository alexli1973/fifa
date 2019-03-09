import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {PapaParseModule} from 'ngx-papaparse';
import { FilterPipe } from './pipes/filter.pipe';
import { SearchComponent } from './search/search.component';
import { DropdownDirective } from './directives/dropdown.directive';
import {FormsModule} from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
  MatButtonModule, MatCardModule,
  MatDatepickerModule,
  MatDialogModule, MatFormFieldModule, MatIconModule,
  MatInputModule, MatMenuModule,
  MatNativeDateModule,
  MatProgressBarModule, MatTableModule, MatToolbarModule
} from '@angular/material';
import { GameDetailsComponent } from './game-details/game-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    SearchComponent,
    DropdownDirective,
    GameDetailsComponent
  ],
  imports: [
    BrowserModule,
    PapaParseModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    BrowserAnimationsModule
  ],
  entryComponents: [GameDetailsComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
