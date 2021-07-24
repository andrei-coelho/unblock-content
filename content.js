
if(window.location.hostname.search(/folha/gi) >= 0 ) folha();

if(window.location.hostname.search(/oglobo/gi) >= 0 ) oglobo();


function oglobo(){

    let article = document.getElementsByTagName('article')[1];
    let content = article.getElementsByClassName('article__content-container')[0].innerHTML;
    setTimeout(() => {
        document.body.style.overflow = 'auto';
        document.body.style.position = 'static';
        add(content)
    }, 1500);
    

}

function folha(){
    
    var statusScroll = false;

    document.addEventListener('scroll', _ => {
    
        if(statusScroll) return;
        statusScroll = true;
    
        setTimeout(() => {
    
            var loop = setInterval(e => {
                let paywall = document.getElementById('paywall-flutuante');
                if(paywall != null){
                    paywall.style.display = 'none';
                    clearInterval(loop)
                }
            },500)

            add(document.getElementById('c-news').innerHTML)
            
        }, 1000);
        
    })

	
}


function add(data){
    let template = `<div id="__DataTemplate__" style="
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
        z-index:999999999999;
    "><button id="__closeDataTemplate__" style="float:right;">fechar</button>
    ${data}
    </div>`;

    document.body.innerHTML = template + document.body.innerHTML;

    document.getElementById('__closeDataTemplate__').addEventListener('click', _ => {
        document.getElementById('__DataTemplate__').style.display = 'none';
    })
}