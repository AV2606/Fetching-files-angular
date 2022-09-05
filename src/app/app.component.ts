import { Component, OnInit, ViewChild } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'testApp';

  constructor(private httpClient:HttpClient){
   
  }
  ngOnInit(): void {
    let d=document.getElementById('f');
    this.readTextFile('assets/File.txt').then((value)=>{
      console.log(value);
      console.log(d);
      if(d!=null)
      d.innerText=value as any});
  }

  async readTextFile(file:any):Promise<string | undefined> {
    let r;
    await fetch(file)
        .then(async response => {
            //console.log(response);
            if (response.status === 200)
                r = await response.text();
        });
    return r;
}
async GetNormalizedFiles(folder:any) {
    let counter = 1;
    let arr:any[] = [];
    while (true) {
        let f = await this.readTextFile(folder + `${counter}/text.txt`);
        //console.log(f);
        if (f != undefined && f != null)
            arr.push(f);
        else
            break;
        counter++
    }
    return arr;
}
}
