import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableComponent } from './components/exo2/table/table.component';
import { RowsComponent } from './components/exo2/rows/rows.component';
import { CounterComponent } from './components/exo3/counter/counter.component';
import { ButtonComponent } from './components/exo3/button/button.component';
import { CardComponent } from './components/exo4/card/card.component';
import { MainComponent } from './components/exo5/main/main.component';
import { DetailsComponent } from './components/exo5/details/details.component';
import { ItemsComponent } from './components/exo5/items/items.component';
import { TablesComponent } from './components/exo6/table/table.component';
import { RowComponent } from './components/exo6/row/row.component';
import { GridComponent } from './components/exo7/grid/grid.component';
import { ColComponent } from './components/exo7/col/col.component';
import { CardsComponent } from './components/exo7/cards/cards.component';
import { RowwComponent } from './components/exo7/row/row.component';



@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    RowsComponent,
    CounterComponent,
    ButtonComponent,
    CardComponent,
    MainComponent,
    DetailsComponent,
    ItemsComponent,
    RowComponent,
    TablesComponent,
    GridComponent,
    ColComponent,
    CardsComponent,
    RowwComponent
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
