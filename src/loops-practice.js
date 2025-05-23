for (let i = 1; i <= 10; i++) {
  console.log(i) /// Ex. of for loop
}

let i = 1
while (i <= 10) {
  console.log(i) /// Ex. of while loop
  i++
}

const games = [
  { title: 'Red Dead Redemption 2' },
  { title: 'Ghost of Tsushima' },
  { title: 'Lego Batman' },
  { title: 'Bioshock' },
  { title: 'Minecraft' },
  { title: 'Marvel Rivals' },
  { title: 'A Way Out' },
  { title: 'The Last of Us' },
  { title: 'Destiny 2' },
  { title: 'Call of Duty: Modern Warfare(2019)' },
]
let number = 1 // to keep track of the number of games in the list
for (let i = 0; i < games.length; i++) {
  const game = games[i]
  console.log(`${number}. ${game.title}`) // prints the game title with a number in front of it
  number++
}

const players = [
  { name: 'Bemo-The-Alien', kills: 20, deaths: 12 },
  { name: 'FinnTheHuman', kills: 32, deaths: 7 },
  { name: 'Jake The Dog', kills: 14, deaths: 10 },
]

for (let i = 0; i < players.length; i++) {
  const player = players[i]

  const killDeathRatio = (player.kills / Math.max(1, player.deaths)).toFixed(2) // Calculate K/D ratio and ensure no division by zero
  console.log(
    `${player.name} has ${player.kills} kills and ${player.deaths} deaths. Overall has a K/D ratio of ${killDeathRatio}`,
  ) // prints the player's name and K/D ratio
}
