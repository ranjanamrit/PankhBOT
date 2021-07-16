module.exports={
    name:'reactionroles',
    description:'reaction role bot',
    async execute(message,args,Discord,client){
        const channel = '864419463930314752'
        const Actor = message.guild.roles.cache.find(role => role.name === 'Actor')
        const Writers = message.guild.roles.cache.find(role => role.name === 'Writers')
        const SMM = message.guild.roles.cache.find(role => role.name === 'SMM')
        const GraphicDesigner = message.guild.roles.cache.find(role => role.name === 'Graphic Designer')
        const Photographers = message.guild.roles.cache.find(role => role.name === 'Photographers')
        const Marketing = message.guild.roles.cache.find(role=> role.name === 'Marketing')

        const actorreac='🎬'
        const photoreac='📷'
        const writerreac='📝'
        const smmreac='📱'
        const gdreac='🎨'
        const mrreac='🥁'

        let embed = new Discord.MessageEmbed()
        .setColor('#e42643')
        .setTitle('Choose your domain')
        .setDescription('Choosing a category will allow you to interact with your teammates!\n\n'
            + `${actorreac} for Actor\n` 
            + `${writerreac} for Writer\n`
            + `${smmreac} for SMM\n`
            + `${gdreac} for Graphic Designer\n`
            + `${photoreac} for Photographer\n`
            + `${mrreac} for Marketing`);

    let messageEmbed = await client.channels.cache.get("864419463930314752").send(embed);
    messageEmbed.react(actorreac);
    messageEmbed.react(writerreac);
    messageEmbed.react(smmreac);
    messageEmbed.react(gdreac);
    messageEmbed.react(photoreac);
    messageEmbed.react(mrreac);
    client.on('messageReactionAdd', async (reaction, user) => {
        try {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
    
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === actorreac) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(Actor);
                }
                if (reaction.emoji.name === writerreac) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(Writers);
                }
                if (reaction.emoji.name === smmreac) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SMM);
                }
                if (reaction.emoji.name === photoreac) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(Photographers);
                }
                if (reaction.emoji.name === gdreac) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(GraphicDesigner);
                }
                if (reaction.emoji.name === mrreac) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(Marketing);
                }
            } else {
                return;
            }
        } catch (err) {
            console.log(err)
        }
    });

    client.on('messageReactionRemove', async (reaction, user) => {

        try {
            if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch();
        if (user.bot) return;
        if (!reaction.message.guild) return;


        if (reaction.message.channel.id == channel) {
            if (reaction.emoji.name === actorreac) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(Actor);
            }
            if (reaction.emoji.name === writerreac) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(Writers);
            }
            if (reaction.emoji.name === smmreac) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(SMM);
            }if (reaction.emoji.name === photoreac) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(Photographers);
            }if (reaction.emoji.name === gdreac) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(GraphicDesigner);
            }
            if (reaction.emoji.name === mrreac) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(Marketing);
            }
        } else {
            return;
        }
        } catch (err) {
            console.log(err)
        }
    });
}
}