//copyright by hemanta gayen
setInterval(bot,2000);
var commentbox,button,comment,text = ["woowww","really cool🤩","perfect","❤️❤️💛❤️🤩💛💛😍","👍👍👍👍💕💕","🖤🧡💚🧡💚🧡💜💛💛💛❤️"];
function bot(){
comment = text[Math.floor(Math.random()*text.length)];
commentbox = document.querySelector("#composerInput");
button = document.querySelector("._54k8._52jg._56bs._21th._56bu");
 if(commentbox){commentbox.innerText=comment;button.click();console.log(comment);}
}