import { SpecialistService } from './../../../shared/services/specialist/specialist.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-specialists-details',
  templateUrl: './specialists-details.component.html',
  styleUrls: ['./specialists-details.component.scss']
})
export class SpecialistsDetailsComponent implements OnInit {
  item: any;

  constructor( private activedRoute: ActivatedRoute, private specialistsService: SpecialistService) { }

  ngOnInit(): void {
    this.item = this.specialistsService.getEvent(
      +this.activedRoute.snapshot.params.pk
    );
  }

}
