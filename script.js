const modal = document.querySelector('#request-modal');
const requestContent = document.querySelector('#request-content');
const successContent = document.querySelector('#success-content');
const mobileMenu = document.querySelector('.mobile-menu');

function openRequest(){requestContent.classList.remove('hidden');successContent.classList.add('hidden');modal.classList.remove('hidden');document.body.style.overflow='hidden';setTimeout(()=>modal.querySelector('input')?.focus(),50)}
function closeRequest(){modal.classList.add('hidden');document.body.style.overflow=''}

document.querySelectorAll('[data-request]').forEach(button=>button.addEventListener('click',()=>{mobileMenu.classList.remove('open');openRequest()}));
document.querySelector('#modal-close').addEventListener('click',closeRequest);
document.querySelector('#success-close').addEventListener('click',closeRequest);
modal.addEventListener('mousedown',event=>event.target===modal&&closeRequest());
document.addEventListener('keydown',event=>event.key==='Escape'&&closeRequest());
document.querySelector('#request-form').addEventListener('submit',event=>{event.preventDefault();requestContent.classList.add('hidden');successContent.classList.remove('hidden')});
document.querySelector('#search-form').addEventListener('submit',event=>{event.preventDefault();const query=document.querySelector('#catalog-search').value.trim();window.location.href=query?'catalog.html?q='+encodeURIComponent(query):'catalog.html'});
document.querySelector('.menu-toggle').addEventListener('click',()=>{mobileMenu.classList.add('open');mobileMenu.setAttribute('aria-hidden','false')});
document.querySelector('.mobile-menu-head button').addEventListener('click',()=>{mobileMenu.classList.remove('open');mobileMenu.setAttribute('aria-hidden','true')});
document.querySelectorAll('.mobile-menu a').forEach(link=>link.addEventListener('click',()=>mobileMenu.classList.remove('open')));
