const ths = document.querySelectorAll('th');
const tds = document.querySelectorAll('td');

ths.forEach((th) => {
    let sortedUp = false;

    th.addEventListener('click', (e) => {
        const colIndex = +e.target.dataset.index;

        const tds = Array.from(document.querySelectorAll('td')).filter((el) => el.dataset.index.split('-')[1] === colIndex.toString());

        const tdsText = tds.map((el) => el.innerText);

        tdsText.sort();

        if (sortedUp) {
            tdsText.reverse();
        }

        tds.forEach((td, i) => {
            td.innerText = tdsText[i];
        });

        sortedUp = !sortedUp;

        e.target.querySelector('span').style.transform = `rotate(${sortedUp ? 180 : 0}deg)`;
    });
});

tds.forEach((td) => {
    td.addEventListener('click', () => {
        td.classList.remove('edit');
        td.contentEditable = true;
        td.focus();
        td.querySelector('span.ok').classList.add('active');
    });

    td.querySelector('span.ok').addEventListener('click', (e) => {
        e.stopPropagation()
        e.target.classList.remove('active');
        td.contentEditable = false;
        td.classList.add('edit');
    });
});