const car = {
    id: NaN,
    name: undefined,
    brand: undefined,
    weight: undefined,
    fuel: undefined,
    decors: {
        color: undefined,
        inside_color: undefined
    },
    control:{
        speed: 0,
        back: function (){
            this.speed = this.speed - 1;
        },
        gas: function (){
            this.speed = this.speed + 1;
        }
    }
};


console.log(car.control.speed);
car.control.back();
console.log(car.control.speed);