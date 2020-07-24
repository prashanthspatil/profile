const container = document.querySelector(".container")
const technologies = [
  { name: "Perspiciatis", image: "images/fakeprofile/bitbucket.png" },
  { name: "Voluptatem", image: "images/fakeprofile/css.png" },
  { name: "Explicabo", image: "images/fakeprofile/html.png" },
  { name: "Rchitecto", image: "images/fakeprofile/php.png" },
  { name: " Beatae", image: "images/fakeprofile/github.png" },
  { name: " Vitae", image: "images/fakeprofile/laravel.png" },
  { name: "Inventore", image: "images/fakeprofile/swift.jpg" },
  { name: "Veritatis", image: "images/fakeprofile/react.png" },
  { name: "Accusantium", image: "images/fakeprofile/bootstrap.png" },
  { name: "Vue", image: "images/fakeprofile/vue.png" },
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

window.isUpdateAvailable = new Promise(function(resolve, reject) {
	if ('serviceWorker' in navigator) {
		// register service worker file
		navigator.serviceWorker.register('sw.js')
			.then(reg => {
				reg.onupdatefound = () => {
					const installingWorker = reg.installing;
					installingWorker.onstatechange = () => {
						switch (installingWorker.state) {
							case 'installed':
								if (navigator.serviceWorker.controller) {
									// new update available
									resolve(true);
								} else {
									// no update available
									resolve(false);
								}
								break;
						}
					};
				};
			})
			.catch(err => console.error('[SW ERROR]', err));
	}
});

window['isUpdateAvailable']
	.then(isAvailable => {
		if (isAvailable) {
			console.log('New Update available!');
		} else {
			console.log('No Update available!');
		}
	});

document.addEventListener("DOMContentLoaded", showCoffees)