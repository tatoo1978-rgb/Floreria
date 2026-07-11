/* ═══════════════════════════════════════════════════════════════════
   PRODUCTOS DESTACADOS — Florería María Lidia
   ─────────────────────────────────────────────────────────────────
   Para AGREGAR, MODIFICAR o ELIMINAR productos, editá SOLO el array
   ML_PRODUCTOS de abajo. No hace falta tocar el HTML ni el CSS.

   Cada producto tiene:
     cat  → clave de categoría (ver ML_CATEGORIAS)
     name → nombre del producto (aparece en la tarjeta y en el WhatsApp)
     desc → descripción breve (1 o 2 líneas)
     img  → ruta de la imagen (idealmente .webp, vertical 4:5)
     alt  → texto alternativo para SEO/accesibilidad
   ═══════════════════════════════════════════════════════════════════ */

var ML_CATEGORIAS = {
  ramos:        "Ramos Florales",
  plantas:      "Flores & Plantas",
  deco:         "Deco & Aromas",
  eventos:      "Casamientos & Eventos",
  condolencias: "Recordatorios & Condolencias",
  empresas:     "Empresariales"
};

var ML_PRODUCTOS = [
  /* ── Ramos Florales ── */
  { cat:"ramos", name:"Ramo Multicolor de Estación",
    desc:"Flores frescas de estación en una combinación vibrante y alegre.",
    img:"img/32-ramo-multicolor.webp",
    alt:"Ramo multicolor de flores de estación — Florería María Lidia Rafaela" },
  { cat:"ramos", name:"Ramo de Rosas Rosadas",
    desc:"Un clásico romántico y delicado, ideal para aniversarios y cumpleaños.",
    img:"img/31-ramo-de-rosas-rosadas.webp",
    alt:"Ramo de rosas rosadas — Florería María Lidia Rafaela" },
  { cat:"ramos", name:"Ramo Romántico de Rosa Roja",
    desc:"Rosa roja envuelta en papel artesanal, perfecta para sorprender.",
    img:"img/23-ramo-con-rosa-roja-envuelto-en-p.webp",
    alt:"Ramo romántico con rosa roja envuelto en papel — Florería María Lidia Rafaela" },
  { cat:"ramos", name:"Ramo de Margaritas Blancas",
    desc:"Fresco, simple y luminoso. Para alegrar cualquier día.",
    img:"img/22-ramo-de-margaritas-blancas.webp",
    alt:"Ramo de margaritas blancas — Florería María Lidia Rafaela" },
  { cat:"ramos", name:"Ramo de Lisianthus Blancos",
    desc:"Elegancia artesanal con lisianthus y flores premium seleccionadas.",
    img:"img/03-ramo-artesanal-de-lisianthus-bla.webp",
    alt:"Ramo artesanal de lisianthus blancos — Florería María Lidia Rafaela" },
  { cat:"ramos", name:"Tulipanes de Estación",
    desc:"Tulipanes frescos según temporada. Consultá colores disponibles.",
    img:"img/33-tulipanes-amarillos.webp",
    alt:"Ramo de tulipanes amarillos de estación — Florería María Lidia Rafaela" },

  /* ── Flores & Plantas ── */
  { cat:"plantas", name:"Rosas Frescas por Tallo",
    desc:"Rosas recién llegadas de productores. Armá tu ramo a medida.",
    img:"img/20-rosas-rojas-frescas-en-primer-pl.webp",
    alt:"Rosas rojas frescas por tallo — Florería María Lidia Rafaela" },
  { cat:"plantas", name:"Plantas de Interior",
    desc:"Ficus lyrata, palmeras y más especies para llenar tu casa de verde.",
    img:"img/18-plantas-de-interior-ficus-lyrata.webp",
    alt:"Plantas de interior: ficus lyrata y palmera — Florería María Lidia Rafaela" },
  { cat:"plantas", name:"Plantas en Maceta",
    desc:"Variedades decorativas listas para regalar o decorar tu espacio.",
    img:"img/28-plantas-de-interior-en-macetas.webp",
    alt:"Plantas decorativas en macetas — Florería María Lidia Rafaela" },
  { cat:"plantas", name:"Plantas Colgantes",
    desc:"Ideales para balcones, galerías y rincones con luz.",
    img:"img/30-planta-colgante.webp",
    alt:"Planta colgante de interior — Florería María Lidia Rafaela" },

  /* ── Deco & Aromas ── */
  { cat:"deco", name:"Velas & Home Sprays",
    desc:"Aromas seleccionados para crear ambientes cálidos y acogedores.",
    img:"img/19-velas-y-home-spray-en-el-local.webp",
    alt:"Velas aromáticas y home sprays — Florería María Lidia Rafaela" },
  { cat:"deco", name:"Ramo de Flores Secas",
    desc:"Tonos cálidos que duran para siempre. Sin mantenimiento.",
    img:"img/24-ramo-de-flores-secas-en-tonos-ca.webp",
    alt:"Ramo de flores secas en tonos cálidos — Florería María Lidia Rafaela" },
  { cat:"deco", name:"Canasto de Flores Secas",
    desc:"Arreglo decorativo en canasto artesanal, listo para exhibir.",
    img:"img/35-canasto-de-flores-secas.webp",
    alt:"Canasto decorativo de flores secas — Florería María Lidia Rafaela" },
  { cat:"deco", name:"Canastos Artesanales",
    desc:"Cestería artesanal para decorar, organizar o regalar.",
    img:"img/25-canastos-artesanales-del-local.webp",
    alt:"Canastos artesanales de decoración — Florería María Lidia Rafaela" },

  /* ── Casamientos & Eventos ── */
  { cat:"eventos", name:"Ramo de Novia",
    desc:"Diseñado junto a vos para acompañarte en el día más importante.",
    img:"img/26-ramo-blanco-de-flores-frescas.webp",
    alt:"Ramo de novia de flores blancas frescas — Florería María Lidia Rafaela" },
  { cat:"eventos", name:"Decoración Floral para Eventos",
    desc:"Centros de mesa, arcos y ambientación integral para tu celebración.",
    img:"img/11-casamientos-y-eventos-florales-f.webp",
    alt:"Decoración floral para casamientos y eventos — Florería María Lidia Rafaela" },

  /* ── Recordatorios & Condolencias ── */
  { cat:"condolencias", name:"Corona de Condolencias",
    desc:"Un homenaje digno y respetuoso, elaborado con delicadeza.",
    img:"img/06-coronas-y-condolencias-floreria-.webp",
    alt:"Corona de flores para condolencias — Florería María Lidia Rafaela" },
  { cat:"condolencias", name:"Palma & Arreglos de Despedida",
    desc:"Palmas y arreglos florales para acompañar en momentos difíciles.",
    img:"img/12-coronas-y-condolencias-floreria-.webp",
    alt:"Palma y arreglos florales de condolencias — Florería María Lidia Rafaela" },

  /* ── Empresariales ── */
  { cat:"empresas", name:"Arreglos para Recepciones",
    desc:"Flores frescas semanales para oficinas, comercios y recepciones.",
    img:"img/15-arreglos-empresariales-floreria-.webp",
    alt:"Arreglos florales empresariales para recepciones — Florería María Lidia Rafaela" },
  { cat:"empresas", name:"Regalos Corporativos",
    desc:"Detalles florales con identidad para clientes y equipos de trabajo.",
    img:"img/21-bolsa-de-regalo-negra.webp",
    alt:"Regalos corporativos florales — Florería María Lidia Rafaela" }
];

