const {getBrands} = require('node-car-api');
const fs = require('fs');

if (fs.existsSync('./brands.json')) {
  fs.truncate('./brands.json', 0, function() {
  })
}

async function print () {
  const brands = await getBrands();

  console.log(brands);

  try {
    fs.appendFile("./brands.json", JSON.stringify(brands, null, 2), function() {});
    console.log('copy in brands.json');
  } catch (err) {
    console.log(err);
  }
}

print();
