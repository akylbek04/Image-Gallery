const imageGallery = document.querySelector('.image-gallery')
document.addEventListener('DOMContentLoaded', function(){
    fetchPhotos()
})

const fetchPhotos =  async () => {
    const res =  await fetch('https://api.unsplash.com/photos/?client_id=76lSVJPvbAXlVHOUl9Pnn4TQmrMWtjqXknZPgpAUEUI')
     const data = await res.json()
    console.log(data)
    renderImages(data)
    
}
const renderImages = (imageArray) => {
    //loop data array
    //data[i] = object 
    //on each object retrieve data
    //create img and div
    imageArray.forEach(image => {
        const div = document.createElement('div');
        div.className = 'image-item';
        const img = document.createElement('img');
        img.src = image.urls.regular
        div.appendChild(img)
        imageGallery.appendChild(div)
        img.addEventListener('click', function(){
            showImage(image)
        })
    });
    
}
const showImage = (imageObject) => {
    
    const div = document.createElement('div');
    div.className = 'modal-container'
       
    div.innerHTML = `
        <img src=${imageObject.urls.regular}/>
        <p>Author: ${imageObject.user.name}</p>
        <p>Description: ${imageObject.alt_description}</p>
        <button class='close-button' onclick=closeModal()>Close</button>
    `
    document.body.appendChild(div)
// var myDiv = document.createElement('div');
// myDiv.className = 'modal-container'
// var closeButton = document.createElement('button');
// closeButton.innerHTML = 'Close';
// closeButton.addEventListener('click', function() {
//   myDiv.style.display = 'none';
// });

// myDiv.appendChild(closeButton);
// document.body.appendChild(myDiv)
}

const closeModal = () => {
    const modalContainer = document.querySelector('.modal-container')
    if(modalContainer){
        modalContainer.remove()
    }
}