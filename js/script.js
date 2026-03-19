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
    fr: {
      'hero.location':        'Kanyosha, Bujumbura · Burundi',
      'hero.kirundi':         'Ni ivuriro ryanyu',
      'hero.title':           'Votre santé, notre priorité.',
      'hero.text':            'À la clinique CDS Nyakira, nous offrons des soins médicaux de qualité avec compassion et humanité. Située à Kanyosha, nous proposons : consultations, laboratoire, maternité, petite chirurgie et bien plus.',
      'hero.cta.whatsapp':    'WhatsApp · 76 86 90 00',
      'hero.cta.services':    'Nos services',
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
      'partners.title':       'Ils nous soutiennent · abafasha',
      'servicesPage.title':   'Nos Services de Santé',
      'servicesPage.sub':     'Des soins complets, accessibles et humains pour toute la famille',
      'servicesPage.intro':   'À CDS Nyakira, nous nous engageons à offrir des soins de qualité adaptés à vos besoins. Découvrez nos services ci-dessous, conçus pour vous accompagner dans votre bien-être au quotidien.',
      'contact.title':        'Nous contacter',
      'contact.sub':          'Umuhamagaro · Appelez-nous ou écrivez-nous, nous sommes là pour vous',
      'contact.reach':        'Nous joindre',
      'contact.reach.sub':    'Ivuriro ryanyu — votre clinique est à votre écoute',
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
      'contact.location.title': 'Nous trouver · Kanyosha',
    },
    rn: {
      'hero.kirundi':         'Ni ivuriro ryanyu',
      'hero.title':           'Ubuzima bwawe, intumbero yacu.',
      'hero.text':            'Ku ivuriro CDS Nyakira, turabakira neza kandi dufise impuhwe. Tuba Kanyosha. Twegera ubuganga bwa: ibibazo, laboratoire, maternité, n\'ibikorwa vyindi.',
      'hero.cta.whatsapp':    'WhatsApp · 76 86 90 00',
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
    en: {
      'hero.kirundi':         'It is your clinic',
      'hero.title':           'Your health, our priority.',
      'hero.text':            'At CDS Nyakira clinic, we provide quality healthcare with compassion and humanity. Located in Kanyosha, we offer consultations, laboratory, maternity, minor surgery and more.',
      'hero.cta.whatsapp':    'WhatsApp · 76 86 90 00',
      'hero.cta.services':    'Our services',
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
      'partners.title':       'Our partners',
      'servicesPage.title':   'Our Health Services',
      'servicesPage.sub':     'Comprehensive, accessible and humane care for the whole family',
      'servicesPage.intro':   'At CDS Nyakira, we are committed to providing quality care tailored to your needs. Discover our services below, designed to support your well-being every day.',
      'contact.title':        'Contact Us',
      'contact.sub':          'Call us or write to us, we are here for you',
      'contact.reach':        'Reach us',
      'contact.reach.sub':    'Your clinic is listening',
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
    },
    sw: {
      'hero.kirundi':         'Ni kliniki yako',
      'hero.title':           'Afya yako, kipaumbele chetu.',
      'hero.text':            'Kliniki ya CDS Nyakira inatoa huduma za afya bora kwa huruma na ubinadamu. Iko Kanyosha. Tunatoa: mashauriano, maabara, uzazi, upasuaji mdogo na zaidi.',
      'hero.cta.whatsapp':    'WhatsApp · 76 86 90 00',
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
      'hero.kirundi':         '这是您的诊所',
      'hero.title':           '您的健康，我们的使命。',
      'hero.text':            'CDS Nyakira诊所以仁爱之心提供优质医疗服务。位于坎约沙，提供：问诊、化验室、产科、小手术等服务。',
      'hero.cta.whatsapp':    'WhatsApp · 76 86 90 00',
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
          el.textContent = text;
        }
      }
    });

    // Mettre à jour l'attribut lang du HTML
    document.documentElement.lang = lang === 'rn' ? 'rn' : lang === 'zh' ? 'zh' : lang === 'sw' ? 'sw' : lang;
  }

  // ===================================================
  // 3. SÉLECTEUR DE LANGUE
  // ===================================================
  let currentLang = localStorage.getItem('cdsLang') || 'fr';

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('cdsLang', lang);

    document.querySelectorAll('.lang-item').forEach(item => {
      item.classList.toggle('active', item.dataset.lang === lang);
    });

    applyTranslations(lang);
    console.log(`🌐 Langue: ${lang.toUpperCase()}`);
  }

  document.querySelectorAll('.lang-item').forEach(item => {
    item.addEventListener('click', function () {
      setLanguage(this.dataset.lang);
    });
  });

  // Appliquer la langue sauvegardée au chargement
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
  // INIT
  // ===================================================
  console.log('✨ CDS Nyakira · Tubakirana umutima w\'urukundo');

})();
