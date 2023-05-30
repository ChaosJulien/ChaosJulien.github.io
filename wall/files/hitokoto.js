/*
create by  探姬 2021.01.01
 @<psionic.technology@foxmail.com>
*/
function hitokoto(){
    fetch('https://v1.hitokoto.cn/')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            var hitokoto = document.getElementById('hitokoto');
            hitokoto.innerText = data.hitokoto;
            var hitokotoauthor = document.getElementById('hitokotoauthor');
            var fromwho =null;
             if (data.from_who!=null){
                fromwho+=data.from_who;
            }
            if (data.from!=null){
                fromwho ="————『"+data.from+"』";
            }
           
            hitokotoauthor.innerText=fromwho;
        })
        .catch(function (err) {
            console.error(err);
        })
        
}
window.onlaod=function()
{
	hitokoto();
};


setInterval(function () {
	hitokoto();
}, 720000);
