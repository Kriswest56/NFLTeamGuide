"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var mock_teams_1 = require("./mock-teams");
var TeamService = (function () {
    function TeamService() {
    }
    TeamService.prototype.getTeams = function () {
        return Promise.resolve(mock_teams_1.TEAMS);
    };
    TeamService.prototype.getTeam = function (id) {
        return this.getTeams().then(function (teams) { return teams.find(function (team) { return team.id === id; }); });
    };
    return TeamService;
}());
TeamService = __decorate([
    core_1.Injectable()
], TeamService);
exports.TeamService = TeamService;
//# sourceMappingURL=team.service.js.map