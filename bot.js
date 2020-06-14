const Discord = require('discord.js');
const axios = require('axios');

const bot = new Discord.Client();

function capitalise(str){
	return str.replace(/\b[a-z]/g, function(letter) { return letter.toUpperCase();})
}

function checkLegendary(legendary){
  if(legendary)
    return ' (Legendary)';
  return '';
}

function getEvolutions(evolutions){
  if(evolutions === 'undefined'){
    return '';
  }
  else if(evolutions.includes(',')){
    return `Evolutions: ${capitalise(evolutions)}\n`;
  }
  return `Evolution: ${capitalise(evolutions)}\n`;
}

function stringify(pokemon){
	const name = capitalise(pokemon.name);
	const type = capitalise(pokemon.type);
  const strength = capitalise(pokemon.strong);
  const weak = capitalise(pokemon.weak);
  const legendary = checkLegendary(pokemon.legendary);
  const evolutions = getEvolutions(pokemon.evolutions);
	const str = `${name} - #${pokemon.number}${legendary}\nThe ${pokemon.classification}\nType: ${type}\nStrong against: ${strength}\nWeak against: ${weak}\n${evolutions}`;
	return str;
}

function getImage(pokemon){
  if(pokemon.number){
    return `./images/${pokemon.number}.png`
  }
  return ''
}

bot.on('ready', () => {
  console.log(`${bot.user.tag} is ready!`)
});

bot.on('message', async(msg) => {
  if (msg.content === "dexy ping") {
    msg.channel.send("Pika!")
  }
  else if(msg.content.startsWith("dexy ")){
  	const args = msg.content.substring(5).split(' ');
    try{
  	const response = await axios.get(`http://127.0.0.1:8888/pokemon?name=${args[0]}`);
  		msg.channel.send(stringify(response.data), {files: [getImage(response.data)]});
  	}catch(errorObj){
      console.log(errorObj.data);
      msg.channel.send("I dont speak that language");
    }
  }
});

bot.login('');
