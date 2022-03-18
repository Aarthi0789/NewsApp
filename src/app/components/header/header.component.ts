import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MostViwedService } from 'src/app/services/most-viwed.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router, private mostViwedService: MostViwedService) { }

  ngOnInit(): void {
    this.mostViwedService.getShareData().subscribe(data=>{
      console.log(data)
    })
  }
  navTologin(){
    this.router.navigate(['/login'])
  }

}
