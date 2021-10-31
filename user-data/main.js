import("./imports/getEntries.js").then(res => {
    res.getEntries().then(response => response.json())
    .then(result => {
        const titlesSelect = document.getElementById('titles');
        const catogoriesSelect = document.getElementById('categories');

        for (let i = 10; i < 1000; i += 30) {
            const element = result.entries[i];

            const title = document.createElement('option');
            title.value = element.Description;
            title.innerText = title.value;
            titlesSelect.appendChild(title);

            const catogory = document.createElement('option');
            catogory.value = element.Category;
            catogory.innerText = catogory.value;
            catogoriesSelect.appendChild(catogory);
        }
    }).catch(err => {
        const error = document.createElement('div');
        error.innerText = err;
        document.body.appendChild(error);
    });
});

document.getElementById('btn-save-name').addEventListener('click', saveNameHandler);
document.getElementById('toggle-theme').addEventListener('click', toggleThemeHandler);

if (localStorage.getItem('user-name')) {
    document.getElementById('name').value = JSON.parse(localStorage.getItem('user-name'));
}

function saveNameHandler() {
    localStorage.setItem('user-name', JSON.stringify(document.getElementById('name').value));
}

function toggleThemeHandler() {
    let currentTheme = 'light';

    if (localStorage.getItem('theme')) {
        currentTheme = JSON.parse(localStorage.getItem('theme'));
    }

    if (currentTheme === 'dark') {
        document.body.classList.remove('dark');
        currentTheme = 'light';
    } else {
        document.body.classList.add('dark');
        currentTheme = 'dark';
    }

    localStorage.setItem('theme', JSON.stringify(currentTheme));
}
