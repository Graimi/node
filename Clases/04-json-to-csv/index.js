const fs = require('fs/promises');
const path = require('path');

const JSON_FILE = 'house-listing.json';
const READ_PATHNAME = path.join(__dirname, `./${JSON_FILE}`);

const main = async () => {
  const fileContent = await fs.readFile(READ_PATHNAME);
  const data = JSON.parse(fileContent.toString());

  const headerColumns = Object.keys(data[0]);
  const valuesColumns = data.map((element) => Object.values(element));
  

  let csvContent = ``;
  csvContent += `${headerColumns.join(',')}\n`;
//   csvContent += headerColumns.join(',') + '\n';


  console.log(csvContent);
};

main();
