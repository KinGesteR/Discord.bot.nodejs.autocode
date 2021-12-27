const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let message = context.params.event.content;

//Bot prefix is [ ? ]
if (message.startsWith(`?help`)) {
  await lib.discord.channels['@0.0.6'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    content: '',
    embed: {
      title: `BOT HELP`,
      description: `Bot prefix : \`?\`
\`\`\`fix
ping
social
help
userinfo
\`\`\`
Enjoy
`,
      color: 0x0000FF,
    }
  });
}
