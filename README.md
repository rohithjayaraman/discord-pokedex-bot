# discord-pokedex-bot
A discord bot that can tell you about any pokemon across the first 6 generations. Ask this bot about any pokemon and it will give you details about the pokemon such as name, type, strengths, weaknesses, evolutions, etc along with an image of the pokemon as well.

## Copyright notice
The data used in this project was taken from multiple sources all of which are mentioned at the end of this file. All of it is the intellectual property of the Pokémon Company and its affiliates, Nintendo, Creatures, inc., and GAME FREAK, inc. and is protected by various copyrights and trademarks unless explicitly mentioned in any of the sources. This project is a purely educational one built for improving understanding and as a hobby. The intellectual property used in this project is purely for educational purposes only. This project and any of the data in it should not be used for commerical purposes and if you do so, it is at your own legal risk.

## How it works
This bot is mainly built up of 2 parts: a Python notebook and a NodeJS script

The python notebook is responsible for getting the data, querying it and returning the required response. I have exposed my python notebook as a REST API server (which is available only locally) through a package known as jupyter_kernel_gateway (see Pre-requisites for more information).

My NodeJS script is a simple one that connects to discord and listens for a message. If someone has requested information about a pokemon then it makes a simple GET request to the API server to get the data and then returns the data in the required format.

## How to use this bot
### Pre-requisites
* Jupyter along with numpy and pandas
* Install and setup jupyter_kernel_gateway by following the instructions [here](https://ndres.me/post/jupyter-notebook-rest-api/)
* NodeJS (version 10.16) along with axios and discord.js packages

### Discord bot token
Place your discord bot's token in the `bot.js` file. Check out [this page](https://www.sitepoint.com/discord-bot-node-js/) for more information on how to get your token

### Running the application
* Run the python notebook as an API server via terminal using the command `jupyter kernelgateway --KernelGatewayApp.api='kernel_gateway.notebook_http' --KernelGatewayApp.seed_uri='path/to/your/notebook'`
* Run the NodeJS script using the `yarn serve` command or by typing `node bot.js`
* Once both the servers are running, you can navigate to the discord channel where the bot is present and type `dexy <pokemon_name>` and the bot will reply with the details of the pokemon if it exists in the database

## Sources
* [Pokemon Data](https://www.kaggle.com/rounakbanik/pokemon)
* [Pokemon Evolution Data](https://www.kaggle.com/mrdew25/pokemon-database)
* [Pokemon Images](https://www.kaggle.com/kvpratama/pokemon-images-dataset)
