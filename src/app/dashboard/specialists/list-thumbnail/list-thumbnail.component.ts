import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-thumbnail',
  templateUrl: './list-thumbnail.component.html',
  styleUrls: ['./list-thumbnail.component.scss']
})
export class ListThumbnailComponent implements OnInit {
  @Input() item: any;
  constructor() { }

  ngOnInit(): void {
  }

}
