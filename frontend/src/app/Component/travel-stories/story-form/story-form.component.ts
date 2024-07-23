import { Component } from '@angular/core';
import { StoryService } from '../../../service/story.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-story-form',
  templateUrl: './story-form.component.html',
  styleUrl: './story-form.component.css'
})
export class StoryFormComponent {
  story = {
    title: '',
    content: '',
    author: ''
  };

  constructor(private storyService: StoryService,private router: Router) { }

  createStory(): void {
    this.storyService.createStory(this.story).subscribe(() => {
      this.router.navigate(['/stories']);
    });
  }
}
