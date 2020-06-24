let breeds = []
document.addEventListener('DOMContentLoaded', function(){
    fetchImages()
    addImage()
    fetchBreeds() 
})

function fetchImages(){
   fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(resp => resp.json())
    .then(json =>json.message.forEach(function(image){
        addImage(image)
    }));
}

function addImage(image){
    const element = document.createElement('img');
    element.src = image;
    document.getElementById('dog-image-container').appendChild(element);
}

function fetchBreeds(){
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(json => { breeds = Object.keys(json.message)
        addBreeds(breeds)
    });
    


function addBreeds(breeds){
    const list = document.querySelector('#dog-breeds');
   while (list.childElementCount > 0){
        list.removeChild(list.childNodes[0]);
    }
    breeds.forEach((breed)=>{
    const listItem = document.createElement('li');
    listItem.innerHTML = breed
    list.appendChild(listItem);
    listItem.addEventListener("click", updateTextColor )
    
})};

function updateTextColor(e){
    e.target.style.cssText = 'color:blue;'
}

document.getElementById('breed-dropdown').addEventListener("change", filterBreeds)

function filterBreeds(){
    const dropdown = document.getElementById('breed-dropdown')
    const filtered = breeds.filter(function(breed){
   return breed.charAt(0) == dropdown.value

    })
   
    addBreeds(filtered)
 }
}