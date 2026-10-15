/* =====================================================================
   ВЕСЬ КОНТЕНТ САЙТА — В ЭТОМ ФАЙЛЕ.
   Тексты, контакты, пакеты, факты, отзывы, фото и видео меняются здесь.
   Компоненты ничего не знают о конкретных текстах.

   Как добавить фото:  положить файл в public/media/photos/ и дописать
                       объект в нужный список (gallery, agency.photos …).
   Как добавить видео: положить .mp4 в public/media/video/ и указать src.
                       Пустой src ('') = аккуратная заглушка «скоро».
   Пути пишем БЕЗ ведущего слэша: 'media/photos/имя.webp'.
   ===================================================================== */

import type { Photo, Video, GalleryItem, Review, Pkg, Fact, ContactLink } from './types';
import { uploaded } from './uploads';

/* ---------- Медиа: фото ---------- */
export const photos = {
  wall: { src: 'media/photos/rimma-wall.webp', alt: 'Римма Сковородникова в чёрном костюме у белой стены', ratio: '1186/1600', pos: '60% 20%' },
  standing: { src: 'media/photos/rimma-standing.webp', alt: 'Римма в полный рост, рука на талии', ratio: '1293/1600', pos: '50% 15%' },
  laugh: { src: 'media/photos/rimma-laugh.webp', alt: 'Римма смеётся и показывает язык', ratio: '1265/1600', pos: '40% 25%' },
  portrait: { src: 'media/photos/rimma-portrait.webp', alt: 'Портрет Риммы со скрещёнными руками и золотым браслетом', ratio: '1153/1600', pos: '50% 25%' },
  eye: { src: 'media/photos/rimma-eye.webp', alt: 'Крупный план: глаз и золотая серьга', ratio: '1021/1600', pos: '60% 40%' },
  earring: { src: 'media/photos/rimma-earring.webp', alt: 'Римма в профиль, золотая серьга-кольца', ratio: '1171/1600', pos: '50% 30%' },
  // кадры с мероприятий (из роликов)
  weddingAisle: { src: 'media/photos/wedding-aisle.webp', alt: 'Папа ведёт невесту к выездной церемонии', ratio: '9/16', pos: '50% 50%', caption: 'Выездная церемония' },
  weddingHall: { src: 'media/photos/wedding-hall.webp', alt: 'Оформленный зал для церемонии', ratio: '9/16', pos: '50% 60%', caption: 'Декор и оформление' },
  weddingGuests: { src: 'media/photos/wedding-guests.webp', alt: 'Гости на выездной церемонии', ratio: '9/16', pos: '50% 50%', caption: 'Гости церемонии' },
  weddingBackstage: { src: 'media/photos/wedding-backstage.webp', alt: 'Координатор в гарнитуре за кулисами свадьбы', ratio: '9/16', pos: '50% 40%', caption: 'За кадром: координация' },
  weddingBehind: { src: 'media/photos/wedding-behind.webp', alt: 'За кадром: подготовка к свадьбе', ratio: '9/16', pos: '50% 45%', caption: 'За кадром: подготовка' },
  weddingTeam: { src: 'media/photos/wedding-team.webp', alt: 'Команда сверяет тайминг вечером', ratio: '9/16', pos: '50% 60%', caption: 'Тайминг и договорённости' },
  weddingFireworks: { src: 'media/photos/wedding-fireworks.webp', alt: 'Молодожёны на фоне фейерверка', ratio: '9/16', pos: '50% 55%', caption: 'Фейерверк в финале' },
  corpTree: { src: 'media/photos/corporate-tree.webp', alt: 'Римма у новогодней ёлки с зеркальным артистом', ratio: '9/16', pos: '55% 40%', caption: 'Новогодний корпоратив' },
  corpMic: { src: 'media/photos/corporate-mic.webp', alt: 'Римма с микрофоном общается с гостем', ratio: '9/16', pos: '55% 35%', caption: 'Живой интерактив' },
  corpStage: { src: 'media/photos/corporate-stage.webp', alt: 'Римма ведёт вечер на сцене', ratio: '9/16', pos: '35% 35%' },
  corpDress: { src: 'media/photos/corporate-dress.webp', alt: 'Римма в голубом платье ведёт праздник', ratio: '9/16', pos: '50% 30%' },
  corpHost: { src: 'media/photos/corporate-host.webp', alt: 'Римма с микрофоном на фоне новогоднего декора', ratio: '9/16', pos: '50% 30%' },
} satisfies Record<string, Photo>;

