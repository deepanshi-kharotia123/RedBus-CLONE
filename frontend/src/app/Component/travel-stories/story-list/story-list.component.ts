import { Component, OnInit } from '@angular/core';
import { StoryService } from '../../../service/story.service';
@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrl: './story-list.component.css'
})
export class StoryListComponent implements OnInit {
stories:any[]=[];
constructor(private storyService: StoryService){}
ngOnInit(){
  this.storyService.getStories().subscribe(
    (data: any[]) => {
      this.stories = data;
    },
    error => {
      console.error('Error fetching stories', error);
    }
  );
}
}
// : void {
//   this.loadStories();}
//   loadStories():void{
//   this.storyService.getStories().subscribe(data =>{
//     this.stories=data;
//   });
// }
// }
