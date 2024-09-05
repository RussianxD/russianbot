const mineflayer = require('mineflayer');
const readline = require('readline');

// Replace with your Minecraft server details
const HOST = 'localhost'; // Change this to your server address
const PORT = 25565; // Change this to your server port
const USERNAME = 'bot'; // Change this to your bot's username
const PASSWORD = ''; // Leave empty if not using a password

const bot = mineflayer.createBot({
  host: HOST,
  port: PORT,
  username: USERNAME,
  password: PASSWORD,
});

bot.once('spawn', () => {
  console.log('Bot has spawned in the world.');

  // Set up the chat listener
  bot.on('message', (message) => {
    console.log(`Chat Message: ${message.toString()}`);
  });

  // Set up the chat command listener
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on('line', (input) => {
    bot.chat(input);
  });

  // Send a message every hour
  setInterval(() => {
    bot.chat('This is an hourly message!');
  }, 3600000); // 3600000 ms = 1 hour
});

bot.on('error', (err) => {
  console.error('Error:', err);
});

bot.on('end', () => {
  console.log('Bot has been disconnected.');
});
