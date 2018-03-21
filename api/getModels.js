const {getModels} = require('node-car-api');
const fs = require('fs');

var brandResults = require('./brands.json');

const cars = [];

if (fs.existsSync('./models.json')) {
  fs.truncate('./models.json', 0, function() {
  })
}

async function print () {

  for (var i = 0; i<brandResults.length; i++)
  {
    const models = await getModels(brandResults[i]);
    console.log(models);

    models.forEach(models => cars.push(models))

    try {
          fs.writeFile("./models.json", JSON.stringify(cars, null, 2), function() {});
          console.log('Copy in models.json');
        } catch (err) {
          console.log(err);
        }

  }
}

print();
