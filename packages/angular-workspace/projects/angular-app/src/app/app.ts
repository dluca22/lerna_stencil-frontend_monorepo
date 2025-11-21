import { Component, OnInit, signal } from '@angular/core';
import { DataService } from '../services/data.service';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})

export class App implements OnInit {
  public appTitle: string = '';

  constructor(
    public configService: ConfigService,
    private dataService: DataService
  ){}
  catchEvent(){
    alert('heeeyy')
  }
  
  ngOnInit(): void {
    this.appTitle = this.configService.title();
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
