import Pet from "/quiz1";

class Cat extends Pet {
    constructor(name, color, breed) {
        super(name, color);
        this.breed = breed;
    }

    viewInfo() {
        alert(`이름 : ${this.name}, 품종 : ${this.breed}, 색깔 : ${this.color}`);
    }
}

const bori = new Cat("보리", "흰색", "코숏");
bori.viewInfo();