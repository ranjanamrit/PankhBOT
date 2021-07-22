module.exports = {
    name:'clear',
    description: 'Clear messages',
    async execute(message,args){
        if(!args[0]) return message.reply("Please enter the amount of message you want to clear!")
        if(isNaN(args[0])) return message.reply("Please enter a real number");
        if(args[0]>150) return message.reply("Limit exceeded! Cannot delete more then 150");
        if(args[0]<1) return message.reply("Cannot delete less than 1!");

        await message.channel.messages.fetch({limit: args[0]}).then(messages => {
            message.channel.bulkDelete(messages)
        })
        
    }
}