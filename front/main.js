var body=document.getElementById("body");
var Backgrounds=new Array();
Backgrounds=['url("BG.jpg")','url("BG1.jpg")','url("BG2.jpg")'];
var count=0;
function change(){
    body.style.background=Backgrounds[count];
    body.style.backgroundSize="cover";
    body.style.backgroundRepeat="no-repeat";
    count=(count+1)%Backgrounds.length;
    setTimeout(change, 1500);
}
   setTimeout(change, 1500);

   $(function(){
     var socket=io.connect();
     var $messageForm = $('#messageForm');
     var $message = $('#message');
     var $chat = $('#chat');

     $messageForm.submit(function(e){
       e.preventDefault();
       //console.log("submitted");
       socket.emit('send message',$message.val());
       $message.val('');
     });

     socket.on('new message',function(data){
       $chat.append('<div class="well">'+data.msg+'</div>');
     });
     socket.on('reply message',function(data){
       $chat.append('<div class="well">'+data.msg+'</div>');
     });
   });
