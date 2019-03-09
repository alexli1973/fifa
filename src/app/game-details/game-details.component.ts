import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {

  game = {};

  constructor(private dialogRef: MatDialogRef<GameDetailsComponent>,
              @Inject(MAT_DIALOG_DATA) data) {
    this.game = data.game;
    console.log('DATA from Game Det Comp', this.game); }

  ngOnInit() {

  }

  close() {
    this.dialogRef.close(console.log('closed'));
  }

}
