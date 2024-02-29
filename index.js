const loadBtnPrimary = document.getElementById("loadBtnPrimary");
const loadBtnSecondary = document.getElementById("loadBtnSecondary");
const imgAll = document.querySelectorAll("img");
const hideBtn = document.querySelectorAll(".hideBtn");
const cardAll = document.querySelectorAll(".card")
console.log(cardAll)
console.log(hideBtn)


loadBtnPrimary.onclick = function () {
   generateImgs("felines")
};
loadBtnSecondary.onclick = function () {
   generateImgs("sharks")
};





function generateImgs(animal){
    fetch (`https://api.pexels.com/v1/search?query=[${animal}]`, {
        method: "GET",
        headers: {
          Authorization: "A6HFkBEGNJXaLFL26I4o4aMj1s558AX09slicg3LuXquoD2eIoDKZR9N",
        },
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("ERRORE NEL REPERIMENTO DATI");
          }
        })
        .then((oggetti) => {
                  console.log(oggetti);

          imgAll.forEach((img,index) => {
            img.setAttribute("src",oggetti.photos[index].src.tiny)

            
          });

          
        })
        .catch((error) => console.log(error));

    }

    

hideBtn.forEach((hideBtn, index) => {
    hideBtn.onclick = () => {
        cardAll[index].remove();
    };
});

