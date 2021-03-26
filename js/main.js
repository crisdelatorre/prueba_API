
let myApiKey = "Vs4ElzZPPoXfFPfYhrNitJJuN1xaQhSfpViLjRoF";

fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${myApiKey}`)
    // Convierte la base de datos a objeto json de javascrip
    .then(data => data.json())
    // genera una variable en la que incluye los datos del json
    .then(apiPhotos => {
        let gallery = document.getElementById("mars_photos");
        //  Accede a los datos de usuario; data es como se llaman los objetos en la base de datos

        let num = 0;
        let position = apiPhotos.photos.num;

        // if (0 <= apiPhotos.photos <= 30) {
            apiPhotos.photos.forEach(function (marsPhoto) {
                let item = `
            <div class="photo_object">
                <div class="pic">
                    <img src="${marsPhoto.img_src}" alt="">
                </div>
                <div class="earth_date"> Foto tomada el día ${marsPhoto.earth_date}</div>
                <div class="rover_name">Disparada por el rover ${marsPhoto.rover.name}</div>
            </div>`;
                gallery.innerHTML += item;
            });
        // }
    });