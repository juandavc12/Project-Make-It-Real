const $chat = document.querySelector(".msg")
const messages = [
    {
        time: "5:21",
        content: "Hola, ¿Como estan?",
        author: {
            name: "Pedro Pepino Papas",
            image: "images.jpg",
        },
    },

    {
        time: "5:28",
        content: "Bien",
        author: {
            name: "Elsa Capuntas",
            image: "images.jpg",
        },
    },
    {
        time: "5:40",
        content: "Todo excelente",
        author: {
            name: "Sumer Ceso",
            image: "images.jpg",
        },
    },

];


function printTemplate(message){
const { author, time, content} = message //destructing

    const template = `<li class="chatBox">
        <img class="imgContact" src="${author.image}">
        <div class="nameContact"><strong>${author.name}<span class="sendHour">${time}</span></strong></div>        
        <p class="content">${content}</p>
        </li>`; 
 

$chat.innerHTML += template
}

for (let i = 0 ; i < messages.length ; i++){
    
    setTimeout(() => {
        printTemplate(messages[i]);
    }, 2* 1000 *i);
}


  



