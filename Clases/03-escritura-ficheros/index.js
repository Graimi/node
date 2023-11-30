const prompts = require('prompts');
const fs = require('fs/promises');
const path = require('path');

const WRITE_PATHNAME = path.join(__dirname, './files');

const main = async () => {
  const responses = await prompts([
    {
      type: 'text',
      name: 'name',
      message: 'Whats your name?',
    },
    {
      type: 'text',
      name: 'surname',
      message: 'Whats your surname?',
    },
    {
      type: 'number',
      name: 'age',
      message: 'Whats your age?',
    },
  ]);

  console.log(responses);

  const filePath = `${WRITE_PATHNAME}/${responses.name}-${Date.now()}.json`;
  await fs.writeFile(filePath, JSON.stringify(responses));
  //   Es lo mismo que el anterior pero JSON.stringify respeta mejor los valores
  //   await fs.writeFile(filePath, responses.toString());

  console.log('File written!');
};

main();
