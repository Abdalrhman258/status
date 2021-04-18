var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "فى واحد عمل الاغنية ديه بالعربى و عجبتنى 😇",
assets : {
large_image : "astronaut-in-the-ocean",
large_text : "Astronaut In The Ocean" // THIS WILL SHOW AS "Playing <Status>" from the outisde
},
buttons : [{label : "العربية" , url : "https://vm.tiktok.com/ZSJkRrkYm/"},{label : "الاصلية",url : "https://youtu.be/MEg-oqI9qmw"}]
}
})
})
client.login({ clientId : "833442377921200178" }).catch(console.error);