function randnBm() {
    let u = 0, v = 0;
    while (u === 0) u = Math.random();
    while (v === 0) v = Math.random();
    return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v) * 2 | 0;
};

const obj = {};

for (let i = 0; i < 10; i++) {
    const number = randn_bm();
    obj[number] = obj[number] ? obj[number] + 1 : 1;
}

console.table(obj);
