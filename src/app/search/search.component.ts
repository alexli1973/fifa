import {Component, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material';
import {GameDetailsComponent} from '../game-details/game-details.component';
import {ShareService} from '../share.service';

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

  constructor(private dialog: MatDialog, private shareService: ShareService ) { }

  ngOnInit() {
  }

  // ngOnDestroy() {
  //   console.log();
  // }

  changeCriteria(field: string) {
    const namesMap = {
      select: 'Please Select',
      stadium: 'Find by Stadium',
      team: 'Find by Team',
    };
    this.searchPlaceholder = namesMap[field];
    this.searchField = field;
  }

  displayDetails(id) {
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

  public displayStadiumResults(id) {
    const stadiumName = this.data.find(stadium => stadium.id === id);
    const resultsByStadium = this.data.filter(elem => elem.stadium.toLowerCase() === stadiumName.stadium.toLowerCase());
    this.shareService.changeData(resultsByStadium);
  }

  public displayTeamResults(id, team) {
    const resultsByTeam =
      this.data.filter(elem =>
        // (elem.homeTeam.toLowerCase() === team.toLowerCase() ||
        // elem.awayTeam.toLowerCase() === team.toLowerCase())
      [elem.homeTeam, elem.awayTeam].includes(team)
      );
    this.shareService.changeData(resultsByTeam);
  }


}
