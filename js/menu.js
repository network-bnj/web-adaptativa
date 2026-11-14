const boton=document.getElementById('menuToggle');
const menu=document.getElementById('menu');
boton.addEventListener('click',()=>{
 const abierto=menu.classList.toggle('activo');
 boton.setAttribute('aria-expanded',abierto);
 boton.setAttribute('aria-label',abierto?'Cerrar menú':'Abrir menú');
});
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
 menu.classList.remove('activo');boton.setAttribute('aria-expanded','false');
}));
document.getElementById('formulario').addEventListener('submit',e=>{
 e.preventDefault();document.getElementById('respuesta').textContent='¡Gracias! Mensaje validado en esta demostración.';e.target.reset();
});
