const team = {
  _players: [
    {firstName: 'Kyle', lastName: 'Lowry', age: 32},
    {firstName: 'Danny', lastName: 'Green', age: 31},
    {firstName: 'Kawhi', lastName: 'Leonard', age: 27}
    ],
    
  _games: [
    {opponent: '76ers', teamPoints: 101, opponentPoints: 126},
    {opponent: 'Caveliers', teamPoints: 126, opponentPoints: 110},
    {opponent: 'Pacers', teamPoints: 99, opponentPoints: 96}
    ],
  
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  
  addPlayer(firstName, lastName, age) {
    const player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this._players.push(player);
  },
  
  addGame(opponentName, teamPoints, opponentPoints) {
    const game = {
      opponent: opponentName,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    };
    this._games.push(game);
  },
  
  totalWins() {
    winCount = 0;
    for (let game in team.games) {
      if (team.games[game].teamPoints > team.games[game].opponentPoints) {
        winCount += 1;
      }
    }
    return winCount;
  },
  
  totalLosses() {
    return this._games.length - this.totalWins();
  }
};

team.addPlayer('CJ', 'Miles', 31);
team.addPlayer('OG', 'Anunoby', 21);
team.addPlayer('Lorenzo', 'Brown', 28);
team.addPlayer('Jordan', 'Loyd', 25);
team.addPlayer('Jonas', 'Valanciunas', 26);
team.addPlayer('Greg', 'Monroe', 28);
team.addPlayer('Malachi', 'Richardson', 22);
team.addPlayer('Fred', 'VanVleet', 24);
team.addPlayer('Norman', 'Powell', 25);
team.addPlayer('Pascal', 'Siakam', 24);
team.addPlayer('Delon', 'Wright', 26);
team.addPlayer('Serge', 'Ibaka', 29);

team.addGame('Nuggets', 86, 95);
team.addGame('Blazers', 122, 128);
team.addGame('Warriors', 113, 93);

console.log(`Total games: ${team.games.length}\nTotal wins: ${team.totalWins()}\nTotal losses ${team.totalLosses()}`);
