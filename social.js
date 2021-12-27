const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let message = context.params.event.content;

if (message.startsWith(`?social`)) {
  await lib.discord.channels['@0.0.6'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    content: `**KinGesteR's Socials :** <:peepoBlanket:897394928961867836>
YouTube -> <https://bit.ly/YouTube-KE>
Instagram -> https://instagram.com/kingester23/
Twitter -> <https://twitter.com/KiinGesteR>
twitch -> <https://twitch.tv/kiingester>
 `
  });
}
