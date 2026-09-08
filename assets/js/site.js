document.querySelector('.menu-toggle')?.addEventListener('click',()=>{document.querySelector('.mobile-nav')?.classList.toggle('open')});
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