/* ---------- Медиа: видео ---------- */
export const videos = {
  wedding: {
    id: 'wedding',
    src: 'media/video/wedding-turnkey.mp4',
    poster: 'media/video/wedding-turnkey-poster.webp',
    title: 'Свадьба под ключ',
    caption: 'Один день, собранный с нуля',
    orientation: 'vertical',
  },
  corporate: {
    id: 'corporate',
    src: 'media/video/corporate-ny-2025.mp4',
    poster: 'media/video/corporate-ny-2025-poster.webp',
    title: 'Новогодний корпоратив',
    caption: 'Декабрь 2025',
    orientation: 'vertical',
  },
  // ↓ Заглушки: когда появится ролик — впишите src (и poster, если есть).
  forum: uploaded.forumVideo ? { ...uploaded.forumVideo, id: 'forum', title: 'Форум event-специалистов', orientation: 'horizontal' } : {
    id: 'forum',
    src: '',
    title: 'Форум event-специалистов',
    caption: 'Здесь будет видео с форума',
    orientation: 'horizontal',
  },
  agency: uploaded.agencyVideo ? { ...uploaded.agencyVideo, id: 'agency', title: 'Агентство «За гранью»', orientation: 'horizontal' } : {
    id: 'agency',
    src: '',
    title: 'Агентство «За гранью»',
    caption: 'Здесь будет ролик об агентстве',
    orientation: 'horizontal',
  },
} satisfies Record<string, Video>;

/* ---------- Шапка и контакты ---------- */
export const site = {
  name: 'Римма Сковородникова',
  firstName: 'Римма',
  lastName: 'Сковородникова',
  role: 'Ведущая и организатор мероприятий',
  handle: 'rimm_ask',
  cities: 'Липецк · Воронеж · Старый Оскол',
  avatar: 'media/photos/rimma-avatar.webp',
  cta: 'рассчитать стоимость',
};

export const contacts = {
  phone: { label: 'Телефон', display: '8 915 552-45-90', href: 'tel:+79155524590' },
  // TODO: заменить на прямую ссылку на сообщество «Антиквиз Липецк» (vk.com/…)
  vk: { label: 'ВКонтакте', display: 'Антиквиз Липецк', href: 'https://vk.com/search?c%5Bq%5D=%D0%90%D0%BD%D1%82%D0%B8%D0%BA%D0%B2%D0%B8%D0%B7%20%D0%9B%D0%B8%D0%BF%D0%B5%D1%86%D0%BA&c%5Bsection%5D=communities' },
  email: { label: 'Почта', display: 'pumma_87@list.ru', href: 'mailto:pumma_87@list.ru' },
  telegram: { label: 'Telegram', display: '@Rimm_ask', href: 'https://t.me/Rimm_ask' },
  instagram: { label: 'Instagram*', display: '@rimm_ask', href: 'https://www.instagram.com/rimm_ask' },
} satisfies Record<string, ContactLink>;

/* ---------- Первый экран ---------- */
export const hero = {
  // фото без фона (вырезано) — стоит в золотой арке
  cutout: { src: 'media/photos/cut-portrait.webp', alt: 'Римма Сковородникова в чёрном костюме' },
  role: 'ведущая и организатор мероприятий',
  cities: 'Липецк · Воронеж · Старый Оскол',
};

export const stats = [
  { value: '1000+', label: 'мероприятий организовала и провела' },
  { value: '250', label: 'участников на моём форуме для event-специалистов' },
  { value: 'ВДНХ', label: 'День Липецкой области на выставке «Россия», 2024' },
  { value: 'Финал', label: 'федерального проекта «Всем стендап»' },
];

