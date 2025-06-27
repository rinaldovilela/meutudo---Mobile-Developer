const players = [
  {
    name: "Mario",
    speed: 4,
    manobrability: 3,
    power: 3,
    points: 0,
  },
  {
    name: "Peach",
    speed: 3,
    manobrability: 4,
    power: 2,
    points: 0,
  },
  {
    name: "Yoshi",
    speed: 2,
    manobrability: 4,
    power: 3,
    points: 0,
  },
  {
    name: "Bowser",
    speed: 5,
    manobrability: 2,
    power: 5,
    points: 0,
  },
  {
    name: "Luigi",
    speed: 3,
    manobrability: 4,
    power: 4,
    points: 0,
  },
  {
    name: "Donkey Kong",
    speed: 2,
    manobrability: 2,
    power: 5,
    points: 0,
  },
];

const weapons = [
  { name: "Casco Vermelho", effect: 2 },
  { name: "Casco Azul", effect: 4 },
  { name: "Casca de Banana", effect: 1 },
  { name: "Cogumelo de Supervelocidade", effect: 3 },
  { name: "Raio", effect: 5 },
  { name: "Invencibilidade", effect: 0 },
];

async function getWeapon() {
  let diceRoll = rollDice();
  if (diceRoll === 6) {
    console.log("🎯 Você obteve uma arma especial!");
    return weapons[Math.floor(Math.random() * weapons.length)];
  } else {
    console.log("🎯 Não há arma especial. O confronto termina sem ataque!");
    return null;
  }
}

async function logWeaponAttack(character, weapon, opponent) {
  if (weapon) {
    console.log(
      `${character.name} usou a arma "${weapon.name}" e causou ${weapon.effect} pontos de dano em ${opponent.name}!`
    );
    opponent.points -= weapon.effect;
  }
}

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
  let random = Math.random();
  let result;

  switch (true) {
    case random < 0.33:
      result = "reta";
      break;
    case random < 0.66:
      result = "curva";
      break;
    default:
      result = "confronto";
  }

  return result;
}

async function logRollResult(characterName, block, diceResult, attribute) {
  console.log(
    `${characterName} 🎲 rolou um dado de ${block} e obteve ${diceResult} + ${attribute} = ${
      diceResult + attribute
    }`
  );
}

