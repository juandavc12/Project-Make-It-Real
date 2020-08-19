$(document).ready(function () {

$('#listchan li').mouseover(function () {
    $(this).css('color', 'white')
});

$('#listchan li').mouseout(function () {
    $(this).css('color', '#757477')
});


const $input = $("#newM");
const $send = $("#sendButton");
const $chat = $('.msg');

$($send).on('click', () => {
    event.preventDefault();

    let value = $input.val();
    
    if (value !== '') {
        const now = new Date(); //Horario actual

        const message = {
            time: `${now.getHours()}:${now.getMinutes()}`,
        content: value,
        author: {
            name: "Pedro Pepino Papas",
            image: "images.jpg",
        },
    };

        printTemplate(message)
        messages.push(message)

        $input.val("");

    }

});

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
         <div class=box>
         <div class="nameContact"><strong>${author.name}<span class="sendHour">${time}</span></strong></div>        
         <p class="content">${content}</p>
         </li> 
         </div>`;
         

         $($chat).append(template)
}

messages.forEach((message) => {
          printTemplate(message);  
        });

});





//_________________________________________________________



//     const $input = document.querySelector("#newM")
// const $send = document.querySelector("#sendButton")
// const $chat = document.querySelector(".msg")

// $send.addEventListener('click', () => {
//     event.preventDefault();
    
//     const value = $input.value;

//     if (value !== '') {
//         const now = new Date(); //Horario actual

//         const message = {
//             time: `${now.getHours()}:${now.getMinutes()}`,
//         content: value,
//         author: {
//             name: "Pedro Pepino Papas",
//             image: "images.jpg",
//         },
//     };

//         printTemplate(message)
//         messages.push(message)

//         $input.value="";

//     }

// });


// const messages = [
//     {
//         time: "5:21",
//         content: "Hola, ¿Como estan?",
//         author: {
//             name: "Pedro Pepino Papas",
//             image: "images.jpg",
//         },
//     },

//     {
//         time: "5:28",
//         content: "Bien",
//         author: {
//             name: "Elsa Capuntas",
//             image: "images.jpg",
//         },
//     },
//     {
//         time: "5:40",
//         content: "Todo excelente",
//         author: {
//             name: "Sumer Ceso",
//             image: "images.jpg",
//         },
//     },

// ];


// function printTemplate(message){
// const { author, time, content} = message //destructing

//     const template = `<li class="chatBox">
//         <img class="imgContact" src="${author.image}">
//         <div class="nameContact"><strong>${author.name}<span class="sendHour">${time}</span></strong></div>        
//         <p class="content">${content}</p>
//         </li>`; 
 

// $chat.innerHTML += template
// }

//     messages.forEach((message) => {
//       printTemplate(message);  
//     });
