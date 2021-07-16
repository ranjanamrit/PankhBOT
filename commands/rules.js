const rules = `@everyone Please read the rules CAREFULLY. "I did not read the rules" DOES NOT work here.

:one: Be civil and respectful. Any sort of bullying, threats, discrimination or anything of that nature is not tolerated and may get you BANNED.

:two: Do not send rapid messages, spam private messages, spamming the message reactions. In one word, DO NOT SPAM.

:three: Do not HARASS users in any way, shape, or form. This includes-
   a) Un-necessary mentions.
   b) Tagging someone multiple times within the same conversation.

:four: DO NOT post NSFW content in ANY channel. If you do so, you will be RESTRAINED or BANNED depending on the ferocity.

:five: Self promotion is allowed in the #🔰-promotions-🔰 and DO NOT post the SAME LINK more than once.

:six: Use the channels APPROPRIATELY w.r.t their entitled function.
    
:seven: FOLLOW the rules.IGNORING them might put you in risk of getting BANNED.

:eight: If you are being HARRASED/BULLIED by a member of this Discord server or if you encounter any issue, please REPORT in the #❗help-and-support❗ with proof and tag any of the @Moderator . He/she will be RESTRAINED/BANNED depending on the ferocity.`
module.exports={
    name:'rules',
    description: 'rule command',
    execute(message,args,client){
        client.channels.cache.get("864411289711411201").send(rules)
    }
}