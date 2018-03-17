const {getBrands} = require('node-car-api');
const fs = require('fs');

var result =  {};

async function print () {
  const brands = await getBrands();

  result = brands;
  console.log(brands);

  try {
    fs.appendFile("./brands.json", JSON.stringify(result) + ",\n", function() {});
    console.log('copy in brands.json');
  } catch (err) {
    console.log(err);
  }
}

print();
