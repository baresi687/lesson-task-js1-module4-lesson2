const details = document.querySelector(".details");

async function getCharacter() {
  try {
    const url = "https://breakingbadapi.com/api/characters/6";
    const response = await fetch(url);
    const json = await response.json()
    const result = json[0];
    console.log(result)

    details.innerHTML += displayBR(result)

  } catch (error) {
    console.log(error)
  } finally {
    document.querySelector(".loader").style.display = "none";
  }
}

getCharacter()

function displayBR(char) {
  return details.innerHTML =
    ` <h4 class="name">${char.name}</h4>
      <div class="image" style="background-image: url('${char.img}')"></div>   
      <div class="status">Status: ${char.status}</div>                    
    `
}