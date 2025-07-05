const generateRating = () => {
  return Math.round((Math.random() * 1.5 + 3.5) * 10) / 10;
};

module.exports = generateRating;