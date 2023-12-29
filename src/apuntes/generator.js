function* gen() {
    yield 1;
    yield 2;
    yield 3;
}

var g = gen(); 'Generator { }'

function* idMaker() {
    var index = 0;
    while (true) yield index++;
}

var gen = idMaker(); // "Generator { }"

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
// ...

function fibonacci() {
    var a = yield 1;
    yield a * 2;
}

var it = fibonacci();
console.log(it);            // "Generator { }"
console.log(it.next());     // 1
console.log(it.send(10));   // 20
console.log(it.close());    // undefined
console.log(it.next());     // throws StopIteration (as the generator is now closed)