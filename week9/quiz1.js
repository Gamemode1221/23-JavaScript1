class Pet {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    run() {
        alert(`${this.name} is running.`);
    }
}

const cheese = new Pet("치즈", "white");
cheese.run();