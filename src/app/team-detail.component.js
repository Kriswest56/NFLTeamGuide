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
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
require("rxjs/add/operator/switchMap");
var team_service_1 = require("./team.service");
var team_1 = require("./team");
var TeamDetailComponent = (function () {
    function TeamDetailComponent(teamService, route, location) {
        this.teamService = teamService;
        this.route = route;
        this.location = location;
    }
    TeamDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.switchMap(function (params) { return _this.teamService.getTeam(+params['id']); }).subscribe(function (team) { return _this.team = team; });
    };
    TeamDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    return TeamDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", team_1.Team)
], TeamDetailComponent.prototype, "team", void 0);
TeamDetailComponent = __decorate([
    core_1.Component({
        selector: 'team-detail',
        templateUrl: './team-detail-component.html',
        styleUrls: ['./team-detail.component.css'],
    }),
    __metadata("design:paramtypes", [team_service_1.TeamService,
        router_1.ActivatedRoute,
        common_1.Location])
], TeamDetailComponent);
exports.TeamDetailComponent = TeamDetailComponent;
//# sourceMappingURL=team-detail.component.js.map