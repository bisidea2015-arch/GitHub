/* Блок «Встречи» — Институт психологии АБИТ.
   Все данные встреч — в массиве MEETINGS ниже: даты, темы, спикеры, фото.
   Чтобы добавить фото спикера, положите файл в папку meetings/ и укажите путь в поле photo. */
(function () {
  "use strict";

  var PLACE = "БЦ «Зеленоград», Савелкинский проезд, 4, 3 этаж";
  var PHONE = "+7 495 981-56-01";

  var MEETINGS = [
    {
      day: "21", month: "ноября", time: "суббота, 15:00",
      title: "Встреча выпускников: психолог в 2026 году — куда растёт профессия",
      speaker: "Лариса Викторовна Калачева",
      role: "Учредитель АБИТ, член Экспертного совета Комитета ГД по образованию, к.э.н., доцент",
      photo: "./meetings/speaker-kalacheva.webp",
      desc: "Большая встреча выпускников Института психологии АБИТ. Собираемся, чтобы обменяться опытом, найти коллег и партнёров и поговорить о том, как меняются профессия и подготовка психологов.",
      points: [
        "Истории выпускников: частная практика, работа в компаниях, школах и центрах",
        "Что меняется в требованиях к психологам и в системе дополнительного образования",
        "Новые программы института и возможности для выпускников",
        "Нетворкинг: знакомство с коллегами разных потоков и направлений"
      ],
      forWhom: "Для выпускников АБИТ и их коллег",
      featured: true
    },
    {
      day: "28", month: "ноября", time: "суббота, 15:00",
      title: "Психолог в соцсетях: как вести блог, собирать аудиторию и не нарушать этику",
      speaker: "Андрей Назаров",
      role: "Академический директор Института психологии АБИТ, коуч, социальный психолог",
      photo: "./meetings/speaker-nazarov.webp",
      desc: "Клиенты всё чаще выбирают психолога по его блогу. Разберём, как говорить о психологии понятно и бережно, на примере блогов с многомиллионной аудиторией.",
      points: [
        "Какие форматы работают: экспертные посты, разборы, короткие видео",
        "Где проходит граница: почему нельзя «ставить диагнозы» в комментариях",
        "Как блог превращается в поток запросов на консультации"
      ],
      forWhom: "Для практикующих психологов и коучей"
    },
    {
      day: "5", month: "декабря", time: "суббота, 15:00",
      title: "ИИ в практике психолога: помощник, а не замена",
      speaker: "Павел Сафронов",
      role: "Бизнес-психология, эксперт-практик, спикер по маркетингу и нейросетям",
      photo: "./meetings/speaker-safronov.webp",
      desc: "Нейросети уже пришли в профессию: клиенты советуются с чат-ботами, а психологи ищут, как ускорить рутину. Покажем вживую, где ИИ действительно помогает, а где ему не место.",
      points: [
        "Нейросети для рутины: материалы к сессиям, упражнения, тексты для соцсетей",
        "Конфиденциальность: какие данные клиента нельзя передавать ИИ",
        "Клиент пришёл после «терапии с чат-ботом»: как с этим работать"
      ],
      forWhom: "Для психологов и студентов, ноутбук — по желанию"
    },
    {
      day: "12", month: "декабря", time: "суббота, 15:00",
      title: "Голос и язык тела психолога: как говорить, чтобы вам доверяли",
      speaker: "Виталий Сурма",
      role: "Эксперт в области ораторского мастерства и риторики, тренер по публичным выступлениям",
      photo: "./meetings/speaker-surma.webp",
      desc: "Доверие клиента складывается в первые минуты, и слова в нём играют не главную роль. Разберём, как интонация, паузы, поза и жесты помогают психологу на сессии, на вебинаре и в видео для соцсетей.",
      points: [
        "Невербальные сигналы: что считывает клиент, пока вы молчите",
        "Голос и темп речи на сессии, в эфире и на публичном выступлении",
        "Практика: короткое выступление с обратной связью от тренера"
      ],
      forWhom: "Для психологов, коучей и всех, кто выступает публично"
    },
    {
      day: "19", month: "декабря", time: "суббота, 15:00",
      title: "Тревога в эпоху неопределённости: как помогать, когда тревожно всем",
      speaker: "Людмила Валяева",
      role: "Психолог-практик, ведёт индивидуальное консультирование",
      photo: "./meetings/teacher-valyaeva.webp",
      desc: "Тревога и стресс — самые частые запросы к психологу. Разберём, чем фоновая тревога отличается от тревожного расстройства и какие инструменты помогают клиенту вернуть опору.",
      points: [
        "Фоновая тревога или повод направить к врачу: как различать",
        "Практические техники стабилизации для работы на сессии",
        "Разбор случаев из практики и ответы на вопросы",
        "Как психологу не «заразиться» тревогой клиента"
      ],
      forWhom: "Для психологов-консультантов и студентов"
    }
  ];

  /* Дополнительные преподаватели — добавляются в блок «Преподаватели» */
  var EXTRA_TEACHERS = [
    {
      name: "Виталий Сурма",
      role: "Эксперт в области ораторского мастерства и риторики",
      bio: "Тренер по публичным выступлениям и деловым коммуникациям. Эксперт по невербальной коммуникации и языку тела.",
      tags: ["Публичные выступления", "Риторика", "Язык тела"],
      photo: "./meetings/speaker-surma.webp"
    },
    {
      name: "Людмила Валяева",
      role: "Психолог-практик",
      bio: "Практикующий психолог. Ведёт индивидуальное консультирование и разбирает на занятиях случаи из своей практики.",
      tags: ["Консультирование", "Практика"],
      photo: "./meetings/teacher-valyaeva.webp"
    }
  ];

  function ensureTeachers() {
    var grid = document.querySelector("#teachers .grid");
    if (!grid) return false;
    if (grid.querySelector("[data-extra-teacher]")) return true;
    var tpl = grid.lastElementChild;
    if (!tpl || !tpl.querySelector("article")) return false;
    var have = Array.prototype.map.call(grid.querySelectorAll("h3"), function (h) { return h.textContent.trim(); }).join("|");
    var missing = EXTRA_TEACHERS.filter(function (t) { return have.indexOf(t.name) < 0; });
    if (!missing.length) return true;
    missing.forEach(function (t) {
      var c = tpl.cloneNode(true);
      c.setAttribute("data-extra-teacher", "");
      c.style.opacity = "1"; c.style.transform = "none";
      var img = c.querySelector("img");
      if (img) {
        img.src = t.photo; img.alt = t.name + " — " + t.role;
        img.width = 853; img.height = 1280;
        img.removeAttribute("srcset"); img.style.backgroundImage = "none";
      }
      var h3 = c.querySelector("h3"); if (h3) h3.textContent = t.name;
      var ps = c.querySelectorAll("article > p");
      if (ps[0]) ps[0].textContent = t.role;
      if (ps[1]) ps[1].textContent = t.bio;
      var ul = c.querySelector("article > ul");
      if (ul && ul.firstElementChild) {
        var li = ul.firstElementChild.cloneNode(false);
        ul.innerHTML = "";
        t.tags.forEach(function (tag) { var x = li.cloneNode(false); x.textContent = tag; ul.appendChild(x); });
      }
      grid.appendChild(c);
    });
    if (grid.children.length === 4) grid.classList.add("has-extra-teachers");
    return true;
  }

  var ICON_ARROW = '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 10h11M11 5l5 5-5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function pad(n) { return n < 10 ? "0" + n : "" + n; }

  function cardHTML(m, i) {
    var photo = m.photo
      ? '<img src="' + esc(m.photo) + '" alt="' + esc(m.speaker) + '" loading="lazy" width="853" height="1280">'
      : '<span class="mt-mono" aria-hidden="true">' + esc(m.initials || "") + "</span>";
    var points = (m.points || []).map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("");
    return '<li class="mt-card' + (m.featured ? " is-featured" : "") + '">' +
      '<div class="mt-date"><span class="mt-num">Встреча ' + pad(i + 1) + '</span>' +
      '<span class="mt-day">' + esc(m.day) + '</span><span class="mt-month">' + esc(m.month) + '</span>' +
      '<span class="mt-time">' + esc(m.time) + "</span></div>" +
      '<div class="mt-photo">' + photo + "</div>" +
      '<div class="mt-body"><h3>' + esc(m.title) + "</h3>" +
      '<p class="mt-speaker">' + esc(m.speaker) + '</p><p class="mt-role">' + esc(m.role) + "</p>" +
      '<p class="mt-desc">' + esc(m.desc) + "</p>" +
      '<ul class="mt-points">' + points + "</ul>" +
      '<div class="mt-foot"><button type="button" class="mt-btn" data-mt="' + i + '">Записаться бесплатно ' + ICON_ARROW + "</button>" +
      '<span class="mt-for">' + esc(m.forWhom || "") + "</span></div></div></li>";
  }

  function sectionHTML() {
    return '<div class="mt-glow" aria-hidden="true"></div><div class="mt-wrap">' +
      '<span class="mt-eyebrow"><i></i>Встречи</span>' +
      "<h2>Открытые встречи <em>для психологов</em></h2>" +
      '<p class="mt-lead">Пять бесплатных встреч в Институте психологии АБИТ: о профессии, клиентах, нейросетях и о том, как самому психологу оставаться в ресурсе. Приходите с вопросами и приводите коллег.</p>' +
      '<ul class="mt-facts"><li><b>Бесплатно</b> — по предварительной записи</li><li>Очно: ' + esc(PLACE) + "</li><li>Около 2 часов, с вопросами спикеру</li></ul>" +
      '<ol class="mt-list">' + MEETINGS.map(cardHTML).join("") + "</ol></div>";
  }

  /* ---------- Модальное окно записи ---------- */
  var modal, lastFocus;
  function buildModal() {
    modal = document.createElement("div");
    modal.id = "mt-modal";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-labelledby", "mt-title");
    modal.innerHTML = '<div class="mt-dialog"><button type="button" class="mt-x" aria-label="Закрыть">×</button><div class="mt-inner"></div></div>';
    document.body.appendChild(modal);
    modal.addEventListener("click", function (e) { if (e.target === modal || e.target.closest(".mt-x")) closeModal(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && modal.classList.contains("is-open")) closeModal(); });
  }

  function openModal(i) {
    if (!modal) buildModal();
    var m = MEETINGS[i];
    lastFocus = document.activeElement;
    modal.querySelector(".mt-inner").innerHTML =
      '<span class="mt-k">Встреча ' + pad(i + 1) + " · " + esc(m.day + " " + m.month) + ", " + esc(m.time) + "</span>" +
      '<h4 id="mt-title">' + esc(m.title) + "</h4>" +
      '<p class="mt-sub">Спикер: ' + esc(m.speaker) + ". Участие бесплатное, пришлём напоминание и адрес.</p>" +
      '<form novalidate><div class="mt-hp" aria-hidden="true"><label for="mt-web">Не заполняйте</label><input id="mt-web" type="text" name="website" tabindex="-1" autocomplete="off"></div>' +
      '<div><label for="mt-name">Как вас зовут *</label><input id="mt-name" type="text" name="name" autocomplete="name" placeholder="Анна"></div>' +
      '<div><label for="mt-phone">Телефон *</label><input id="mt-phone" type="tel" name="phone" inputmode="tel" autocomplete="tel" placeholder="+7 (999) 123-45-67"></div>' +
      '<div><label for="mt-email">E-mail — необязательно</label><input id="mt-email" type="email" name="email" autocomplete="email" placeholder="anna@example.ru"></div>' +
      '<p class="mt-msg" aria-live="polite"></p>' +
      '<button type="submit" class="mt-submit">Записаться</button>' +
      '<p class="mt-legal">Нажимая кнопку, вы даёте <a href="/consent/" target="_blank">согласие на обработку персональных данных</a> и принимаете <a href="/privacy/" target="_blank">политику конфиденциальности</a>.</p></form>';
    var form = modal.querySelector("form");
    form.addEventListener("submit", function (e) { e.preventDefault(); submit(form, m); });
    modal.classList.add("is-open");
    document.documentElement.style.overflow = "hidden";
    setTimeout(function () { var f = modal.querySelector("#mt-name"); if (f) f.focus(); }, 30);
  }

  function closeModal() {
    modal.classList.remove("is-open");
    document.documentElement.style.overflow = "";
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function submit(form, m) {
    var name = form.name.value.trim(), phone = form.phone.value.trim(), email = form.email.value.trim();
    var msg = form.querySelector(".mt-msg"), btn = form.querySelector(".mt-submit");
    var digits = phone.replace(/\D/g, "");
    form.name.setAttribute("aria-invalid", name ? "false" : "true");
    form.phone.setAttribute("aria-invalid", digits.length >= 10 ? "false" : "true");
    msg.className = "mt-msg";
    if (!name || digits.length < 10) { msg.className = "mt-msg err"; msg.textContent = "Укажите имя и телефон, чтобы мы могли подтвердить запись."; return; }
    btn.disabled = true; btn.textContent = "Отправляем…";
    var title = "Встреча: " + m.title + " (" + m.day + " " + m.month + ")";
    fetch("/lead.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name, phone: phone, email: email || undefined,
        comment: "Запись на бесплатную встречу. " + title + ". Спикер: " + m.speaker,
        consent: true, formId: "meetings", formName: "Запись на встречу", programName: title,
        tracking: { page: location.href, referrer: document.referrer || undefined },
        website: form.website.value
      })
    }).then(function (r) {
      return r.json().catch(function () { return {}; }).then(function (j) { if (!r.ok || !j.ok) throw new Error(j.error || "send"); });
    }).then(function () {
      try { if (window.ym && window.__YM_ID) window.ym(window.__YM_ID, "reachGoal", "meeting_signup"); } catch (e) {}
      modal.querySelector(".mt-inner").innerHTML = '<div class="mt-ok"><b>Вы записаны!</b><p class="mt-sub">Мы свяжемся с вами, чтобы подтвердить участие во встрече «' + esc(m.title) + '».</p></div>';
    }).catch(function () {
      btn.disabled = false; btn.textContent = "Записаться";
      msg.className = "mt-msg err";
      msg.innerHTML = 'Не удалось отправить заявку. Позвоните нам: <a href="tel:' + PHONE.replace(/[^\d+]/g, "") + '">' + PHONE + "</a>.";
    });
  }

  /* ---------- Вставка блока и пункт меню ---------- */
  function ensureCSS() {
    if (document.getElementById("mt-css")) return;
    var l = document.createElement("link");
    l.id = "mt-css"; l.rel = "stylesheet"; l.href = "./meetings/meetings.css?v=20261115e";
    document.head.appendChild(l);
  }

  function ensureSection() {
    if (document.getElementById("meetings")) return true;
    var anchor = document.getElementById("consultation");
    if (!anchor || !anchor.parentNode) return false;
    var s = document.createElement("section");
    s.id = "meetings";
    s.setAttribute("aria-label", "Бесплатные встречи для психологов");
    s.innerHTML = sectionHTML();
    anchor.parentNode.insertBefore(s, anchor);
    s.addEventListener("click", function (e) {
      var b = e.target.closest("[data-mt]");
      if (b) openModal(+b.getAttribute("data-mt"));
    });
    if (location.hash === "#meetings") s.scrollIntoView();
    return true;
  }

  /* Кнопка «Личный кабинет» в шапке сайта */
  function ensureCabinetLink() {
    if (document.getElementById("mt-cab")) return true;
    var cta = Array.prototype.filter.call(document.querySelectorAll("header button, header a"), function (b) { return /Оставить заявку/.test(b.textContent); })[0];
    if (!cta || !cta.parentNode) return false;
    var a = document.createElement("a");
    a.id = "mt-cab"; a.href = "./cabinet/"; a.title = "Личный кабинет";
    a.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/></svg><span>Личный кабинет</span>';
    cta.parentNode.insertBefore(a, cta);
    return true;
  }

  /* Фоновые фото в карточках «Профессиональная переподготовка» (бейдж «Диплом»).
     Ключ — начало названия программы, значение — файл фото. */
  var M = "./_next/static/media/";
  var PROGRAM_PHOTOS = [
    ["Психологическое консультирование", "ref-puzzle-head.1g7jkiibihqvq.webp"],
    ["Психоанализ", "ref-psy-face.1o2198k56aqj4.webp"],
    ["Гештальт", "ref-puzzle-cosmos.1magpcpi5f8ze.webp"],
    ["Организационная психология", "seminar-speaker.3_w-emrn0avr7.webp"],
    ["Детский нейропсихолог", "ref-neural-spine.2lnyx2y_fljrt.webp"],
    ["Детский психолог", "students-pair.41fow1j8tluax.webp"],
    ["Семейный психолог", "ref-mind-heart.0tjfilkvl4y7f.webp"],
    ["Психосоматика", "ref-holo-body.3vaxyo3rlsebk.webp"],
    ["Нейропсихолог", "ref-brain-circuit.1icsa0yqzytf8.webp"],
    ["Кризисный психолог", "lecture-emotions.1u-hd9c1pd4iq.webp"],
    ["Педагог-психолог", "classroom-listening.0wt0fe299nyiq.webp"],
    ["Логопед", "students-desk.0g8isxtwbdcvx.webp"],
    ["Прикладной анализ поведения", "lecture-audience.0-egcymdlcbwv.webp"],
    ["Сексология", "campus-lecture.0buhps7hmgndg.webp"]
  ];
  var FALLBACK_PHOTO = "hero-seminar-square.37qhn1bi1-0l3.webp";

  function photoFor(title) {
    for (var i = 0; i < PROGRAM_PHOTOS.length; i++) if (title.indexOf(PROGRAM_PHOTOS[i][0]) === 0) return PROGRAM_PHOTOS[i][1];
    return FALLBACK_PHOTO;
  }

  function ensureProgramPhotos() {
    var heads = document.querySelectorAll("article > div.bg-gradient-to-br");
    for (var i = 0; i < heads.length; i++) {
      var h = heads[i], h3 = h.querySelector("h3"), badge = h.querySelector("span");
      if (!h3 || !badge || !/Диплом/.test(badge.textContent)) continue;
      if (h.querySelector("img") || (h.parentNode && h.parentNode.querySelector("img"))) continue;
      var title = h3.textContent.trim();
      if (h.getAttribute("data-photo") === title) continue;
      var featured = /from-accent-500/.test(h.className);
      var tint = featured ? "rgba(158,58,25,.55),rgba(80,26,10,.92)" : "rgba(15,20,32,.45),rgba(10,13,20,.92)";
      h.style.backgroundImage = "linear-gradient(180deg," + tint + "),url('" + M + photoFor(title) + "')";
      h.style.backgroundSize = "cover";
      h.style.backgroundPosition = "center 30%";
      h.classList.add("mt-photo-head");
      h.setAttribute("data-photo", title);
    }
  }

  function ensureMenu() {
    var links = document.querySelectorAll('a[href$="#consultation"]');
    for (var i = 0; i < links.length; i++) {
      var a = links[i];
      if (a.textContent.trim() !== "Консультация") continue;
      a.setAttribute("href", a.getAttribute("href").replace("#consultation", "#meetings"));
      a.textContent = "Встречи";
    }
    /* Убираем из меню «Стоимость» и «Выпускники» (раздел выпускников на странице остаётся) */
    var drop = document.querySelectorAll('a[href$="#pricing"], a[href$="#graduates"]');
    for (var j = 0; j < drop.length; j++) {
      var d = drop[j];
      if (d.closest("#graduates") || d.closest("#club") || d.closest("#meetings")) continue;
      var dl = d.closest("li");
      if (dl && dl.parentNode) dl.parentNode.removeChild(dl); else d.style.display = "none";
    }
    /* «Вопросы» → «Клуб психологов» */
    var faq = document.querySelectorAll('a[href$="#faq"]');
    for (var k = 0; k < faq.length; k++) {
      var f = faq[k];
      if (f.textContent.trim() !== "Вопросы") continue;
      f.setAttribute("href", f.getAttribute("href").replace("#faq", "#club"));
      f.textContent = "Клуб психологов";
    }
  }
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest('a[href$="#meetings"],a[href$="#graduates"],a[href$="#club"]');
    if (!a) return;
    var id = (a.getAttribute("href").match(/#(\w+)$/) || [])[1];
    var m = document.getElementById(id); if (!m) return;
    setTimeout(function () { m.scrollIntoView({ behavior: "smooth", block: "start" }); }, 30);
  });


  /* ---------- Раздел «Клуб психологов АБИТ» с формой заявки ---------- */
  var CLUB = {
    leader: "Ольга Мусса",
    leaderRole: "Руководитель клуба",
    photo: "./meetings/club-mussa.webp",
    bioLead: "Психолог, предприниматель, радиоведущая международного радио, эксперт федеральных телеканалов.",
    bio: "Основатель проекта «Уникальные Люди Мира» и Клуба людей бизнеса и искусства. Создатель и продюсер медиапроектов, объединяющих людей, идеи и возможности. Развивает профессиональные сообщества, помогает экспертам раскрывать свой потенциал, укреплять личный бренд и выходить на новые уровни профессиональной реализации.",
    stats: [[60, "+", "мероприятий в год"], [3, "", "встречи в месяц"], [4, "", "выезда в год"], [5, "", "звёздных гостей"]],
    formats: ["Интервизии", "Супервизии", "Балинт-группы", "Читальный клуб", "Киноклуб", "Мастер-классы", "Мастерская мастерских", "Онлайн-циклы", "Звёздные гости", "Наставничество", "Выезды", "Форум клуба", "Симпозиум", "Нетворкинг"],
    perks: [
      "Разбор своих случаев с коллегами и супервизором",
      "Профессиональное окружение и партнёры по практике",
      "Помощь с личным брендом, блогом и выступлениями",
      "Карточка психолога на сайте abitpsy.ru с записью на консультации",
      "Наставничество: опытные коллеги сопровождают новичков"
    ],
    plan: [
      ["Декабрь", [["Открытие клуба", "знакомство и этический кодекс", "Зеленоград"], ["Разбор кейсов №1", "групповая интервизия", "Зеленоград"], ["Продвижение психолога", "3 онлайн-встречи: соцсети, сайт, карточка", "Онлайн"], ["Первичная консультация", "мастер-класс: контракт и границы", "Зеленоград"], ["Новогодний вечер клуба", "итоги и планы на год", "Зеленоград"]]],
      ["Январь", [["Зимний выезд, 2 дня", "интервизия, баня, план года", "Выезд"], ["Читальный клуб", "профессиональная книга месяца", "Зеленоград"], ["Звёздный гость", "открытая лекция и вопросы из зала", "Зеленоград"], ["Балинт-группа", "чувства специалиста и трудный клиент", "Зеленоград"], ["Групповая супервизия", "разбор случаев с супервизором", "Онлайн"]]],
      ["Год", [["Весенняя встреча выпускников", "все потоки института, март", "Зеленоград"], ["Форум клуба", "доклады, секции, нетворкинг, июнь", "Зеленоград"], ["Летняя школа", "выезд с мастер-классами, июль", "Выезд"], ["Симпозиум", "доклады участников клуба, октябрь", "Зеленоград"], ["Годовщина клуба", "праздник и итоги года, ноябрь", "Зеленоград"]]]
    ]
  };

  function clubHTML() {
    var stats = CLUB.stats.map(function (x) { return '<li><b><span class="cl-cnt" data-to="' + x[0] + '">0</span>' + x[1] + "</b><span>" + esc(x[2]) + "</span></li>"; }).join("");
    var fm = CLUB.formats.map(function (f) { return "<span>" + esc(f) + "</span><i></i>"; }).join("");
    var perks = CLUB.perks.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("");
    var tabs = CLUB.plan.map(function (m, i) { return '<button type="button" role="tab" data-tab="' + i + '" aria-selected="' + (i ? "false" : "true") + '">' + esc(m[0]) + "</button>"; }).join("");
    var panes = CLUB.plan.map(function (m, i) {
      return '<ul class="cl-ev' + (i ? "" : " on") + '" data-pane="' + i + '">' + m[1].map(function (e) {
        return '<li><b>' + esc(e[0]) + "</b><span>" + esc(e[1]) + '</span><em class="pl-' + (e[2] === "Онлайн" ? "on" : e[2] === "Выезд" ? "out" : "z") + '">' + esc(e[2]) + "</em></li>";
      }).join("") + "</ul>";
    }).join("");
    return '<div class="cl-orb" aria-hidden="true"></div><div class="cl-wrap">' +
      '<div class="cl-head cl-rv"><div><span class="mt-eyebrow"><i></i>Клуб</span><h2>Клуб психологов <em>АБИТ</em></h2></div>' +
      '<p class="cl-lead">Сообщество выпускников Института психологии АБИТ и практикующих психологов. Здесь не остаются одни с трудными случаями: учатся у коллег, находят партнёров и клиентов, растут как специалисты.</p></div>' +
      '<ul class="cl-stats cl-rv">' + stats + "</ul>" +
      '<div class="cl-mq" aria-hidden="true"><div class="cl-mq-t">' + fm + fm + "</div></div>" +
      '<div class="cl-grid">' +
        '<div class="cl-col">' +
          '<figure class="cl-leader cl-rv"><div class="cl-ph"><img src="' + esc(CLUB.photo) + '" alt="' + esc(CLUB.leader) + ', руководитель клуба" loading="lazy" width="853" height="1280"></div>' +
            '<figcaption><span class="cl-role">' + esc(CLUB.leaderRole) + "</span><b>" + esc(CLUB.leader) + '</b><p class="cl-bl">' + esc(CLUB.bioLead) + '</p><p class="cl-bio">' + esc(CLUB.bio) + '</p><button type="button" class="cl-more">Подробнее</button></figcaption></figure>' +
          '<div class="cl-plan cl-rv"><div class="cl-plan-h"><b>План клуба</b><div class="cl-tabs" role="tablist">' + tabs + "</div></div>" + panes + "</div>" +
        "</div>" +
        '<div class="cl-col">' +
          '<h3 class="cl-ph3 cl-rv">Что даёт клуб</h3>' +
          '<ul class="cl-perks cl-rv">' + perks + "</ul>" +
          '<form class="cl-form cl-rv" novalidate><h3>Заявка на вступление</h3>' +
            '<div class="mt-hp" aria-hidden="true"><label for="cl-web">Не заполняйте</label><input id="cl-web" type="text" name="website" tabindex="-1" autocomplete="off"></div>' +
            '<div class="cl-row"><label><span>Имя *</span><input name="name" autocomplete="name" placeholder="Анна"></label>' +
            '<label><span>Телефон *</span><input name="phone" type="tel" inputmode="tel" autocomplete="tel" placeholder="+7 (999) 123-45-67"></label></div>' +
            '<div class="cl-row"><label><span>E-mail</span><input name="email" type="email" autocomplete="email" placeholder="anna@example.ru"></label>' +
            '<label><span>Кто вы</span><select name="who"><option>Выпускник АБИТ</option><option>Практикующий психолог</option><option>Студент-психолог</option><option>Другое</option></select></label></div>' +
            '<label><span>Направление работы или вопрос</span><textarea name="comment" rows="2" placeholder="Например: семейный психолог, хочу супервизии"></textarea></label>' +
            '<label class="cl-cons"><input type="checkbox" name="consent"> <span>Согласен(на) на <a href="/consent/" target="_blank">обработку персональных данных</a> и с <a href="/privacy/" target="_blank">политикой конфиденциальности</a></span></label>' +
            '<p class="cl-msg" aria-live="polite"></p>' +
            '<button type="submit" class="cl-btn">Отправить заявку ' + ICON_ARROW + "</button>" +
            '<p class="cl-small">Мы позвоним и расскажем о ближайших встречах клуба. Встречи — в ' + esc(PLACE) + ", часть — онлайн.</p></form>" +
        "</div></div></div>";
  }

  /* Анимации блока: появление при прокрутке, счётчики, вкладки, «Подробнее» */
  function clubFx(s) {
    var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
    var rv = s.querySelectorAll(".cl-rv");
    function count() {
      var c = s.querySelectorAll(".cl-cnt");
      for (var i = 0; i < c.length; i++) (function (el) {
        var to = +el.getAttribute("data-to"), t0 = null;
        if (reduce) { el.textContent = to; return; }
        requestAnimationFrame(function step(t) { if (!t0) t0 = t; var k = Math.min(1, (t - t0) / 1400); el.textContent = Math.round(to * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(step); });
      })(c[i]);
    }
    if (!("IntersectionObserver" in window) || reduce) { for (var i = 0; i < rv.length; i++) rv[i].classList.add("in"); count(); }
    else {
      var counted = false;
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (e) {
          if (!e.isIntersecting) return;
          e.target.classList.add("in"); io.unobserve(e.target);
          if (!counted && e.target.classList.contains("cl-stats")) { counted = true; count(); }
        });
      }, { threshold: 0.15 });
      for (var j = 0; j < rv.length; j++) { rv[j].style.transitionDelay = (j % 3) * 90 + "ms"; io.observe(rv[j]); }
    }
    s.addEventListener("click", function (e) {
      var t = e.target.closest("[data-tab]");
      if (t) {
        var n = t.getAttribute("data-tab");
        s.querySelectorAll("[data-tab]").forEach(function (b) { b.setAttribute("aria-selected", b === t ? "true" : "false"); });
        s.querySelectorAll("[data-pane]").forEach(function (p) { p.classList.toggle("on", p.getAttribute("data-pane") === n); });
        return;
      }
      var m = e.target.closest(".cl-more");
      if (m) { var l = m.closest(".cl-leader"); l.classList.toggle("open"); m.textContent = l.classList.contains("open") ? "Свернуть" : "Подробнее"; }
    });
  }

  function clubSubmit(form) {
    var msg = form.querySelector(".cl-msg"), btn = form.querySelector(".cl-btn");
    var name = form.name.value.trim(), phone = form.phone.value.trim(), email = form.email.value.trim();
    var digits = phone.replace(/\D/g, "");
    form.name.setAttribute("aria-invalid", name ? "false" : "true");
    form.phone.setAttribute("aria-invalid", digits.length >= 10 ? "false" : "true");
    msg.className = "cl-msg err";
    if (!name || digits.length < 10) { msg.textContent = "Укажите имя и телефон."; return; }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { msg.textContent = "Проверьте e-mail."; return; }
    if (!form.consent.checked) { msg.textContent = "Нужно согласие на обработку персональных данных."; return; }
    msg.textContent = ""; btn.disabled = true; btn.firstChild.nodeValue = "Отправляем… ";
    var who = form.who.value, note = form.comment.value.trim();
    fetch("/lead.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name, phone: phone, email: email || undefined,
        comment: "Заявка на вступление в Клуб психологов АБИТ. " + who + (note ? ". " + note : ""),
        consent: true, formId: "club", formName: "Клуб психологов АБИТ",
        extra: { "Кто": who },
        tracking: { page: location.href, referrer: document.referrer || undefined },
        website: form.website.value
      })
    }).then(function (r) {
      return r.json().catch(function () { return {}; }).then(function (j) { if (!r.ok || !j.ok) throw new Error(j.error || "send"); });
    }).then(function () {
      try { if (window.ym && window.__YM_ID) window.ym(window.__YM_ID, "reachGoal", "club_request"); } catch (e) {}
      form.innerHTML = '<div class="cl-ok"><b>Заявка отправлена!</b><p>Спасибо, ' + esc(name) + '. Мы свяжемся с вами, расскажем о клубе и ближайших встречах.</p></div>';
    }).catch(function () {
      btn.disabled = false; btn.firstChild.nodeValue = "Отправить заявку ";
      msg.className = "cl-msg err";
      msg.innerHTML = 'Не удалось отправить заявку. Позвоните нам: <a href="tel:' + PHONE.replace(/[^\d+]/g, "") + '">' + PHONE + "</a>.";
    });
  }

  function ensureClub() {
    if (document.getElementById("club")) return true;
    var meet = document.getElementById("meetings");
    if (!meet || !meet.parentNode) return false;
    var s = document.createElement("section");
    s.id = "club";
    s.setAttribute("aria-label", "Клуб психологов АБИТ");
    s.innerHTML = clubHTML();
    meet.parentNode.insertBefore(s, meet.nextSibling);
    var f = s.querySelector(".cl-form");
    f.addEventListener("submit", function (e) { e.preventDefault(); clubSubmit(f); });
    clubFx(s);
    if (location.hash === "#club") setTimeout(function () { s.scrollIntoView(); }, 300);
    return true;
  }

  /* ---------- Раздел «Наши выпускники» (карточки из личного кабинета) ---------- */
  var GRADS = null, gradsLoading = false;
  function loadGraduates() {
    if (GRADS || gradsLoading) return; gradsLoading = true;
    fetch("./cabinet/api.php", { method: "POST", headers: { "Content-Type": "application/json", "X-Requested-With": "abit-cabinet" }, body: '{"action":"public_graduates"}' })
      .then(function (r) { return r.json(); })
      .then(function (j) { GRADS = (j && j.graduates) || []; renderGraduates(); })
      .catch(function () { GRADS = []; renderGraduates(); });
  }
  function gradCard(g, i) {
    var ph = g.photo ? "./cabinet/" + g.photo.replace(/^\.?\/?/, "") : "";
    var tg = (g.telegram || "").replace(/^@/, "").replace(/[^A-Za-z0-9_]/g, "");
    var chips = (g.approaches || []).concat(g.formats || []).slice(0, 6).map(function (x) { return "<span>" + esc(x) + "</span>"; }).join("");
    var edu = (g.education || []).slice(0, 2).map(function (e) { return "<li>" + esc([e.institution, e.program].filter(Boolean).join(" — ")) + (e.years ? " <i>" + esc(e.years) + "</i>" : "") + "</li>"; }).join("");
    var about = g.about || "";
    var gal = (g.gallery || []).map(function (p) { return "./cabinet/" + String(p).replace(/^\.?\/?/, ""); });
    var svc = g.services || [];
    return '<article class="gr-card">' +
      '<div class="gr-ph"' + (ph ? ' style="background-image:url(\'' + esc(ph) + '\')"' : "") + '>' + (ph ? "" : '<span>' + esc((g.name || "").split(/\s+/).slice(0, 2).map(function (w) { return w[0] || ""; }).join("")) + "</span>") + '<em>Выпускник АБИТ</em></div>' +
      '<div class="gr-bd"><h3>' + esc(g.name) + '</h3><p class="gr-hl">' + esc(g.headline || "Психолог-консультант") + "</p>" +
      (g.specialization ? '<p class="gr-sp"><b>Работаю с:</b> ' + esc(g.specialization) + "</p>" : "") +
      (about ? '<p class="gr-about" data-full="' + esc(about) + '">' + esc(about.length > 180 ? about.slice(0, 180) + "…" : about) + "</p>" + (about.length > 180 ? '<button type="button" class="gr-more">Читать полностью</button>' : "") : "") +
      (chips ? '<div class="gr-chips">' + chips + "</div>" : "") +
      (edu ? '<ul class="gr-edu">' + edu + "</ul>" : "") +
      (gal.length ? '<div class="gr-gal">' + gal.slice(0, 4).map(function (p, k) { return '<button type="button" class="gr-gi" data-gi="' + i + "-" + k + '" style="background-image:url(\'' + esc(p) + '\')" aria-label="Открыть фото ' + (k + 1) + '"></button>'; }).join("") + "</div>" : "") +
      (svc.length ? '<ul class="gr-svc">' + svc.map(function (x) { return "<li><span>" + esc(x.t) + "<small>" + esc([x.dur ? x.dur + " мин" : "", x.fmt].filter(Boolean).join(" · ")) + "</small></span><b>" + (x.price ? Number(x.price).toLocaleString("ru-RU") + " ₽" : "по запросу") + "</b></li>"; }).join("") + "</ul>" : "") +
      '<p class="gr-meta">' + esc([g.city, g.experience ? "опыт " + g.experience : "", g.price].filter(Boolean).join(" · ")) + "</p>" +
      '<button type="button" class="gr-book" data-book="' + i + '">Записаться на консультацию</button>' +
      '<div class="gr-ct">' + (tg ? '<a href="https://t.me/' + esc(tg) + '" target="_blank" rel="noopener">Telegram</a>' : "") + (g.phone ? '<a href="tel:' + esc(g.phone.replace(/[^\d+]/g, "")) + '">Позвонить</a>' : "") + (g.email ? '<a href="mailto:' + esc(g.email) + '">E-mail</a>' : "") + "</div></div></article>";
  }
  function renderGraduates() {
    var s = document.getElementById("graduates"); if (!s || GRADS === null) return;
    var list = s.querySelector(".gr-list");
    if (GRADS.length) list.innerHTML = GRADS.map(gradCard).join("");
    else list.innerHTML = '<div class="gr-empty"><b>Скоро здесь появятся наши выпускники</b>Выпускники института заполняют карточки специалистов в личном кабинете — после проверки они публикуются в этом разделе.</div>';
  }
  /* Запись к выпускнику: заявка уходит в lead.php (админка + почта + CRM) и психологу в кабинет */
  function grModal(html) {
    var w = document.createElement("div"); w.className = "gr-modal"; w.setAttribute("role", "dialog"); w.setAttribute("aria-modal", "true");
    w.innerHTML = '<div class="gr-mb"><button type="button" class="gr-x" aria-label="Закрыть">×</button>' + html + "</div>";
    document.body.appendChild(w); document.documentElement.style.overflow = "hidden";
    var close = function () { w.remove(); document.documentElement.style.overflow = ""; document.removeEventListener("keydown", onKey); };
    var onKey = function (e) { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", onKey);
    w.addEventListener("click", function (e) { if (e.target === w || e.target.closest(".gr-x")) close(); });
    return w;
  }
  function openLightbox(g, k) {
    var list = (g.gallery || []).map(function (p) { return "./cabinet/" + String(p).replace(/^\.?\/?/, ""); }); if (!list.length) return;
    var w = grModal('<figure class="gr-lb"><img alt=""><figcaption></figcaption></figure>' + (list.length > 1 ? '<div class="gr-lbn"><button type="button" data-d="-1" aria-label="Назад">‹</button><button type="button" data-d="1" aria-label="Вперёд">›</button></div>' : ""));
    w.classList.add("lb");
    var show = function () { k = (k + list.length) % list.length; w.querySelector("img").src = list[k]; w.querySelector("figcaption").textContent = g.name + " · " + (k + 1) + " / " + list.length; };
    w.addEventListener("click", function (e) { var d = e.target.closest("[data-d]"); if (d) { k += +d.getAttribute("data-d"); show(); } });
    show();
  }
  function openBooking(g) {
    if (!g) return;
    var svc = g.services || [];
    var opts = svc.length ? svc.map(function (x, k) { return '<option value="' + k + '">' + esc(x.t + (x.price ? " — " + Number(x.price).toLocaleString("ru-RU") + " ₽" : "") + (x.dur ? " (" + x.dur + " мин)" : "")) + "</option>"; }).join("") : '<option value="-1">Консультация</option>';
    var w = grModal('<span class="mt-eyebrow gr-eb"><i></i>Запись к психологу</span><h3>' + esc(g.name) + '</h3><p class="gr-mbs">' + esc(g.headline || "Психолог-консультант, выпускник Института психологии АБИТ") + '</p>' +
      '<form class="gr-form" novalidate><label><span>Вид консультации</span><select name="svc">' + opts + '</select></label>' +
      '<label><span>Ваше имя *</span><input name="name" autocomplete="name" required></label>' +
      '<label><span>Телефон *</span><input name="phone" type="tel" autocomplete="tel" placeholder="+7" required></label>' +
      '<label><span>Удобное время или вопрос</span><textarea name="comment" rows="3" placeholder="Например: будни после 18:00, онлайн"></textarea></label>' +
      '<input name="website" tabindex="-1" autocomplete="off" class="gr-hp" aria-hidden="true">' +
      '<label class="gr-cons"><input type="checkbox" name="consent"> <span>Согласен(на) на обработку персональных данных в соответствии с <a href="./privacy/" target="_blank">политикой конфиденциальности</a></span></label>' +
      '<p class="gr-msg" aria-live="polite"></p><button type="submit" class="gr-book">Отправить заявку</button><p class="gr-note">Заявка придёт психологу и в институт. С вами свяжутся, чтобы согласовать время. Это не экстренная помощь: при угрозе жизни звоните 112.</p></form>');
    var f = w.querySelector("form"); f.name.focus();
    f.addEventListener("submit", function (e) {
      e.preventDefault();
      var msg = f.querySelector(".gr-msg"), btn = f.querySelector("button[type=submit]");
      var name = f.name.value.trim(), phone = f.phone.value.trim();
      if (name.length < 2 || phone.replace(/\D/g, "").length < 10) { msg.textContent = "Укажите имя и телефон."; return; }
      if (!f.consent.checked) { msg.textContent = "Нужно согласие на обработку персональных данных."; return; }
      var x = svc[+f.svc.value] || { t: "Консультация" };
      btn.disabled = true; btn.textContent = "Отправляем…"; msg.textContent = "";
      fetch("/lead.php", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({
        name: name, phone: phone, comment: "Запись к психологу-выпускнику: " + g.name + ". " + x.t + (x.price ? " (" + x.price + " ₽)" : "") + (f.comment.value.trim() ? ". Комментарий: " + f.comment.value.trim() : ""),
        consent: true, formId: "graduate-consult", formName: "Запись к психологу-выпускнику", programName: x.t + " — " + g.name, psyId: g.id,
        tracking: { page: location.href, referrer: document.referrer || undefined }, website: f.website.value
      }) }).then(function (r) { return r.json().catch(function () { return {}; }).then(function (j) { if (!r.ok || !j.ok) throw new Error(); }); })
        .then(function () { try { if (window.ym && window.__YM_ID) window.ym(window.__YM_ID, "reachGoal", "graduate_booking"); } catch (er) {} w.querySelector(".gr-mb").innerHTML = '<button type="button" class="gr-x" aria-label="Закрыть">×</button><div class="gr-ok"><b>Заявка отправлена!</b><p>' + esc(g.name) + " свяжется с вами, чтобы согласовать время консультации.</p></div>"; })
        .catch(function () { btn.disabled = false; btn.textContent = "Отправить заявку"; msg.innerHTML = 'Не удалось отправить. Позвоните в институт: <a href="tel:' + PHONE.replace(/[^\d+]/g, "") + '">' + PHONE + "</a>."; });
    });
  }
  function ensureGraduates() {
    if (document.getElementById("graduates")) return true;
    var anchor = document.getElementById("teachers");
    if (!anchor || !anchor.parentNode) return false;
    var s = document.createElement("section");
    s.id = "graduates";
    s.setAttribute("aria-label", "Наши выпускники");
    s.innerHTML = '<div class="gr-wrap"><div class="gr-head"><div><span class="mt-eyebrow gr-eb"><i></i>Наши выпускники</span><h2>Психологи, которые <em>учились у нас</em></h2><p>Выпускники Института психологии АБИТ, которые ведут практику. Карточки заполняют сами специалисты, а институт проверяет их перед публикацией.</p></div><a class="gr-cta" href="./cabinet/">Я выпускник — заполнить карточку</a></div><div class="gr-list"><div class="gr-empty">Загружаем…</div></div></div>';
    anchor.parentNode.insertBefore(s, anchor.nextSibling);
    s.addEventListener("click", function (e) {
      var bk = e.target.closest("[data-book]"); if (bk) { openBooking(GRADS[+bk.getAttribute("data-book")]); return; }
      var gi = e.target.closest("[data-gi]"); if (gi) { var p = gi.getAttribute("data-gi").split("-"); openLightbox(GRADS[+p[0]], +p[1]); return; }
      var b = e.target.closest(".gr-more"); if (!b) return;
      var p = b.previousElementSibling; p.textContent = p.getAttribute("data-full"); b.remove();
    });
    if (GRADS !== null) renderGraduates(); else loadGraduates();
    if (location.hash === "#graduates") setTimeout(function () { s.scrollIntoView(); }, 300);
    return true;
  }


  /* ---------- Telegram в контактах и подвале + SEO-блок «Об институте» ---------- */
  var TG_URL = "https://t.me/abitpsy";
  var TG_BLOCK = "<div id=\"mt-tg\"><p class=\"text-[0.75rem] tracking-[0.1em] text-content-subtle uppercase\">Telegram</p><a href=\"https://t.me/abitpsy\" target=\"_blank\" rel=\"noopener\" class=\"link-underline mt-3 inline-block text-[1.0625rem] text-ink-900\">@abitpsy</a></div>";
  var INSTITUTE_HTML = "<section id=\"institute\" aria-labelledby=\"institute-h\"><div class=\"in-wrap\"><span class=\"mt-eyebrow in-eb\"><i></i>Об институте</span><h2 id=\"institute-h\">Институт психологии АБИТ — <em>обучение на психолога в Москве</em></h2><div class=\"in-grid\"><div class=\"in-text\"><p>Институт психологии АБИТ — подразделение АНО ДПО «Академия бизнеса и инновационных технологий», которое готовит психологов по программам дополнительного профессионального образования. Здесь можно получить новую профессию с нуля или повысить квалификацию, если вы уже работаете с людьми.</p><p><b>Профессиональная переподготовка</b> длится от 5 до 8 месяцев и заканчивается дипломом установленного образца с новой квалификацией: психолог-консультант, детский, семейный или кризисный психолог, нейропсихолог, педагог-психолог, специалист по АВА-терапии и другие. <b>Повышение квалификации</b> занимает от 5 до 10 недель и завершается удостоверением. Для поступления не нужно психологическое образование — достаточно диплома о высшем или среднем профессиональном образовании по любому направлению.</p><p>Обучение проходит <b>заочно с очными встречами в Москве</b>: теорию слушатели изучают онлайн в удобное время, а практику отрабатывают на занятиях в Зеленограде, в БЦ «Зеленоград» на Савелкинском проезде, 4. Учёбу легко совмещать с работой. У каждого слушателя есть личный кабинет с уроками, тестами, практическими заданиями и связью с куратором.</p></div><ul class=\"in-list\" aria-label=\"Направления обучения\"><li><a href=\"#catalog\">Психологическое консультирование и психодиагностика</a></li><li><a href=\"#catalog\">Психоанализ и психоаналитическая психотерапия</a></li><li><a href=\"#catalog\">Гештальт-терапия</a></li><li><a href=\"#catalog\">Детский психолог и детский нейропсихолог</a></li><li><a href=\"#catalog\">Семейный психолог</a></li><li><a href=\"#catalog\">Кризисный и экстремальный психолог</a></li><li><a href=\"#catalog\">Нейропсихолог</a></li><li><a href=\"#catalog\">Педагог-психолог</a></li><li><a href=\"#catalog\">Организационная психология и коучинг</a></li><li><a href=\"#catalog\">Прикладной анализ поведения (АВА-терапия)</a></li><li><a href=\"#courses\">Искусственный интеллект для психолога</a></li></ul></div></div></section>";
  function ensureTelegram() {
    var bad = document.querySelectorAll('a[href="https://t.me/"]');
    for (var i = 0; i < bad.length; i++) bad[i].setAttribute("href", TG_URL);
    if (document.getElementById("mt-tg")) return;
    var c = document.getElementById("contacts"); if (!c) return;
    var mail = c.querySelector('a[href^="mailto:"]'); if (!mail || !mail.parentNode) return;
    var box = mail.parentNode, tmp = document.createElement("div");
    tmp.innerHTML = TG_BLOCK;
    box.parentNode.insertBefore(tmp.firstChild, box.nextSibling);
  }
  function ensureInstitute() {
    if (document.getElementById("institute")) return;
    var c = document.getElementById("contacts"); if (!c || !c.parentNode) return;
    var tmp = document.createElement("div"); tmp.innerHTML = INSTITUTE_HTML;
    c.parentNode.insertBefore(tmp.firstChild, c);
  }

  function init() {
    ensureCSS();
    ensureSection();
    ensureClub();
    ensureTeachers();
    ensureCabinetLink();
    ensureProgramPhotos();
    ensureMenu();
    ensureGraduates();
    ensureTelegram();
    ensureInstitute();
    /* React может перерисовать страницу после загрузки — держим блок на месте */
    var tries = 0;
    var t = setInterval(function () { ensureSection(); ensureClub(); ensureTeachers(); ensureCabinetLink(); ensureProgramPhotos(); ensureMenu(); ensureGraduates(); ensureTelegram(); ensureInstitute(); if (++tries > 40) clearInterval(t); }, 250);
    /* Фильтры каталога и окно «Все программы» перерисовывают карточки — обновляем фото */
    var pending = false;
    new MutationObserver(function () {
      if (pending) return; pending = true;
      requestAnimationFrame(function () { pending = false; ensureProgramPhotos(); ensureMenu(); ensureTelegram(); ensureInstitute(); });
    }).observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === "complete") setTimeout(init, 150);
  else window.addEventListener("load", function () { setTimeout(init, 150); });
})();
