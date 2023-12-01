const fs = require('fs/promises');
const path = require('path');

const JSON_FILE = 'house-listing.json';
const CSV_FILE = 'house-listing.CSV';
const READ_PATHNAME = path.join(__dirname, `./${JSON_FILE}`);
const WRITE_PATHNAME = path.join(__dirname, `./${CSV_FILE}`);

const main = async () => {
  const fileContent = await fs.readFile(READ_PATHNAME);
  const data = JSON.parse(fileContent.toString());

  const headerColumns = Object.keys(data[0]);
  const valuesColumns = data.map((element) => Object.values(element));

  let csvContent = ``;
  csvContent += headerColumns.join(',');
  //   csvContent += headerColumns.join(',') + '\n';

  valuesColumns.forEach((values) => {
    let valuesString = '\n';

    values.forEach((value) => {
      if (Array.isArray(value)) {
        valuesString += `"${value.join(',')}",`;
        return;
      }

      if (typeof value === 'string' && value.includes(',')) {
        valuesString += `"${value.join(',')}}",`;
        return;
      }

      valuesString += `${value.toString()},`;
    });

    valuesString = valuesString.slice(0, valuesString.length - 1);
    csvContent += valuesString;
    // Para aquellos JSON que no contienen , internas u arrays por ej
    // csvContent += `\n${values.join(',')}`;
  });

  console.log(csvContent);

  await fs.writeFile(WRITE_PATHNAME, csvContent)
  console.log('Finished transforming file!');
};

main();
