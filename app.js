/* Ocarina of Time 100% — checklist local */
(function () {
  "use strict";

  const DATA_PT = window.OOT_DATA || {};
  const DATA_EN = window.OOT_DATA_EN || DATA_PT;
  const STORAGE_KEY = "oot100-progress-v1";
  const PREFS_KEY = "oot100-prefs-v1";

  const SECTIONS = [
    {
      key: "hearts", icon: "♥",
      title: "Pedaços de Coração", titleEn: "Pieces of Heart",
      desc: "São 36 pedaços: a cada 4, um coração. A idade indica com qual Link pegar a peça; “Tanto faz” serve para os dois.",
      descEn: "There are 36 pieces: every 4 make a heart. The age shows which Link should grab it; “Either” works for both."
    },
    {
      key: "containers", icon: "✚",
      title: "Heart Containers", titleEn: "Heart Containers",
      desc: "Um Heart Container por chefe de dungeon. São 8 no total.",
      descEn: "One Heart Container per dungeon boss. 8 in total."
    },
    {
      key: "skulltulas", icon: "✦",
      title: "Skulltulas Douradas", titleEn: "Gold Skulltulas",
      desc: "100 tokens. Entregue na Casa das Skulltulas, em Kakariko: recompensas com 10, 20, 30, 40, 50 e 100 tokens.",
      descEn: "100 tokens. Turn them in at the House of Skulltula in Kakariko: rewards at 10, 20, 30, 40, 50 and 100 tokens."
    },
    {
      key: "songs", icon: "♪",
      title: "Canções da Ocarina", titleEn: "Ocarina Songs",
      desc: "13 canções, contando a Canção do Espantalho criada por você.",
      descEn: "13 songs, including the Scarecrow's Song you create yourself."
    },
    {
      key: "equipment", icon: "⚔",
      title: "Equipamentos", titleEn: "Equipment",
      desc: "12 peças de equipamento: espadas, escudos, túnicas e botas.",
      descEn: "12 equipment pieces: swords, shields, tunics and boots."
    },
    {
      key: "items", icon: "✧",
      title: "Itens e Magias", titleEn: "Items and Spells",
      desc: "27 itens, armas, magias, escalas e as ocarinas.",
      descEn: "27 items, weapons, spells, scales and the ocarinas."
    },
    {
      key: "masks", icon: "◉",
      title: "Máscaras", titleEn: "Masks",
      desc: "5 máscaras da Happy Mask Shop. Alugue, venda e receba a Máscara da Verdade.",
      descEn: "5 Happy Mask Shop masks. Rent, sell and earn the Mask of Truth."
    },
    {
      key: "bottles", icon: "◍",
      title: "Garrafas", titleEn: "Bottles",
      desc: "5 garrafas para guardar fadas, poções, leite, peixes e insetos.",
      descEn: "5 bottles for fairies, potions, milk, fish and bugs."
    },
    {
      key: "fairies", icon: "✺",
      title: "Grandes Fadas", titleEn: "Great Fairies",
      desc: "6 Grandes Fadas. Pague a taxa e receba o presente de cada uma.",
      descEn: "6 Great Fairies. Pay the fee and receive each one's gift."
    },
    {
      key: "upgrades", icon: "↑",
      title: "Upgrades de Capacidade", titleEn: "Capacity Upgrades",
      desc: "14 melhorias de carteira, bolsas, aljava e caules.",
      descEn: "14 upgrades for wallet, bags, quiver and stick pouches."
    },
    {
      key: "stones", icon: "◆",
      title: "Pedras e Medalhões", titleEn: "Stones and Medallions",
      desc: "3 Pedras Espirituais e 6 Medalhões.",
      descEn: "3 Spiritual Stones and 6 Medallions."
    },
    {
      key: "dungeons", icon: "⌂",
      title: "Dungeons", titleEn: "Dungeons",
      desc: "12 dungeons, incluindo Caverna de Gelo, Fundo do Poço, Campo de Treinamento Gerudo e o Castelo de Ganon.",
      descEn: "12 dungeons, including the Ice Cavern, Bottom of the Well, Gerudo Training Ground and Ganon's Castle."
    },
    {
      key: "sidequests", icon: "➤",
      title: "Missões Secundárias", titleEn: "Sidequests",
      desc: "6 missões importantes para o 100%, com passo a passo detalhado e fotos.",
      descEn: "6 important quests for 100%, with detailed step-by-step and photos."
    }
  ];

  const UI = {
    pt: {
      needs: "Precisa:", boss: "Chefe:", heartContainer: "Heart Container",
      containerPrefix: "Coração de ", pieceOfHeart: "Pedaço de Coração", sidequest: "Missão secundária", photo: "Foto",
      howTo: "Como chegar", photoRef: "Use a foto como referência.", stepByStep: "Passo a passo", steps: "etapas",
      all: "Todos", child: "Criança", adult: "Adulto", allAreas: "Todas as áreas", visible: "visíveis",
      collapseAreas: "Recolher áreas", expandAreas: "Expandir áreas", noSkulls: "Nenhuma Skulltula corresponde aos filtros.",
      mark: "Marcar ", enlarge: "Ampliar foto: ", openSkullPhoto: "Abrir foto da Skulltula ", markSkull: "Marcar Skulltula ",
      markQuest: "Marcar missão ", questPhotos: "Fotos da missão ", filterAge: "Filtrar por idade", filterArea: "Filtrar por área",
      of: " de ", remaining: " restantes",
      exported: "Progresso exportado.", imported: "Progresso importado.", invalidFile: "Arquivo inválido.",
      confirmImport: "Substituir o progresso atual pelo arquivo importado?",
      confirmReset: "Zerar todo o checklist? Essa ação não pode ser desfeita.",
      resetDone: "Checklist zerado.", exportFilename: "oot-100-progresso.json",
      gameName: "The Legend of Zelda: Ocarina of Time 100%", htmlLang: "pt-BR"
    },
    en: {
      needs: "Needs:", boss: "Boss:", heartContainer: "Heart Container",
      containerPrefix: "Heart Container from ", pieceOfHeart: "Piece of Heart", sidequest: "Sidequest", photo: "Photo",
      howTo: "How to get there", photoRef: "Use the photo as a reference.", stepByStep: "Step by step", steps: "steps",
      all: "All", child: "Child", adult: "Adult", allAreas: "All areas", visible: "visible",
      collapseAreas: "Collapse areas", expandAreas: "Expand areas", noSkulls: "No Skulltulas match the filters.",
      mark: "Mark ", enlarge: "Enlarge photo: ", openSkullPhoto: "Open Gold Skulltula photo ", markSkull: "Mark Skulltula ",
      markQuest: "Mark quest ", questPhotos: "Quest photos: ", filterAge: "Filter by age", filterArea: "Filter by area",
      of: " of ", remaining: " remaining",
      exported: "Progress exported.", imported: "Progress imported.", invalidFile: "Invalid file.",
      confirmImport: "Replace the current progress with the imported file?",
      confirmReset: "Reset the entire checklist? This cannot be undone.",
      resetDone: "Checklist reset.", exportFilename: "oot-100-progress.json",
      gameName: "The Legend of Zelda: Ocarina of Time 100%", htmlLang: "en"
    }
  };

  const STATIC = {
    pt: {
      brandSub: "100% Checklist · Remake", progressLabel: "Progresso geral",
      exportBtn: "Exportar progresso", importBtn: "Importar progresso", resetBtn: "Zerar checklist",
      creditHtml: "Dados e screenshots do remake: Zelda Central e Z64Central.<br>Conteúdo para uso pessoal. Nintendo / Zelda © Nintendo.",
      subtitle: "Nintendo Switch 2 · Remake 2026 · Checklist completo",
      chipSkull: "Skulltulas", chipHearts: "corações", chipDone: "objetivos",
      searchPlaceholder: "Buscar item, local ou requisito… (atalho: /)", photos: "Fotos", hideDone: "Ocultar concluídos",
      ringDone: "completo",
      footer1: "Feito para jogar offline. O progresso fica salvo neste navegador automaticamente.",
      footer2: "Fotos das Skulltulas, Pedaços de Coração e missões secundárias: Zelda Central. Dicas e dados: Zelda Central / Z64Central."
    },
    en: {
      brandSub: "100% Checklist · Remake", progressLabel: "Overall progress",
      exportBtn: "Export progress", importBtn: "Import progress", resetBtn: "Reset checklist",
      creditHtml: "Data and remake screenshots: Zelda Central and Z64Central.<br>Personal use only. Nintendo / Zelda © Nintendo.",
      subtitle: "Nintendo Switch 2 · 2026 Remake · Complete checklist",
      chipSkull: "Skulltulas", chipHearts: "hearts", chipDone: "objectives",
      searchPlaceholder: "Search item, location or requirement… (shortcut: /)", photos: "Photos", hideDone: "Hide completed",
      ringDone: "complete",
      footer1: "Made to play offline. Your progress is saved in this browser automatically.",
      footer2: "Gold Skulltula, Piece of Heart and sidequest photos: Zelda Central. Tips and data: Zelda Central / Z64Central."
    }
  };

  let lang = "pt";
  let T = UI.pt;
  let DATA = {};
  let HEARTS = [];
  let SKULLS = [];
  let SIDEQUESTS = [];
  let SKULL_BY_N = new Map();
  let SKULL_AREAS = [];
  let SKULL_BY_AREA = new Map();
  let SECTION_IDS = {};
  let ALL_IDS = [];

  function secTitle(sec) { return lang === "en" ? sec.titleEn : sec.title; }
  function secDesc(sec) { return lang === "en" ? sec.descEn : sec.desc; }

  function ageKey(value) {
    var v = String(value || "");
    if (v === "Criança" || v === "Child") return "child";
    if (v === "Adulto" || v === "Adult") return "adult";
    return "both";
  }
  function ageClass(value) { return ageKey(value); }

  function buildData() {
    DATA = lang === "en" ? DATA_EN : DATA_PT;
    HEARTS = Array.isArray(DATA.hearts) ? DATA.hearts : [];
    SKULLS = Array.isArray(DATA.skulltulas) ? DATA.skulltulas : [];
    SIDEQUESTS = Array.isArray(DATA.sidequests) ? DATA.sidequests : [];
    SKULL_BY_N = new Map(SKULLS.map(function (s) { return [String(s.n), s]; }));
    SKULL_AREAS = [];
    SKULL_BY_AREA = new Map();
    SKULLS.forEach(function (s) {
      if (!SKULL_BY_AREA.has(s.area)) { SKULL_BY_AREA.set(s.area, []); SKULL_AREAS.push(s.area); }
      SKULL_BY_AREA.get(s.area).push("gs-" + s.n);
    });
    SECTION_IDS = {};
    SECTIONS.forEach(function (sec) {
      if (sec.key === "skulltulas") {
        SECTION_IDS[sec.key] = SKULLS.map(function (s) { return "gs-" + s.n; });
      } else {
        SECTION_IDS[sec.key] = (DATA[sec.key] || []).map(function (_, i) { return sec.key + "-" + (i + 1); });
      }
    });
    ALL_IDS = SECTIONS.reduce(function (acc, sec) { return acc.concat(SECTION_IDS[sec.key]); }, []);
  }

  let done = {};
  let prefs = { photos: true, hideDone: false, lang: "pt" };
  let skullAge = "all";
  let skullArea = "all";
  let query = "";
  let toastTimer = null;
  let lastFocus = null;

  const $ = function (sel, root) { return (root || document).querySelector(sel); };
  const $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  function esc(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function norm(value) {
    var s = String(value == null ? "" : value);
    if (s.normalize) s = s.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return s.toLowerCase().replace(/\s+/g, " ").trim();
  }

  function pad(n) { return String(n).padStart(2, "0"); }

  function loadState() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      var parsed = JSON.parse(raw);
      var source = parsed && parsed.done ? parsed.done : parsed;
      if (source && typeof source === "object") {
        Object.keys(source).forEach(function (k) { if (source[k]) done[k] = true; });
      }
    } catch (e) { /* armazenamento indisponível */ }

    try {
      var rawPrefs = localStorage.getItem(PREFS_KEY);
      if (rawPrefs) {
        var p = JSON.parse(rawPrefs);
        if (p && typeof p === "object") {
          if (typeof p.photos === "boolean") prefs.photos = p.photos;
          if (typeof p.hideDone === "boolean") prefs.hideDone = p.hideDone;
          if (p.lang === "en" || p.lang === "pt") prefs.lang = p.lang;
        }
      }
    } catch (e) { /* ignora */ }
  }

  function saveState() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ v: 1, done: done })); } catch (e) { /* ignora */ }
  }

  function savePrefs() {
    try { localStorage.setItem(PREFS_KEY, JSON.stringify(prefs)); } catch (e) { /* ignora */ }
  }

  function toast(message) {
    var el = $("#toast");
    if (!el) return;
    el.textContent = message;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.classList.remove("show"); }, 2600);
  }

  function cleanReq(text) {
    var out = String(text || "Nada").trim();
    out = out.replace(/\bBolero of Fire\b/gi, "Bolero do Fogo");
    out = out.replace(/\bRequiem of Spirit\b/gi, "Réquiem do Espírito");
    out = out.replace(/\bLaço de Fada\b/gi, "Arco de Fada");
    out = out.replace(/\bGoron Pulseira\b/gi, "Pulseira Goron");
    out = out.replace(/\bGoron Túnica\b/gi, "Túnica Goron");
    out = out.replace(/\bTiro Longo\b/gi, "Longshot");
    out = out.replace(/\bBoomerang\b/gi, "Bumerangue");
    out = out.replace(/\bBug in a Bottle\b/gi, "Inseto em uma garrafa");
    out = out.replace(/\s+,/g, ",");
    var names = [
      "Estilingue de Fada", "Canção das Tempestades", "Canção do Espantalho", "Canção do Tempo",
      "Bolero do Fogo", "Réquiem do Espírito", "Fogo de Din", "Martelo Megaton", "Feijão Mágico",
      "Manoplas de Prata", "Manoplas de Ouro", "Lentes da Verdade", "Inseto em uma garrafa",
      "Garrafa vazia", "Bumerangue", "Pulseira Goron", "Túnica Goron", "Arco de Fada",
      "Botas de Ferro", "Hookshot", "Longshot", "Bombas", "Espada", "Cucco", "Inseto", "Nada"
    ];
    var re = new RegExp("^(" + names.join("|") + ")(?:\\s*,\\s*|\\s+e\\s+|(?=[A-ZÁÉÍÓÚÂÊÔÃÕÇ])|$)", "i");
    var canonical = {};
    names.forEach(function (n) { canonical[n.toLowerCase()] = n; });
    var items = [];
    var rest = out;
    var m;
    while ((m = rest.match(re))) {
      items.push(canonical[m[1].toLowerCase()] || m[1]);
      rest = rest.slice(m[0].length);
    }
    out = items.length ? items.join(", ") : out;
    return out.charAt(0).toUpperCase() + out.slice(1);
  }

  function cleanTip(text, req) {
    var out = String(text || "").trim();
    out = out.replace(/^(?:Criança|Adulto) Link[^.]*\.\s*/, "");
    var r = cleanReq(req);
    if (r && r !== "Nada") {
      var escaped = r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      var exact = out.replace(new RegExp("^Você (?:não )?precisa de:\\s*" + escaped + "\\.?\\s*", "i"), "");
      out = /^[,;]|^\s*e\s+/i.test(exact)
        ? out.replace(/^Você (?:não )?precisa de:[^.]*\.\s*/i, "")
        : exact;
    }
    out = out.replace(/^Você (?:não )?precisa de:[^.]*\.\s*/i, "");
    out = out.replace(/^[\s,;.]+/, "");
    out = out.replace(/\bBoomerang\b/gi, "Bumerangue");
    out = out.replace(/\bBug in a Bottle\b/gi, "Inseto em uma garrafa");
    out = out.replace(/com o\.\.\. Hookshot/g, "com o Hookshot");
    out = out.replace(/e então Hookshot e pegue/g, "e então use o Hookshot e pegue");
    out = out.replace(/([.!?])\s+Hookshot\s+(?=[A-ZÁÉÍÓÚÂÊÔÃÕÇ])/g, "$1 Use o Hookshot. ");
    out = out.replace(/([.!?])\s+Hookshot\s+\.\s*$/g, "$1 Use o Hookshot.");
    out = out.replace(/\be\s+Hookshot\s+\.\s*$/g, "e use o Hookshot.");
    out = out.replace(/\s+Hookshot\s+\.\s*$/, " Use o Hookshot.");
    return out.trim();
  }

  function isDone(id) { return !!done[id]; }

  function sectionStats(key) {
    var ids = SECTION_IDS[key] || [];
    var d = 0;
    for (var i = 0; i < ids.length; i++) if (done[ids[i]]) d++;
    return { done: d, total: ids.length };
  }

  function renderHeartCard(item, index) {
    var id = "hearts-" + (index + 1);
    var ageCls = ageClass(item.age);
    var req = item.req || T.none || "—";
    var alt = item.imgAlt || item.name;
    var search = norm([
      item.name, item.region, item.age, item.req, item.imgAlt, "pedaço de coração piece of heart"
    ].filter(Boolean).join(" "));

    return (
      '<article class="card heart" data-id="' + id + '" data-age="' + esc(item.age) + '" data-search="' + esc(search) + '">' +
        '<label class="heart-check" aria-label="' + esc(T.mark) + esc(item.name) + '">' +
          '<input type="checkbox" data-id="' + id + '">' +
          '<span class="box" aria-hidden="true"></span>' +
        "</label>" +
        '<button type="button" class="thumb heart-thumb" data-src="' + esc(item.img) + '"' +
          ' data-title="' + esc(item.name) + '" data-alt="' + esc(alt) + '" data-caption="' + esc(alt) + '"' +
          ' data-kind="' + esc(T.pieceOfHeart) + '" data-age="' + esc(item.age) + '" data-req="' + esc(req) + '"' +
          ' aria-label="' + esc(T.enlarge) + esc(item.name) + '">' +
          '<img src="' + esc(item.img) + '" alt="' + esc(alt) + '" decoding="async" ' +
            'onerror="this.parentElement.classList.add(\'missing\');this.remove()">' +
        "</button>" +
        '<div class="heart-info">' +
          '<div class="heart-top">' +
            '<span class="heart-num">' + pad(index + 1) + "</span>" +
            '<span class="age ' + ageCls + '">' + esc(item.age) + "</span>" +
          "</div>" +
          "<h3>" + esc(item.name) + "</h3>" +
          '<p class="heart-region">' + esc(item.region) + "</p>" +
          '<p class="heart-req">' + esc(T.needs) + ' <b>' + esc(req) + "</b></p>" +
        "</div>" +
      "</article>"
    );
  }

  function renderHeartSection(sec) {
    var cards = HEARTS.map(renderHeartCard).join("");
    return (
      '<section class="section" id="sec-' + sec.key + '" data-section="' + sec.key + '">' +
        '<header class="sec-head">' +
          '<div class="sec-title">' +
            '<h2><span class="sec-ico" aria-hidden="true">' + sec.icon + "</span>" + esc(secTitle(sec)) + "</h2>" +
            "<p>" + esc(secDesc(sec)) + "</p>" +
          "</div>" +
          '<div class="sec-progress" data-secprog="' + sec.key + '">' +
            '<span class="sec-count"><b>0</b> / ' + HEARTS.length + "</span>" +
            '<div class="bar"><i></i></div>' +
          "</div>" +
        "</header>" +
        '<div class="heart-grid">' + cards + "</div>" +
      "</section>"
    );
  }

  function renderSidequestCard(item, index) {
    var id = "sidequests-" + (index + 1);
    var steps = Array.isArray(item.steps) ? item.steps : [];
    var images = Array.isArray(item.images) ? item.images : [];

    var stepsHtml = steps.map(function (step) {
      return "<li><b>" + esc(step.title) + ":</b> " + esc(step.text) + "</li>";
    }).join("");

    var galleryHtml = images.map(function (image) {
      var alt = image.alt || image.caption || item.name;
      var caption = image.caption || "";
      return (
        '<button type="button" class="quest-thumb" data-src="' + esc(image.src) + '"' +
          ' data-title="' + esc(item.name) + '" data-alt="' + esc(alt) + '"' +
          ' data-caption="' + esc(caption) + '" aria-label="' + esc(T.enlarge) + esc(caption || alt) + '">' +
          '<img src="' + esc(image.src) + '" alt="' + esc(alt) + '" decoding="async" ' +
            'onerror="this.parentElement.classList.add(\'missing\');this.remove()">' +
          (caption ? '<span class="quest-thumb-label">' + esc(caption) + "</span>" : "") +
        "</button>"
      );
    }).join("");

    var search = norm([
      item.name, item.where, item.age, item.req, item.reward, item.summary,
      steps.map(function (step) { return step.title + " " + step.text; }).join(" "),
      images.map(function (image) { return image.alt + " " + image.caption; }).join(" "),
      "missão secundária sidequest"
    ].filter(Boolean).join(" "));

    return (
      '<article class="card sidequest" data-id="' + id + '" data-search="' + esc(search) + '">' +
        '<label class="sidequest-check" aria-label="' + esc(T.markQuest) + esc(item.name) + '">' +
          '<input type="checkbox" data-id="' + id + '">' +
          '<span class="box" aria-hidden="true"></span>' +
        "</label>" +
        '<div class="sidequest-body">' +
          '<div class="sidequest-head">' +
            '<div class="sidequest-title">' +
              '<span class="quest-num">' + pad(index + 1) + "</span>" +
              "<h3>" + esc(item.name) + "</h3>" +
            "</div>" +
            (item.age ? '<span class="quest-age">' + esc(item.age) + "</span>" : "") +
          "</div>" +
          '<p class="meta">' +
            (item.where ? '<span class="tag">' + esc(item.where) + "</span>" : "") +
            (item.reward ? '<span class="reward">' + esc(item.reward) + "</span>" : "") +
          "</p>" +
          (item.summary ? '<p class="quest-summary">' + esc(item.summary) + "</p>" : "") +
          (item.req ? '<p class="quest-req"><b>' + esc(T.needs) + '</b> ' + esc(item.req) + "</p>" : "") +
          (steps.length
            ? '<details class="quest-steps" open><summary>' + esc(T.stepByStep) + ' <span>(' + steps.length + " " + esc(T.steps) + ")</span></summary>" +
                "<ol>" + stepsHtml + "</ol></details>"
            : "") +
          (galleryHtml ? '<div class="quest-gallery" aria-label="' + esc(T.questPhotos) + esc(item.name) + '">' + galleryHtml + "</div>" : "") +
        "</div>" +
      "</article>"
    );
  }

  function renderSidequestSection(sec) {
    var cards = SIDEQUESTS.map(renderSidequestCard).join("");
    return (
      '<section class="section" id="sec-' + sec.key + '" data-section="' + sec.key + '">' +
        '<header class="sec-head">' +
          '<div class="sec-title">' +
            '<h2><span class="sec-ico" aria-hidden="true">' + sec.icon + "</span>" + esc(secTitle(sec)) + "</h2>" +
            "<p>" + esc(secDesc(sec)) + "</p>" +
          "</div>" +
          '<div class="sec-progress" data-secprog="' + sec.key + '">' +
            '<span class="sec-count"><b>0</b> / ' + SIDEQUESTS.length + "</span>" +
            '<div class="bar"><i></i></div>' +
          "</div>" +
        "</header>" +
        '<div class="quest-grid">' + cards + "</div>" +
      "</section>"
    );
  }

  function renderGenericCard(sec, item, index) {
    var id = sec.key + "-" + (index + 1);
    var title = item.name || secTitle(sec);
    if (sec.key === "containers") title = T.containerPrefix + title;

    var primary = item.region || item.where || "";
    var extra = "";
    if (sec.key === "sidequests") {
      extra = item.reward ? '<span class="reward">' + esc(item.reward) + "</span>" : "";
    } else if (sec.key === "dungeons") {
      extra = item.boss ? '<span class="need">' + esc(T.boss) + ' ' + esc(item.boss) + "</span>" : "";
    } else if (sec.key === "masks") {
      extra = item.how ? '<span class="need">' + esc(item.how) + "</span>" : "";
    } else if (sec.key === "fairies") {
      var bits = [];
      if (item.gift) bits.push(esc(item.gift));
      if (item.req) bits.push(esc(item.req));
      extra = bits.length ? '<span class="need">' + bits.join(" · ") + "</span>" : "";
    } else if (sec.key === "containers") {
      extra = '<span class="need">' + esc(T.heartContainer) + "</span>";
    } else if (item.req) {
      extra = '<span class="need">' + esc(item.req) + "</span>";
    }

    var search = norm([
      title, primary, item.req, item.where, item.region, item.gift,
      item.reward, item.boss, item.how, secTitle(sec)
    ].filter(Boolean).join(" "));

    return (
      '<label class="card" data-id="' + id + '" data-search="' + esc(search) + '">' +
        '<input type="checkbox" data-id="' + id + '">' +
        '<span class="box" aria-hidden="true"></span>' +
        '<div class="card-text">' +
          "<h3><span class=\"num\">" + pad(index + 1) + "</span>" + esc(title) + "</h3>" +
          '<p class="meta">' +
            (primary ? '<span class="tag">' + esc(primary) + "</span>" : "") +
            extra +
          "</p>" +
        "</div>" +
      "</label>"
    );
  }

  function renderGenericSection(sec) {
    var items = DATA[sec.key] || [];
    var cards = items.map(function (item, i) { return renderGenericCard(sec, item, i); }).join("");
    return (
      '<section class="section" id="sec-' + sec.key + '" data-section="' + sec.key + '">' +
        '<header class="sec-head">' +
          '<div class="sec-title">' +
            '<h2><span class="sec-ico" aria-hidden="true">' + sec.icon + "</span>" + esc(secTitle(sec)) + "</h2>" +
            "<p>" + esc(secDesc(sec)) + "</p>" +
          "</div>" +
          '<div class="sec-progress" data-secprog="' + sec.key + '">' +
            '<span class="sec-count"><b>0</b> / ' + items.length + "</span>" +
            '<div class="bar"><i></i></div>' +
          "</div>" +
        "</header>" +
        '<div class="grid">' + cards + "</div>" +
      "</section>"
    );
  }

  function renderSkullCard(s) {
    var id = "gs-" + s.n;
    var ageCls = ageClass(s.age) === "child" ? "child" : "adult";
    var req = lang === "en" ? (s.req || "—") : cleanReq(s.req);
    var tip = lang === "en" ? (s.desc || T.photoRef) : cleanTip(s.desc, s.req);
    var search = norm([
      "#" + s.n, s.n, s.loc, s.area, s.age, s.req, s.desc, "skulltula dourada gold skull"
    ].filter(Boolean).join(" "));

    return (
      '<article class="skull" data-id="' + id + '" data-age="' + esc(ageKey(s.age)) + '" data-area="' + esc(s.area) + '" data-search="' + esc(search) + '">' +
        '<label class="skull-check" aria-label="' + esc(T.markSkull) + s.n + '">' +
          '<input type="checkbox" data-id="' + id + '">' +
          '<span class="box" aria-hidden="true"></span>' +
        "</label>" +
        '<button type="button" class="thumb" data-n="' + s.n + '" aria-label="' + esc(T.openSkullPhoto) + s.n + '">' +
          '<img src="' + esc(s.img) + '" alt="' + esc(s.loc) + '" decoding="async" ' +
            'onerror="this.parentElement.classList.add(\'missing\');this.remove()">' +
        "</button>" +
        '<div class="skull-info">' +
          '<div class="skull-top">' +
            '<span class="skull-num">#' + s.n + "</span>" +
            '<span class="age ' + ageCls + '">' + esc(s.age) + "</span>" +
          "</div>" +
          "<h3>" + esc(s.loc) + "</h3>" +
          '<p class="skull-req">' + esc(T.needs) + ' <b>' + esc(req) + "</b></p>" +
          '<details class="tip"><summary>' + esc(T.howTo) + '</summary><p>' +
            esc(tip || T.photoRef) +
          "</p></details>" +
        "</div>" +
      "</article>"
    );
  }

  function renderSkullSection(sec) {
    var options = SKULL_AREAS.map(function (area) {
      return '<option value="' + esc(area) + '">' + esc(area) + "</option>";
    }).join("");

    var areasHtml = SKULL_AREAS.map(function (area) {
      var list = SKULLS.filter(function (s) { return s.area === area; });
      var cards = list.map(renderSkullCard).join("");
      return (
        '<details class="area" data-area="' + esc(area) + '" open>' +
          "<summary>" +
            '<span class="area-name">' + esc(area) + "</span>" +
            '<span class="area-count">0/' + list.length + "</span>" +
            '<span class="area-bar" aria-hidden="true"><i></i></span>' +
          "</summary>" +
          '<div class="skull-grid">' + cards + "</div>" +
        "</details>"
      );
    }).join("");

    return (
      '<section class="section" id="sec-skulltulas" data-section="skulltulas">' +
        '<header class="sec-head">' +
          '<div class="sec-title">' +
            '<h2><span class="sec-ico" aria-hidden="true">' + sec.icon + "</span>" + esc(secTitle(sec)) + "</h2>" +
            "<p>" + esc(secDesc(sec)) + "</p>" +
          "</div>" +
          '<div class="sec-progress" data-secprog="skulltulas">' +
            '<span class="sec-count"><b>0</b> / ' + SKULLS.length + "</span>" +
            '<div class="bar"><i></i></div>' +
          "</div>" +
        "</header>" +
        '<div class="skull-controls">' +
          '<div class="filter-group" id="ageFilter" role="group" aria-label="' + esc(T.filterAge) + '">' +
            '<button type="button" class="filter-btn active" data-age="all">' + esc(T.all) + '</button>' +
            '<button type="button" class="filter-btn" data-age="child">' + esc(T.child) + '</button>' +
            '<button type="button" class="filter-btn" data-age="adult">' + esc(T.adult) + '</button>' +
          "</div>" +
          '<select class="area-select" id="areaFilter" aria-label="' + esc(T.filterArea) + '">' +
            '<option value="all">' + esc(T.allAreas) + '</option>' + options +
          "</select>" +
          '<span class="area-count" id="skullVisible">' + SKULLS.length + " " + esc(T.visible) + '</span>' +
          '<button type="button" class="btn small" id="expandAll">' + esc(T.collapseAreas) + '</button>' +
        "</div>" +
        '<div id="skullAreas">' + areasHtml + "</div>" +
        '<div class="skull-empty" id="skullEmpty" hidden>' + esc(T.noSkulls) + "</div>" +
      "</section>"
    );
  }

  function buildNav() {
    var nav = $("#nav");
    nav.innerHTML = SECTIONS.map(function (sec) {
      var stats = sectionStats(sec.key);
      return (
        '<a class="nav-link" href="#sec-' + sec.key + '" data-target="sec-' + sec.key + '">' +
          '<span class="nav-ico" aria-hidden="true">' + sec.icon + "</span>" +
          '<span class="nav-name">' + esc(secTitle(sec)) + "</span>" +
          '<span class="nav-count" data-nav="' + sec.key + '">' + stats.done + "/" + stats.total + "</span>" +
        "</a>"
      );
    }).join("");
  }

  function render() {
    var main = $("#sections");
    main.innerHTML = SECTIONS.map(function (sec) {
      if (sec.key === "hearts") return renderHeartSection(sec);
      if (sec.key === "skulltulas") return renderSkullSection(sec);
      if (sec.key === "sidequests") return renderSidequestSection(sec);
      return renderGenericSection(sec);
    }).join("");
    buildNav();
    syncCheckboxes();
    updateProgress();
    applyFilters();
    setupScrollSpy();
  }

  function syncCheckboxes() {
    $$("input[type=checkbox][data-id]").forEach(function (cb) {
      var on = isDone(cb.dataset.id);
      cb.checked = on;
      var host = cb.closest(".card, .skull");
      if (host) host.classList.toggle("done", on);
    });
  }

  function updateProgress() {
    var total = ALL_IDS.length;
    var count = 0;
    for (var i = 0; i < ALL_IDS.length; i++) if (done[ALL_IDS[i]]) count++;
    var pct = total ? Math.round((count / total) * 100) : 0;

    $("#ringPct").textContent = pct + "%";
    $("#sidePct").textContent = pct + "%";
    $("#ringFg").style.strokeDashoffset = String(351.86 * (1 - (total ? count / total : 0)));
    $("#sideBar").style.width = pct + "%";
    $("#sideCount").textContent = count + T.of + total;
    $("#sideLeft").textContent = (total - count) + T.remaining;
    $("#chipDone").textContent = String(count);

    var sk = sectionStats("skulltulas");
    $("#chipSkull").textContent = String(sk.done);
    var hearts = sectionStats("hearts");
    var containers = sectionStats("containers");
    $("#chipHearts").textContent = String(hearts.done + containers.done);

    SECTIONS.forEach(function (sec) {
      var stats = sectionStats(sec.key);
      var wrap = $('[data-secprog="' + sec.key + '"]');
      if (wrap) {
        var num = wrap.querySelector(".sec-count b");
        if (num) num.textContent = String(stats.done);
        var bar = wrap.querySelector(".bar i");
        if (bar) bar.style.width = (stats.total ? (stats.done / stats.total) * 100 : 0) + "%";
      }
      var navCount = $('[data-nav="' + sec.key + '"]');
      if (navCount) {
        navCount.textContent = stats.done + "/" + stats.total;
        navCount.classList.toggle("full", stats.total > 0 && stats.done === stats.total);
      }
    });

    $$(".area").forEach(function (areaEl) {
      var area = areaEl.dataset.area;
      var ids = SKULL_BY_AREA.get(area) || [];
      var d = 0;
      for (var j = 0; j < ids.length; j++) if (done[ids[j]]) d++;
      var countEl = areaEl.querySelector(".area-count");
      if (countEl) countEl.textContent = d + "/" + ids.length;
      var barEl = areaEl.querySelector(".area-bar i");
      if (barEl) barEl.style.width = (ids.length ? (d / ids.length) * 100 : 0) + "%";
      areaEl.classList.toggle("complete", ids.length > 0 && d === ids.length);
    });
  }

  function applyFilters() {
    var q = norm(query);
    var hide = prefs.hideDone;

    $$(".card").forEach(function (card) {
      var match = !q || (card.dataset.search || "").indexOf(q) !== -1;
      var visible = match && !(hide && card.classList.contains("done"));
      card.classList.toggle("is-hidden", !visible);
    });

    $$(".skull").forEach(function (card) {
      var match = !q || (card.dataset.search || "").indexOf(q) !== -1;
      var ageOk = skullAge === "all" || card.dataset.age === skullAge;
      var areaOk = skullArea === "all" || card.dataset.area === skullArea;
      var visible = match && ageOk && areaOk && !(hide && card.classList.contains("done"));
      card.classList.toggle("is-hidden", !visible);
    });

    $$(".area").forEach(function (areaEl) {
      var any = !!areaEl.querySelector(".skull:not(.is-hidden)");
      areaEl.classList.toggle("is-hidden", !any);
    });

    var visibleSkulls = $$(".skull:not(.is-hidden)").length;
    var visibleEl = $("#skullVisible");
    if (visibleEl) visibleEl.textContent = visibleSkulls + " " + T.visible;
    var emptyEl = $("#skullEmpty");
    if (emptyEl) emptyEl.hidden = visibleSkulls > 0;

    $$(".section").forEach(function (sec) {
      if (sec.dataset.section === "skulltulas") return;
      var items = $$(".card", sec);
      var anyVisible = items.some(function (el) { return !el.classList.contains("is-hidden"); });
      sec.classList.toggle("is-hidden", items.length > 0 && !anyVisible);
    });
  }

  function setupScrollSpy() {
    var links = $$(".nav-link");
    var sections = $$(".section");
    if (!("IntersectionObserver" in window)) return;
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (link) {
          link.classList.toggle("active", link.dataset.target === entry.target.id);
        });
      });
    }, { rootMargin: "-18% 0px -72% 0px", threshold: 0 });
    sections.forEach(function (sec) { observer.observe(sec); });
  }

  function setActiveNav(id) {
    $$(".nav-link").forEach(function (link) {
      link.classList.toggle("active", link.dataset.target === id);
    });
  }

  /* ---------- Lightbox ---------- */

  function openLightbox(n) {
    var s = SKULL_BY_N.get(String(n));
    if (!s) return;
    lastFocus = document.activeElement;
    var lb = $("#lightbox");
    var img = $("#lbImg");
    img.src = s.img;
    img.alt = s.loc;
    $("#lbNum").textContent = "#" + s.n;
    var age = $("#lbAge");
    age.hidden = false;
    age.textContent = s.age;
    age.className = "age " + (ageKey(s.age) === "child" ? "child" : "adult");
    $("#lbTitle").textContent = s.loc;
    $("#lbReq").hidden = false;
    $("#lbReq").innerHTML = esc(T.needs) + " <b>" + esc(lang === "en" ? (s.req || "—") : cleanReq(s.req)) + "</b>";
    $("#lbDesc").textContent = (lang === "en" ? s.desc : cleanTip(s.desc, s.req)) || T.photoRef;
    lb.hidden = false;
    document.body.style.overflow = "hidden";
    $("#lbClose").focus();
  }

  function openDetailLightbox(button) {
    if (!button) return;
    lastFocus = document.activeElement;
    var lb = $("#lightbox");
    var img = $("#lbImg");
    img.src = button.dataset.src;
    img.alt = button.dataset.alt || button.dataset.title || T.photo;
    $("#lbNum").textContent = button.dataset.kind || T.sidequest;
    var age = $("#lbAge");
    var ageValue = button.dataset.age || "";
    age.hidden = !ageValue;
    age.textContent = ageValue;
    var k = ageKey(ageValue);
    age.className = ageValue ? ("age " + (k === "child" ? "child" : k === "adult" ? "adult" : "both")) : "age";
    $("#lbTitle").textContent = button.dataset.title || T.photo;
    var req = $("#lbReq");
    req.hidden = !button.dataset.req;
    req.innerHTML = button.dataset.req ? esc(T.needs) + " <b>" + esc(button.dataset.req) + "</b>" : "";
    $("#lbDesc").textContent = button.dataset.caption || "";
    lb.hidden = false;
    document.body.style.overflow = "hidden";
    $("#lbClose").focus();
  }

  function closeLightbox() {
    var lb = $("#lightbox");
    if (!lb || lb.hidden) return;
    lb.hidden = true;
    $("#lbImg").removeAttribute("src");
    $("#lbReq").hidden = false;
    $("#lbAge").hidden = false;
    document.body.style.overflow = "";
    if (lastFocus && lastFocus.focus) lastFocus.focus();
    lastFocus = null;
  }

  /* ---------- Mobile menu ---------- */

  function openMenu() {
    $("#sidebar").classList.add("open");
    $("#backdrop").hidden = false;
    $("#menuBtn").setAttribute("aria-expanded", "true");
  }

  function closeMenu() {
    $("#sidebar").classList.remove("open");
    $("#backdrop").hidden = true;
    $("#menuBtn").setAttribute("aria-expanded", "false");
  }

  /* ---------- Export / import / reset ---------- */

  function exportProgress() {
    var payload = {
      game: T.gameName,
      version: 1,
      exportedAt: new Date().toISOString(),
      done: done
    };
    var blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = T.exportFilename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(function () { URL.revokeObjectURL(url); }, 1200);
    toast(T.exported);
  }

  function importProgress(file) {
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function () {
      try {
        var parsed = JSON.parse(String(reader.result));
        var source = parsed && parsed.done ? parsed.done : parsed;
        if (!source || typeof source !== "object" || Array.isArray(source)) throw new Error("formato");
        if (!window.confirm(T.confirmImport)) return;
        done = {};
        Object.keys(source).forEach(function (k) { if (source[k]) done[k] = true; });
        saveState();
        syncCheckboxes();
        updateProgress();
        applyFilters();
        toast(T.imported);
      } catch (e) {
        toast(T.invalidFile);
      }
    };
    reader.readAsText(file);
  }

  /* ---------- Events ---------- */

  function bindEvents() {
    $("#sections").addEventListener("change", function (event) {
      var cb = event.target.closest("input[type=checkbox][data-id]");
      if (!cb) return;
      var id = cb.dataset.id;
      if (cb.checked) done[id] = true; else delete done[id];
      var host = cb.closest(".card, .skull");
      if (host) host.classList.toggle("done", cb.checked);
      saveState();
      updateProgress();
      applyFilters();
    });

    $("#sections").addEventListener("click", function (event) {
      var heartThumb = event.target.closest(".heart-thumb");
      if (heartThumb) {
        event.preventDefault();
        openDetailLightbox(heartThumb);
        return;
      }
      var questThumb = event.target.closest(".quest-thumb");
      if (questThumb) {
        event.preventDefault();
        openDetailLightbox(questThumb);
        return;
      }
      var thumb = event.target.closest(".thumb");
      if (thumb) {
        event.preventDefault();
        openLightbox(thumb.dataset.n);
        return;
      }
      var filterBtn = event.target.closest(".filter-btn");
      if (filterBtn) {
        skullAge = filterBtn.dataset.age;
        $$(".filter-btn", $("#ageFilter")).forEach(function (b) {
          b.classList.toggle("active", b === filterBtn);
        });
        applyFilters();
      }
      var expandBtn = event.target.closest("#expandAll");
      if (expandBtn) {
        var areas = $$(".area");
        var anyClosed = areas.some(function (a) { return !a.open; });
        areas.forEach(function (a) { a.open = anyClosed; });
        expandBtn.textContent = anyClosed ? T.expandAreas : T.collapseAreas;
      }
    });

    $("#sections").addEventListener("change", function (event) {
      if (event.target && event.target.id === "areaFilter") {
        skullArea = event.target.value;
        applyFilters();
      }
    });

    $("#menuBtn").addEventListener("click", openMenu);
    $("#sideClose").addEventListener("click", closeMenu);
    $("#backdrop").addEventListener("click", closeMenu);

    $("#nav").addEventListener("click", function (event) {
      var link = event.target.closest(".nav-link");
      if (link) {
        closeMenu();
        setActiveNav(link.dataset.target);
      }
    });

    $("#search").addEventListener("input", function (event) {
      query = event.target.value;
      $("#searchClear").hidden = !query;
      applyFilters();
    });

    $("#searchClear").addEventListener("click", function () {
      query = "";
      $("#search").value = "";
      $("#searchClear").hidden = true;
      $("#search").focus();
      applyFilters();
    });

    $("#photosToggle").addEventListener("change", function (event) {
      prefs.photos = event.target.checked;
      document.body.classList.toggle("no-photos", !prefs.photos);
      savePrefs();
    });

    $("#hideDone").addEventListener("change", function (event) {
      prefs.hideDone = event.target.checked;
      savePrefs();
      applyFilters();
    });

    $("#exportBtn").addEventListener("click", exportProgress);
    $("#importBtn").addEventListener("click", function () { $("#importFile").click(); });
    $("#importFile").addEventListener("change", function (event) {
      importProgress(event.target.files && event.target.files[0]);
      event.target.value = "";
    });
    $("#resetBtn").addEventListener("click", function () {
      if (!window.confirm(T.confirmReset)) return;
      done = {};
      saveState();
      syncCheckboxes();
      updateProgress();
      applyFilters();
      toast(T.resetDone);
    });

    $$(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () { setLanguage(btn.dataset.lang); });
    });

    $("#lbClose").addEventListener("click", closeLightbox);
    $("#lightbox").addEventListener("click", function (event) {
      if (event.target === $("#lightbox")) closeLightbox();
    });

    document.addEventListener("keydown", function (event) {
      var tag = (event.target && event.target.tagName) || "";
      var typing = tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT";

      if (event.key === "Escape") {
        if (!$("#lightbox").hidden) { closeLightbox(); return; }
        if ($("#sidebar").classList.contains("open")) { closeMenu(); return; }
        if (query) {
          query = "";
          $("#search").value = "";
          $("#searchClear").hidden = true;
          applyFilters();
          $("#search").blur();
        }
        return;
      }

      if (event.key === "/" && !typing) {
        event.preventDefault();
        $("#search").focus();
        $("#search").select();
      }
    });

    document.addEventListener("toggle", function (event) {
      if (event.target && event.target.classList && event.target.classList.contains("area")) {
        var areas = $$(".area");
        var anyClosed = areas.some(function (a) { return !a.open; });
        $("#expandAll").textContent = anyClosed ? T.expandAreas : T.collapseAreas;
      }
    }, true);

    window.addEventListener("resize", function () {
      if (window.innerWidth > 1024) closeMenu();
    });
  }

  function applyStatic() {
    var s = STATIC[lang] || STATIC.pt;
    $$("[data-i18n]").forEach(function (el) {
      var key = el.dataset.i18n;
      if (s[key] != null) el.textContent = s[key];
    });
    $$("[data-i18n-html]").forEach(function (el) {
      var key = el.dataset.i18nHtml;
      if (s[key] != null) el.innerHTML = s[key];
    });
    var search = $("#search");
    if (search) search.placeholder = s.searchPlaceholder;
    document.documentElement.lang = UI[lang].htmlLang;
    $$(".lang-btn").forEach(function (b) {
      b.classList.toggle("active", b.dataset.lang === lang);
    });
  }

  function setLanguage(next) {
    if (next !== "en" && next !== "pt") return;
    if (next === lang) return;
    lang = next;
    prefs.lang = next;
    T = UI[lang];
    savePrefs();
    applyStatic();
    buildData();
    render();
  }

  function init() {
    loadState();
    lang = prefs.lang === "en" ? "en" : "pt";
    T = UI[lang];
    applyStatic();
    buildData();
    document.body.classList.toggle("no-photos", !prefs.photos);
    $("#photosToggle").checked = prefs.photos;
    $("#hideDone").checked = prefs.hideDone;
    render();
    bindEvents();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
