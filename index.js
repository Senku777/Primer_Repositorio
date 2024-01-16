const Telebot= require("telebot");
const constantes= require ("./constantes.js");
const bot = new Telebot({
token: constantes.Token
})

//Casas de Hogwarts
const house= ['Gryffindor','Slytherin','Hufflepuff','Ravenclaw'];

//Funcion para elegir una casa aleatoria

function sort(){
return house[Math.floor(Math.random()*house.length)];
}

bot.on(["/start","/hola"], (msg)=>{
    bot.sendMessage(msg.chat.id, `Hola ${msg.chat.username} Bienvenido al Sombrero Seleccionador.Para saber a que casa perteneces , escribe /sort`);
})

bot.on('/sort',(msg) =>{
    const house = sort();
   return msg.reply.text(`Tu casa es ${house} .!Felicitaciones!`);
})

bot.start();