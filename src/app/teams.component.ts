import { Component } from '@angular/core';
import { TeamService} from './team.service'
import { OnInit } from '@angular/core';

import { Team } from './team';
import {Router} from "@angular/router";

@Component({
  selector: 'my-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
  providers: [TeamService]
})

export class TeamComponent implements OnInit {
  title = 'NFL Teams';
  selectedTeam: Team;
  teams: Team[];

  onSelect(team: Team): void {
    this.selectedTeam = team;
  }

  getTeams(): void {
    this.teamService.getTeams().then(teams => this.teams = teams);
  }

  constructor(private router: Router,
              private teamService: TeamService) { }

  ngOnInit(): void {
    this.getTeams();
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedTeam.id]);
  }

}