/* ---------- Видео-рилсы под первым экраном ---------- */
export const reels = {
  title: 'Видео',
  items: [
    { video: videos.wedding, label: 'Свадьба под ключ' },
    { video: videos.corporate, label: 'Новогодний корпоратив' },
    { video: videos.forum, label: 'Форум event-специалистов' },
    { video: videos.agency, label: 'Агентство «За гранью»' },
    // + всё из папки uploads/videos
    ...uploaded.videos.map((v) => ({ video: v, label: v.title })),
  ],
};

/* ---------- Приятно познакомиться ---------- */
export const intro = {
  title: 'Знакомьтесь — Римма',
  postPhoto: photos.earring,
  // Абзацы истории. Можно дописывать — каждый элемент = абзац.
  story: [
    'Привет! Я Римма Сковородникова — ведущая, организатор мероприятий и основатель агентства «За гранью». Организовала и провела уже 1000+ мероприятий.',
    'Мой авторский стиль — это баланс элегантности, импровизации и живого общения. Я создаю атмосферу, в которой каждое событие звучит по-настоящему!',
  ],
  factsLead: 'Немного фактов обо мне:',
  quote: 'Про меня говорят: «Уютная, как плед, и родная, как объятия мамы».',
  inviteBefore: 'Расскажите о своём празднике — ',
  inviteLink: 'рассчитаем стоимость',
  inviteAfter: ' за пару минут. Это бесплатно и ни к чему не обязывает.',
};

export const facts: Fact[] = [
  { tag: 'Сцена', text: 'Стала финалисткой федерального проекта «Всем стендап» (Медиалига).' },
  { tag: 'ВДНХ', text: 'В январе 2024 провела День Липецкой области в рамках выставки «Россия» на ВДНХ, в «Доме Российской Кухни».' },
  { tag: 'ТВ', text: 'Благодаря одной из своих пар работала с проектом «4 свадьбы» на телеканале «Пятница».' },
  { tag: 'ТВ', text: 'Была участницей «Давай поженимся» — знаю, как выглядит Первый канал изнутри.' },
  { tag: 'Кино', text: 'Снималась в фильме «Живой» — ищите меня в титрах.' },
  { tag: 'Сцена', text: 'Вместе с Владимиром Тулиновым вела выставку «Моя большая свадьба».' },
  { tag: 'Медиа', text: 'Работала главредом и брала интервью у десятков российских звёзд и политиков.' },
  { tag: 'Клуб', text: 'Была арт-директором ночного клуба — организовала сотни диско-вечеринок.' },
  { tag: 'Учёба', text: 'Имею сертификаты и дипломы тренингов, мастер-классов и форумов: продажи, психология, маркетинг.' },
];

/* ---------- Галерея ---------- */
export const galleryIntro = {
  title: 'Фото с праздников',
  more: 'Больше фото',
  less: 'Свернуть',
  visible: 6, // сколько показывать до кнопки «Больше фото»
};

// Порядок = порядок на сайте. Первые `visible` видны сразу, остальные по кнопке.
export const gallery: GalleryItem[] = [
  // сначала — всё из папки uploads/gallery
  ...uploaded.gallery.map((photo) => ({ type: 'photo' as const, photo, category: 'event' as const, size: 'm' as const })),
  { type: 'photo', photo: photos.standing, category: 'portrait', size: 'm' },
  { type: 'photo', photo: photos.corpMic, category: 'corporate', size: 'm' },
  { type: 'photo', photo: photos.laugh, category: 'portrait', size: 'm' },
  { type: 'photo', photo: photos.weddingFireworks, category: 'wedding', size: 'm' },
  { type: 'photo', photo: photos.portrait, category: 'portrait', size: 'm' },
  { type: 'photo', photo: photos.corpDress, category: 'corporate', size: 'm' },
  { type: 'photo', photo: photos.weddingAisle, category: 'wedding', size: 'm' },
  { type: 'photo', photo: photos.eye, category: 'portrait', size: 'm' },
  { type: 'photo', photo: photos.corpHost, category: 'corporate', size: 'm' },
  { type: 'photo', photo: photos.weddingGuests, category: 'wedding', size: 'm' },
  { type: 'photo', photo: photos.corpStage, category: 'corporate', size: 'm' },
  { type: 'photo', photo: photos.weddingHall, category: 'wedding', size: 'm' },
  { type: 'photo', photo: photos.wall, category: 'portrait', size: 'm' },
  { type: 'photo', photo: photos.weddingBehind, category: 'wedding', size: 'm' },
];

