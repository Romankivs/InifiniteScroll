var list = document.querySelector('#infinite-list');

var loadMore = function() {
    fetch('http://www.randomnumberapi.com/api/v1.0/random?min=1&max=1000000&count=100')
        .then(response => response.json())
        .then(data => {
                console.log(data);
                for (let i = 0; i < data.length; i++)
                {
                    var item = document.createElement('li');
                    item.innerText = data[i];
                    list.appendChild(item);
                }
            }
            );
}

window.addEventListener('scroll', function() {
  if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
    loadMore();
  }
}, { passive : true });

loadMore();