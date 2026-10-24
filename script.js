// Styled by Liz - mobile menu and gallery filters
document.addEventListener('DOMContentLoaded', function () {
      const filterButtons = document.querySelectorAll('#gallery-filters button');
      filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          filterButtons.forEach(b => {
            b.className = 'px-5 py-2 rounded-full font-label-lg text-label-lg bg-surface-container-high text-on-surface hover:bg-[#F1E6F7] transition-all';
          });
          btn.className = 'px-5 py-2 rounded-full font-label-lg text-label-lg bg-[#0D0D0D] text-[#FFFFFF] shadow-sm transition-all';
        });
      });
    });

document.getElementById('menuBtn').addEventListener('click',function(){var n=document.getElementById('mobileNav');n.classList.toggle('hidden');n.classList.toggle('flex')});
document.querySelectorAll('#mobileNav a').forEach(function(a){a.addEventListener('click',function(){var n=document.getElementById('mobileNav');n.classList.add('hidden');n.classList.remove('flex')})});
document.querySelectorAll('#gallery-filters button').forEach(function(b){b.addEventListener('click',function(){var t=b.textContent.trim();document.querySelectorAll('.gallery-item').forEach(function(g){g.classList.toggle('hide',t!=='All Looks'&&g.dataset.cat!==t)})})});
document.fonts.load('24px "Material Symbols Outlined"').finally(function () {
  document.documentElement.classList.add('icons-ready');
});
