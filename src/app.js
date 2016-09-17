import { Car } from './classes/car.js';
import { Drone } from './classes/drone.js';
import { fleet } from './fleet-data.js';
import { FleetDataService } from './services/fleet-data-service.js';



let dataService = new FleetDataService();
dataService.loadData(fleet);

// let cars = dataService.fileterCarsByMake('e');
//let car = dataService.getCarByLicense('AT9900')
// let cars = dataService.getCarsSortedByLicense();
