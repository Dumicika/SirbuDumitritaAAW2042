const produseDiv = document.getElementById("produse");
const formFilter = document.getElementById("form-filter");
const categoriiDiv = document.getElementById("categorii");

const afiseazaProduse = (produse) => {
  produseDiv.innerHTML = "";
  produse.forEach((produs) => { 
    produseDiv.innerHTML += `<div class='pro' id='${produs.id}' onclick="window.location.href='sproduct.html';">
          <img src="${produs.img}" alt="">
             <div class="des">
                        <span>Categorie: ${produs.categoria}</span>
                       <h5>${produs.nume}</h5>
                        <div class="star">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <h4>${produs.pret}</h4>
                    </div>
                    <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
                </div>
          </div>`;
  });
};
const sortProduse = (data, condition) => {
  switch (condition) {
    case "asc":
      data.sort((a, b) => a.pret - b.pret);
      break;
    case "desc":
      data.sort((a, b) => b.pret - a.pret);
      break;
    default:
      console.log("dont exist sort condition");
      break;
  }
  return data
};
const filtreazaProduse = () => {
  fetch("js/produse.json")
    .then((response) => response.json())
    .then((produse) => {
      const checks = document.querySelectorAll("input:checked");
      produseDiv.innerHTML = "";
      Array.from(checks).forEach((check) => {
        const produseFiltrate = produse.filter((produs) => {
          return produs.categoria === check.id;
        });
        produseFiltrate.forEach((produs) => {
          produseDiv.innerHTML += `<div class='pro' id='${produs.id}' onclick="window.location.href='sproduct.html';">
          <img src="${produs.img}" alt="">
             <div class="des">
                        <span>Categorie: ${produs.categoria}</span>
                        <h5>${produs.nume}</h5>
                        <div class="star">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <h4>${produs.pret}</h4>
                    </div>
                    <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
                </div>
          </div>`;
        });
      });
    });
};
const afiseazaCategorii = (data) => {
  const categorii = data.map((produs) => produs.categoria);
  const categoriiUnice = new Set(categorii);
  Array.from(categoriiUnice).forEach((categorie) => {
    categoriiDiv.innerHTML += `<div class='categorie'> 
      <input type="checkbox" id="${categorie}" name="categorie" oninput="filtreazaProduse()">
      <label for="${categorie}">${categorie}</label>
    </div>`;
  });
};
fetch("js/produse.json")
  .then((response) => response.json())
  .then((data) => {
    afiseazaProduse(data);
    afiseazaCategorii(data);
  })
  .catch((e) => console.error(e));
formFilter.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch("js/produse.json")
    .then((response) => response.json())
    .then((data) => {
      let condition = e.target.pret.value;
      const produseSortate = sortProduse(data, condition);
      afiseazaProduse(produseSortate);
    })
    .catch((e) => console.error(e));
});
