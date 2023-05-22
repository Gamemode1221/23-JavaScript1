function Book(title, pages, done = false) {
    this.title = title;
    this.pages = pages;
    this.done = done;
    this.finish = () => {
        let str = "";

        this.done === false ? str = "읽는 중" : str = "완독";
        return str;
    };
}

let book1 = new Book("웹 표준의 정석", 648, false);
let book2 = new Book("점프 투 파이썬", 360, true);

console.log(`${book1.title} - ${book1.pages} - ${book1.finish()}`);
console.log(`${book2.title} - ${book2.pages} - ${book2.finish()}`);