import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    let tasks = [{id:1,typos:'Active', desc:'Ucit sa AngularJS 2'},{id:2,typos:'Completed', desc:'Napapat sa :)'}];
    return {tasks};
  }
}
