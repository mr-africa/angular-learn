import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { EventsService } from '../events.service';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {
    newsAddForm: FormGroup;

    constructor(
        private route: ActivatedRoute,
        private eventService: EventsService,
        private location: Location,
        private router: Router
    ) { }

    ngOnInit() {
        this.newsAddForm = new FormGroup({
            title: new FormControl(null, [
                Validators.required,
            ]),
            description: new FormControl(null, [
                Validators.required,
            ]),
        });
    }

    onSubmit() {
        let news = Object.assign({}, this.newsAddForm.value);
        this.eventService.addNews(news);
        this.router.navigate(['']);
    }

}
