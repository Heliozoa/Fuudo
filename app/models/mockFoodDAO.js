var Food = require('../models/food');

class MockFoodDAO {
    static getAny() {
        switch(Math.floor(Math.random() * 3)) {
            case 0:
                return new Food("Puosun Burger", "Puosun Grilli", "puosunburger.jpg");
            case 1:
                return new Food("Kebab ranskalaisilla", "Puosun Grilli", "kabob.jpg");
            case 2:
                return new Food("Pitaleipäkebab", "Puosun Grilli", "pitakabob.jpg");
        }
    }
}
    
module.exports = MockFoodDAO;