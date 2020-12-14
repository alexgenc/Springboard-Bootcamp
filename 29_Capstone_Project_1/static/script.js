muscles = document.getElementById('muscles');


async function getMuscles() {
  res = await axios.get('https://wger.de/api/v2/muscle/');
  
  console.log(res);

  for (muscle of res.data.results) {
    newMuscle = document.createElement('li');
    newMuscle.append(muscle.name)
    muscles.append(newMuscle);
  }
}


async function getExercisesByMuscle() {
  res = await axios.get('https://wger.de/api/v2/exercise/', { parameters: {language: 2, muscles: 1}})

  // console.log(res)
}



// On Load
getMuscles();
getExercisesByMuscle()