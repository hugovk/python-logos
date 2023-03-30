function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;

// While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function addLogos(logos, selector) {
  shuffle(logos).forEach(function(item) {
    const html = `
    <div class="col-md-3 col-sm-4 col-6">
      <div class="card mb-3 box-shadow">
        <a href="${item.home}"><img class="card-img-top" src="img/${item.filename}"></a>
        <div class="card-body">
          <p class="card-text">${item.name}</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              ${item.mastodon ? `<a class="btn btn-outline-secondary" role="button" href="${item.mastodon}">Mastodon</a>` : ''}
              ${item.twitter ? `<a class="btn btn-outline-secondary" role="button" href="https://twitter.com/${item.twitter}">Twitter</a>` : ''}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
    document.querySelector(selector).insertAdjacentHTML('beforeend', html);
  });
}

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function setFavicon(logos) {
  const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';
  link.href = 'img/' + getRandomElement(logos)["filename"];
  document.getElementsByTagName('head')[0].appendChild(link);
}
