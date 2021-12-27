const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

if (context.params.event.content.startsWith('?ping')) {
  let latency = new Date() - new Date(context.params.event.timestamp);
  await lib.discord.channels['@0.1.1'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    content: ``,
    embed: {
      title: ``,
      description: `Time Taken: 0.${latency}s`,
      color: 0x0000FF,
    }
  });
}
