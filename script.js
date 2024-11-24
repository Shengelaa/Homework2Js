class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}

class ElectricCar extends Car {
  constructor(make, model, year, batteryLevel) {
    super(make, model, year);
    this.batteryLevel = batteryLevel;
  }

  displayDetails() {
    console.log(
      `Electric Car: ${this.make} ${this.model} (${this.year}) - Battery: ${this.batteryLevel}%`
    );
  }
}

const myElectricCar = new ElectricCar("Tesla", "Model 3", 2021, 80);
myElectricCar.displayDetails();

class Library {
  constructor() {
    this.books = [];
  }

  addBook(author, book, year) {
    this.books.push({ author, book, year });
  }

  removeBook(bookTitle) {
    this.books = this.books.filter((book) => book.book !== bookTitle);
  }

  listBooks() {
    return this.books;
  }
}

const myLibrary = new Library();
myLibrary.addBook("George Orwell", "Nineteen Eighty-Four", 1948);
myLibrary.addBook(
  "J.K. Rowling",
  "Harry Potter and the Sorcerer's Stone",
  1997
);

console.log(myLibrary.listBooks());

myLibrary.removeBook("Nineteen Eighty-Four");
console.log(myLibrary.listBooks());

class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  deleteItem(itemName) {
    this.items = this.items.filter((item) => item.name !== itemName);
  }

  updateItem(itemName, updatedItem) {
    const index = this.items.findIndex((item) => item.name === itemName);
    if (index !== -1) {
      this.items[index] = updatedItem;
    }
  }

  calculateTotal() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }
}

const cart = new ShoppingCart();
cart.addItem({ name: "Laptop", price: 1000 });
cart.addItem({ name: "Phone", price: 600 });
console.log(`Total: $${cart.calculateTotal()}`);

cart.updateItem("Phone", { name: "Phone", price: 650 });
cart.deleteItem("Laptop");
console.log(`Total after updates: $${cart.calculateTotal()}`);
