const container = document.querySelector(".container")
const technologies = [
  { name: "Perspiciatis", image: "images/fakeprofile/bitbucket.png" },
  { name: "Voluptatem", image: "images/fakeprofile/css.png" },
  { name: "Explicabo", image: "images/fakeprofile/html.png" },
  { name: "Rchitecto", image: "images/fakeprofile/php.png" },
  { name: " Beatae", image: "images/fakeprofile/github.png" },
  { name: " Vitae", image: "images/fakeprofile/laravel.png" },
  { name: "Inventore", image: "images/fakeprofile/swift.png" },
  { name: "Veritatis", image: "images/fakeprofile/react.png" },
  { name: "Accusantium", image: "images/fakeprofile/bootstrap.png" },
]

const showCoffees = () => {
  let output = ""
  technologies.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Taste</a>
              </div>
              `)
  )
  container.innerHTML = output
}

if ("serviceworker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceworker
      .register("/serviceworker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}

document.addEventListener("DOMContentLoaded", showCoffees)