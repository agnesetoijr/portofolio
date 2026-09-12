/*=============== SHOW & CLOSE MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Show menu */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Hide menu */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}

/*=============== REMOVE MOBILE MENU ===============*/
const navLink = document.querySelectorAll('.nav__link, .nav__contact')

const linkAction = () =>{
   const navMenu = document.getElementById('nav-menu')
   // When we click on each nav__link, we remove the show-menu class
   if (navMenu) navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== HOME TEXT CIRCULAR ===============*/
const homeText = document.getElementById('home-text'),
      letters = homeText ? homeText.textContent.trim().split('') : [],
      angleStep = 360 / letters.length // Uraian 'S' besar disamakan

if (homeText) {
   homeText.textContent = ''

   letters.forEach((char, i) => {
      const span = document.createElement('span')
      span.textContent = char
      // Diganti memakai backtick (`) bukan petik tunggal (')
      span.style.transform = `rotate(${i * angleStep}deg)`
      homeText.appendChild(span)
   })
}

/*=============== HOME TYPED JS ===============*/


/*=============== CHANGE HEADER STYLES ===============*/
const scrollHeader = () =>{
   const header = document.getElementById('header')
   if (header) {
      window.scrollY >= 50 ? header.classList.add('scroll-header')
                         : header.classList.remove('scroll-header')
   }
}
window.addEventListener('scroll', scrollHeader)

/*=============== FILTER PROJECTS BY CATEGORY ===============*/
const categoryCards = document.querySelectorAll('.category__card'),
      projectCards = document.querySelectorAll('.project_card'),
      dropdownLinks = document.querySelectorAll('.nav__sublink')

// Fungsi untuk memfilter proyek
const filterProjects = (selectedCategory) => {
   // 1. Tampilkan / sembunyikan proyek sesuai kategori
   projectCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category')
      
      if (cardCategory === selectedCategory) {
         card.classList.remove('hide')
      } else {
         card.classList.add('hide')
      }
   })

   // 2. Sinkronkan tampilan tombol aktif di section Projects
   categoryCards.forEach(card => {
      if (card.getAttribute('data-category') === selectedCategory) {
         card.classList.add('active-category')
      } else {
         card.classList.remove('active-category')
      }
   })
}

// Event listener saat kategori di section Projects diklik
categoryCards.forEach(card => {
   card.addEventListener('click', () => {
      const category = card.getAttribute('data-category')
      filterProjects(category)
   })
})

// Event listener saat menu dropdown di navbar diklik
dropdownLinks.forEach(link => {
   link.addEventListener('click', () => {
      const category = link.getAttribute('data-category')
      if (category) {
         filterProjects(category)
      }
      
      // Sembunyikan menu di mobile/dropdown setelah memilih
      const projectsSubmenu = document.getElementById('projects-submenu')
      const navMenu = document.getElementById('nav-menu')
      if (projectsSubmenu) projectsSubmenu.classList.remove('show-submenu')
      if (navMenu) navMenu.classList.remove('show-menu')
   })
})

// Jalankan filter awal sesuai kategori yang aktif pertama kali (NON-IT)
const activeCategory = document.querySelector('.category__card.active-category')?.getAttribute('data-category') || 'non-it'
filterProjects(activeCategory)

const projectsBtn = document.getElementById('projects-btn');
const projectsSubmenu = document.getElementById('projects-submenu');

if (projectsBtn && projectsSubmenu) {
  projectsBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Mencegah halaman melompat/refresh
    projectsSubmenu.classList.toggle('show-submenu');
  });
}

/*=============== SWIPER WORK ===============*/ 


/*=============== SERVICES ACCORDION ===============*/ 


/*=============== TESTIMONIALS OF DUPLICATE CARDS ===============*/ 


/*=============== CONTACT EMAIL JS ===============*/ 


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== CUSTOM CURSOR ===============*/


/*=============== SCROLLREVEAL ANIMATION ===============*/