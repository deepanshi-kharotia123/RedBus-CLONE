import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-travel-stories',
  templateUrl: './travel-stories.component.html',
  styleUrls: ['./travel-stories.component.css'],
})
export class TravelStoriesComponent implements OnInit {
  //   stories: any[] = [];
  //   story = {
  //     title: '',
  //     content: '',
  //     imageUrl: ''
  //   };

  //   constructor(private dataService: DataService) { }

  //   ngOnInit(): void {
  //     this.loadStories();
  //   }

  //   loadStories(): void {
  //     this.dataService.getTravelStories().subscribe(data => {
  //       this.stories = data;
  //     });
  //   }

  //   submitStory(): void {
  //     this.dataService.addTravelStory(this.story).subscribe(() => {
  //       this.loadStories();
  //       this.story = { title: '', content: '', imageUrl: '' };
  //     });
  //   }
  // }

  storyForm: FormGroup;
  stories: any[] = [];

  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.storyForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      image: [null],
    });
  }

  ngOnInit(): void {
    this.loadStories();
  }

  loadStories(): void {
    this.dataService.getTravelStories().subscribe((data) => {
      this.stories = data;
    });
  }

  onFileChange(event: any): void {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.storyForm.patchValue({
        image: file,
      });
    }
  }

  submitStory(): void {
    const formData = new FormData();
    formData.append('title', this.storyForm.get('title')?.value);
    formData.append('content', this.storyForm.get('content')?.value);
    if (this.storyForm.get('image')?.value) {
      formData.append('image', this.storyForm.get('image')?.value);
    }

    this.dataService.addTravelStory(formData).subscribe((newStory) => {
      this.loadStories();
      this.stories.unshift(newStory);
      this.storyForm.reset();
    });
  }
}
