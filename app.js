let allRooms = document.querySelector(".allRooms")

fetch("https://hotelbooking.stepprojects.ge/api/Rooms/GetAll")
.then( (answer) =>  answer.json()  )
.then( (data) => {
    
data.forEach( (otaxi) => allRooms.innerHTML += card(otaxi) )

}  )



function card (otaxi) {
    return `  <div class="card" style="width: 18rem;">
    <img src=" ${ otaxi.images[0].source } " class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${otaxi.name}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`
}




