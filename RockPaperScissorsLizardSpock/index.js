const resultDisplay = document.querySelector('#result')
const choicesDisplay = document.querySelector('#choices')
const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock']

const handleClick = (e) => {
  getResults(e.target.innerHTML, choices[Math.floor(Math.random() * choices.length)])
}
choices.forEach(choice => {
  const button = document.createElement('button')
  button.innerHTML = choice
  button.classList.add(choice)
  button.addEventListener('click', handleClick)
  choicesDisplay.appendChild(button)
})

const getResults = (userChoice, computerChoice) => {
  switch (userChoice + computerChoice) {
    case 'scissorspaper':
    case 'rockscissors':
    case 'paperrock':
    case 'rocklizard':
    case 'lizardspock' :
    case 'spockscissors' :
    case 'scissorslizard' :
    case 'lizardpaper' :
    case 'paperspock' :
    case 'spockrock' :
      resultDisplay.innerHTML = 'You chose ' + userChoice + ' and the house chose ' + computerChoice + ' , YOU WIN!'
      break
    case 'paperscissors':
    case 'scissorsrock':
    case 'rockpaper':
    case 'lizardrock':
    case 'spocklizard':
    case 'scissorsspock':
    case 'lizardscissors':
    case 'paperlizard':
    case 'spockpaper':
    case 'rockspock' :
      resultDisplay.innerHTML = 'You chose ' + userChoice + ' and the house chose ' + computerChoice + ' , YOU LOSE!'
      break
    case 'scissorsscissors':
    case 'rockrock':
    case 'paperpaper':
    case 'lizardlizard':
    case 'spockspock' :
      resultDisplay.innerHTML = 'You chose ' + userChoice + ' and the house chose ' + computerChoice + ' , ITS A DRAW!'
      break
  }
}