/* ---------- Что вы получите ---------- */
export const benefits = {
  title: 'Почему со мной легко',
  items: [
    { title: '1000+ мероприятий опыта', text: 'От камерного юбилея до форума на 250 человек. Знаю, как сделать, чтобы гостям было легко и весело.' },
    { title: 'Индивидуальная режиссура', text: 'Программа под вас, авторские интерактивы и шоу-номера. Без шаблонных конкурсов.' },
    { title: 'Подрядчики под задачу', text: 'Для каждого события индивидуально подбираю подрядчиков: DJ, музыкантов, шоу, технику.' },
    { title: 'Всегда на связи', text: 'Встречи и созвоны на всех этапах подготовки. Вы знаете, что происходит, и спокойно ждёте праздник.' },
  ],
};

/* ---------- Пакеты услуг ---------- */
export const services = {
  title: 'Пакеты услуг',
  note: 'Всё обсуждаемо: пакет можно дополнить под ваш праздник.',
};

export const packages: Pkg[] = [
  {
    name: 'Стандартный',
    kind: 'Ведущая + DJ',
    price: '67 000 ₽',
    items: [
      'Встречи и созвоны в процессе работы',
      'Универсальная программа',
      'Работа ведущего до 5 часов',
      'Работа диджея до 6 часов',
    ],
    extras: ['Продление услуг диджея — 5 000 ₽/час', 'Трансфер за пределы г. Липецк оплачивается отдельно'],
  },
  {
    name: 'Комфорт',
    kind: 'Ведущая + DJ + режиссура',
    price: '85 000 ₽',
    featured: true,
    items: [
      'Встречи и созвоны в процессе работы',
      'Универсальная программа',
      'Работа ведущего до 6 часов',
      'Работа диджея до 6,5 часов',
      'Индивидуальная режиссура',
      'Подбор шоу-номеров и других контрагентов',
      'Авторские интерактивы',
    ],
    extras: ['Продление услуг диджея — 5 000 ₽/час', 'Трансфер за пределы г. Липецк оплачивается отдельно'],
  },
  {
    name: 'Just Кайф',
    kind: 'Антиквиз под ключ',
    price: '65 000 ₽',
    items: [
      'Тематика игры формата антиквиз под любую концепцию и любой возраст участников',
      'Продолжительность — 3 часа',
      'Бланки, ручки, дипломы победителям, призовой фонд',
      'Команда на площадке: фотограф, рилсмейкер, координатор',
      'Подбор подрядчиков: техник, оборудование, концертные номера и др.',
    ],
    extras: [],
  },
];

/* ---------- Свадьба под ключ ---------- */
export const wedding = {
  eyebrow: 'Организация свадьбы под ключ',
  title: 'Свадьба под ключ. А что это вообще значит?',
  intro: [
    'Для пары этот день — про любовь, семью, близких людей, слёзы, смех, объятия и первое семейное «МЫ».',
    'А для меня он начинается задолго до даты.',
  ],
  checklist: [
    'Визажист для невесты',
    'Банкетный зал',
    'Декор и оформление',
    'Транспорт для гостей',
    'Ведущий и DJ',
    'Звуковое и световое оборудование',
    'Тяжёлый дым',
    'Фотограф',
    'Видеограф',
    'Кавер-группа',
    'Фейерверки',
    'Координация',
    'Торт',
    'Выездная церемония — от сценария до того самого момента, когда папа передаёт руку дочери жениху',
    'Тайминг',
    'Договорённости',
    'Контроль',
  ],
  tail: 'И ещё миллион мелочей, которых в итоге не должны замечать ни молодожёны, ни гости.',
  verdictLead: 'Главный показатель хорошо организованной свадьбы для меня:',
  verdictA: 'когда за кадром было огромное количество работы…',
  verdictB: 'а в кадре остались только счастливые люди.',
  video: videos.wedding,
  photos: [photos.weddingBehind, photos.weddingBackstage],
};

