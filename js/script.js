/**
 * CDS Nyakira — script.js
 * Multilingue (i18n), interactions UI, navigation
 */

(function () {
  'use strict';

  // ===================================================
  // 1. TRADUCTIONS i18n
  // ===================================================
  const i18n = {
    // ===== LANGUES ACTIVES (FR / EN) =====
    fr: {
      'hero.location':        'Kanyosha, Bujumbura · Burundi',
      'hero.kirundi':         'Ni ivuriro ryanyu',
      'hero.title':           'Votre santé, notre priorité.',
      'hero.text':            'À la clinique CDS Nyakira, nous offrons des soins médicaux de qualité avec compassion et humanité. Située à Kanyosha, nous proposons : consultations, laboratoire, maternité, petite chirurgie et bien plus.',
      'hero.cta.whatsapp':    'WhatsApp · 79 56 57 28',
      'hero.cta.services':    'Nos services',
      'hero.cta.hours':       'Ouvert 24h/7',
      'services.title':       'Nos services · ibikorwa',
      'services.sub':         'Soins complets, proches de vous, avec un cœur aimant.',
      'service.consult':      'Consultation',
      'service.consult.sub':  'Générale & spécialisée',
      'service.labo':         'Laboratoire',
      'service.labo.sub':     'Analyses fiables',
      'service.chir':         'Petite chirurgie',
      'service.chir.sub':     'Soins & actes mineurs',
      'service.matern':       'Maternité',
      'service.matern.sub':   'Accouchement & suivi',
      'service.cpn':          'CPN-CPON-PF',
      'service.cpn.sub':      'Planning familial',
      'service.pharma':       'Pharmacie',
      'service.pharma.sub':   'Médicaments essentiels',
      'service.consult.detail': 'Nos médecins qualifiés sont disponibles pour vous offrir des consultations personnalisées, que ce soit pour un suivi médical, un diagnostic ou pour toute question de santé. Nous vous écoutons attentivement et vous offrons des solutions adaptées à votre situation.',
      'service.labo.detail':    'Nous disposons d\'un laboratoire pour réaliser une série d\'examens médicaux afin de mieux comprendre votre état de santé. Nos analyses sont réalisées avec précision et les résultats communiqués dans les meilleurs délais.',
      'service.chir.detail':    'Nos équipes offrent des interventions de petite chirurgie, réalisées dans des conditions optimales pour garantir votre sécurité et votre confort. Ces interventions incluent des soins comme l\'ablation de kystes, de petites lésions cutanées et autres actes mineurs.',
      'service.matern.detail':  'Nous accompagnons les futures mamans tout au long de leur grossesse avec des suivis réguliers, des consultations prénatales, et des conseils de santé. Nous offrons un environnement sécurisé et chaleureux pour un accouchement serein et une récupération en toute confiance.',
      'service.cpn.detail':     'Nous proposons des consultations prénatales (CPN), post-natales (CPON) et de planning familial (PF), offrant des conseils sur les méthodes de contraception, la gestion de la fertilité et la santé reproductive, tout en respectant vos choix et besoins individuels.',
      'service.pharma.detail':  'Notre pharmacie vous propose une gamme de médicaments essentiels et de produits de santé, avec des conseils professionnels pour vous aider à gérer vos traitements et maintenir votre bien-être au quotidien.',
      'partners.title':       'Ils nous soutiennent · abafasha',
      'servicesPage.title':   'Nos Services de Santé',
      'servicesPage.sub':     'Des soins complets, accessibles et humains pour toute la famille',
      'servicesPage.intro':   'À CDS Nyakira, nous nous engageons à offrir des soins de qualité adaptés à vos besoins. Découvrez nos services ci-dessous, conçus pour vous accompagner dans votre bien-être au quotidien.',
      'contact.title':        'Nous contacter',
      'contact.sub':          'Umuhamagaro · Appelez-nous ou écrivez-nous, nous sommes là pour vous',
      'contact.reach':        'Nous joindre',
      'contact.reach.sub':    'Ivuriro ryanyu · votre clinique est à votre écoute',
      'contact.phone.label':  'Téléphone',
      'contact.email.label':  'Email',
      'contact.web.label':    'Site partenaire',
      'contact.address.label':'Adresse',
      'contact.address':      'Kanyosha, Commune Rurale\nBujumbura, Burundi',
      'contact.whatsapp.btn': 'Écrire sur WhatsApp',
      'contact.whatsapp.note':'Réponse rapide · Disponible en français, kirundi, anglais',
      'contact.form.title':   'Envoyer un message',
      'contact.form.sub':     'Nous vous répondrons dans les meilleurs délais',
      'contact.form.firstName':'Prénom',
      'contact.form.lastName':'Nom',
      'contact.form.phone':   'Téléphone / WhatsApp',
      'contact.form.subject': 'Objet de la demande',
      'contact.form.subject.placeholder': 'Choisir un objet…',
      'contact.form.subject.consult': 'Consultation médicale',
      'contact.form.subject.labo': 'Laboratoire / Analyses',
      'contact.form.subject.matern': 'Maternité',
      'contact.form.subject.pharma': 'Pharmacie',
      'contact.form.subject.info': 'Renseignement général',
      'contact.form.subject.other': 'Autre',
      'contact.form.message': 'Message',
      'contact.form.send':    'Envoyer le message',
      'contact.hours':'Ouvert 24h/7',
      'contact.hours.label':  'Heures d\'ouverture',
      'contact.location.title': 'Nous trouver · Kanyosha',
      'about.title':                     'À propos de CDS Nyakira',
      'about.subtitle':                  'Ivuriro ryanyu bakira neza abarwaye · Votre clinique qui accueille chaleureusement les patients',
      'about.history.tag':               'Notre histoire',
      'about.history.title':             'Un centre de santé au cœur de Kanyosha',
      'about.history.p1':                'Fondé en <strong>2022</strong>, le Centre De Santé (CDS) Nyakira est né d\'une conviction profonde : chaque habitant de Kanyosha mérite un accès à des soins de qualité, avec dignité et compassion.',
      'about.history.p2':                'Situé dans la commune rurale de Kanyosha, à Bujumbura, notre clinique s\'est rapidement imposée comme un pilier de la communauté. Nous sommes fiers d\'être <strong>« ivuriro ryanyu »</strong>, votre clinique. Un lieu où chaque patient est accueilli comme un membre de la famille.',
      'about.history.quote':             'Tubakirana umutima w\'urukundo · Nous vous accueillons avec un cœur aimant',
      'about.stat.year.label':           'Année de fondation',
      'about.stat.patients.label':       'Patients par an',
      'about.stat.services.label':       'Services médicaux',
      'about.stat.dental.label':         'Patients mission dentaire 2024',
      'about.approach.title':            'Une approche unique : la clémence financière',
      'about.approach.p1':               'CDS Nyakira est l\'une des rares cliniques de la région à offrir une politique de <strong>clémence dans le remboursement des dettes médicales</strong>. Les patients peuvent recevoir des soins et, ensuite, avoir la possibilité de payer immédiatement ou de bénéficier d\'une remise de dette en cas de difficultés financières démontrées.',
      'about.approach.p2':               'Grâce à notre partenariat avec <strong>Beauty Out of Dust</strong> et le programme <strong>GlobalGiving</strong>, nous avons pu offrir un allègement des dettes médicales aux familles les plus vulnérables de Kanyosha.',
      'about.approach.stat.funds':       'fonds collectés (CAD)',
      'about.approach.stat.donors':      'donateurs',
      'about.approach.stat.duration.value': '3 ans',
      'about.approach.stat.duration.label': 'de programme',
      'about.partners.title':            'Nos partenaires et missions',
      'about.partners.sub':              'Des collaborations internationales pour des soins toujours meilleurs',
      'about.partners.globalgiving.body':'Ce programme a permis d\'offrir un allègement des dettes médicales aux familles et individus confrontés à des difficultés financières. Grâce à la générosité de <strong>18 donateurs</strong>, <strong>$1,962 (CAD)</strong> ont été collectés pour effacer les portions de dettes médicales des patients les plus vulnérables.',
      'about.link.viewProject':          'Voir le projet',
      'about.link.reports':              'Rapports',
      'about.partners.budental.title':   'BuDental Mission Association (B.M.A) · Mai 2024',
      'about.partners.budental.body':    'En mai 2024, nous avons accueilli l\'équipe d\'<strong>ACT Africa</strong> et d\'<strong>A&M Texas University</strong> pour une mission dentaire exceptionnelle. Leur équipe a offert son temps, son expertise et des dons à notre communauté.',
      'about.link.viewPost':             'Voir la publication',
      'about.partners.bod.title':        'Beauty Out Of Dust · Juin 2024',
      'about.partners.bod.body':         'En juin 2024, <strong>Beauty Out of Dust (BOD)</strong> s\'est associé à <strong>ACT Africa</strong>, un groupe d\'étudiants en dentisterie de Texas A&M Dentistry, pour fournir des soins dentaires gratuits à Kanyosha, opérant depuis la clinique CDS Nyakira.',
      'about.partners.bod.impact1':      'Services d\'hygiène essentiels à <strong>133 patients</strong>',
      'about.partners.bod.impact2':      'Sessions éducatives sur l\'hygiène bucco-dentaire',
      'about.partners.bod.impact3':      'Distribution gratuite de brosses à dents et dentifrice',
      'about.link.viewImpact':           'Voir l\'impact',
      'about.values.title':              'Nos valeurs · Indoto zacu',
      'about.values.ubuntu.title':       'Ubuntu · Humanité',
      'about.values.ubuntu.desc':        'Chaque personne mérite d\'être traitée avec dignité et respect. Nous croyons en la force de la communauté.',
      'about.values.clemence.title':     'Clémence',
      'about.values.clemence.desc':      'La santé ne devrait jamais être un luxe. Notre politique de remise de dette reflète cet engagement profond.',
      'about.values.proximite.title':    'Proximité',
      'about.values.proximite.desc':     'Ivuriro ryanyu · votre clinique. Nous sommes là pour vous, proches de vos préoccupations quotidiennes.',
      'about.values.excellence.title':   'Excellence',
      'about.values.excellence.desc':    'Nous visons toujours les meilleurs soins, avec des équipes formées et un accueil chaleureux pour tous.',
    },
    en: {
      'hero.kirundi':         'Ni ivuriro ryanyu',
      'hero.title':           'Your health, our priority.',
      'hero.text':            'At CDS Nyakira clinic, we provide quality healthcare with compassion and humanity. Located in Kanyosha, we offer consultations, laboratory, maternity, minor surgery and more.',
      'hero.cta.whatsapp':    'WhatsApp · 79 56 57 28',
      'hero.cta.services':    'Our services',
      'hero.cta.hours':       'Open 24h/7',
      'services.title':       'Our services',
      'services.sub':         'Comprehensive care, close to you, with a loving heart.',
      'service.consult':      'Consultation',
      'service.consult.sub':  'General & specialized',
      'service.labo':         'Laboratory',
      'service.labo.sub':     'Reliable analyses',
      'service.chir':         'Minor Surgery',
      'service.chir.sub':     'Care & minor procedures',
      'service.matern':       'Maternity',
      'service.matern.sub':   'Delivery & follow-up',
      'service.cpn':          'ANC · PNC · FP',
      'service.cpn.sub':      'Family planning',
      'service.pharma':       'Pharmacy',
      'service.pharma.sub':   'Essential medicines',
      'service.consult.detail': 'Our qualified doctors are available to provide personalized consultations, whether for a medical follow-up, a diagnosis, or any health concern. We listen carefully and offer solutions tailored to your situation.',
      'service.labo.detail':    'We have a laboratory to carry out a range of medical tests to better understand your health condition. Our analyses are performed with precision and results are communicated as quickly as possible.',
      'service.chir.detail':    'Our teams perform minor surgical procedures under optimal conditions to ensure your safety and comfort. These procedures include care such as cyst removal, minor skin lesion treatment, and other minor interventions.',
      'service.matern.detail':  'We support expectant mothers throughout their pregnancy with regular follow-ups, prenatal consultations, and health guidance. We offer a safe environment for a peaceful delivery and a confident recovery.',
      'service.cpn.detail':     'We offer prenatal (ANC), postnatal (PNC), and family planning (FP) consultations, with guidance on contraception methods, fertility management, and reproductive health, while respecting your individual choices and needs.',
      'service.pharma.detail':  'Our pharmacy offers a range of essential medicines and health products, with professional advice to help you manage your treatments and maintain your daily well-being.',
      'partners.title':       'Our partners',
      'servicesPage.title':   'Our Health Services',
      'servicesPage.sub':     'Comprehensive, accessible and humane care for the whole family',
      'servicesPage.intro':   'At CDS Nyakira, we are committed to providing quality care tailored to your needs. Discover our services below, designed to support your well-being every day.',
      'contact.title':        'Contact Us',
      'contact.sub':          'Umuhamagaro · Call us or write to us, we are here for you',
      'contact.reach':        'Reach us',
      'contact.reach.sub':    'Ivuriro ryanyu · Your clinic is listening',
      'contact.phone.label':  'Phone',
      'contact.email.label':  'Email',
      'contact.web.label':    'Partner website',
      'contact.address.label':'Address',
      'contact.address':      'Kanyosha, Rural Commune\nBujumbura, Burundi',
      'contact.whatsapp.btn': 'Message on WhatsApp',
      'contact.whatsapp.note':'Fast reply · Available in French, Kirundi, English',
      'contact.form.title':   'Send a message',
      'contact.form.sub':     'We will reply as soon as possible',
      'contact.form.firstName':'First name',
      'contact.form.lastName':'Last name',
      'contact.form.phone':   'Phone / WhatsApp',
      'contact.form.subject': 'Subject',
      'contact.form.subject.placeholder': 'Choose a subject…',
      'contact.form.subject.consult': 'Medical consultation',
      'contact.form.subject.labo': 'Laboratory / Analyses',
      'contact.form.subject.matern': 'Maternity',
      'contact.form.subject.pharma': 'Pharmacy',
      'contact.form.subject.info': 'General information',
      'contact.form.subject.other': 'Other',
      'contact.form.message': 'Message',
      'contact.form.send':    'Send message',
      'contact.location.title': 'Find us · Kanyosha',
      'contact.hours': 'Open 24h/7',
      'contact.hours.label': 'Opening hours',
      'about.title':                     'About CDS Nyakira',
      'about.subtitle':                  'Ivuriro ryanyu bakira neza abarwaye · Your clinic that warmly welcomes patients',
      'about.history.tag':               'Our story',
      'about.history.title':             'A health center at the heart of Kanyosha',
      'about.history.p1':                'Founded in <strong>2022</strong>, the Centre De Santé (CDS) Nyakira was born from a deep conviction: every resident of Kanyosha deserves access to quality care, with dignity and compassion.',
      'about.history.p2':                'Located in the rural commune of Kanyosha, in Bujumbura, our clinic quickly became a pillar of the community. We are proud to be <strong>"ivuriro ryanyu"</strong>, your clinic. A place where every patient is welcomed like a member of the family.',
      'about.history.quote':             'Tubakirana umutima w\'urukundo · We welcome you with a loving heart',
      'about.stat.year.label':           'Year founded',
      'about.stat.patients.label':       'Patients per year',
      'about.stat.services.label':       'Medical services',
      'about.stat.dental.label':         '2024 dental mission patients',
      'about.approach.title':            'A unique approach: financial clemency',
      'about.approach.p1':               'CDS Nyakira is one of the few clinics in the region to offer a policy of <strong>clemency in medical debt repayment</strong>. Patients can receive care and afterward pay immediately or benefit from debt relief in cases of demonstrated financial hardship.',
      'about.approach.p2':               'Thanks to our partnership with <strong>Beauty Out of Dust</strong> and the <strong>GlobalGiving</strong> program, we have been able to relieve medical debt for the most vulnerable families of Kanyosha.',
      'about.approach.stat.funds':       'funds raised (CAD)',
      'about.approach.stat.donors':      'donors',
      'about.approach.stat.duration.value': '3 years',
      'about.approach.stat.duration.label': 'of the program',
      'about.partners.title':            'Our partners and missions',
      'about.partners.sub':              'International collaborations for ever better care',
      'about.partners.globalgiving.body':'This program provided medical debt relief to families and individuals facing financial hardship. Thanks to the generosity of <strong>18 donors</strong>, <strong>$1,962 (CAD)</strong> was raised to clear portions of medical debt for the most vulnerable patients.',
      'about.link.viewProject':          'View the project',
      'about.link.reports':              'Reports',
      'about.partners.budental.title':   'BuDental Mission Association (B.M.A) · May 2024',
      'about.partners.budental.body':    'In May 2024, we welcomed the team from <strong>ACT Africa</strong> and <strong>A&M Texas University</strong> for an exceptional dental mission. Their team gave their time, expertise, and donations to our community.',
      'about.link.viewPost':             'View the post',
      'about.partners.bod.title':        'Beauty Out Of Dust · June 2024',
      'about.partners.bod.body':         'In June 2024, <strong>Beauty Out of Dust (BOD)</strong> partnered with <strong>ACT Africa</strong>, a group of dental students from Texas A&M Dentistry, to provide free dental care in Kanyosha, operating from the CDS Nyakira clinic.',
      'about.partners.bod.impact1':      'Essential hygiene services for <strong>133 patients</strong>',
      'about.partners.bod.impact2':      'Educational sessions on oral hygiene',
      'about.partners.bod.impact3':      'Free distribution of toothbrushes and toothpaste',
      'about.link.viewImpact':           'View the impact',
      'about.values.title':              'Our values · Indoto zacu',
      'about.values.ubuntu.title':       'Ubuntu · Humanity',
      'about.values.ubuntu.desc':        'Every person deserves to be treated with dignity and respect. We believe in the strength of community.',
      'about.values.clemence.title':     'Clemency',
      'about.values.clemence.desc':      'Health should never be a luxury. Our debt relief policy reflects this deep commitment.',
      'about.values.proximite.title':    'Closeness',
      'about.values.proximite.desc':     'Ivuriro ryanyu · your clinic. We are here for you, close to your everyday concerns.',
      'about.values.excellence.title':   'Excellence',
      'about.values.excellence.desc':    'We always aim for the best care, with trained teams and a warm welcome for everyone.',
    },

    // ===== LANGUES DÉSACTIVÉES (RN / SW / ZH) =====
    // Sélecteur RN, SW, ZH : le clic affiche un pop-up « bientôt disponible »
    // (voir handleLangClick, section 3) sans changer la langue affichée.
    // Dictionnaires conservés intacts pour permettre une réactivation future
    // sans avoir à retraduire depuis zéro.
    rn: {
      'hero.kirundi':         'Ni ivuriro ryanyu',
      'hero.title':           'Ubuzima bwawe, intumbero yacu.',
      'hero.text':            'Ku ivuriro CDS Nyakira, turabakira neza kandi dufise impuhwe. Tuba Kanyosha. Twegera ubuganga bwa: ibibazo, laboratoire, maternité, n\'ibikorwa vyindi.',
      'hero.cta.whatsapp':    'WhatsApp · 79 56 57 28',
      'hero.cta.services':    'Ibikorwa vyacu',
      'services.title':       'Ibikorwa vyacu · nos services',
      'services.sub':         'Ubuganga bwuzuye, bugufi, n\'umutima w\'urukundo.',
      'service.consult':      'Ibibazo',
      'service.consult.sub':  'Rusange & iby\'inzobere',
      'service.labo':         'Laboratoire',
      'service.labo.sub':     'Ubushakashatsi',
      'service.chir':         'Ubuvuzi bwiza',
      'service.chir.sub':     'Ibikorwa bito',
      'service.matern':       'Maternité',
      'service.matern.sub':   'Ivuka & monitoring',
      'service.cpn':          'CPN-CPON-PF',
      'service.cpn.sub':      'Gutegura umuryango',
      'service.pharma':       'Farumasi',
      'service.pharma.sub':   'Imiti ngenderwako',
      'partners.title':       'Abadutera inkunga',
      'servicesPage.title':   'Ibikorwa vya CDS Nyakira',
      'servicesPage.sub':     'Ubuganga bwuzuye kuri bose',
      'contact.title':        'Twandikire',
      'contact.reach':        'Dushikire',
      'contact.whatsapp.btn': 'Twandike kuri WhatsApp',
      'contact.form.title':   'Twoherere ubutumwa',
      'contact.form.send':    'Ohereza ubutumwa',
    },
    sw: {
      'hero.kirundi':         'Ni ivuriro ryanyu',
      'hero.title':           'Afya yako, kipaumbele chetu.',
      'hero.text':            'Kliniki ya CDS Nyakira inatoa huduma za afya bora kwa huruma na ubinadamu. Iko Kanyosha. Tunatoa: mashauriano, maabara, uzazi, upasuaji mdogo na zaidi.',
      'hero.cta.whatsapp':    'WhatsApp · 79 56 57 28',
      'hero.cta.services':    'Huduma zetu',
      'services.title':       'Huduma zetu',
      'services.sub':         'Huduma kamili, karibu nawe, kwa moyo wa upendo.',
      'service.consult':      'Mashauriano',
      'service.consult.sub':  'Ya jumla na maalum',
      'service.labo':         'Maabara',
      'service.labo.sub':     'Uchambuzi wa kuaminika',
      'service.chir':         'Upasuaji Mdogo',
      'service.chir.sub':     'Utunzaji na michakato',
      'service.matern':       'Uzazi',
      'service.matern.sub':   'Kujifungua & ufuatiliaji',
      'service.cpn':          'CPN-CPON-PF',
      'service.cpn.sub':      'Upangaji familia',
      'service.pharma':       'Famasi',
      'service.pharma.sub':   'Dawa muhimu',
      'partners.title':       'Washirika wetu',
      'contact.title':        'Wasiliana Nasi',
      'contact.whatsapp.btn': 'Andika kwenye WhatsApp',
      'contact.form.title':   'Tuma ujumbe',
      'contact.form.send':    'Tuma ujumbe',
    },
    zh: {
      'hero.kirundi':         'Ni ivuriro ryanyu',
      'hero.title':           '您的健康，我们的使命。',
      'hero.text':            'CDS Nyakira诊所以仁爱之心提供优质医疗服务。位于坎约沙，提供：问诊、化验室、产科、小手术等服务。',
      'hero.cta.whatsapp':    'WhatsApp · 79 56 57 28',
      'hero.cta.services':    '我们的服务',
      'services.title':       '我们的服务',
      'services.sub':         '全面、便捷、充满爱心的医疗服务。',
      'service.consult':      '门诊',
      'service.consult.sub':  '普通科与专科',
      'service.labo':         '化验室',
      'service.labo.sub':     '精准分析',
      'service.chir':         '小手术',
      'service.chir.sub':     '护理与小手术',
      'service.matern':       '产科',
      'service.matern.sub':   '分娩与随访',
      'service.cpn':          '产前/产后/计划生育',
      'service.cpn.sub':      '家庭计划',
      'service.pharma':       '药房',
      'service.pharma.sub':   '基本药物',
      'partners.title':       '我们的合作伙伴',
      'contact.title':        '联系我们',
      'contact.whatsapp.btn': '通过WhatsApp联系',
      'contact.form.title':   '发送消息',
      'contact.form.send':    '发送消息',
    }
  };

  // ===================================================
  // 2. APPLIQUER LES TRADUCTIONS
  // ===================================================
  function applyTranslations(lang) {
    const dict = i18n[lang] || {};
    const fallback = i18n['fr'];

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const text = dict[key] || fallback[key];
      if (text !== undefined) {
        if (el.tagName === 'INPUT' && el.placeholder !== undefined) {
          el.placeholder = text;
        } else {
          el.innerHTML = text;
        }
      }
    });

    // Mettre à jour l'attribut lang du HTML
    document.documentElement.lang = lang === 'rn' ? 'rn' : lang === 'zh' ? 'zh' : lang === 'sw' ? 'sw' : lang;
  }

  // ===================================================
  // 3. SÉLECTEUR DE LANGUE
  // ===================================================
  const ACTIVE_LANGS = ['fr', 'en']; // Langues activables. rn/sw/zh restent visibles dans le sélecteur mais désactivées.

  // Messages du pop-up "langue indisponible", affichés selon la langue actuellement active.
  const LANG_COMING_SOON_MSG = {
    fr: 'Cette langue sera bientôt disponible.',
    en: 'This language will be available soon.',
  };

  // Accès défensif à localStorage : certains contextes (navigation privée, cookies
  // bloqués, iframe) peuvent lever une exception à l'accès. Cette précaution est
  // indépendante de l'hébergeur (GitHub Pages, Vercel, etc.) puisque localStorage
  // est une API du navigateur, pas du serveur ; elle reste donc valable après migration.
  function safeGetItem(key) {
    try {
      return localStorage.getItem(key);
    } catch (e) {
      return null;
    }
  }

  function safeSetItem(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      // Stockage indisponible : la préférence de langue ne sera pas persistée,
      // mais le site continue de fonctionner normalement pour la session en cours.
    }
  }

  const storedLang = safeGetItem('cdsLang');
  let currentLang = ACTIVE_LANGS.includes(storedLang) ? storedLang : 'fr';

  function setLanguage(lang) {
    currentLang = lang;
    safeSetItem('cdsLang', lang);

    document.querySelectorAll('.lang-item').forEach(item => {
      item.classList.toggle('active', item.dataset.lang === lang);
    });

    applyTranslations(lang);
    console.log(`🌐 Langue: ${lang.toUpperCase()}`);
  }

  // Point d'entrée unique pour tout clic sur un item de langue (desktop + mobile).
  // Centraliser ici permet de réutiliser la même logique si de nouvelles langues
  // sont activées/désactivées plus tard, sans dupliquer le contrôle ailleurs.
  function handleLangClick(lang) {
    if (!ACTIVE_LANGS.includes(lang)) {
      showNotification(LANG_COMING_SOON_MSG[currentLang] || LANG_COMING_SOON_MSG.fr, 'info');
      return;
    }
    setLanguage(lang);
  }

  document.querySelectorAll('.lang-item').forEach(item => {
    item.addEventListener('click', function () {
      handleLangClick(this.dataset.lang);
    });
  });

  // Appliquer la langue sauvegardée au chargement (déjà validée ci-dessus contre ACTIVE_LANGS)
  if (currentLang !== 'fr') {
    setLanguage(currentLang);
  }

  // ===================================================
  // 4. CARTES DE SERVICES — micro-interactions
  // ===================================================
  document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', function () {
      const name = this.querySelector('h3')?.textContent || '';
      this.style.transform = 'scale(0.96)';
      setTimeout(() => { this.style.transform = ''; }, 140);
      console.log(`🏥 Service: ${name}`);
    });
  });

  // ===================================================
  // 5. FORMULAIRE CONTACT — simulation d'envoi
  // ===================================================
  const formSubmit = document.getElementById('formSubmit');
  if (formSubmit) {
    formSubmit.addEventListener('click', function () {
      const firstName = document.getElementById('firstName')?.value.trim();
      const phone = document.getElementById('phone')?.value.trim();
      const subject = document.getElementById('subject')?.value;

      if (!firstName || !phone || !subject) {
        showNotification('⚠️ Veuillez remplir les champs obligatoires.', 'warn');
        return;
      }

      // Simuler envoi
      this.disabled = true;
      this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi…';

      setTimeout(() => {
        const form = document.getElementById('contactForm');
        const confirm = document.getElementById('formConfirmation');
        if (form) form.style.display = 'none';
        if (confirm) confirm.style.display = 'block';
        showNotification('✅ Message envoyé avec succès !', 'success');
      }, 1200);
    });
  }

  // ===================================================
  // 6. HEADER — ombre au scroll
  // ===================================================
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.style.boxShadow = window.scrollY > 60
        ? '0 4px 24px rgba(26,61,43,0.13)'
        : '0 2px 16px rgba(26,61,43,0.06)';
    }, { passive: true });
  }

  // ===================================================
  // 7. TOAST NOTIFICATIONS
  // ===================================================
  function showNotification(message, type = 'info') {
    const colors = {
      success: '#2e6b45',
      warn:    '#c9862a',
      info:    '#1a3d2b',
    };
    const toast = document.createElement('div');
    toast.textContent = message;
    Object.assign(toast.style, {
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      background: colors[type] || colors.info,
      color: '#fff',
      padding: '12px 22px',
      borderRadius: '100px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.18)',
      zIndex: '9999',
      fontFamily: "'DM Sans', sans-serif",
      fontSize: '0.875rem',
      fontWeight: '500',
      animation: 'toastIn 0.3s ease',
      transition: 'opacity 0.3s',
      maxWidth: '320px',
    });

    if (!document.getElementById('toastStyle')) {
      const style = document.createElement('style');
      style.id = 'toastStyle';
      style.textContent = `@keyframes toastIn { from { transform: translateY(16px); opacity:0 } to { transform: translateY(0); opacity:1 } }`;
      document.head.appendChild(style);
    }

    document.body.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 320);
    }, 2500);
  }
  
  // ===================================================
  // MENU MOBILE — hamburger toggle
  // ===================================================
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    // Injecter le sélecteur de langue dans le menu mobile
    const langSel = document.getElementById('langSelector');
    if (langSel) {
      const langMobile = document.createElement('div');
      langMobile.className = 'lang-mobile';
      langSel.querySelectorAll('.lang-item').forEach(item => {
        const clone = item.cloneNode(true);
        clone.addEventListener('click', function () {
          handleLangClick(this.dataset.lang);
        });
        langMobile.appendChild(clone);
      });
      navLinks.appendChild(langMobile);
    }

    menuToggle.addEventListener('click', function () {
      const isOpen = navLinks.classList.toggle('open');
      menuToggle.classList.toggle('open', isOpen);
      menuToggle.setAttribute('aria-expanded', isOpen);
    });

    // Fermer le menu si on clique sur un lien
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuToggle.classList.remove('open');
      });
    });

    // Fermer si clic en dehors
    document.addEventListener('click', function (e) {
      if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('open');
        menuToggle.classList.remove('open');
      }
    });
  }

  // ===================================================
  // INIT
  // ===================================================
  console.log('✨ CDS Nyakira · Tubakirana umutima w\'urukundo');

})();