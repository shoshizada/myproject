import { PersonDTO } from '../DTO/person.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PersonService {
 
    persons:PersonDTO[]=[];

    constructor(){
        
        let perq1:PersonDTO=new PersonDTO();
        perq1.id=1;
        perq1.name='Shoshi'
        perq1.age=20;

        let perq2:PersonDTO=new PersonDTO();
        perq2.id=2;
        perq2.name='Nechami'
        perq2.age=20;

        let perq3:PersonDTO=new PersonDTO();
        perq3.id=3;
        perq3.name='Shira'
        perq3.age=20;


        this.persons.push(perq1);
        this.persons.push(perq2);
        this.persons.push(perq3);

    }
    
    getAllPersons(): PersonDTO[]
    {
        return this.persons
    }
    
}
