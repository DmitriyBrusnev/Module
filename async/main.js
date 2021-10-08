const sum = async(a, b) => {
    await timeout(1000);
    return a + b;
};

const dif = async(a, b) => {
    await timeout(1000);
    return a - b;
};

const mul = async(a, b) => {
    await timeout(1000);
    return a * b;
};

const div = async(a, b) => {
    await timeout(1000);
    return a / b;
};

async function calculate(example) {
    const stack = [];
    const elements = example.split(' ');
    for (let i = 0; i < elements.length; i++) {
        const el = elements[i];
        console.log('Элемент - ', el);
        if (!['+', '-', '*', '/'].includes(el)) {
            stack.push(Number(el));
        } else {
            if (el === '+') {
                const summ = await sum(stack.pop(), stack.pop());
                stack.push(summ);
            } else if (el === '*') {
                const mull = await mul(stack.pop(), stack.pop());
                stack.push(mull);
            } else if (el === '-') {
                const second = stack.pop();
                const first = stack.pop();
                const diff = await dif(first, second);
                stack.push(diff);
            } else if (el === '/') {
                const second = stack.pop();
                const first = stack.pop();
                const divv = await div(first, second);
                stack.push(divv);
            }
        }
        console.log('Стек - ', stack);
        console.log('-----------------');
    }
    console.log('Результирующий стек', stack);
    return stack[0];
}

async function logg() {
    const res = await calculate('2 3 + 2 * 5 / 2 -');
    console.log('Ответ - ', res);
}

logg();

function timeout(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}