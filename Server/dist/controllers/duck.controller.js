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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DuckController = void 0;
const common_1 = require("@nestjs/common");
const data_response_interface_1 = require("../interfaces/data.response.interface");
const data_service_1 = require("../services/data.service");
let DuckController = class DuckController {
    constructor(dataService) {
        this.dataService = dataService;
    }
    async getData(q) {
        const test = await this.dataService.queryData({ q });
        return test;
    }
};
__decorate([
    common_1.Get('/data'),
    __param(0, common_1.Param('queryParam')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DuckController.prototype, "getData", null);
DuckController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [data_service_1.DataService])
], DuckController);
exports.DuckController = DuckController;
//# sourceMappingURL=duck.controller.js.map