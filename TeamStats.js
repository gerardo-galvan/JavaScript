let team = {
    _players: [{
    firstName: 'Pablo',
    lastName: 'Sanchez',
    age: 11
    },
     {
        firstName: 'Pete', 
        lastName: 'Wheeler', 
        age: 54
      }
    ],
    
    _games: [{
    opponent: 'Broncos',
    teamPoints: 42,
    opponentPoints: 27
    }],
  
  get players() {
    return this._players;
  },
  
  get games() {
    return this._games;
  },
  
  addPlayer(firstName, lastName, age) {
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      };
      this.players.push(player);
  },
  
  addGame(opponent,teamPoints, opponentPoints) {
    let game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    };
    this.games.push(game);
  }
  };
  
  //console.log(team);
  
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addGame('day',55,40);


team.players();
team.games();
  