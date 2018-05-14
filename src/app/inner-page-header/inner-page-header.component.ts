import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inner-page-header',
  templateUrl: './inner-page-header.component.html',
  styleUrls: ['./inner-page-header.component.css', '../../styles/header.css']
})
export class InnerPageHeaderComponent implements OnInit {
    @Input() header: string;

    constructor() { }

    ngOnInit() {
    }

}
