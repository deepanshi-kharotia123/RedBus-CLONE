import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TipService } from '../../../service/tip.service';

@Component({
  selector: 'app-tip-form',
  templateUrl: './tip-form.component.html',
  styleUrl: './tip-form.component.css'
})
export class TipFormComponent {
  tip = {
    title: '',
    content: '',
    author: ''
  };

  constructor(private tipService: TipService, private router: Router) {}

  createTip(): void {
    this.tipService.createTip(this.tip).subscribe(() => {
      this.router.navigate(['/tips']);
    });
  }
}
