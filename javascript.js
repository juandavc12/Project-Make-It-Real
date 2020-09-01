$(document).ready(function () {

    $('#listchan li').mouseover(function () {
        $(this).css({'color': 'white', 'background-color': 'black', 'margin-color': 'black', 'cursor': 'pointer'})
        $(this).css('cursor', 'pointer')
    });
    
    $('#listchan li').mouseout(function () {
        $(this).css({'color': '#757477', 'background-color': 'transparent'})
    });
    
    const $input = $("#newM");
    const $send = $("#sendButton");
    const $chat = $('.msg');
    let chan = [
        {
            nombre: '#course',
            $message: []
        },
        {
            nombre: '#css',
            $message: []
        }
    ]

    let $channel = 0;
    $('#listchan li').on('click', function () {

        $chat.empty();
        $channel = $(this).index();
    
        chan[$channel].$message.forEach((message) => {
            printTemplate(message);            
        });
    });

    $send.on('click', () => {
        scrollDown(500);
        event.preventDefault();
        let content = $input.val();

        if (content !== '') {
   
            const now = new Date(); //Horario actual
            const minutes = `${now.getMinutes()}`

            const message = {
                time: `${now.getHours()}:${minutes}`,

                content: content,
                author: {
                    name: "Pedro Pepino Papas",
                    image: "images.jpg",
                }
            }
            $chat.empty();
            chan[$channel].$message.push(message);
            console.log(chan);

            $input.val('')
        }

        chan[$channel].$message.forEach((message) => {
            printTemplate(message);            
        });
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
            
            // scrollDown(5)
            $chat.append(template)
            
    }
    function scrollDown (timeAnimation) {
        $(".msg").animate({ scrollTop: $('.msg')[0].scrollHeight}, timeAnimation);
    }  

        

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
//         chan[$channel].$message.push(message);
//         });

       
// });

});