import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { trigger, style, animate, transition } from '@angular/animations';
import * as marked from 'marked';
import { switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: 'user.component.html',
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(1000, style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate(1000, style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class UserComponent implements OnInit {
  id: any;
  userData: any;
  constructor(
    private route: ActivatedRoute,
    private _userService: UserService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
      this._userService.findOneById(this.id).pipe(
        switchMap(data => {
          const _marked: any = marked;
          this.userData = data;
          this.userData.bio = _marked.parse(data.bio);
          return of(null);
        }),
        catchError(error => {
          this._router.navigate(['/']);
          return of(null);
        })
      ).subscribe();
    });
  }
}
