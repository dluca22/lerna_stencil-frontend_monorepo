import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-rockets',
  standalone: false,
  templateUrl: './rockets.html',
  styleUrl: './rockets.css',
})
export class Rockets implements OnInit {

  public rockets: any[] = [];
  public loading: boolean = true;
  constructor(
    private dataService: DataService
  ){}

  ngOnInit(): void {
    this.dataService.getRockets().subscribe({
      next: (data) => {
        if(data){
          this.rockets = data;
          this.loading = false;
        }
      },
      error: (err) => {
        alert(err);
        this.rockets = ['error :(']
        
    },
       // complete: ()=> {},
    })
  }
}

