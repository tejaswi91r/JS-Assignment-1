class RestaurantManager {
    constructor(){
        // Array to hold restaurant objects
       this.restaurantList = [];
    }

    addRestaurant(name,address,city){
        // Push method inserts the data into an array
        this.restaurantList.push({name,address,city})
    }

    printAllRestaurantNames(){
       this.restaurantList.forEach(restaurantObject => {console.log("Printing",restaurantObject.name)})
    }

    filterRestaurantByCity(city){
      return  this.restaurantList.filter(restaurant => restaurant.city === city)
    }
}

const manager1 = new RestaurantManager();
const manager2 = new RestaurantManager();


manager1.addRestaurant('Qla','4-A Seven Style Mile','Delhi');
manager1.addRestaurant('Punjabi Tadka','Shop No-7','Delhi');
manager1.addRestaurant('The GT Road','M-39','Delhi');
manager1.addRestaurant('Spice Terrace','24,JW Marriott Bengaluru','Bengaluru');
manager1.addRestaurant('Empire Restaurant','#2820/1','Mysuru');

manager2.addRestaurant('Cafe Mocha', '123 Brew Lane', 'New York');
manager2.addRestaurant('Pizza Place', '456 Cheese Street', 'Chicago');

console.log('RestaurantList:',manager.restaurantList)
console.log('No of Restaurants:',manager.restaurantList.length)
// print all restaurants names
manager.printAllRestaurantNames();
// find restaurants in Delhi
const restaurantsInDelhi = manager.filterRestaurantByCity('Delhi');
console.log("Delhi based restaurants",restaurantsInDelhi);

const restaurantsInBangalore= manager.filterRestaurantByCity('Bangalore');
console.log("Bangalore based restuarants",restaurantsInBangalore);