for (let i = 1; i <= 10; i++) {
  console.log(i)
}

let i = 1
while (i <= 10) {
  console.log(i)
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
let number = 1
for (let i = 0; i < games.length; i++) {
  const game = games[i]
  console.log(`${number}. ${game.title}`)
  number++
}

const players = [
  { name: 'Bemo-The-Alien', kills: 20, deaths: 12 },
  { name: 'FinnTheHuman', kills: 32, deaths: 7 },
  { name: 'Jake The Dog', kills: 14, deaths: 10 },
]

for (let i = 0; i < players.length; i++) {
  const player = players[i]
  const kdRatio = (player.kills / Math.max(1, player.deaths)).toFixed(2)
  console.log(`${player.name}: ${player.kills} kills, has a K/D ratio of ${kdRatio}`)
}
