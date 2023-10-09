const data = [
    {
        id: 1,
        type: 'car',
        brand: 'Audi',
        doors: 4,
        price: 4300000,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
    },
    {
        id: 2,
        type: 'car',
        brand: 'Mercedes-Benz',
        doors: 4,
        price: 2800000,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg'
    },
    {
        id: 3,
        type: 'bike',
        brand: 'Harley-Davidson',
        maxSpeed: 210,
        price: 1300000,
        image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg'
    },
    {
        id: 4,
        type: 'bike',
        brand: 'Harley-Davidson',
        maxSpeed: 220,
        price: 1400000,
        image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
    }
];

class Transport {
    constructor(type, price, brand, image) {
        this.type = type;
        this.price = price;
        this.brand = brand;
        this.image = image;
    }
    getInfo() {
        return this.type;
    }
    getBrand(){
        return this.brand;
    }
    getPrice() {
        return this.price;
    }
    getImage(){
        return this.image = this.image;
    }
};
class Car extends Transport{
    constructor(type, price, brand, image, doors){
        super(type, price, brand, image);
        this.doors = doors;
    }
    getDoorsCount(){
        return this.doors;
    }
};
class Bike extends Transport{
    constructor(type, price, brand, image, maxSpeed){
        super(type, price, brand, image);
        this.maxSpeed = maxSpeed;
    }
    getMaxSpeed(){
        return this.maxSpeed;
    }
    getImage(){
        return this.image = this.image;
    }
};


const cars = data.filter(item => item.type === 'car').map(({type, price, brand, image, doors}) => new Car(type, price, brand, image, doors));


const carsContainer = document.querySelector('.cars');

function createCarsContainer(car){

    let carList = document.createElement('li');
    carsContainer.append(carList);

    let carsType = document.createElement('h2');
    carsType.textContent = car.getBrand();
    carList.append(carsType);

    const carImage = document.createElement('img');
    carImage.setAttribute('src', car.getImage());
    carImage.classList.add('image')
    carList.append(carImage);

    let carsDoors = document.createElement('p');
    carsDoors.textContent = `Количество дверей: ${car.getDoorsCount()}`;
    carList.append(carsDoors);

    const carPrice = document.createElement('p');
    carPrice.textContent= `Цена: ${car.getPrice()} руб.`;
    carList.appendChild(carPrice);
}

cars.forEach((car)=> createCarsContainer(car));


const bikes = data.filter(item => item.type === 'bike').map(({type, price, brand, image, maxSpeed}) => new Bike(type, price, brand, image, maxSpeed));

const bikesContainer = document.querySelector('.moto');


function createBikesContainer(bike){
    let bikeList = document.createElement('li');
    bikesContainer.append(bikeList);

    let bikesType = document.createElement('h2');
    bikesType.textContent = bike.getBrand();
    bikeList.append(bikesType);

    const bikeImage = document.createElement('img');
    bikeImage.setAttribute('src', bike.getImage());
    bikeImage.classList.add('image')
    bikeList.append(bikeImage);

    let bikeSpeed = document.createElement('p');
    bikeSpeed.textContent = `Максимальная скорость: ${bike.getMaxSpeed()}`;
    bikeList.append(bikeSpeed);

    const bikePrice = document.createElement('p');
    bikePrice.textContent= `Цена: ${bike.getPrice()} руб.`;
    bikeList.appendChild(bikePrice);
}

bikes.forEach((bike)=> createBikesContainer(bike));
