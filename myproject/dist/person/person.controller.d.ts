import { PersonService } from './person.service';
export declare class PersonController {
    private srv;
    constructor(srv: PersonService);
    getPersons(): import("../DTO/person.dto").PersonDTO[];
}
