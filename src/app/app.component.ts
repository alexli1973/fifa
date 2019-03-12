import {Component} from '@angular/core';
import {Papa} from 'ngx-papaparse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fifa';
  isReadComplete = false;
  isUploadFileVisible = true;
  data = [];

  constructor(private papa: Papa) {
  }

  parse(files: FileList): void {
    const file: File = files.item(0);
    const reader: FileReader = new FileReader();
    reader.readAsText(file);
    reader.onload = e => {
      const csvFile = reader.result;
      // @ts-ignore
      const parsed = this.papa.parse(csvFile,
        { header: true,
                skipEmptyLines: true,
                complete: (results: any) => {
                  this.isReadComplete = true;
                  this.isUploadFileVisible = false;
                }
        }
      );
      this.data = parsed.data.map((data, index) => {
        return {id: index,
                roundNumber: data['Round Number'],
                date: data['Date'],
                stadium: data['Stadium'],
                homeTeam: data['Home Team'],
                awayTeam: data['Away Team'],
                group: data['Group'],
                result: data['Result'],
                };
      });
    };
  }
}
