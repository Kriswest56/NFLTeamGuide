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
var DashboardComponent = (function () {
    function DashboardComponent(teamService) {
        this.teamService = teamService;
        this.teams1 = [];
        this.teams2 = [];
        this.teams3 = [];
        this.teams4 = [];
    }
    ;
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.teamService.getTeams().then(function (teams) { return _this.teams1 = teams.slice(0, 4); });
        this.teamService.getTeams().then(function (teams) { return _this.teams2 = teams.slice(4, 8); });
        this.teamService.getTeams().then(function (teams) { return _this.teams3 = teams.slice(8, 12); });
        this.teamService.getTeams().then(function (teams) { return _this.teams4 = teams.slice(12, 16); });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    core_1.Component({
        selector: 'my-dashboard',
        templateUrl: './dashboard.component.html',
        styleUrls: ['./dashboard.component.css']
    }),
    __metadata("design:paramtypes", [team_service_1.TeamService])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map