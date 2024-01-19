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
    
    batman.addEventListener("mouseover", () => {
      let obraz = document.createElement('img');
      obraz.src = "pobrane.jpg";
      obraz.style.position = "fixed";
      obraz.style.top = "50%"; /* Adjust the positioning as needed */
      obraz.style.right = "60%";
      obraz.style.transform = "translate(-50%, -50%)";
      obraz.style.transform = "scale(0.3)";
      obraz.style.zIndex = "2";
      obraz.alt = 'Alternative Text';
      batman.appendChild(obraz);
      batman.addEventListener("mouseout", () => {
        obraz.style.transition = 'opacity 0.5s ease';
        obraz.style.opacity = '0';
        setTimeout(() => {
          obraz.remove();
        }, 600);
      })
      joker.addEventListener("mouseover", () => {
        let obraz = document.createElement('img');
        obraz.src = "pobrane.jpg";
        obraz.style.position = "fixed";
        obraz.style.top = "50%"; /* Adjust the positioning as needed */
        obraz.style.right = "60%";
        obraz.style.transform = "translate(-50%, -50%)";
        obraz.style.transform = "scale(0.3)";
        obraz.style.zIndex = "2";
        obraz.alt = 'Alternative Text';
        joker.appendChild(obraz);
        joker.addEventListener("mouseout", () => {
          obraz.style.transition = 'opacity 0.5s ease';
          obraz.style.opacity = '0';
          setTimeout(() => {
            obraz.remove();
          }, 600);
        })
        frank.addEventListener("mouseover", () => {
          let obraz = document.createElement('img');
          obraz.src = "pobrane.jpg";
          obraz.style.position = "fixed";
          obraz.style.top = "50%"; /* Adjust the positioning as needed */
          obraz.style.right = "60%";
          obraz.style.transform = "translate(-50%, -50%)";
          obraz.style.transform = "scale(0.3)";
          obraz.style.zIndex = "2";
          obraz.alt = 'Alternative Text';
          frank.appendChild(obraz);
          frank.addEventListener("mouseout", () => {
            obraz.style.transition = 'opacity 0.5s ease';
            obraz.style.opacity = '0';
            setTimeout(() => {
              obraz.remove();
            }, 600);
          })

        })
    
    
      })})})