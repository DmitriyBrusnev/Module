let currentMove = ['x', 'o'][randomInteger(0, 1)];

const table = document.querySelector('table');
const tds = getTds();

table.addEventListener('click', (event) => {
    const td = event.target;
    if (td.tagName != 'TD' || ['o', 'x'].includes(td.innerText)) return;

    td.innerText = currentMove;
    currentMove = currentMove === 'x' ? 'o' : 'x';

    const [i, j] = td.dataset.index.split('-');

    const result = checkWin(Number(i), Number(j));

    if (result !== null) {
        const p = document.createElement('p');
        p.style.textAlign = 'center';
        p.innerText = `${result} won.`;
        document.body.appendChild(p);
    }
});

function checkWin(row, col) {
    const goal = tds[row][col].innerText;
    const combinations = ['', '', '', ''];
    for (let i = 0; i < 3; i++) {
        if (tds[row][i].innerText === goal) {
            combinations[0] += goal;
        }
        if (tds[i][col].innerText === goal) {
            combinations[1] += goal;
        }
    }
    if (row === col) {
        for (let i = 0; i < 3; i++) {
            if (tds[i][i].innerText === goal) {
                combinations[2] += goal;
            }
        }
    }
    if (row === 2 - col) {
        for (let i = 0; i < 3; i++) {
            if (tds[i][2 - i].innerText === goal) {
                combinations[3] += goal;
            }
        }
    }
    const result = combinations.reduce((answer, comb) => {
        if (comb.length === 3) {
            return answer + 1;
        }
        return answer;
    }, 0);

    for (let i = 0; i < tds.length; i++) {
        if (!tds[i][0].innerText || !tds[i][1].innerText || !tds[i][2].innerText) {
            break;
        }
        if (i === tds.length - 1) {
            return 'Nobody';
        }
    }

    if (result > 0) {
        return goal;
    }
    return null;
}

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

function getTds() {
    const tds = Array.from(table.querySelectorAll('td'));
    const returnArr = [];

    for (let i = 0; i < tds.length; i += 3) {
        returnArr.push(tds.slice(i, i + 3));
    }

    return returnArr;
}
