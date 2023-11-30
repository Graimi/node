const fs = require('fs/promises');
const path = require('path');

const FILENAME = 'file.txt'
const PATHNAME = path.join(__dirname, `./${FILENAME}`);

const main = async () => {
    const fileContent = await fs.readFile(FILENAME);
    const fileString = fileContent.toString();
    const fileModified = fileString.replace('Hola Rock the code', 'HOLA ROCK THE CODE');

    console.log(fileModified);
}

main()