import { Component } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
   video: Observable<any>[] = [];
  constructor(private http: HttpClient) {
    this.videoList().subscribe((res) =>{this.video = res.items;console.log(this.video);});

  }
  videoList():Observable<any> {
  return this.http.get("https://www.googleapis.com/youtube/v3/playlistItems?key=%20AIzaSyBlMlVXMC0pbdTFRHbkFGvkOfOgGaymtQs&playlistId=UUp1R0TBvgM7gj0rwTYULmSA&part=snippet,id&maxResults=20");
}
openVideo(v){
  window.open('https://www.youtube.com/watch?v='+v.snippet.resourceId.videoId);
}
}


