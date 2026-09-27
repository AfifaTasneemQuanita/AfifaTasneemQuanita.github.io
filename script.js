document.getElementById('year').textContent = new Date().getFullYear();
const btn=document.querySelector('.menu-btn'),links=document.querySelector('.nav-links');
btn.addEventListener('click',()=>{links.classList.toggle('open');btn.setAttribute('aria-expanded',links.classList.contains('open'))});
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
