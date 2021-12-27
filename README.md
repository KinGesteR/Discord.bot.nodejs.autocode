# Simple Bot Prefix Example

This will show you how prefixed bot commands can work in Discord with Autocode.

<img src="/readme/gallery/ping.png" style="margin: 0 auto; display: block;">

If you're coming from something like discord.js, you might be used to this: 

```javascript
client.on('message', message => {
  if (message.content === '!ping') {
    message.channel.send('Pong.');
  }
});
```

That exact same logic can now be found in `functions/events/discord/message/create.js`!
Autocode uses files and events to trigger. So that file is listening for the `messages.create`
event from Discord.

What this means is that every time a messageis created in your server, 
and if that message starts with `!ping`, it will respond with `Pong!`.

# Setting a different prefix

When you first install this app, it'll ask for what prefix you want your commands to use. 
This can be anything, but the most common choice is `!`. 

If at any time you want to change it, you can also do so by going to the **environment variables** 
section in the left sidebar and clicking the `2 secrets` button:

<img src="/readme/env-button.png" style="margin: 0 auto; display: block;">

That's about it! This is by far the simplest example of what you can do. Happy hacking!