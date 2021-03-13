const searchField = document.querySelector('#input_search')

searchField.addEventListener('keyup', (e) => {
    const searchValue = e.target.value;

    if (searchValue.length > 0) {
     console.log('searchValue', searchValue);
    }
});