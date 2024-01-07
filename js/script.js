var inputName = document.getElementById('siteName');
var inputURL = document.getElementById('siteURL');
var addBtn = document.getElementById('addBtn');
var searchBtn = document.getElementById('search');
var updateBtn = document.getElementById('updateBtn');

var indexUpdate =0;
var inputList =[];

if(localStorage.getItem('inputs') != null){
    inputList =JSON.parse(localStorage.getItem('inputs'));
    displayValues();
}

//add
function addItems(){
    var insertValues ={
        siteName:inputName.value,
        siteURL:inputURL.value,
    }
    inputList.push(insertValues);
    clearInputValue();
    displayValues();

    localStorage.setItem('inputs',JSON.stringify(inputList))
}

// clear input
function clearInputValue(){
    inputName.value='';
    inputURL.value='';
}

// display the table
function displayValues(){
    var tBodyInsert ='';

    for( i=0 ; i < inputList.length; i++ ){
        tBodyInsert += [
            `<tr class="tr">
                <td>${i}</td>
                <td>${inputList[i].siteName}</td>
                <td><a href=${inputList[i].siteURL} target="_blank"><i id="visit" class="icon fa-regular fa-eye"></i></a></td>
                
                <td><i onclick="update(${i})" id="update" class="icon fa-regular fa-pen-to-square"></i></button></td>
                <td><i onclick="deleting(${i})" id="delete" class="icon fa-regular fa-trash-can"></i></td>
            </tr>`]
    }
    document.getElementById('tBodyInsert').innerHTML = tBodyInsert
}

// delete item
function deleting(index){
        inputList.splice(index, 1);
        displayValues();
        localStorage.setItem('inputs',JSON.stringify(inputList))
        
}
// search
function search(){
    var seek = searchBtn.value;
    var tBodyInsert ='';
    // console.log(searchBtn.value);
        for( i=0 ; i < inputList.length; i++ ){
            if(inputList[i].siteName.toLowerCase().includes(seek.toLowerCase())){

            tBodyInsert += [
                `<tr class="tr">
                <td>${i}</td>
                <td>${inputList[i].siteName}</td>
                <td><a href=${inputList[i].siteURL} target="_blank"><i id="visit" class="icon fa-regular fa-eye"></i></a></td>
                
                <td><i onclick="update(${i})" id="update" class="icon fa-regular fa-pen-to-square"></i></button></td>
                <td><i onclick="deleting(${i})" id="delete" class="icon fa-regular fa-trash-can"></i></td>
            </tr>`]
        }
        document.getElementById('tBodyInsert').innerHTML = tBodyInsert
}

};

function update(index){
    var currentInput = inputList[index];
    indexUpdate = index;
    // console.log(currentInput);
    inputName.value = currentInput.siteName;
    inputURL.value = currentInput.siteURL;
    updateBtn.classList.remove('d-none');
    addBtn.classList.add('d-none');
}
function updateInput(){
    var insertValues ={
        siteName:inputName.value,
        siteURL:inputURL.value,
    }
    inputList.splice(indexUpdate ,1 , insertValues);
    localStorage.setItem('inputs',JSON.stringify(inputList))
    displayValues();
    clearInputValue();
    updateBtn.classList.add('d-none');
    addBtn.classList.remove('d-none');
    

}

