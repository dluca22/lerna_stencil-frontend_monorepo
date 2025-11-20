import { Component, OnInit, signal } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})

export class App implements OnInit {
  constructor(
    private dataService: DataService
  ){}
  protected readonly title = signal('angular-app');
  catchEvent(){
    alert('heeeyy')
  }

  ngOnInit(): void {
    this.dataService.getCapsules().subscribe({
      next: data => {
        console.log( data );
        
      },
      error: err => {
        console.log( err );
        

      },
      complete: () => {
        
      }
    })
  }
}
