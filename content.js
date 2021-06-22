
var statusScroll = false;

document.addEventListener('scroll', _ => {
    
    if(statusScroll) return;
    statusScroll = true;

    setTimeout(() => {

        if(window.location.hostname.search(/folha/gi) >= 0 ) folha();

        document.getElementById('__closeDataTemplate__').addEventListener('click', _ => {
            document.getElementById('__DataTemplate__').style.display = 'none';
        })
		
    }, 1000);
    
})


function folha(){
	var loop = setInterval(e => {
		let paywall = document.getElementById('paywall-flutuante');
		if(paywall != null){
			paywall.style.display = 'none';
			clearInterval(loop)
		}
	},500)
    document.body.innerHTML = template(document.getElementById('c-news').innerHTML) + document.body.innerHTML;
}


function template(data){
    return `<div id="__DataTemplate__" style="
        width: 90%;
        height: 100%;
        margin: auto;
        -webkit-box-shadow: 0px 0px 26px 0px rgba(0,0,0,0.65); 
        box-shadow: 0px 0px 26px 0px rgba(0,0,0,0.65);
        border-radius: 20px;
        padding: 10px;
        position:absolute;
        top:0;
        left:5%;
        background-color: white;
        overflow-y: scroll;
        z-index:9999999999;
    "><button id="__closeDataTemplate__" style="float:right;">fechar</button>
    ${data}
    </div>`;
}