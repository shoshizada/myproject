import { PersonService } from './person.service';
import { Controller, Get } from '@nestjs/common';

@Controller('person')
export class PersonController {
    
    constructor(private srv: PersonService){}
    @Get()
    getPersons() 
    {
      return this.srv.getAllPersons();
    }

}
