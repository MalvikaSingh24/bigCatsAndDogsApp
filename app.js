// Initial Animal Data
let bigCats = [];
let dogs = [];
let bigFishes = [];

// Render tables
function renderTable() {
    renderTableData('bigCatsTableBody', bigCats);
    renderTableData('dogsTableBody', dogs);
    renderTableData('bigFishesTableBody', bigFishes);
}

function renderTableData(tableBodyId, data) {
    const tableBody = document.getElementById(tableBodyId);
    tableBody.innerHTML = '';
    
    data.forEach((animal, index) => {
        const row = document.createElement('tr');
        
        // Name Column
        const nameCell = document.createElement('td');
        nameCell.textContent = animal.name;
        row.appendChild(nameCell);

        // Image Column
        const imageCell = document.createElement('td');
        const img = document.createElement('img');
        img.src = animal.image;
        img.classList.add('animal-image');
        imageCell.appendChild(img);
        row.appendChild(imageCell);

        // Actions Column
        const actionsCell = document.createElement('td');
        const editButton = document.createElement('button');
        editButton.classList.add('btn', 'btn-warning');
        editButton.textContent = 'Edit';
        editButton.onclick = () => editAnimal(index, tableBodyId);
        
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('btn', 'btn-danger', 'ml-2');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteAnimal(index, tableBodyId);
        
        actionsCell.appendChild(editButton);
        actionsCell.appendChild(deleteButton);
        row.appendChild(actionsCell);
        
        tableBody.appendChild(row);
    });
}

//
