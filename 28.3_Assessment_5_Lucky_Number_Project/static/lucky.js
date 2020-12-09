namee = document.getElementById('name');
email = document.getElementById('email');
year = document.getElementById('year');
color = document.getElementById('color');
results = document.getElementById('lucky-results');

/** processForm: get data from form and make AJAX call to our API. */

async function processForm(evt) {
  evt.preventDefault();

  if (namee.value !== '' && email.value !== '' && year.value !== '' && color.value !== '') {
    config = {
      "name": `${name.value}`,
      "email": `${email.value}`,
      "year": `${year.value}`,
      "color": `${color.value}`
    };
    
    res = await axios.post('/api/get-lucky-num', config);

    handleResponse(res);

    namee.value = '';
    year.value = '';
    email.value = '';
    color.value = '';

  } else {
    alert("Missing Form Fields");
  }
}
/** handleResponse: deal with response from our lucky-num API. */

async function handleResponse(resp) {
  let data = resp.data
  if (data.num) {
    results.innerText = `
    Your favorite num is ${data.num.num} ==> ${data.num.fact}
    Your birth year is ${data.year.year} ==> ${data.year.fact}`
  }
  if (data.errors) {
    
  }
  
}


$("#lucky-form").on("submit", processForm);

