import { SpecialistService } from './../../shared/services/specialist/specialist.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-specialists',
  templateUrl: './specialists.component.html',
  styleUrls: ['./specialists.component.scss']
})
export class SpecialistsComponent implements OnInit {
  users: any;
  constructor(private specialistsService: SpecialistService) { }

  ngOnInit(): void {
    this.users = this.specialistsService.getUsers();
  }

}
