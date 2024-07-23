import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ForumService } from '../../../service/forum.service';
@Component({
  selector: 'app-forum-post-form',
  templateUrl: './forum-post-form.component.html',
  styleUrl: './forum-post-form.component.css'
})
export class ForumPostFormComponent {
  @Input() forumId!: string;
  @Output() postCreated = new EventEmitter<any>();

  post = {
    content: '',
    author: ''
  };

  constructor(private forumService: ForumService) {}

  addPost(): void {
    this.forumService.addPost(this.forumId, this.post).subscribe((data: any) => {
      this.postCreated.emit(data);
      this.post.content = '';
      this.post.author = '';
    });
  }
}
