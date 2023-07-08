// Code your solutions in this file
function writeCards(names, giftDescription) {
  const thankYouMessages = [];

  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const message = `Thank you, ${name}, for the wonderful ${giftDescription} gift!`;
    thankYouMessages.push(message);
  }

  return thankYouMessages;
}

function countDown(number) {
  for (let i = number; i>=0; i--) {
    console.log(i);
  }
}