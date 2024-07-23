import { Component, OnInit } from '@angular/core';
import { TipService } from '../../../service/tip.service';
@Component({
  selector: 'app-tip-list',
  templateUrl: './tip-list.component.html',
  styleUrl: './tip-list.component.css'
})
export class TipListComponent implements OnInit {
  tips: any[] = [];

  constructor(private tipService: TipService) {}

  ngOnInit(): void {
    this.loadTips();
  }

  loadTips(): void {
    this.tipService.getTips().subscribe((data: any[]) => {
      this.tips = data;
    },
    error => {
      console.error('Error fetching tips', error);
    }
  );
  }
}
