const {getModels} = require('node-car-api');
const fs = require('fs');

const  brandResults = {};
if (fs.existsSync('./models.json')) {
  fs.truncate('./models.json', 0, function() {
  })
}

//Reading lines from brands.json
var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('./brands.json')
});

lineReader.on('line', function(line) {
  var content = JSON.parse(line)
  for(var i = 0; i<content.length; i++)
  {
    brandResults[i] = content[i];
  }

  console.log(brandResults);

});

async function print (test) {

    const models = await getModels('RENAULT');
    console.log(models);

}

print(brandResults);
