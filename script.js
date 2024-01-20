let batman = document.getElementById("batman")
let joker = document.getElementById("joker")
let frank = document.getElementById("frank")
let character = document.querySelector("h2");
let quoteText =document.getElementById("quote")
fetch('data.json')  
  .then(response => response.json())
  .then(data => {
    batman.addEventListener("click", () => {
      if (character.textContent != "Batman once said...")
      {
      character.style.transition = 'opacity 0.5s ease';
      character.style.opacity = '0';
      setTimeout(() => {
      character.style.transition = 'opacity 0.5s ease';
      character.style.opacity = '1';
      }, 500);
    }
    quoteText.style.transition = 'opacity 0.5s ease';
    quoteText.style.opacity = '0';
    let id = Math.floor(Math.random() * 15) + 1;
    let quote = data["Batman"][id].quote;
    setTimeout(() => {
      quoteText.style.transition = 'opacity 0.5s ease';
      quoteText.style.opacity = '1';
      character.textContent = "Batman once said..."
      quoteText.textContent = quote;
      }, 500);
    })
    joker.addEventListener("click", () => {
      if (character.textContent != "Joker once said...")
      {
      character.style.transition = 'opacity 0.5s ease';
      character.style.opacity = '0';
      setTimeout(() => {
      character.style.transition = 'opacity 0.5s ease';
      character.style.opacity = '1';
      }, 500);
    }
    quoteText.style.transition = 'opacity 0.5s ease';
    quoteText.style.opacity = '0';
    let id = Math.floor(Math.random() * 15) + 1;
    let quote = data["Joker"][id].quote;
    setTimeout(() => {
      quoteText.style.transition = 'opacity 0.5s ease';
      quoteText.style.opacity = '1';
      character.textContent = "Joker once said..."
      quoteText.textContent = quote;
      }, 500);
    })
    
    frank.addEventListener("click", () => {
      if (character.textContent != "Frank Sinatra once said...")
      {
        character.style.transition = 'opacity 0.5s ease';
        character.style.opacity = '0';
        setTimeout(() => {
        character.style.transition = 'opacity 0.5s ease';
        character.style.opacity = '1';
        }, 500);
      }
    quoteText.style.transition = 'opacity 0.5s ease';
    quoteText.style.opacity = '0';
    let id = Math.floor(Math.random() * 15) + 1;
    let quote = data["Frank"][id].quote;
    setTimeout(() => {
      quoteText.style.transition = 'opacity 0.5s ease';
      quoteText.style.opacity = '1';
      character.textContent = "Frank Sinatra once said..."
      quoteText.textContent = quote;
      }, 500);
    })
  })
  let batmanImage = document.createElement('img');
batmanImage.src = "batman.jpg"; 
batmanImage.style.position = "absolute";
batmanImage.style.width = "150px";
batmanImage.style.height = "auto";
batmanImage.style.zIndex = "2";
batmanImage.style.opacity = '0';
batman.appendChild(batmanImage); 

batman.addEventListener("mouseover", () => {
    batmanImage.style.transition = 'opacity 0.5s ease';
    batmanImage.style.opacity = '1';
});

batman.addEventListener("mouseout", () => {
    batmanImage.style.transition = 'opacity 0.5s ease';
    batmanImage.style.opacity = '0';
});

let jokerImage = document.createElement('img');
jokerImage.src = "joker.jpg"; 
jokerImage.style.position = "absolute";
jokerImage.style.width = "150px";
jokerImage.style.height = "auto";
jokerImage.style.zIndex = "2";
jokerImage.style.opacity = '0';
joker.appendChild(jokerImage); 

joker.addEventListener("mouseover", () => {
    jokerImage.style.transition = 'opacity 0.5s ease';
    jokerImage.style.opacity = '1';
});

joker.addEventListener("mouseout", () => {
    jokerImage.style.transition = 'opacity 0.5s ease';
    jokerImage.style.opacity = '0';
});

let frankImage = document.createElement('img');
frankImage.src = "frank.jpg";
frankImage.style.position = "absolute";
frankImage.style.width = "150px";
frankImage.style.height = "auto";
frankImage.style.zIndex = "2";
frankImage.style.opacity = '0';
frank.appendChild(frankImage); 

frank.addEventListener("mouseover", () => {
    frankImage.style.transition = 'opacity 0.5s ease';
    frankImage.style.opacity = '1';
});

frank.addEventListener("mouseout", () => {
    frankImage.style.transition = 'opacity 0.5s ease';
    frankImage.style.opacity = '0';
});
