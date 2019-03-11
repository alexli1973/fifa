import {Component, Input, OnInit} from '@angular/core';
import {ShareService} from '../share.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {GameDetailsComponent} from '../game-details/game-details.component';

@Component({
  selector: 'app-stadiums',
  templateUrl: './stadiums.component.html',
  styleUrls: ['./stadiums.component.css']
})
export class StadiumsComponent implements OnInit {
  private id: number;
  private subscription: Subscription;
  data = [];
  stadiums;

  constructor(private shareService: ShareService, private activateRoute: ActivatedRoute, private dialog: MatDialog) {
    this.subscription = activateRoute.params.subscribe(params => this.id = params['id']);
  }

  ngOnInit() {
    this.shareService.currentData.subscribe(data => this.data = data);
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

  // displayStadiumResults(id) {
  //  // id = this.id;
  //   const stadiumName = this.data.find(stadium => stadium.id === id);
  //   const resultsByStadium = this.data.filter(elem => elem.stadium.toLowerCase() === stadiumName.stadium.toLowerCase());
  //   //   console.log('stadiumName', stadiumName.stadium.toLowerCase());
  //   console.log('resultsByStadium', resultsByStadium);
  //   //  return this.data = resultsByStadium;
  // }

}
