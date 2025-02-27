let categories = document.querySelector(".categories")

fetch("https://restaurant.stepprojects.ge/api/Categories/GetAll")
.then( (answer) => answer.json() )
.then( (word) => {

    word.forEach( (nav) => categories.innerHTML += navbar(nav) )

} )


function  navbar (nav) {
    return `<ul class="list-group">
    <li class="list-group-item">${nav.name}</li>
  </ul>`
}







let products = document.querySelector(".products")

fetch("https://restaurant.stepprojects.ge/api/Products/GetAll")
.then( (pasuxi) => pasuxi.json()    )
.then( (data) => {
    data.forEach( (es) => products.innerHTML += list(es) )
    console.log(products);
} )


function list(es) {
    
    return `<div class="card" style="width: 18rem;">
    <img src="${es.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title"></h5>
      <p class="card-text"></p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`

}


