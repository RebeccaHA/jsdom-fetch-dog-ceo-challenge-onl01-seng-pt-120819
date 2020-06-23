document.addEventListener('DOMContentLoaded', function(){
    fetchImages()
    addImage()
    fetchBreeds()
    addBreeds()
})

function fetchImages(){
   fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(resp => resp.json())
    .then(json =>json.message.forEach(function(image){
        addImage(image)
    }));
}

function addImage(image){
    let element = document.createElement('img');
    element.src = image;
    document.getElementById('dog-image-container').appendChild(element);
}

function fetchBreeds(){
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(json => addBreeds(json.message)
    )}
 

function addBreeds(breed_hash){
    let list = document.querySelector('#dog-breeds');
    for(breed in breed_hash){
    const listItem = document.createElement('li');
    listItem.innerHTML = breed
    list.appendChild(listItem);
    listItem.addEventListener("click", updateTextColor )
}}

function updateTextColor(e){
    e.target.style.cssText = 'color:blue;'
}

function filterBreeds(){
    
}