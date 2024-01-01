let batman = document.getElementById("batman")
let joker = document.getElementById("joker")
let frank = document.getElementById("frank")
let character = document.querySelector("h2");
fetch('data.json')  
  .then(response => response.json())
  .then(data => {
    batman.addEventListener("click", () => {
      character.textContent = "Batman once said..."
      let id = Math.floor(Math.random() * 15) + 1;
      let quote = data["Batman"][id].quote;
      document.getElementById("quote").textContent = quote;
    })
    joker.addEventListener("click", () => {
      character.textContent = "Joker once said..."
      let id = Math.floor(Math.random() * 15) + 1;
      let quote = data["Joker"][id].quote;
      document.getElementById("quote").textContent = quote;
    })
    frank.addEventListener("click", () => {
      character.textContent = "Frank Sinatra once said..."
      let id = Math.floor(Math.random() * 15) + 1;
      let quote = data["Frank"][id].quote;
      document.getElementById("quote").textContent = quote;
    })
    
    
  })