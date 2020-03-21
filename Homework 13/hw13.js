function* createIdGenerator() {
    let i = 1;
    do {
        yield i++;
    } while (true);
};

const idGenerator = createIdGenerator();
  
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);

function* newfontGenerator(value) {
    while (true) {
        let number = yield value;
        if (number === "up") {
            value += 2;
        } else if (number === "down") {
            value -= 2;
        }   
    }
};

const fontGenerator = newfontGenerator(14);

console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next().value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next().value);




