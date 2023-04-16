const start = new Date();

for (let i = 0; i < 100000; i++) {
  let some = i ** 3;
}

const end = new Date();

console.log(end.getTime() - start.getTime());
alert(`this operation worked ${end - start}`);
