let characters = {
  batman: {
    element: document.getElementById("batman"),
    image: "batman.jpg",
    imageBackground: "batmanBackground.jpg",
    text: "Batman once said...",
  },
  joker: {
    element: document.getElementById("joker"),
    image: "joker.jpg",
    imageBackground: "jokerBackground.jpg",
    text: "Joker once said...",
  },
  frank: {
    element: document.getElementById("frank"),
    image: "frank.jpg",
    imageBackground: "frankBackground.jpg",
    text: "Frank Sinatra once said...",
  },
  kanye: {
    element: document.getElementById("kanye"),
    image: "kanye.jpg",
    imageBackground: "kanyeBackground.jpg",
    text: "Kanye West once said...",
  },
  pilsudski: {
    element: document.getElementById("pilsudski"),
    image: "Pilsudski.jpg",
    imageBackground: "pilsudskiBackground.jpg",
    text: "Józef Piłsudski once said...",
  },
};

let character = document.querySelector("h2");
let quoteText = document.querySelector("h3");
let quoteContainer = document.getElementById("#quote");

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    for (const key in characters) {
      characters[key].element.addEventListener("click", () => {
        if (character.textContent != characters[key].text) {
          character.style.transition = 'opacity 0.5s ease';
          character.style.opacity = '0';
          setTimeout(() => {
            character.style.transition = 'opacity 0.5s ease';
            character.style.opacity = '1';
          }, 500);
        }

        quoteText.style.transition = 'opacity 0.5s ease';
        quoteText.style.opacity = '0';
        let id = Math.floor(Math.random() * 40) + 1;
        let quote = data[key][id].quote;

        setTimeout(() => {
          quoteText.style.transition = 'opacity 0.5s ease';
          quoteText.style.opacity = '1';
          character.textContent = characters[key].text;
          quoteText.textContent = quote;
        }, 500);
        document.body.style.backgroundImage = 'url(' + characters[key].imageBackground + ')';
        document.body.style.backgroundRepeat = "no-repeat"
        
        if (key==pilsudski)
          {
            quote.style.backgroundColor = "#000000aa";
            quoteContainer.style.backgroundColor = "#000000aa";
          }
      });
    }
  });

for (const key in characters) {
  let characterImage = document.createElement('img');
  characterImage.src = characters[key].image;
  characterImage.style.position = "absolute";
  // characterImage.style.width = "100%";
  characterImage.style.width = "auto";
  characterImage.style.height = "100%";
  characterImage.style.opacity = '0';
  characters[key].element.appendChild(characterImage);

  characters[key].element.addEventListener("mouseover", () => {
    characterImage.style.transition = 'opacity 0.5s ease';
    characterImage.style.opacity = '1';
    
  });

  characters[key].element.addEventListener("mouseout", () => {
    characterImage.style.transition = 'opacity 0.5s ease';
    characterImage.style.opacity = '0';
    
  });
}