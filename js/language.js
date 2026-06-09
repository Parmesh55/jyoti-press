/* ============================================================
   JYOTI PRESS — language.js
   Central Language Engine — EN / HI
   Architecture: scalable for all pages, future languages
   ============================================================ */

(function () {
  'use strict';

  /* ── Storage key ── */
  var LANG_KEY = 'jp_lang';

  /* ── Default language ── */
  var DEFAULT_LANG = 'en';

  /* ── Supported languages ── */
  var SUPPORTED = ['en', 'hi'];

  /* ══════════════════════════════════════════════════════════
     TRANSLATIONS
     Keys prefixed by page scope for easy future expansion.
     Common keys (nav, footer, ticker) are shared across pages.
  ══════════════════════════════════════════════════════════ */
  var translations = {

    en: {

      /* ── Page title ── */
      'page.title': 'Jyoti Press — Print & Advertising, Gorakhpur',

      /* ── Top bar ── */
      'topbar.text': 'SERVING GORAKHPUR SINCE 1965 \u00A0·\u00A0 10 PARK ROAD, CIVIL LINES \u00A0·\u00A0 CALL: 94152 77666',

      /* ── Service ticker ── */
      'ticker.label': 'WE PROVIDE',
      'ticker.offset': 'Offset Printing',
      'ticker.digital': 'Digital Printing',
      'ticker.screen': 'Screen Printing',
      'ticker.flex': 'Flex Printing',
      'ticker.hoarding': 'Hoarding',
      'ticker.outdoor': 'Outdoor Advertising',
      'ticker.wallwrap': 'Wall Wrap',
      'ticker.events': 'Events',

      /* ── Desktop nav ── */
      'nav.home': 'Home',
      'nav.about': 'About Us',
      'nav.services': 'Services',
      'nav.contact': 'Contact',

      /* ── Mobile nav ── */
      'mnav.home': 'Home',
      'mnav.about': 'About Us',
      'mnav.services': 'Services',
      'mnav.contact': 'Contact',

      /* ── Language button ── */
      'lang.btn': 'EN / HI',

      /* ── Hero section ── */
      'hero.badge': 'CIVIL LINES, GORAKHPUR \u00A0·\u00A0 EST. 1965',
      'hero.heading.line1': 'Trusted Printing &',
      'hero.heading.accent': 'Advertising Since 1965.',
      'hero.para': 'Jyoti Press has been helping businesses, schools, hospitals, and organisations in Gorakhpur for over 60 years. Offset printing, digital printing, hoardings, flex, outdoor advertising — everything done in-house and delivered on time.',
      'hero.btn.whatsapp': 'Chat on WhatsApp',
      'hero.info.address': '10 Park Road, Civil Lines, Gorakhpur',
      'hero.info.phone': '94152 77666',
      'hero.card.caption.title': 'Jyoti Press',
      'hero.card.caption.sub': 'Print & Advertising, Gorakhpur',
      'hero.exp.years': 'YEARS IN',
      'hero.exp.excel': 'BUSINESS',

      /* ── About section ── */
      'about.badge': 'ESTABLISHED 1965 \u00A0·\u00A0 CIVIL LINES, GORAKHPUR',
      'about.heading.line1': "Gorakhpur's Printing",
      'about.heading.accent': 'Partner Since 1965.',
      'about.para.lead': 'Jyoti Press started in 1965 at 10 Park Road, Civil Lines, Gorakhpur. More than 60 years later, we are still here — at the same address, serving the same city.',
      'about.para.2': 'Schools, hospitals, government offices, shops, and businesses across Gorakhpur trust us for their printing needs. Whether it is a brochure, a hoarding, or a full event campaign — we get it done right.',
      'about.hl1.title': '60+ Years in Business',
      'about.hl1.desc': "One of Gorakhpur's oldest and most trusted print shops",
      'about.hl2.title': 'All Printing Services Under One Roof',
      'about.hl2.desc': 'Offset, digital, flex, hoarding, outdoor — no need to go anywhere else',
      'about.hl3.title': 'Trusted by Everyone',
      'about.hl3.desc': 'Schools, hospitals, shops, and offices — all served with care',
      'about.cta': 'Call Us Now',
      'about.est.label': 'Est. Gorakhpur',
      'about.chip.print.num': '9+',
      'about.chip.print.label': 'Print & Ad Services',
      'about.chip.clients.num': '500+',
      'about.chip.clients.label': 'Trusted Clients',

      /* ── Stats row ── */
      'stat.since.num': '1965',
      'stat.since.txt': 'Since',
      'stat.since.desc': 'Started in Gorakhpur',
      'stat.years.txt': 'Years',
      'stat.years.desc': 'Of quality printing',
      'stat.customers.txt': 'Customers',
      'stat.customers.desc': 'Happy clients across U.P.',
      'stat.services.txt': 'Services',
      'stat.services.desc': 'All printing & ad needs covered',

      /* ── Why Choose Us ── */
      'why.badge': 'WHY CUSTOMERS CHOOSE US \u00A0·\u00A0 SINCE 1965',
      'why.heading.pre': 'Why People Trust',
      'why.heading.accent': 'Jyoti Press',
      'why.subheading': 'We have been doing this for over 60 years. Here is why businesses, schools, and organisations keep coming back to us.',
      'why.c1.title': '60+ Years of Experience',
      'why.c1.desc': 'We have been printing in Gorakhpur since 1965. You can trust us with your work.',
      'why.c2.title': 'Good Quality, Every Time',
      'why.c2.desc': 'We check every job before it goes out. Sharp prints, right colours, clean finish.',
      'why.c3.title': 'Everything Under One Roof',
      'why.c3.desc': 'Offset, digital, flex, hoarding, outdoor — no need to visit multiple shops.',
      'why.c4.title': 'Modern Machines',
      'why.c4.desc': 'We use up-to-date equipment so your prints always look sharp and clear.',
      'why.c5.title': 'Ready on Time',
      'why.c5.desc': 'We respect your deadlines. Your order will be ready when you need it.',
      'why.c6.title': 'Helpful Team',
      'why.c6.desc': 'Have a question? Not sure what you need? Just call us — we will help you.',

      /* ── Signature Services ── */
      'sig.badge': 'OUR SERVICES \u00A0·\u00A0 JYOTI PRESS',
      'sig.heading.pre': 'Our Main',
      'sig.heading.accent': 'Services',
      'sig.subheading': 'From printed books to big outdoor hoardings — we handle all kinds of printing and advertising work for businesses, schools, hospitals, and events.',
      'sig.offset.label': 'BULK PRINTING',
      'sig.offset.title': 'Offset\nPrinting',
      'sig.offset.desc': 'Best for books, brochures, catalogues, and large quantity print jobs. Clear, sharp, and cost-effective.',
      'sig.offset.btn': 'View Details',
      'sig.outdoor.label': 'GET NOTICED OUTDOORS',
      'sig.outdoor.title': 'Outdoor Advertising',
      'sig.outdoor.desc': 'Hoardings, wall wraps, and outdoor branding that help people see your business across the city.',
      'sig.outdoor.btn': 'Explore Service',
      'sig.digital.label': 'QUICK PRINTS',
      'sig.digital.title': 'Digital\nPrinting',
      'sig.digital.btn': 'Learn More',
      'sig.hoarding.label': 'BIG & BOLD',
      'sig.hoarding.title': 'Hoarding',
      'sig.hoarding.btn': 'Learn More',

      /* ── Footer ── */
      'footer.brand.desc': 'Helping businesses, schools, and organisations with trusted printing and advertising services since 1965.',
      'footer.ql.heading': 'Quick Links',
      'footer.ql.home': 'Home',
      'footer.ql.about': 'About Us',
      'footer.ql.whyus': 'Why Choose Us',
      'footer.ql.services': 'Signature Services',
      'footer.ql.contact': 'Contact',
      'footer.sv.heading': 'Services',
      'footer.sv.offset': 'Offset Printing',
      'footer.sv.digital': 'Digital Printing',
      'footer.sv.screen': 'Screen Printing',
      'footer.sv.flex': 'Flex Printing',
      'footer.sv.hoarding': 'Hoarding',
      'footer.sv.outdoor': 'Outdoor Advertising',
      'footer.sv.wallwrap': 'Wall Wrap',
      'footer.sv.wallpaint': 'Wall Painting',
      'footer.sv.events': 'Events',
      'footer.ct.heading': 'Get In Touch',
      'footer.ct.address': '10 Park Road, Civil Lines,<br>Gorakhpur &mdash; 273009',
      'footer.copy': '© 2026 Jyoti Press. Serving Gorakhpur Since 1965.',
      'footer.privacy': 'Privacy Policy',
      'footer.terms': 'Terms of Service',

      /* ── Contact page ── */
      'contact.nav.home': 'Home',
      'contact.nav.about': 'About Us',
      'contact.nav.services': 'Services',
      'contact.nav.contact': 'Contact',

      /* ── Contact page content ── */
      'ct.page.title': 'Contact – Jyoti Press',
      'ct.hero.eyebrow': 'Contact Jyoti Press',
      'ct.hero.heading': "Let's Talk About<br />Your Next Project",
      'ct.hero.sub': 'Need printing, branding, advertising, hoardings, wall graphics, event materials, or custom solutions? Our team is ready to help.',
      'ct.hero.btn.call': 'Call Us',
      'ct.hero.btn.wa': 'WhatsApp Us',
      'ct.stat.trust': 'Years of Trust',
      'ct.stat.projects': 'Projects Done',
      'ct.stat.est': 'Est. Year',
      'ct.info.tag': 'Reach Us',
      'ct.info.heading': 'Our Contact Details',
      'ct.info.sub': 'Come visit us, call us, or drop an email. We are always happy to hear from you.',
      'ct.card.address.title': 'Office Address',
      'ct.card.address.body': '10 Park Road, Civil Lines,<br />Gorakhpur &mdash; 273009',
      'ct.card.phone.title': 'Phone Number',
      'ct.card.email.title': 'Email Address',
      'ct.card.exp.title': 'Our Experience',
      'ct.card.exp.body': 'Serving Gorakhpur Since 1965',
      'ct.map.tag': 'Location',
      'ct.map.heading': 'Find Us On The Map',
      'ct.map.sub': 'We are located at 10 Park Road, Civil Lines, Gorakhpur. Easy to find, easy to reach.',
      'ct.map.label': 'Jyoti Press — 10 Park Road, Civil Lines, Gorakhpur',
      'ct.actions.tag': 'Get in Touch',
      'ct.actions.heading': 'Quick Contact',
      'ct.actions.sub': 'Pick whatever is easiest for you. We respond quickly.',
      'ct.action.call.title': 'Call Us',
      'ct.action.call.cta': 'Tap to Call',
      'ct.action.wa.title': 'WhatsApp Us',
      'ct.action.wa.cta': 'Chat on WhatsApp',
      'ct.action.email.title': 'Email Us',
      'ct.action.email.cta': 'Send an Email',
      'ct.trust.tag': 'Our Strengths',
      'ct.trust.heading': 'Why Businesses Trust Jyoti Press',
      'ct.trust.sub': 'Thousands of customers across Gorakhpur have relied on us for over six decades.',
      'ct.trust.c1.title': '60+ Years Experience',
      'ct.trust.c1.desc': "Serving Gorakhpur since 1965. That's six decades of quality work and trusted relationships.",
      'ct.trust.c2.title': 'Complete Printing Solutions',
      'ct.trust.c2.desc': 'From visiting cards to large hoardings — we handle everything under one roof.',
      'ct.trust.c3.title': 'Trusted Local Partner',
      'ct.trust.c3.desc': 'Thousands of completed projects for shops, schools, hospitals, and businesses in the region.',
      'ct.trust.c4.title': 'Fast Support',
      'ct.trust.c4.desc': "Quick response and reliable service. Just call us and we'll help you right away.",

      /* ── Services page ── */
      'services.nav.home': 'Home',
      'services.nav.about': 'About Us',
      'services.nav.services': 'Services',
      'services.nav.contact': 'Contact',
    },

    hi: {

      /* ── Page title ── */
      'page.title': 'ज्योति प्रेस — प्रिंटिंग और विज्ञापन, गोरखपुर',

      /* ── Top bar ── */
      'topbar.text': '1965 से गोरखपुर की सेवा में \u00A0·\u00A0 10 पार्क रोड, सिविल लाइंस \u00A0·\u00A0 कॉल करें: 94152 77666',

      /* ── Service ticker ── */
      'ticker.label': 'हमारी सेवाएं',
      'ticker.offset': 'ऑफसेट प्रिंटिंग',
      'ticker.digital': 'डिजिटल प्रिंटिंग',
      'ticker.screen': 'स्क्रीन प्रिंटिंग',
      'ticker.flex': 'फ्लेक्स प्रिंटिंग',
      'ticker.hoarding': 'होर्डिंग',
      'ticker.outdoor': 'आउटडोर एडवर्टाइजिंग',
      'ticker.wallwrap': 'वॉल रैप',
      'ticker.events': 'इवेंट',

      /* ── Desktop nav ── */
      'nav.home': 'होम',
      'nav.about': 'हमारे बारे में',
      'nav.services': 'सेवाएं',
      'nav.contact': 'संपर्क',

      /* ── Mobile nav ── */
      'mnav.home': 'होम',
      'mnav.about': 'हमारे बारे में',
      'mnav.services': 'सेवाएं',
      'mnav.contact': 'संपर्क',

      /* ── Language button ── */
      'lang.btn': 'EN / HI',

      /* ── Hero section ── */
      'hero.badge': 'सिविल लाइंस, गोरखपुर \u00A0·\u00A0 स्थापना 1965',
      'hero.heading.line1': 'भरोसेमंद प्रिंटिंग &',
      'hero.heading.accent': '1965 से विज्ञापन सेवा।',
      'hero.para': 'ज्योति प्रेस पिछले 60 से भी ज़्यादा सालों से गोरखपुर के कारोबारियों, स्कूलों, अस्पतालों और संस्थाओं की मदद कर रहा है। ऑफसेट प्रिंटिंग, डिजिटल प्रिंटिंग, होर्डिंग, फ्लेक्स, आउटडोर विज्ञापन — सब कुछ खुद करते हैं और समय पर देते हैं।',
      'hero.btn.whatsapp': 'WhatsApp पर बात करें',
      'hero.info.address': '10 पार्क रोड, सिविल लाइंस, गोरखपुर',
      'hero.info.phone': '94152 77666',
      'hero.card.caption.title': 'ज्योति प्रेस',
      'hero.card.caption.sub': 'प्रिंटिंग और विज्ञापन, गोरखपुर',
      'hero.exp.years': 'साल से',
      'hero.exp.excel': 'व्यवसाय में',

      /* ── About section ── */
      'about.badge': 'स्थापना 1965 \u00A0·\u00A0 सिविल लाइंस, गोरखपुर',
      'about.heading.line1': 'गोरखपुर का प्रिंटिंग',
      'about.heading.accent': '1965 से साझीदार।',
      'about.para.lead': 'ज्योति प्रेस की शुरुआत 1965 में 10 पार्क रोड, सिविल लाइंस, गोरखपुर से हुई थी। 60 से ज़्यादा साल बाद भी हम उसी पते पर, उसी शहर की सेवा में हैं।',
      'about.para.2': 'गोरखपुर के स्कूल, अस्पताल, सरकारी दफ़्तर, दुकानें और कारोबार — सभी अपनी प्रिंटिंग जरूरतों के लिए हम पर भरोसा करते हैं। चाहे ब्रोशर हो, होर्डिंग हो या पूरा इवेंट कैंपेन — हम सही तरीके से करते हैं।',
      'about.hl1.title': '60+ साल का अनुभव',
      'about.hl1.desc': 'गोरखपुर की सबसे पुरानी और भरोसेमंद प्रिंट शॉपों में से एक',
      'about.hl2.title': 'एक ही छत के नीचे सब सेवाएं',
      'about.hl2.desc': 'ऑफसेट, डिजिटल, फ्लेक्स, होर्डिंग, आउटडोर — कहीं और जाने की ज़रूरत नहीं',
      'about.hl3.title': 'सबका भरोसा',
      'about.hl3.desc': 'स्कूल, अस्पताल, दुकानें और दफ़्तर — सभी की देखभाल करते हैं',
      'about.cta': 'अभी कॉल करें',
      'about.est.label': 'Est. गोरखपुर',
      'about.chip.print.num': '9+',
      'about.chip.print.label': 'प्रिंट और विज्ञापन सेवाएं',
      'about.chip.clients.num': '500+',
      'about.chip.clients.label': 'विश्वसनीय ग्राहक',

      /* ── Stats row ── */
      'stat.since.num': '1965',
      'stat.since.txt': 'से',
      'stat.since.desc': 'गोरखपुर में शुरुआत',
      'stat.years.txt': 'साल',
      'stat.years.desc': 'बेहतरीन प्रिंटिंग के',
      'stat.customers.txt': 'ग्राहक',
      'stat.customers.desc': 'U.P. भर में खुश ग्राहक',
      'stat.services.txt': 'सेवाएं',
      'stat.services.desc': 'सभी प्रिंटिंग और विज्ञापन जरूरतें',

      /* ── Why Choose Us ── */
      'why.badge': 'ग्राहक हमें क्यों चुनते हैं \u00A0·\u00A0 1965 से',
      'why.heading.pre': 'लोग क्यों भरोसा करते हैं',
      'why.heading.accent': 'ज्योति प्रेस',
      'why.subheading': 'हम 60 से ज़्यादा सालों से यह काम कर रहे हैं। यही वजह है कि कारोबारी, स्कूल और संस्थाएं बार-बार हमारे पास आते हैं।',
      'why.c1.title': '60+ साल का अनुभव',
      'why.c1.desc': 'हम 1965 से गोरखपुर में प्रिंटिंग कर रहे हैं। अपना काम निश्चिंत होकर दें।',
      'why.c2.title': 'हर बार अच्छी क्वालिटी',
      'why.c2.desc': 'हर काम जाने से पहले जांचा जाता है। साफ प्रिंट, सही रंग, बढ़िया फिनिश।',
      'why.c3.title': 'सब कुछ एक ही जगह',
      'why.c3.desc': 'ऑफसेट, डिजिटल, फ्लेक्स, होर्डिंग, आउटडोर — कई दुकानों के चक्कर नहीं।',
      'why.c4.title': 'आधुनिक मशीनें',
      'why.c4.desc': 'नई तकनीक की मशीनें हैं जिससे प्रिंट हमेशा साफ और शानदार आता है।',
      'why.c5.title': 'समय पर तैयार',
      'why.c5.desc': 'आपकी डेडलाइन की कद्र करते हैं। काम तय समय पर मिलेगा।',
      'why.c6.title': 'मददगार टीम',
      'why.c6.desc': 'कोई सवाल हो? समझ न आए क्या चाहिए? बस हमें कॉल करें — हम बताएंगे।',

      /* ── Signature Services ── */
      'sig.badge': 'हमारी सेवाएं \u00A0·\u00A0 JYOTI PRESS',
      'sig.heading.pre': 'हमारी मुख्य',
      'sig.heading.accent': 'सेवाएं',
      'sig.subheading': 'किताबों की प्रिंटिंग से लेकर बड़े आउटडोर होर्डिंग तक — कारोबारियों, स्कूलों, अस्पतालों और इवेंट के लिए हर तरह का काम करते हैं।',
      'sig.offset.label': 'बड़ी मात्रा में प्रिंटिंग',
      'sig.offset.title': 'ऑफसेट\nप्रिंटिंग',
      'sig.offset.desc': 'किताबें, ब्रोशर, कैटलॉग और बड़े प्रिंट ऑर्डर के लिए बेस्ट। साफ, तेज और किफायती।',
      'sig.offset.btn': 'विवरण देखें',
      'sig.outdoor.label': 'बाहर दिखाएं अपना नाम',
      'sig.outdoor.title': 'आउटडोर एडवर्टाइजिंग',
      'sig.outdoor.desc': 'होर्डिंग, वॉल रैप और आउटडोर ब्रांडिंग जो पूरे शहर में आपकी पहचान बनाए।',
      'sig.outdoor.btn': 'सेवा देखें',
      'sig.digital.label': 'जल्दी प्रिंट',
      'sig.digital.title': 'डिजिटल\nप्रिंटिंग',
      'sig.digital.btn': 'और जानें',
      'sig.hoarding.label': 'बड़ा और दमदार',
      'sig.hoarding.title': 'होर्डिंग',
      'sig.hoarding.btn': 'और जानें',

      /* ── Footer ── */
      'footer.brand.desc': '1965 से स्कूलों, कारोबारियों और संस्थाओं को भरोसेमंद प्रिंटिंग और विज्ञापन सेवाएं दे रहे हैं।',
      'footer.ql.heading': 'त्वरित लिंक',
      'footer.ql.home': 'होम',
      'footer.ql.about': 'हमारे बारे में',
      'footer.ql.whyus': 'हमें क्यों चुनें',
      'footer.ql.services': 'मुख्य सेवाएं',
      'footer.ql.contact': 'संपर्क',
      'footer.sv.heading': 'सेवाएं',
      'footer.sv.offset': 'ऑफसेट प्रिंटिंग',
      'footer.sv.digital': 'डिजिटल प्रिंटिंग',
      'footer.sv.screen': 'स्क्रीन प्रिंटिंग',
      'footer.sv.flex': 'फ्लेक्स प्रिंटिंग',
      'footer.sv.hoarding': 'होर्डिंग',
      'footer.sv.outdoor': 'आउटडोर एडवर्टाइजिंग',
      'footer.sv.wallwrap': 'वॉल रैप',
      'footer.sv.wallpaint': 'वॉल पेंटिंग',
      'footer.sv.events': 'इवेंट',
      'footer.ct.heading': 'संपर्क करें',
      'footer.ct.address': '10 पार्क रोड, सिविल लाइंस,<br>गोरखपुर &mdash; 273009',
      'footer.copy': '© 2026 ज्योति प्रेस। 1965 से गोरखपुर की सेवा में।',
      'footer.privacy': 'गोपनीयता नीति',
      'footer.terms': 'सेवा की शर्तें',

      /* ── Contact page ── */
      'contact.nav.home': 'होम',
      'contact.nav.about': 'हमारे बारे में',
      'contact.nav.services': 'सेवाएं',
      'contact.nav.contact': 'संपर्क',

      /* ── Contact page content ── */
      'ct.page.title': 'संपर्क करें – ज्योति प्रेस',
      'ct.hero.eyebrow': 'ज्योति प्रेस से जुड़ें',
      'ct.hero.heading': 'बात करें अपने<br />अगले प्रोजेक्ट के बारे में',
      'ct.hero.sub': 'प्रिंटिंग, ब्रांडिंग, विज्ञापन, होर्डिंग, वॉल ग्राफिक्स, इवेंट मटेरियल या कुछ खास — हमारी टीम आपकी मदद के लिए तैयार है।',
      'ct.hero.btn.call': 'कॉल करें',
      'ct.hero.btn.wa': 'WhatsApp करें',
      'ct.stat.trust': 'साल का भरोसा',
      'ct.stat.projects': 'प्रोजेक्ट पूरे',
      'ct.stat.est': 'स्थापना वर्ष',
      'ct.info.tag': 'हमसे मिलें',
      'ct.info.heading': 'संपर्क की जानकारी',
      'ct.info.sub': 'आइए मिलिए, फोन करिए या ईमेल भेजिए। हम हमेशा आपसे बात करने के लिए तैयार हैं।',
      'ct.card.address.title': 'हमारा पता',
      'ct.card.address.body': '10 पार्क रोड, सिविल लाइंस,<br />गोरखपुर &mdash; 273009',
      'ct.card.phone.title': 'फोन नंबर',
      'ct.card.email.title': 'ईमेल पता',
      'ct.card.exp.title': 'हमारा अनुभव',
      'ct.card.exp.body': '1965 से गोरखपुर की सेवा में',
      'ct.map.tag': 'हमारी लोकेशन',
      'ct.map.heading': 'नक्शे पर हमें ढूंढें',
      'ct.map.sub': 'हम 10 पार्क रोड, सिविल लाइंस, गोरखपुर पर हैं। आना आसान है, ढूंढना भी।',
      'ct.map.label': 'ज्योति प्रेस — 10 पार्क रोड, सिविल लाइंस, गोरखपुर',
      'ct.actions.tag': 'अभी संपर्क करें',
      'ct.actions.heading': 'जल्दी बात करें',
      'ct.actions.sub': 'जो आसान लगे वही करें। हम जल्दी जवाब देते हैं।',
      'ct.action.call.title': 'फोन करें',
      'ct.action.call.cta': 'कॉल करने के लिए टैप करें',
      'ct.action.wa.title': 'WhatsApp करें',
      'ct.action.wa.cta': 'WhatsApp पर चैट करें',
      'ct.action.email.title': 'ईमेल करें',
      'ct.action.email.cta': 'ईमेल भेजें',
      'ct.trust.tag': 'हमारी खासियत',
      'ct.trust.heading': 'कारोबारी ज्योति प्रेस पर क्यों भरोसा करते हैं',
      'ct.trust.sub': 'गोरखपुर के हज़ारों ग्राहक छह दशकों से हम पर भरोसा करते आ रहे हैं।',
      'ct.trust.c1.title': '60+ साल का अनुभव',
      'ct.trust.c1.desc': '1965 से गोरखपुर की सेवा में। यानी छह दशकों की मेहनत और विश्वास।',
      'ct.trust.c2.title': 'पूरी प्रिंटिंग एक जगह',
      'ct.trust.c2.desc': 'विजिटिंग कार्ड से लेकर बड़े होर्डिंग तक — सब कुछ एक ही छत के नीचे।',
      'ct.trust.c3.title': 'भरोसेमंद स्थानीय साझीदार',
      'ct.trust.c3.desc': 'दुकानों, स्कूलों, अस्पतालों और कारोबारों के लिए हज़ारों प्रोजेक्ट पूरे किए।',
      'ct.trust.c4.title': 'तेज़ सहायता',
      'ct.trust.c4.desc': 'फोन करिए — हम फौरन मदद के लिए तैयार हैं। भरोसेमंद सेवा, हर बार।',

      /* ── Services page ── */
      'services.nav.home': 'होम',
      'services.nav.about': 'हमारे बारे में',
      'services.nav.services': 'सेवाएं',
      'services.nav.contact': 'संपर्क',
    }

    /* Future languages:
       bengali: { ... },
       marathi:  { ... },
       gujarati: { ... }
    */
  };

  /* ══════════════════════════════════════════════════════════
     CORE ENGINE
  ══════════════════════════════════════════════════════════ */

  /** Get saved language; fall back to default */
  function getSavedLang() {
    try {
      var saved = localStorage.getItem(LANG_KEY);
      if (saved && SUPPORTED.indexOf(saved) !== -1) return saved;
    } catch (e) { /* localStorage blocked */ }
    return DEFAULT_LANG;
  }

  /** Persist chosen language */
  function saveLang(lang) {
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* noop */ }
  }

  /** Translate a single key; returns English fallback if missing */
  function t(key, lang) {
    var dict = translations[lang] || translations[DEFAULT_LANG];
    if (dict[key] !== undefined) return dict[key];
    var fallback = translations[DEFAULT_LANG];
    return fallback[key] !== undefined ? fallback[key] : key;
  }

  /**
   * Apply translations to the DOM.
   * Reads `data-i18n` for text content, `data-i18n-html` for innerHTML,
   * `data-i18n-attr-*` for arbitrary attributes.
   */
  function applyTranslations(lang) {
    /* ── Text content ── */
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      el.textContent = t(key, lang);
    });

    /* ── HTML content (for keys with <br> / &mdash; etc.) ── */
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      el.innerHTML = t(key, lang);
    });

    /* ── Attributes (data-i18n-attr-placeholder, etc.) ── */
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      var pairs = el.getAttribute('data-i18n-attr').split(';');
      pairs.forEach(function (pair) {
        var parts = pair.trim().split(':');
        if (parts.length === 2) {
          el.setAttribute(parts[0].trim(), t(parts[1].trim(), lang));
        }
      });
    });

    /* ── Page title ── */
    var titleEl = document.querySelector('title[data-i18n]');
    if (titleEl) {
      document.title = t(titleEl.getAttribute('data-i18n'), lang);
    }

    /* ── HTML lang attribute ── */
    document.documentElement.setAttribute('lang', lang === 'hi' ? 'hi' : 'en');

    /* ── Logo Switcher ── */
    var isPagesFolder =
      window.location.pathname.indexOf('/pages/') !== -1;

    var logoPath = lang === 'hi'
      ? (isPagesFolder
        ? '../assets/img/hin_logo.png'
        : 'assets/img/hin_logo.png')
      : (isPagesFolder
        ? '../assets/img/eng_logo.png'
        : 'assets/img/eng_logo.png');

    var siteLogo = document.getElementById('siteLogo');
    if (siteLogo) {
      siteLogo.src = logoPath;
    }

    var heroLogo = document.getElementById('heroLogo');
    if (heroLogo) {
      heroLogo.src = logoPath;
    }

    var footerLogo = document.getElementById('footerLogo');
    if (footerLogo) {
      footerLogo.src = logoPath;
    }

    /* ── Top-bar clone (injected by index.js for mobile marquee) ── */
    var clone = document.querySelector('.top-bar-clone');
    if (clone) {
      clone.textContent = t('topbar.text', lang);
    }
  }

  /** Toggle between EN and HI; extensible for more languages */
  function toggleLang() {
    var current = getSavedLang();
    var next = (current === 'en') ? 'hi' : 'en';
    saveLang(next);
    applyTranslations(next);
  }

  /** Public init — called on DOMContentLoaded */
  function init() {
    /* Wire language button(s) — works on any page that has .language-btn */
    document.querySelectorAll('.language-btn').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        toggleLang();
      });
    });

    /* Apply saved language immediately */
    applyTranslations(getSavedLang());
  }

  /* ── Expose minimal public API for future cross-module use ── */
  window.JyotiLang = {
    init: init,
    get: getSavedLang,
    set: function (lang) {
      if (SUPPORTED.indexOf(lang) !== -1) {
        saveLang(lang);
        applyTranslations(lang);
      }
    },
    t: t,
    addTranslations: function (langCode, keyMap) {
      if (!translations[langCode]) translations[langCode] = {};
      Object.assign(translations[langCode], keyMap);
      if (SUPPORTED.indexOf(langCode) === -1) SUPPORTED.push(langCode);
    }
  };

  document.addEventListener('DOMContentLoaded', init);

})();