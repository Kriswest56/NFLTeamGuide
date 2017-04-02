"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var team_service_1 = require("./team.service");
var router_1 = require("@angular/router");
var TeamComponent = (function () {
    function TeamComponent(router, teamService) {
        this.router = router;
        this.teamService = teamService;
        this.title = 'NFL Teams';
    }
    TeamComponent.prototype.onSelect = function (team) {
        this.selectedTeam = team;
    };
    TeamComponent.prototype.getTeams = function () {
        var _this = this;
        this.teamService.getTeams().then(function (teams) { return _this.teams = teams; });
    };
    TeamComponent.prototype.ngOnInit = function () {
        this.getTeams();
    };
    TeamComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedTeam.id]);
    };
    return TeamComponent;
}());
TeamComponent = __decorate([
    core_1.Component({
        selector: 'my-teams',
        templateUrl: './teams.component.html',
        styleUrls: ['./teams.component.css'],
        providers: [team_service_1.TeamService]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        team_service_1.TeamService])
], TeamComponent);
exports.TeamComponent = TeamComponent;
//# sourceMappingURL=teams.component.js.map