const generator = require('generate-password');

function generateRandomPassword() {
  const password = generator.generate({
    length: 12,
    numbers: true,
    symbols: true,
  });

  console.log('Generated Password: ', password);
}

generateRandomPassword();
