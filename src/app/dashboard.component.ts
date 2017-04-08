import { Component, OnInit } from '@angular/core';

import { Team } from './team';
import { TeamService } from './team.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit{

  teams1: Team[] = [];
  teams2: Team[] = [];
  teams3: Team[] = [];
  teams4: Team[] = [];

  constructor(private teamService: TeamService){};

  ngOnInit(): void {
    this.teamService.getTeams().then(teams => this.teams1 = teams.slice(0, 4));
    this.teamService.getTeams().then(teams => this.teams2 = teams.slice(4, 8));
    this.teamService.getTeams().then(teams => this.teams3 = teams.slice(8, 12));
    this.teamService.getTeams().then(teams => this.teams4 = teams.slice(12, 16));
  }

}