/* ---------- Корпоративы ---------- */
export const corporate = {
  eyebrow: 'Корпоративы',
  lead: 'Корпоративы со мной — это всегда',
  words: ['ярко', 'феерично', 'незабываемо', 'весело', 'интересно', 'душевно', 'и с изюминкой'],
  text: 'Для каждой компании я индивидуально подбираю подрядчиков: музыкантов, шоу-номера, технику и всё, что нужно именно вашему коллективу.',
  video: videos.corporate,
  photos: [photos.corpStage, photos.corpHost],
};

/* ---------- Форум ---------- */
export const forum = {
  eyebrow: 'Моя гордость',
  title: 'Форум для event-специалистов Черноземья',
  number: '250',
  numberLabel: 'участников',
  text: [
    'Организовала и провела форум для event-специалистов на 250 человек. От идеи до воплощения в жизнь.',
    'Очень большой проект: сделала его не только в своём городе, но и в Белгородской области. Следующий — Воронеж.',
  ],
  route: [
    { city: 'Липецк', status: 'Проведён' },
    { city: 'Белгородская область', status: 'Проведён' },
    { city: 'Воронеж', status: 'Следующий город' },
  ],
  video: videos.forum,
  // Фото с форума: добавьте объекты Photo сюда. Пока пусто — показываются заглушки.
  photos: uploaded.forum as Photo[],
};

/* ---------- Отзывы ---------- */
export const reviewsIntro = {
  title: 'Говорят гости',
  sub: 'Настоящие отзывы и сообщения после праздников. Нажмите на скриншот — откроется оригинал.',
  chips: ['Женщина-праздник', 'Золотой человек', 'ТЫ ЛУЧШАЯ', 'Самая классная «Зажигалочка»', 'Человек на своём месте', 'Это был правда лучший день'],
};

export const reviews: Review[] = [
  {
    occasion: 'Свадьба',
    source: 'Комментарий ВКонтакте',
    quote: 'Она не просто отрабатывает свои «часы», а вкладывает всю душу. Один день, проведённый с Риммой, заставляет просто влюбиться в этого человека.',
    author: 'Невеста',
    date: '1 октября',
    screenshot: 'media/reviews/review-wedding.webp',
    featured: true,
  },
  {
    occasion: 'Мероприятие',
    source: 'Отзыв ВКонтакте',
    quote: 'Талант и профессионализм ведущей — отдельный вид искусства.',
    author: 'Liliya Skovorodnikova',
    date: '28 июля 2025',
    screenshot: 'media/reviews/review-liliya.webp',
  },
  {
    occasion: 'Антиквиз',
    source: 'Отзыв ВКонтакте',
    quote: 'Вы — настоящие волшебники! Мы смеялись до слёз, ломали головы над эмодзи, пели и танцевали.',
    author: 'Вера Якунина, команда «Липовые скоморохи»',
    screenshot: 'media/reviews/review-vera.webp',
  },
  {
    occasion: 'Юбилей',
    source: 'Сообщение',
    quote: 'Я очень переживала, что в такой небольшой компании не будет достаточно весело. Нет, было очень весело, время пролетело прям незаметно.',
    author: 'Заказчица юбилея',
    screenshot: 'media/reviews/review-jubilee.webp',
  },
  {
    occasion: 'Выпускной',
    source: 'Сообщение ВКонтакте',
    quote: 'Вы просто пушка! Такой драйв, такие позитивные эмоции остались после нашего выпускного — не передать словами.',
    author: 'Ольга Васильевна',
    date: '29 июня 2025',
    screenshot: 'media/reviews/review-graduation.webp',
  },
  {
    occasion: 'Праздник',
    source: 'Сообщение',
    quote: 'Все наши ожидания оправдались и даже более. Вы огромные профессионалы.',
    author: 'Ангелина и Игорь Тугаевы',
    date: '12 сентября',
    screenshot: 'media/reviews/review-tugaevy.webp',
  },
  {
    occasion: 'Квиз',
    source: 'Комментарий ВКонтакте',
    quote: 'Впервые посетили квиз, были приятно удивлены атмосферой и очаровательной ведущей, Риммой!',
    author: 'Светлана Дмитриева',
    date: '1 октября',
    screenshot: 'media/reviews/review-quiz.webp',
  },
  {
    occasion: 'Комментарии',
    source: 'Пост ВКонтакте',
    quote: 'Каждый твой квиз — это заряд положительных эмоций, драйва и веселья!',
    author: 'Елена Лемниската и другие гости',
    screenshot: 'media/reviews/review-comments-1.webp',
  },
  {
    occasion: 'Комментарии',
    source: 'Пост ВКонтакте',
    quote: 'Есть люди, которые не просто делают свою работу, а вкладывают в неё душу, превращая любое событие в настоящее волшебство.',
    author: 'Наталия Кузнецова и другие гости',
    screenshot: 'media/reviews/review-comments-2.webp',
  },
];

