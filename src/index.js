// Add javascript code to Party Parrot Clicker such that:

// 1. A click on the Party Parrot increases the counter by 1
// 2. Add a button called ‘reset’ that will reset the
//    click count to ‘0’.
// 3. Add an effect whenever the clickCount
//    reaches a specific number.
//    (Ex: make parrot bigger, smaller, change the text/emoji,
//    etc.)
// Extra:
// // Box 1: When the mouse hovers over Box 1, switch the background to pink
// Box 2: When the spacebar is pressed down, make the text in Box 2 turn into a flan emoji
// Box 3: When Box 3 is clicked on, make Party Parrot appear and disappear



const state = {
  parrotCount: 0
};


const addParrotCount = () => {
  state.parrotCount += 1;
  const countContainer = document.getElementsByTagName('h1')[0];
  countContainer.textContent = `Clicks: ${state.parrotCount}`;

  addEffectOnEleven();
};


const resetClicks = () => {
  state.parrotCount = 0;
  const countContainer = document.getElementsByTagName('h1')[0];
  countContainer.textContent = `Clicks: ${state.parrotCount}`;
};


const addEffectOnEleven = () => {
  if (state.parrotCount === 11) {
    const partyParrot = document.getElementsByTagName('img')[0];
    partyParrot.width = 200;
  };
};

const bgToPink = () => {
  document.body.style.backgroundColor = 'pink';
};

const textToFlanEmoji = () => {
  const boxTwo = document.getElementById('box-two');
  boxTwo.querySelector('p').textContent = '🍮🍮🍮';
};

const parrotDisappear = () => {
  const partyParrot = document.getElementsByTagName('img')[0];
  partyParrot.src = '';
  setTimeout(() => {
    partyParrot.src = 'https://cultofthepartyparrot.com/parrots/hd/parrot.gif';
  }, 1000);
};

const registerEventHandlers = () => {
  const partyParrot = document.getElementsByTagName('img')[0];
  partyParrot.addEventListener('click', addParrotCount);
  const resetClickButton = document.getElementById('reset-button');
  resetClickButton.addEventListener('click', resetClicks);
  const boxOne = document.getElementById('box-one');
  boxOne.addEventListener('mouseenter', bgToPink);
  document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
      textToFlanEmoji();
    }
  });
  const boxThree = document.getElementById('box-three');
  boxThree.addEventListener('click', parrotDisappear);
  const boxFour = document.getElementById('box-four');
  boxFour.addEventListener('dblclick', () => {
    alert('I am an ALERT!');
  });
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);






// Box 4: When Box 4 is double clicked, an alert shows up
