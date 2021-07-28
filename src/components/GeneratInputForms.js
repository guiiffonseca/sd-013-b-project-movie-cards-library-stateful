const objectToInputInAddMovie = [{
  title: {
    name: 'title',
    dataTestid: 'title-input',
    value: { title },

  },

  subtile: {
    name: 'subtitle',
    dataTestid: 'subtitle-input',
    value: { subtitle },
  },

  image: {
    name: 'imagePath',
    dataTestid: 'imagePath-input',
    value: { imagePath },
  },
}];

module.exports = objectToInputInAddMovie;
