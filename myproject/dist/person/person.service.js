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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonService = void 0;
const person_dto_1 = require("../DTO/person.dto");
const common_1 = require("@nestjs/common");
let PersonService = class PersonService {
    constructor() {
        this.persons = [];
        let perq1 = new person_dto_1.PersonDTO();
        perq1.id = 1;
        perq1.name = 'Shoshi';
        perq1.age = 20;
        let perq2 = new person_dto_1.PersonDTO();
        perq2.id = 2;
        perq2.name = 'Nechami';
        perq2.age = 20;
        let perq3 = new person_dto_1.PersonDTO();
        perq3.id = 3;
        perq3.name = 'Shira';
        perq3.age = 20;
        this.persons.push(perq1);
        this.persons.push(perq2);
        this.persons.push(perq3);
    }
    getAllPersons() {
        return this.persons;
    }
};
PersonService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], PersonService);
exports.PersonService = PersonService;
//# sourceMappingURL=person.service.js.map