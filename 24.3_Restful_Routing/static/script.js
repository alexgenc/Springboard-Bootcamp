function generateCupcakeHTML(cupcake) {
  return `
    <div data-cupcake-id=${cupcake.id}>
      <li>
        ${cupcake.flavor} / ${cupcake.size} / ${cupcake.rating}
        <button class="delete-button">X</button>
      </li>
      <img class="Cupcake-img"
            src="${cupcake.image}"
            alt="(no image provided)">
    </div>
  `;
}

async function displayCupcakes() {
  res = await axios.get('/api/cupcakes')
  
  for (cupcake of res.data.cupcakes) {
    let newCupcake = $(generateCupcakeHTML(cupcake));
    $("#cupcakes").append(newCupcake);
  }
}
   
/** handle clicking delete: delete cupcake */

$("#cupcakes").on("click", ".delete-button", async function (e) {
  e.preventDefault();

  let $cupcake = $(e.target).closest("div");
  let cupcakeId = $cupcake.attr("data-cupcake-id");

  await axios.delete(`api/cupcakes/${cupcakeId}`);
  $cupcake.remove();
});
// On Load

displayCupcakes();