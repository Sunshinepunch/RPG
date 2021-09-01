
export function rollDice(min, max) {
  return (min-1) + Math.ceil(Math.random() * (max-min + 1));
  }

// roll dice + attack modifier - enemy defense modifier = amount subtracted from HP