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
var team_1 = require("./team");
var TeamDetailComponent = (function () {
    function TeamDetailComponent() {
    }
    return TeamDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", team_1.Team)
], TeamDetailComponent.prototype, "team", void 0);
TeamDetailComponent = __decorate([
    core_1.Component({
        selector: 'team-detail',
        template: "\n    <div *ngIf=\"team\">\n      <h2>{{team.name}} details!</h2>\n      <div>\n        <label>id: </label>{{team.id}}\n      </div>\n      <div>\n        <label>name: </label>\n        <input [(ngModel)]=\"team.name\" placeholder=\"name\"/>\n      </div>\n    </div>\n  "
    })
], TeamDetailComponent);
exports.TeamDetailComponent = TeamDetailComponent;
//# sourceMappingURL=hero-detail.component.js.map