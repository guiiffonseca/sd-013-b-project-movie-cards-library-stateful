const objeto = {
  genre:"comedy",
  img:"bem",
  rating: '2',
  storyline:"com",
  subtitle:"tudbo",
  title: 'oi',
};

// const car = {type:"Fiat", model:"500", color:"white"};

Object.values(objeto).forEach((value) => {
  console.log(value);
  value = '';
  console.log(value);
});