$(document).ready(function(){
    document.querySelectorAll('.link').forEach(link=>{
        link.onclick = ()=>{
            move_to(link.id)
        }
    })
});
const move_to = function(id){
    let param = 'section';
    if(id === 'home')
        param = 'header';
    const el = document.querySelector(param+'#'+id);
    el.scrollIntoView({behavior:'smooth'});
}
// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});