import { Component, OnInit } from '@angular/core';
import {ShareService} from '../share.service';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {GameDetailsComponent} from '../game-details/game-details.component';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  data = [];

  constructor(private shareService: ShareService, private dialog: MatDialog) { }

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

}
