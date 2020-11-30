function findUserByUsername(usersArray, username) {
  return usersArray.find(function(val) {
    return val.username === username;
  });
}

function removeUser(usersArray, username) {
  let index = usersArray.findIndex(function(val) {
      return val.username === username;
  });
  if (index === -1) return;
  return usersArray.splice(index, 1)[0];
}