const {getModels} = require('node-car-api');
const fs = require('fs');

var brandResults = require('./brands.json');

if (fs.existsSync('./models.json')) {
  fs.truncate('./models.json', 0, function() {
  })
}

//To Delete
var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('./brands.json')
});

async function print () {

  for (var i = 0; i<brandResults.length; i++)
  {
    const models = await getModels(brandResults[i]);
    console.log(models);
    try {
      fs.appendFile("./models.json", JSON.stringify(models) + ",\n", function() {});
      console.log('Copy in models.json' + String(models.brand));
    } catch (err) {
      console.log(err);
    }
  }

}

print();
