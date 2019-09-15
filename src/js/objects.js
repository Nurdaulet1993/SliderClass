console.log('Objectsdfd');

let cat  = {
  name:'Barsik',
  legs: 4,
  run: function () {
      console.log('run');
  }
};

function Cat(name) {
    this.name = name;
    this.age = 2;

    this.run = function () {
        console.log('run');
    }
}

let kitty = new Cat('Leo');

console.log(kitty);

kitty.run();