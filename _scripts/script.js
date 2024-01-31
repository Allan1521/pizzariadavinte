$('section.domingo-perfeito').waypoint(function (direcao) {
    if (direcao == "down") {
        $('div.folha1').addClass('animate__animated animate__fadeInUp');
        $('div.folha3').addClass('animate__animated animate__fadeInUp');
        $('div.camarao').addClass('animate__animated animate__fadeInUp animate__slow');
        $('div.tomate').addClass('animate__animated animate__fadeInUp animate__slow');
        $('div.folha2').addClass('animate__animated animate__fadeInUp  animate__slower');
        $('div.queijo').addClass('animate__animated animate__fadeInUp  animate__slower');
    }

    if (direcao == "up") {
        $('div.folha1').removeClass('animate__animated animate__fadeInUp');
        $('div.folha3').removeClass('animate__animated animate__fadeInUp');
        $('div.camarao').removeClass('animate__animated animate__fadeInUp animate__slow');
        $('div.tomate').removeClass('animate__animated animate__fadeInUp animate__slow');
        $('div.folha2').removeClass('animate__animated animate__fadeInUp  animate__slower');
        $('div.queijo').removeClass('animate__animated animate__fadeInUp  animate__slower');

    }

}, {
    
    offset: '450px;'

})
/* $-é o seletor que seleciona e dectetar os "elementos=TAGS" do html.
.waypoint
(direcao) = representa um espaço reservado na memória que irá guardar como o usuário chegou naquele elemento html, as duas possibilidades serão u(subindo) ou down (descendo).*/
$('section.pizza').waypoint(function (direcao) {
    if (direcao == 'down') {
        $('section.pizza p').addClass('animate__animated animate__fadeInUp');
    }
    if (direcao == 'up') {
        $('section.pizza p').removeClass('animate__animated animate__fadeInUp');
    }

}, {
    offset: '450px;'/* o offset: ele serve pra ativar o efeito de animação qdo chega próx do nº de "450px" */

})
$('section.testemunha').waypoint( function(direcao) {
    if(direcao == 'down'){
        $('div.testemunhos ul:eq(0)').addClass('animate__animated animate__fadeInUp animate__slower');
        $('div.testemunhos ul:eq(1)').addClass('animate__animated animate__fadeInUp animate__slow');
        $('div.testemunhos ul:eq(2)').addClass('animate__animated animate__fadeInUp animate__slower');
    }
    if(direcao == 'up'){
        $('div.testemunhos ul:eq(0)').removeClass('animate__animated animate__fadeInUp animate__slower');
        $('div.testemunhos ul:eq(1)').removeClass('animate__animated animate__fadeInUp animate__slow');
        $('div.testemunhos ul:eq(2)').removeClass('animate__animated animate__fadeInUp animate__slower');
    }

},{
    offset: '400px;'
})