/* ---------- Агентство «За гранью» ---------- */
export const agency = {
  bridge: 'Когда празднику нужна не только ведущая, а целая команда',
  name: 'За гранью',
  logo: 'media/photos/za-granyu-logo.png',
  tagline: 'Агентство по организации мероприятий',
  cities: ['Воронеж', 'Липецк', 'Старый Оскол'],
  // TODO: Римма пришлёт больше информации об агентстве — дописать сюда.
  text: 'Работаем в Воронеже, Липецке и Старом Осколе. Берём событие целиком или ту часть, где нужна помощь.',
  services: [
    { title: 'Организация под ключ', text: 'От идеи и сценария до последнего гостя.' },
    { title: 'Консультации и частичная организация', text: 'Подключаемся там, где не хватает рук или опыта.' },
    { title: 'Координация', text: 'Держим тайминг и подрядчиков в день события.' },
    { title: 'Подбор подрядчиков', text: 'Площадки, декор, музыканты, техника, шоу.' },
  ],
  servicesNote: 'Всё обсуждаемо: формат собираем под ваш праздник.',
  video: videos.agency,
  photosTitle: 'С мероприятий агентства',
  photos: [...uploaded.agency, photos.weddingHall, photos.weddingAisle, photos.weddingGuests, photos.weddingTeam],
};

/* ---------- Финальная кнопка ---------- */
export const finalCta = {
  cutout: { src: 'media/photos/cut-standing.webp', alt: 'Римма в полный рост' },
  line: 'Давайте сделаем ваш праздник таким, о котором потом пишут',
  button: 'Рассчитать стоимость',
};

/* ---------- Контакты ---------- */
export const contactSection = {
  title: 'Обсудим ваш праздник?',
  text: 'Позвоните, напишите ВКонтакте или на почту — отвечу и предложу формат под вашу дату.',
};

/* ---------- Квиз «Рассчитать стоимость» ----------
   Ответы собираются в текст заявки. Отправка — письмом на почту или копированием в мессенджер
   (сервера нет). Цена-ориентир берётся из пакетов выше. */
export const quiz = {
  title: 'Рассчитайте стоимость, ответив на вопросы ниже',
  inlineTitle: 'Рассчитайте стоимость',
  formats: [
    { id: 'wedding', label: 'Свадьба' },
    { id: 'jubilee', label: 'Юбилей' },
    { id: 'corporate', label: 'Корпоратив' },
    { id: 'quiz', label: 'Антиквиз' },
    { id: 'graduation', label: 'Выпускной' },
    { id: 'other', label: 'Другое' },
  ],
  guests: ['до 30', '30–50', '50–100', 'больше 100'],
  channels: ['Позвонить', 'Telegram', 'ВКонтакте', 'На почту'],
  // ориентир по формату: id формата → названия пакетов
  estimate: {
    quiz: ['Just Кайф'],
    default: ['Стандартный', 'Комфорт'],
  } as Record<string, string[]>,
  thanks: 'Спасибо за интерес!',
};
