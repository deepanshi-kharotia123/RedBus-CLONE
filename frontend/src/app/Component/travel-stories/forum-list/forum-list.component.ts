import { Component, OnInit } from '@angular/core';
import { ForumService } from '../../../service/forum.service';
@Component({
  selector: 'app-forum-list',
  templateUrl: './forum-list.component.html',
  styleUrl: './forum-list.component.css'
})
export class ForumListComponent  implements OnInit {
  forums: any[] = [];

  constructor(private forumService: ForumService) {}

  ngOnInit(): void {
    this.loadForums();
  }

  loadForums(): void {
    this.forumService.getForums().subscribe((data: any[]) => {
      this.forums = data;
    },
    error => {
      console.error('Error fetching forums', error);
    });
  }
}
