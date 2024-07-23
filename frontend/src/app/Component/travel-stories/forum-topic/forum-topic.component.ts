import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ForumService } from '../../../service/forum.service';
@Component({
  selector: 'app-forum-topic',
  templateUrl: './forum-topic.component.html',
  styleUrl: './forum-topic.component.css'
})
export class ForumTopicComponent implements OnInit {
  forum: any;
  forumId: string='';

  constructor(private forumService: ForumService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.forumId = id;
      this.loadForum();
    } else {
      console.error('Forum ID is null');
    }
  }

  loadForum(): void {
    this.forumService.getForum(this.forumId).subscribe((data: any) => {
      this.forum = data;
    });
  }

  onPostCreated(post: any): void {
    this.forum.posts.push(post);
  }

}
