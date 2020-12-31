import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './entities/cat.entity';
@Injectable()
export class CatsService {
   result: Cat[] = [{
      id:1,
      age: 2,
      breed: 'Maine Coon',
      name: 'A',
    },{
      id:2,
      age: 5,
      breed: 'British shorthair',
      name: 'B',
    }];
  create(cat: CreateCatDto): Cat {
   this.result.push(cat);
   return cat;
  }
  findOne(id: number): Cat {return this.result[id];}
  findAll(): Cat[] {
    console.log("Hi Yim");
    console.log("Hi Beer");
    return this.result;
  }
}