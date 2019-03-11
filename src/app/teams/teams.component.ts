import { Component, OnInit } from '@angular/core';
import {ShareService} from '../share.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  data = [];

  constructor(private shareService: ShareService) { }

  ngOnInit() {
    this.shareService.currentData.subscribe(data => this.data = data);

  }

}
