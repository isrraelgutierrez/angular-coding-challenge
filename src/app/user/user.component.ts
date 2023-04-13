import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: 'user.component.html',
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
      this._userService.findOneById(this.id).subscribe(
        (data) => {
          this.userData = data;
          console.log(this.userData);
        },
        (error) => {
          this._router.navigate(['/'])
        }
      );
    });
  }
}
