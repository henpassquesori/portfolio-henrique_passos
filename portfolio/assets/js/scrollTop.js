window.onscroll = function () {
    scroll();
}

function scroll() {
    let btnTop = document.getElementById('btnTop')
    if(document.documentElement.scrollTop > 50) {
        btnTop.style.display = 'block';
    }else {
        btnTop.style.display = 'none';
    }
}

function irAoTopo() {
    document.documentElement.scrollTop = 0;
}