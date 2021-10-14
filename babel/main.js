fetch('https://api.publicapis.org/entries')
    .then(response => response.json())
    .then(result => {
        const titlesSelect = document.getElementById('titles');
        const catogoriesSelect = document.getElementById('categories');

        for (let i = 10; i < 1000; i += 30) {
            const element = result.entries[i];

            console.log(element);

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