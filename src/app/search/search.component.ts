import {Component, Input, OnInit, Output} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material';
import {GameDetailsComponent} from '../game-details/game-details.component';
// import * as _ from "lodash";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchValue = '';
  searchPlaceholder = 'Please Select';
  searchField = '';

  @Input() data;

 // displayedColumns: string[] = ['id', 'stadium', 'button'];
  // dataSource = this.data;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  //  console.log('DATA Child', this.data);
  }

  changeCriteria(field: string) {
    const namesMap = {
      select: 'Please Select',
      stadium: 'Find by Stadium',
      team: 'Find by Team',
    };
   // debugger;
    this.searchPlaceholder = namesMap[field];
    this.searchField = field;
    console.log('FIELD', field);
  }

  displayDetails(id) {
    console.log('ID', id);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;
    const game = this.getGameDetails(id);

    dialogConfig.data = {
      title: 'Game Details',
      width: '400px',
      game
    };
    const dialogRef = this.dialog.open(GameDetailsComponent, dialogConfig);
  }

  getGameDetails(id) {
    return this.data.find(game => game.id === id);
  }


}