async function playRaceEngine(character1, character2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`\n🏁 Round ${round} 🏁`);

    let block = await getRandomBlock();
    console.log(`🚧 Bloco: ${block}`);

    await loading();

    let dice1 = await rollDice();
    let dice2 = await rollDice();

    let totalTestSkill1 = 0;
    let totalTestSkill2 = 0;

    // Turbo Aleatório (+1)
    let turbo1 = Math.random() < 0.5 ? 0 : 1; // A cada round, tem 50% de chance de ganhar o turbo
    let turbo2 = Math.random() < 0.5 ? 0 : 1;

    if (block === "reta") {
      totalTestSkill1 = dice1 + character1.speed + turbo1;
      totalTestSkill2 = dice2 + character2.speed + turbo2;

      await logRollResult(
        character1.name,
        "speed",
        dice1,
        character1.speed + turbo1
      );
      await logRollResult(
        character2.name,
        "speed",
        dice2,
        character2.speed + turbo2
      );
    }
    if (block === "curva") {
      totalTestSkill1 = dice1 + character1.manobrability + turbo1;
      totalTestSkill2 = dice2 + character2.manobrability + turbo2;

      await logRollResult(
        character1.name,
        "manobrability",
        dice1,
        character1.manobrability + turbo1
      );
      await logRollResult(
        character2.name,
        "manobrability",
        dice2,
        character2.manobrability + turbo2
      );
    }
    if (block === "confronto") {
      let powerResult1 = dice1 + character1.power;
      let powerResult2 = dice2 + character2.power;

      await logRollResult(character1.name, "power", dice1, character1.power);
      await logRollResult(character2.name, "power", dice2, character2.power);

      if (powerResult1 > powerResult2 && character2.points > 0) {
        console.log(
          `🏆 ${character1.name} venceu o confronto! ${character2.name} perdeu 1 ponto`
        );
        character2.points--;
        let weapon = await getWeapon();
        await logWeaponAttack(character1, weapon, character2);
      } else if (powerResult2 > powerResult1 && character1.points > 0) {
        console.log(
          `🏆 ${character2.name} venceu o confronto! ${character1.name} perdeu 1 ponto`
        );
        character1.points--;
        let weapon = await getWeapon();
        await logWeaponAttack(character2, weapon, character1);
      } else {
        console.log("🤝 Empate no confronto! Nenhuma ação.");
      }
    }

    // Lógica para quem venceu o round
    if (block !== "confronto") {
      if (totalTestSkill1 > totalTestSkill2) {
        character1.points += 1;
        console.log(
          `🏆 ${character1.name} venceu o bloco de ${block} e ganhou 1 ponto!`
        );
        // Ganho do turbo
        let turboBonus = Math.random() < 0.5 ? 1 : 0; // Chance de ganhar o turbo
        if (turboBonus === 1) {
          console.log(`${character1.name} ganhou um turbo (+1)!`);
          character1.speed += 1; // Aumento temporário da velocidade
        }
      } else if (totalTestSkill2 > totalTestSkill1) {
        character2.points += 1;
        console.log(
          `🏆 ${character2.name} venceu o bloco de ${block} e ganhou 1 ponto!`
        );
        // Ganho do turbo
        let turboBonus = Math.random() < 0.5 ? 1 : 0; // Chance de ganhar o turbo
        if (turboBonus === 1) {
          console.log(`${character2.name} ganhou um turbo (+1)!`);
          character2.speed += 1; // Aumento temporário da velocidade
        }
      } else {
        console.log(`🤝 Empate no bloco de ${block}! Nenhum ponto ganho.`);
      }
    }
  }
}

async function declareWinner(character1, character2) {
  console.log("Resultado final: \n");
  console.log(`${character1.name}: ${character1.points} ponto(s)`);
  console.log(`${character2.name}: ${character2.points} ponto(s)`);

  if (character1.points > character2.points)
    console.log(`\n${character1.name} venceu a corrida! Parabéns! 🏆 \n`);
  else if (character2.points > character1.points)
    console.log(`\n${character2.name} venceu a corrida! Parabéns! 🏆 \n`);
  else console.log("A corrida terminou em empate! 🤝 \n");
}

// ADICIONEI UM LOADING  PARA DAR A IMPRESSÃO DE CARREGAMENTO NO JOGO
// OBS: FOI UM DESAFIO FAZER O LOADING SUMIR DEPOIS QUE TERMINA KKK!

async function loading() {
  const frames = ["\\", "|", "/", "-"];
  let i = 0;

  const loadDuration = Math.floor(Math.random() * 3) + 1;

  process.stdout.write("\r                                 \r");

  process.stdout.write(" Carregando... ");

  return new Promise((resolve) => {
    const interval = setInterval(() => {
      process.stdout.write(`\r${frames[i]}`);
      i = (i + 1) % frames.length;
    }, 200);

    setTimeout(() => {
      clearInterval(interval);
      process.stdout.write("\r                      \r");
      console.log("");
      resolve();
    }, loadDuration * 1000);
  });
}

(async function main(params) {
  console.log(` 🏁🚦 Iniciando corrida Mario Kart!`);

  await loading();

  // CRIEI UM ARRAY PARA SELEÇÃO ALEATÓRIA DOS JOGADORES
  console.log("Seleção de jogadores...");

  await loading();
  const player1 = players[Math.floor(Math.random() * players.length)];

  let player2;
  do {
    player2 = players[Math.floor(Math.random() * players.length)];
  } while (player2 === player1);

  console.log(`\nJogadores selecionados: ${player1.name} e ${player2.name}`);

  await loading();

  await playRaceEngine(player1, player2);
  await declareWinner(player1, player2);
  console.log("🏁🚦 Corrida finalizada! Obrigado por jogar!");
})();
