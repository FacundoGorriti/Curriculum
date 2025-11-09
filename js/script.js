
document.addEventListener('DOMContentLoaded', function(){
  // menu movil toggle
  const menuBtn = document.getElementById('menuBtn');
  const navLinks = document.getElementById('navLinks');
  menuBtn && menuBtn.addEventListener('click', ()=>{
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
  });

  // IntersectionObserver para fade-in
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
      }
    });
  }, {threshold: 0.12});

  document.querySelectorAll('.fade').forEach(el=>observer.observe(el));

  // Scroll spy - resaltar link activo
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-links a');
  const spyObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      const id = entry.target.getAttribute('id');
      const link = document.querySelector('.nav-links a[href="#'+id+'"]');
      if(entry.isIntersecting){
        navItems.forEach(i=>i.classList.remove('active'));
        if(link) link.classList.add('active');
      }
    });
  }, {threshold:0.5});

  sections.forEach(s=>spyObserver.observe(s));
});