/* ═══ RENDER (no editar debajo de esta línea) ═══ */
(function () {
  var WAPP = "5493492208500";
  var grid    = document.getElementById("productsGrid");
  var filters = document.getElementById("prodFilters");
  if (!grid || !filters) return;

  function waLink(name) {
    var msg = 'Hola. Me interesa el producto "' + name +
      '" que vi en la sección Productos Destacados de su página web. ¿Podrían brindarme más información?';
    return "https://wa.me/" + WAPP + "?text=" + encodeURIComponent(msg);
  }

  var revealObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("visible"); revealObs.unobserve(e.target); }
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -30px 0px" });

  function render(cat) {
    grid.innerHTML = "";
    var list = cat === "todos" ? ML_PRODUCTOS : ML_PRODUCTOS.filter(function (p) { return p.cat === cat; });
    list.forEach(function (p, i) {
      var card = document.createElement("article");
      card.className = "product-card reveal reveal-delay-" + ((i % 3) + 1);
      card.innerHTML =
        '<div class="product-media" role="button" tabindex="0" aria-label="Ampliar imagen de ' + p.name + '">' +
          '<img src="' + p.img + '" alt="' + p.alt + '" loading="lazy">' +
        "</div>" +
        '<div class="product-info">' +
          '<span class="product-cat">' + ML_CATEGORIAS[p.cat] + "</span>" +
          '<h3 class="product-name">' + p.name + "</h3>" +
          '<p class="product-desc">' + p.desc + "</p>" +
          '<a class="product-btn" href="' + waLink(p.name) + '" target="_blank" rel="noopener">' +
            '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>' +
            "Consultar este producto" +
          "</a>" +
        "</div>";
      grid.appendChild(card);
      revealObs.observe(card);
    });
  }

  /* Filtros */
  var cats = [["todos", "Todos"]].concat(Object.keys(ML_CATEGORIAS).map(function (k) { return [k, ML_CATEGORIAS[k]]; }));
  cats.forEach(function (c, i) {
    var b = document.createElement("button");
    b.className = "prod-pill" + (i === 0 ? " active" : "");
    b.textContent = c[1];
    b.setAttribute("aria-pressed", i === 0 ? "true" : "false");
    b.addEventListener("click", function () {
      filters.querySelectorAll(".prod-pill").forEach(function (p) { p.classList.remove("active"); p.setAttribute("aria-pressed", "false"); });
      b.classList.add("active");
      b.setAttribute("aria-pressed", "true");
      render(c[0]);
    });
    filters.appendChild(b);
  });

  /* Lightbox — reutiliza el visor de la Galería (main.js) */
  grid.addEventListener("click", function (e) {
    var media = e.target.closest(".product-media");
    if (!media || typeof window.__mlLightboxOpen !== "function") return;
    var imgs = Array.prototype.slice.call(grid.querySelectorAll(".product-media img"));
    var i = imgs.indexOf(media.querySelector("img"));
    if (i !== -1) window.__mlLightboxOpen(i, imgs);
  });
  grid.addEventListener("keydown", function (e) {
    if (e.key !== "Enter" && e.key !== " ") return;
    var media = e.target.closest(".product-media");
    if (!media || typeof window.__mlLightboxOpen !== "function") return;
    e.preventDefault();
    var imgs = Array.prototype.slice.call(grid.querySelectorAll(".product-media img"));
    var i = imgs.indexOf(media.querySelector("img"));
    if (i !== -1) window.__mlLightboxOpen(i, imgs);
  });

  render("todos");
})();
