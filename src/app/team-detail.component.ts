import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { TeamService } from './team.service';
import { Team } from './team';

@Component({
  selector: 'team-detail',
  templateUrl: './team-detail-component.html',
  styleUrls: ['./team-detail.component.css'],
})

export class TeamDetailComponent implements OnInit {
  @Input() team: Team;

  constructor(
    private teamService: TeamService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.switchMap((params: Params) => this.teamService.getTeam(+params['id'])).subscribe(team => this.team = team);
  }

  goBack(): void {
    this.location.back();
  }

}
