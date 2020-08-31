$(document).ready(function () {

$('#listchan li').mouseover(function () {
    $(this).css({'color': 'white', 'background-color': 'black', 'margin-color': 'black', 'cursor': 'pointer'})
    $(this).css('cursor', 'pointer')
});

$('#listchan li').mouseout(function () {
    $(this).css({'color': '#757477', 'background-color': 'transparent'})
});

$('#listchan li').on('click', function () {
    const $channel = $(this).index();
    console.log($channel);



const $input = $("#newM");
const $send = $("#sendButton");
const $chat = $('.msg');

const chan = [
    {
        nombre: '#course',
        $message: []
    },
    {
        nombre: '#css',
        $message: []
    }
]

const $selectChan = chan[$channel].$message;

$send.on('click', () => {
    event.preventDefault();
    scrollDown(1000);
   
    let value = $input.val();
    
    if (value !== '') {
        const now = new Date(); //Horario actual
        const minutes = `${now.getMinutes()}`
        
        const message = {
            time: `${now.getHours()}:${minutes}`,
            content: value,
            author: {
                name: "Pedro Pepino Papas",
                image: "images.jpg",
        },
    };

        printTemplate(message)
        $selectChan.push(message)

        $input.val("");
        
        console.log(chan)
        
    }
 
});

function printTemplate($message){
    const { author, time, content} = $message

    const template = `<li class="chatBox">
         <img class="imgContact" src="${author.image}">
         <div>
         <div class="nameContact"><strong>${author.name}<span class="sendHour">${time}</span></strong></div>        
         <p class="content">${content}</p>
         </li> 
         </div>`;
         
         scrollDown(10);
         $chat.append(template)

}

        $selectChan.forEach(($message) => {
          printTemplate($message);            
        });

   

function scrollDown (timeAnimation) {
    $(".msg").animate({ scrollTop: $('.msg')[0].scrollHeight}, timeAnimation);
}     

});
        

// $.get("https://jsonplaceholder.typicode.com/comments").then((response) => {
//         response.forEach((result) => {
//             const now = new Date();
//             const message = {
//                 time: `${now.getHours()}:${now.getMinutes()}`,
//                 content: result.body,
//                 author: {
//                     name: result.name,
//                     image: "images.jpg",
//             },
//         };
        
//         printTemplate(message)
//         messages.push(message);
//         });

       
// });

});