// Helper function to pick a random element from array
const getRandomElement = (arr) => {
  const randomIdx = Math.floor(Math.random() * arr.length);
  return arr[randomIdx];
}

export { getRandomElement };