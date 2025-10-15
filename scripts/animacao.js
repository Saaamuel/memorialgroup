/* acoes de navegacao hader-nav-menu*/

$('header nav#nav-esquerda ul.menu-principal li:eq(0)').click(function(){
    $('html, body').animate({scrollTop:$('header').offset().top}, 500)
})

$('header nav#nav-esquerda ul.menu-principal li:eq(1)').click(function(){
    $('html, body').animate({scrollTop:$('section.sobre').offset().top}, 500)
})

$('header nav#nav-esquerda ul.menu-principal li:eq(2)').click(function(){
    $('html, body').animate({scrollTop:$('section.solucao').offset().top}, 500)
})

$('header nav#nav-esquerda ul.menu-principal li:eq(3)').click(function(){
    $('html, body').animate({scrollTop:$('section.produtos').offset().top}, 500)
})

$('header nav#nav-esquerda ul.menu-principal li:eq(4)').click(function(){
    $('html, body').animate({scrollTop:$('div.endereco').offset().top}, 500)
})


/* acoes de navegacao footer */

$('footer div.footer-container nav.nav-footer ul.menu-principal li:eq(0)').click(function(){
    $('html, body').animate({scrollTop:$('header').offset().top}, 500)
})

$('footer div.footer-container nav.nav-footer ul.menu-principal li:eq(1)').click(function(){
    $('html, body').animate({scrollTop:$('section.sobre').offset().top}, 500)
})

$('footer div.footer-container nav.nav-footer ul.menu-principal li:eq(2)').click(function(){
    $('html, body').animate({scrollTop:$('section.solucao').offset().top}, 500)
})

$('footer div.footer-container nav.nav-footer ul.menu-principal li:eq(3)').click(function(){
    $('html, body').animate({scrollTop:$('section.produtos').offset().top}, 500)
})

$('footer div.footer-container nav.nav-footer ul.menu-principal li:eq(4)').click(function(){
    $('html, body').animate({scrollTop:$('div.endereco').offset().top}, 500)
})



/*section sobre*/

/*elementos com opacidade 0*/

/*$('div.sobre-mestre').css('opacity', 0);

$('div.sobre-mestre').waypoint(function(direcao){
    if(direcao = 'down'){
        $('div.sobre-mestre').addClass('animate_animated animate_fadeInUp animate_slow');
    }else{
        $('div.sobre-mestre').removeClass('animate_animated animate_fadeInUp animate_slow')
    }
}, {
    offset: '550px;'
} )*/
