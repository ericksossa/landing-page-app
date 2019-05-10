import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'landingpageApp';

  constructor(private spinner: NgxSpinnerService) {
  }


  ngOnInit() {
    
    setTimeout(() => { this.spinner.show() }, 25);
    setTimeout(() => { this.spinner.hide() }, 2000);
  }

  showSpinner() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
  }
}



