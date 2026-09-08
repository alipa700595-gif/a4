/* Amber Garb Quest - Interactive UI Engine */
document.addEventListener('DOMContentLoaded', () => {
  // Mobile Nav Toggle
  const toggleBtn = document.querySelector('.mobile-toggle');
  const mainNav = document.querySelector('.main-nav');
  if (toggleBtn && mainNav) {
    toggleBtn.addEventListener('click', () => {
      mainNav.classList.toggle('active');
    });
  }

  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        faqItems.forEach(other => other.classList.remove('open'));
        if (!isOpen) {
          item.classList.add('open');
        }
      });
    }
  });

  // Wardrobe Matrix Explorer Tabs
  const builderTabs = document.querySelectorAll('.builder-tab');
  const builderTitle = document.getElementById('builder-title');
  const builderDesc = document.getElementById('builder-desc');
  const builderImg = document.getElementById('builder-img');
  const builderList = document.getElementById('builder-items');

  const capsuleData = {
    autumn: {
      title: "Autumn Equinox: Amber Trench & Cashmere Layering",
      desc: "Designed for crisp golden-hour afternoons. Structured double-breasted outerwear paired with soft brushed knitwear and pleated terracotta trousers.",
      img: "images/amber-earth-tone-capsule-wardrobe.jpg",
      items: ["Tailored Amber Wool Overcoat", "Brushed Honey Cashmere Turtleneck", "Terracotta Pleated Linen Trousers", "Hand-Dyed Botanical Silk Scarf"]
    },
    summer: {
      title: "Mediterranean Solstice: Artisanal Linen & Raw Silk",
      desc: "Lightweight, breathable drapes engineered for warm climates. Unstructured ochre blazers and ivory-sand culottes made from Belgian flax.",
      img: "images/artisan-linen-tailored-silhouette.jpg",
      items: ["Unstructured Ochre Linen Blazer", "Sand Raw-Silk Camp Collar Shirt", "Relaxed Flax Wide-Leg Trousers", "Woven Earth-Tone Espadrilles"]
    },
    winter: {
      title: "Alpine Hearth: Heavyweight Flannel & Camel Melton",
      desc: "Dense thermal protection without compromising sartorial grace. Heavyweight amber wool melton coats layered over merino ribs.",
      img: "images/layered-outerwear-winter-styling.jpg",
      items: ["Heavyweight Camel Melton Overcoat", "Chunky Ribbed Amber Crewneck", "Charcoal Virgin Wool Trousers", "Vegetable-Tanned Saddle Leather Boots"]
    },
    editorial: {
      title: "Runway Monolith: Asymmetric Drapes & Golden Ochre",
      desc: "High-concept evening curation. Flowing silk georgette in honey amber matched with sharp tailored smoking jackets.",
      img: "images/flowing-silk-midi-dress-amber.jpg",
      items: ["Honey Amber Silk Georgette Dress", "Structured Ochre Velvet Evening Jacket", "Minimalist Gold-Plated Choker", "Sculptural Ochre Leather Clutch"]
    }
  };

  builderTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      builderTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const season = tab.getAttribute('data-season');
      const data = capsuleData[season];
      if (data && builderTitle && builderDesc && builderImg && builderList) {
        builderTitle.textContent = data.title;
        builderDesc.textContent = data.desc;
        builderImg.src = data.img;
        builderList.innerHTML = data.items.map(item => `<li><span>${item}</span> <strong>Curated Piece</strong></li>`).join('');
      }
    });
  });

  // Smooth anchor scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId.length > 1) {
        const targetElem = document.querySelector(targetId);
        if (targetElem) {
          e.preventDefault();
          targetElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
});
