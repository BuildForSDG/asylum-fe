import { Component, OnInit } from '@angular/core';
import { DisordersService } from 'src/app/shared/services/disorders/disorders.service';
import { IDisorder } from 'src/app/shared/models/disorder.models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-disorders',
  templateUrl: './disorders.component.html',
  styleUrls: ['./disorders.component.scss']
})
export class DisordersComponent implements OnInit {

  disorderList$: Observable<IDisorder[]>;

  constructor(private disorders: DisordersService) { }

  ngOnInit(): void {
    this.disorderList$ = this.disorders.getAll();
  }

}
