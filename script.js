
// const galleryImg = document.querySelector(".image-gallery");
// document.addEventListener("DOMContentLoaded", () => {
//     fetchFhotos();
// });


// const fetchFhotos = async()=> {
//     const res = await fetch("https://api.unsplash.com/photos/?client_id=76lSVJPvbAXlVHOUl9Pnn4TQmrMWtjqXknZPgpAUEUI");
//     const data = await res.json();
//     console.log(data);
//     renderPhotos(data);

// }

// const renderPhotos = (imgs) => {
//     imgs.forEach( el => {
//         const div = document.createElement("div");
//         div.className = "image-item";
//         const img = document.createElement("img");
//         img.src = el.urls.regular;
//         div.appendChild(img);
//         galleryImg.appendChild(div)
//         el.addEventListener('click', () => {
//             showImage();
//         })
//     })
// }


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

