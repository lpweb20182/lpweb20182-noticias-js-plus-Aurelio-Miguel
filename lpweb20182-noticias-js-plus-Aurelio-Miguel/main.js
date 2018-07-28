var noticias = [];
var now = new Date();

if(now.getMonth()<9){
    var mes = '0'+(now.getMonth()+1);
}
else{
    var mes = (now.getMonth()+1);
}
var datetime = now.getFullYear()+"-"
                + mes+"-" 
                + now.getDate() + "T"  
                + now.getHours() + ":"  
               + now.getMinutes();
console.log(datetime);
function atualizarLista(noticia) {
    
    var data = noticia.dataehora;
    console.log(data);
    //var dataNoticia = new Date(data);
    //console.log(dataNoticia);
    if(data != 0){
        if(data <= datetime){
            var lista = document.getElementById('noticias-recentes-list');
            var li = document.createElement('li');
            li.setAttribute('id', 'noticia-' + noticia.id);
            li.setAttribute('class', 'noticia');
            li.innerHTML = '<p class="titulo" onclick="mostrarNoticia(' + noticia.id + ')">'
                + noticia.titulo +'<br>'
                + noticia.nome +'<br>'
                + noticia.dataehora +'<br>'
                + '</p>'
                + '<p class="conteudo">'
                + noticia.conteudo
                + '<br>'
                + '<span>------------------</span>'
                + '<br>'
                + '<button onclick="ocultarNoticia(' + noticia.id + ')">Fechar</button>';
                + '</p>';
                lista.appendChild(li);
        }
    }
    
}
//Data,hora, nome, e-mail, 
function salvar(form) {
    var nome = document.getElementById('frm-autor').value;
    var email = document.getElementById('frm-email').value;
    var dataehora = document.getElementById('frm-dataehora').value;
    var titulo = document.getElementById('frm-titulo').value;
    var conteudo = document.getElementById('frm-conteudo').value;
    var noticia = {
        id: noticias.length,
        nome: nome,
        email: email,
        dataehora: dataehora,
        titulo: titulo,
        conteudo: conteudo
    };
    noticias.push(noticia);
    atualizarLista(noticia);
    form.reset();
}

function mostrarNoticia(id) {
    var li = document.getElementById('noticia-' + id);
    for (var i = 0; i < li.childNodes.length; i++) {
        var node = li.childNodes[i];
        if (node.getAttribute('class') == 'conteudo') {
            node.setAttribute('style', 'display:inline');
        }
    }
}

function ocultarNoticia(id) {
    var li = document.getElementById('noticia-' + id);
    for (var i = 0; i < li.childNodes.length; i++) {
        var node = li.childNodes[i];
        if (node.getAttribute('class') == 'conteudo') {
            node.setAttribute('style', 'display:none');
        }
    }
}