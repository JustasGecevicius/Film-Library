const checkIfLiked = (id, userLiked) => {
  return Object.keys(userLiked).includes(id.toString());
};
const checkIfRated = (id, userRated) => {
  return userRated[id]
};

module.exports = {checkIfLiked, checkIfRated}