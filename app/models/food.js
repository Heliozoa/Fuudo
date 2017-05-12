class Food {
    constructor(name, restaurant, image) {
        this.name = name;
        this.restaurant = restaurant;
        this.image = image;
    }
    
    toString() {
        return this.name;
    }
}

module.exports = Food;