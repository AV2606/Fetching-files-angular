import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testApp';

  constructor(private httpClient:HttpClient){
    this.httpClient.get('assets/File.txt', {responseType: 'text'})
        .subscribe(data => {
          let f=document.getElementById('f');
          if(f != null)
          f.innerText=data;
          console.log(f);
        });

  }
}
