# SuperSimpleBot
The simplest Discord bot you will ever see.
This readme will detail a tutorial to set up this bot for your own, and how to make changes to it!

![pingpong](https://user-images.githubusercontent.com/32719081/50377168-3f0dd980-05e6-11e9-8ecd-4e59d425660b.PNG)

This bot is nothing special on its own, but you can add commands to it to make it interesting and useful for your server.
To further develop your bot from here, use [this tutorial](https://anidiots.guide/)

## Contents
This repository has two files, `config.json` and `index.js`, that are necessary for your bot to run.
* `config.json` holds your bot's token and prefix to call the command. There is a token in the file already, but that MUST be changed!
* `index.js` holds all of the bot's code; in this case, what to say when a user enters the command. There are 3 commands, each with their own response:
  * `!ping` → `pong!`
  * `!bada-bing` → `bada-boom!`
  * `!creeper` → `aww man`

### Downloading the Files
In order to run the bot, you will need to download the files from GitHub to your local machine. In the main page of the repository, click on the green "Clone or Download" button. Click on "Download ZIP" and extract the files once they have been downloaded to the machine (You can also clone the repository, if you know how to do that). You can move the folder inside to whatever location you would like. You can alternatively only copy `config.json` and `index.js`, but make sure they are in their own folder on your machine.

## App and Bot Setup
The first thing you should do is create your app on the [Discord developer portal website](https://discordapp.com/developers/applications/).
Log in to a Discord account and click on the "Create an application" button to create your app.

You can name your app anything you want, but I named mine "Test Bot App"

![testbot](https://user-images.githubusercontent.com/32719081/50377172-43d28d80-05e6-11e9-8583-0e6317029887.PNG)

### Creating a Bot Account
Now, you are going to add a bot to your app. Click on the "Bot" tab in the sidebar on the left and then "Add Bot", then "Yes, Do It".
You can mess around with the `Username` and `Icon` fields for now, but don't touch the `Requires OAuth2 Code Grant` switch!

![buildbot](https://user-images.githubusercontent.com/32719081/50377165-3ae1bc00-05e6-11e9-8598-2206f52db2db.PNG)

Once the bot is configured to your liking, navigate to the "OAuth2" tab in the sidebar. You should see a list of checkboxes under the menu "scopes". For now, only check the "bot" option and then copy the link that shows up. For more information on OAuth2 and scopes, check out [this link](https://discordapp.com/developers/docs/topics/oauth2).

![oauth2](https://user-images.githubusercontent.com/32719081/50377167-3cab7f80-05e6-11e9-8d48-6816eed6991b.PNG)

Paste and open the link in a new tab. A menu should pop up where you can add your bot to a server. Choose a server from the drop-down and the bot should join that server! Note: you must have "Manage Server" permissions to add a bot to a server.

![botserver](https://user-images.githubusercontent.com/32719081/50377164-3917f880-05e6-11e9-97e3-fff7f935e8d6.PNG)

### Bot Token
Next you will need your Token. This is what the bot uses to authenticate with the Discord server. It is important to NEVER SHARE THIS PUBLICLY! If someone gains access to the token, they can use the bot to do harmful things to your server.

To get your token, go to the "Bot" tab of your app, and it should show up under the bot you had created. You can copy it for later or view it by clicking "Click to Reveal Token"

## Prerequisites
Before you can start your bot, you should install two programs:
* [Node.js](https://nodejs.org) is required.
* A JavaScript IDE for editing your bot's code. Just using Notepad for JavaScript is not enough. Use a program such as [Visual Studio Code](https://code.visualstudio.com/)

You will also need a CLI. The windows console or PowerShell is fine, but you can also use an external one such as Git Bash.

Once you have Node.js, you need to initialize your bot folder with NPM, or the Node Package Manager. Navigate to your folder in your command prompt (a shortcut for this is Shift + Right Click when you are in the folder where your files are, and clicking on "Command Prompt Here" or "Powershell Here")

![powershell](https://user-images.githubusercontent.com/32719081/50377169-40d79d00-05e6-11e9-82dd-43de052ac008.PNG)

Type the following commands:
* `npm init -y`
* `npm install discord.js`

You can tell the commands worked if a new folder `node_modules` and a `package.json` file were created in your folder.

![botfiles](https://user-images.githubusercontent.com/32719081/50377162-374e3500-05e6-11e9-92bc-364d8bf55021.PNG)

Finally, before you can start your bot, you will need to integrate your bot's token into the code. Open the `config.json` file in the folder with Notepad or another text editor, and replace what is in quotes after `token` with the token you have copied from the bot you created.

![config](https://user-images.githubusercontent.com/32719081/50377190-c3f8f300-05e6-11e9-9f9f-a529d139e69a.PNG)

## Starting the Bot (Finally)
When you have finished setup, you can run your bot by going back into the command prompt in your folder. Type in the command `node index.json`

The bot in your server should go online, and you have set up your bot! The bot is a simple ping-pong bot, but the code has been written so it is easy to add commands to the bot (using your IDE). Try typing `!ping` and see what happens.

Again, refer to [this tutorial](https://anidiots.guide/) if you want to learn more about developing bots with Node.js. This bot simply lays out the guidelines for developing a bot of your own. Good luck, and make great things!
