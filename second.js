class Car {
  #brand;
  #model;
  #yearOfManufacturing;
  #maxSpeed;
  #maxFuelVolume;
  #fuelConsumption;
  
  constructor(brand, model, yearOfManufacturing, maxSpeed, maxFuelVolume, fuelConsumption) {
    if(!(
      typeof brand === "string" && brand.length >= 1 && brand.length <= 50 &&
      typeof model === "string" && model.length >= 1 && model.length <= 50 &&
      typeof yearOfManufacturing === 'number' && yearOfManufacturing >= 1900 && yearOfManufacturing <= 2021 &&
      typeof maxSpeed === 'number' && maxSpeed >= 100 && maxSpeed <= 300 &&
      typeof maxFuelVolume === 'number' && maxFuelVolume >= 10 && maxFuelVolume <= 50 &&
      typeof fuelConsumption === 'number'
      )) {
      throw new Error("Введите корректные значения");
    }
      this.#brand = brand;
      this.#model = model;
      this.#yearOfManufacturing = yearOfManufacturing;
      this.#maxSpeed = maxSpeed;
      this.#maxFuelVolume = maxFuelVolume;
      this.#fuelConsumption = fuelConsumption; 
  }
  
  #currentFuelVolume = 0;
  #isStarted = false;
  #mileage = 0;
  
  get brand() {
    return this.#brand;
  }

  set brand(value) {
    if (typeof value === 'string' && value.length >= 1 && value.length <= 50) {
      return this.#brand = value
    } else {
      return;
    }
  }
  
  get model() {
    return this.#model;
  }

  set model(value) {
    if (typeof value === 'string' && value.length >= 1 && value.length <= 50) {
       this.#model = value;
    } else {
      return;
    }
  }

  get yearOfManufacturing() {
    return this.#yearOfManufacturing;
  }

  set yearOfManufacturing(value) {
    if (typeof value === 'number' && (value >= 1900 && value <= 2021)) {
      this.#yearOfManufacturing = value;
    } else {
      return;
    }
  }
  
  get maxSpeed() {
    return this.#maxSpeed;
  }

  set maxSpeed(value) {
    if (typeof value === 'number' && (value >= 100 && value <= 300)) {
      this.#maxSpeed = value; 
    } else {
      return;
    }
  }

  get maxFuelVolume() {
    return this.#maxFuelVolume;
  }

  set maxFuelVolume(value) {
    if (typeof value === 'number' && (value >= 10 && value <= 50)) {
      this.#maxFuelVolume = value;
    } else {
      return;
    }
  }
  
  get fuelConsumption() {
    return this.#fuelConsumption;
  }

  set fuelConsumption(value) {
    if (typeof value === 'number') {
      this.#fuelConsumption = value;
    } else {
      return;
    }
  }
      
  get currentFuelVolume() {
    return this.#currentFuelVolume;
  }

  get isStarted() {
    return this.#isStarted;
  }

  get mileage() {
    return this.#mileage;
  }
  
  start() {
    if (this.#isStarted === false) {
      this.#isStarted = true;
    } else {
      throw new Error ("Машина уже заведена");
    }
  }

  shutDownEngine() {
    if (this.#isStarted === true) {
      this.#isStarted = false;
    } else {
      throw new Error ("Машина еще не заведена");
    }
  }
  
  fillUpGasTank(value) {
    if (typeof value !== 'number' || value <= 0) {
      throw new Error ("Неверное количество топлива для заправки");
    }
    if (value > this.#maxFuelVolume) {
      throw new Error ("Топливный бак переполнен");
    } else {
      this.#currentFuelVolume += value;
    }
  }
  
  drive(speed, hours) {
    if (typeof speed !== 'number' || speed <= 0) {
      throw new Error ("Неверная скорость");
    }
    if (typeof hours !== 'number' || hours <= 0) {
      throw new Error ("Неверное количество часов");
    }
    if (speed > this.#maxSpeed) {
      throw new Error ("Машина не может ехать так быстро");
    }
    if( this.#isStarted === false) {
      throw new Error ("Машина должна быть заведена, чтобы ехать");
    }

    if (this.#currentFuelVolume < this.#fuelConsumption * hours * speed / 100) {
        throw new Error ("Недостаточно топлива");
    } else {
        this.#mileage = speed * hours;
        this.#currentFuelVolume -= (this.#fuelConsumption * this.#mileage / 100);
    }
  } 
}