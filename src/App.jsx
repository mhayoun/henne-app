import React, { useState } from 'react';
import { Music, Lightbulb, Shirt, Armchair, Coffee, Send, Languages, Phone, ChevronDown, Star, Quote, Menu, X } from 'lucide-react';
import henneBG from './assets/henne.jpeg';
import chairImg from './assets/chair.jpeg';
import tenuesImg from './assets/tenues.jpeg';
import gateauxImg from './assets/gateaux.jpeg';
import teouraImg from './assets/teoura.jpeg';
import musiqueVid from './assets/musique.mp4';

const App = () => {
  const [lang, setLang] = useState('he');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [formData, setFormData] = useState({
    date: '', lieu: '', invites: 50, nom: '',
    services: ['Fauteuil', 'Eclairage', 'Tenues', 'Musique', 'Gateaux']
  });

  const content = {
    fr: {
      title: "Un Henné Inoubliable",
      subtitle: "Marrakech : quand la tradition rencontre la royauté",
      nav: { services: "Nos Services", reserve: "Réserver", about: "À Propos", reviews: "Témoignages" },
      aboutTitle: "Marrakech : quand la tradition rencontre la royauté",
      reviewsTitle: "Témoignages du cœur",
      logisticsTitle: "Réserver votre moment",
      aboutContent: {
        intro: "Le moment où le cœur bat au rythme de la darbouka, et où l'âme se drape d'or.",
        description: "Il y a des moments dans la vie qui vont au-delà d'une simple fête – ce sont des voyages dans le temps. Chez 'Marrakech', nous vous invitons à laisser la modernité derrière vous pour entrer dans un rêve marocain authentique, riche en couleurs, en parfums et en sons préservés de génération en génération.",
        whyUsTitle: "Pourquoi fêter avec nous ?",
        whyUsDetail1: "Les petits détails : Une cérémonie de Henné n'est pas seulement un événement, c'est une histoire. Nous soignons chaque détail – du caftan de la mariée jusqu'au design de l'événement.",
        whyUsDetail2: "Ambiance émouvante : Un mélange précis entre l'authenticité d'autrefois et une atmosphère musicale vibrante. Chacun de vos invités se sentira comme un membre de la royauté.",
        footer: "Chez Marrakech, nous ne produisons pas seulement un événement. Nous tissons pour vous le plus doux des souvenirs."
      },
      reviews: [
        { text: "Si vous cherchez un vrai Henné marocain – Marrakech est l'endroit idéal ! Le service était professionnel, l'ambiance joyeuse et émouvante, et tout était parfaitement planifié. Recommandé chaleureusement !", author: "Yossi A." },
        { text: "Nous avons fêté notre Henné avec Marrakech et ce fut une expérience incroyable ! Le design était soigné et impressionnant, avec une ambiance authentique. Recommandé de tout cœur !", author: "Hadar D." }
      ],
      labels: {
        fauteuil: "Fauteuil Somptueux", eclairage: "Éclairage Ambiance",
        tenues: "Tenues Mariés", musique: "Sonorisation & Musique",
        gateaux: "Plateaux de Gâteaux", nom: "Votre Nom Complet",
        lieu: "Lieu", invites: "Nombre d'invités", btn: "RÉSERVER SUR WHATSAPP"
      }
    },
    he: {
      title: "חינה בלתי נשכחת",
      subtitle: "מרקש: כשהמסורת פוגשת מלכות",
      nav: { services: "השירותים שלנו", reserve: "הזמינו", about: "אודות", reviews: "המלצות" },
      aboutTitle: "מרקש: כשהמסורת פוגשת מלכות",
      reviewsTitle: "המלצות מהלב",
      logisticsTitle: "הזמינו את הרגע שלכם",
      aboutContent: {
        intro: "הרגע שבו הלב פועם בקצב הדרבוקה, והנשמה מתעטפת בזהב.",
        description: "יש רגעים בחיים שהם מעבר לחגיגה – הם מסע בזמן. ב-\"מרקש\", אנו מזמינים אתכם להשאיר את המודרניות מאחור ולצעוד לתוך חלום מרוקאי אותנטי, עשיר בצבעים, ניחוחות וצלילים שנשמרים מדור לדור.",
        whyUsTitle: "למה לחגוג איתנו?",
        whyUsDetail1: "הפרטים הקטנים: טקס חינה הוא לא רק אירוע, הוא סיפור. אנחנו דואגים לכל פרט – מהכפתן של הכלה ועד לעיצוב של האירוע.",
        whyUsDetail2: "אווירה מרגשת: שילוב מדויק בין האותנטיות של פעם לאווירה טובה ומוזיקלית. כל אחד מהאורחים שלכם ירגיש כמו בן מלוכה.",
        footer: "\"במרקש, אנחנו לא רק מפיקים אירוע. אנחנו רוקמים עבורכם את הזיכרון המתוק ביותר.\""
      },
      reviews: [
        { text: "אם אתם מחפשים חינה מרוקאית אמיתית – מרקש זה המקום! השירות היה מקצועי, האווירה הייתה שמחה ומרגשת, והכול היה מתוכנן בצורה מושלמת.", author: "יוסי א." },
        { text: "חגגנו חינה עם מרקש וזו הייתה חוויה מדהימה! העיצוב היה מושקע ומרשים, והאירוע היה פשוט מושלם. ממליצים מכל הלב!", author: "הדר ד." }
      ],
      labels: {
        fauteuil: "כיסא חינה מפואר", eclairage: "תאורת אווירה",
        tenues: "תלבושות חתן וכלה", musique: "הגברה ומוזיקה",
        gateaux: "מגשי עוגיות", nom: "שם מלא",
        lieu: "מיקום", invites: "מספר מוזמנים", btn: "הזמנה בוואטסאפ"
      }
    }
  };

  const t = content[lang];
  const isRtl = lang === 'he';

  const servicesList = [
    { id: 'Fauteuil', label: t.labels.fauteuil, icon: <Armchair size={20} />, media: chairImg },
    { id: 'Eclairage', label: t.labels.eclairage, icon: <Lightbulb size={20} />, media: teouraImg },
    { id: 'Tenues', label: t.labels.tenues, icon: <Shirt size={20} />, media: tenuesImg },
    { id: 'Musique', label: t.labels.musique, icon: <Music size={20} />, media: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=600" },
    { id: 'Gateaux', label: t.labels.gateaux, icon: <Coffee size={20} />, media: gateauxImg },
  ];

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleWhatsApp = () => {
    const message = `*${t.title}*\n\n👤 *${t.labels.nom}:* ${formData.nom}\n📅 *Date:* ${formData.date}\n📍 *Lieu:* ${formData.lieu}\n👥 *Invités:* ${formData.invites}\n✨ *Services:* ${formData.services.join(', ')}`;
    window.open(`https://wa.me/972522336877?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className={`min-h-screen font-serif relative ${isRtl ? 'rtl text-right' : 'ltr text-left'}`} dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105" style={{ backgroundImage: `url(${henneBG})`, backgroundAttachment: 'fixed' }} />
      <div className="fixed inset-0 z-10 bg-gradient-to-b from-emerald-950/50 via-emerald-950/80 to-emerald-950/95 backdrop-blur-[1px]" />

      <nav className="fixed top-0 left-0 right-0 z-50 bg-emerald-950/80 backdrop-blur-md border-b border-yellow-500/20 px-4 md:px-10 py-3">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span className="text-2xl font-black text-yellow-500 tracking-tighter cursor-pointer" onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>MARRAKECH</span>

          <div className="flex items-center gap-2 md:gap-6">
            {/* Language Switcher - ALWAYS OUTSIDE */}
            <button
              onClick={() => setLang(lang === 'fr' ? 'he' : 'fr')}
              className="flex items-center gap-1 bg-yellow-500 text-emerald-950 px-3 py-1.5 rounded-full text-xs font-black shadow-lg hover:bg-yellow-400 transition-colors"
            >
              <Languages size={14} /> {lang === 'fr' ? 'HE' : 'FR'}
            </button>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-6 text-white font-bold ml-4">
              <button onClick={() => scrollTo('services')} className="hover:text-yellow-500 transition-colors">{t.nav.services}</button>
              <button onClick={() => scrollTo('reserve')} className="hover:text-yellow-500 transition-colors">{t.nav.reserve}</button>
              <button onClick={() => scrollTo('about')} className="hover:text-yellow-500 transition-colors">{t.nav.about}</button>
              <button onClick={() => scrollTo('reviews')} className="hover:text-yellow-500 transition-colors">{t.nav.reviews}</button>
            </div>

            {/* Hamburger Button */}
            <button className="md:hidden text-yellow-500 p-1" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU DROPDOWN (Now only contains navigation links) */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-emerald-950/95 border-b border-yellow-500/20 flex flex-col p-6 gap-6 text-center text-white font-bold shadow-2xl">
            <button onClick={() => scrollTo('services')} className="text-lg">{t.nav.services}</button>
            <button onClick={() => scrollTo('reserve')} className="text-lg">{t.nav.reserve}</button>
            <button onClick={() => scrollTo('about')} className="text-lg">{t.nav.about}</button>
            <button onClick={() => scrollTo('reviews')} className="text-lg">{t.nav.reviews}</button>
          </div>
        )}
      </nav>

      {/* Reste du contenu identique... */}
      <div className="relative z-20 pt-24 p-4 md:p-10 lg:p-16 max-w-6xl mx-auto text-white">
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-8xl font-black text-[#fbbf24] uppercase tracking-tighter mb-2 drop-shadow-2xl">{t.title}</h1>
          <p className="text-lg md:text-2xl text-gray-100 font-light italic max-w-2xl mx-auto leading-tight opacity-90">"{t.subtitle}"</p>
          <div className="h-1 w-32 md:w-48 bg-yellow-500 mx-auto mt-4" />
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <section id="services" className="space-y-4">
            <h2 className="hidden md:flex text-3xl font-bold text-[#fbbf24] mb-8 items-center gap-3">{t.nav.services}</h2>
            <div className="grid grid-cols-1 gap-4">
              {servicesList.map((s) => (
                <div key={s.id} className="overflow-hidden rounded-2xl border border-white/20 bg-emerald-900/40 backdrop-blur-md">
                  <div onClick={() => setOpenAccordion(openAccordion === s.id ? null : s.id)} className={`flex items-center justify-between p-5 cursor-pointer transition-all ${openAccordion === s.id ? 'bg-yellow-500 text-emerald-950' : 'text-white hover:bg-white/10'}`}>
                    <div className="flex items-center gap-5">
                      <div className={openAccordion === s.id ? 'text-emerald-900' : 'text-yellow-500'}>{s.icon}</div>
                      <span className="font-bold text-lg">{s.label}</span>
                    </div>
                    <ChevronDown className={`transition-transform duration-300 ${openAccordion === s.id ? 'rotate-180' : ''}`} />
                  </div>
                  <div className={`transition-all duration-500 ease-in-out ${openAccordion === s.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    <div className="p-4 pt-0">
                      {s.media.endsWith('.mp4') ? <video src={s.media} controls autoPlay muted loop playsInline className="w-full h-64 object-cover rounded-xl border-2 border-yellow-500/30 bg-black" /> : <img src={s.media} alt={s.label} className="w-full h-64 object-contain rounded-xl border-2 border-yellow-500/30 bg-black/20" />}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="reserve" className="bg-emerald-900/40 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-2xl sticky top-24">
            <h2 className="text-3xl font-bold text-[#fbbf24] mb-8">{t.logisticsTitle}</h2>
            <div className="space-y-5 text-emerald-950 font-bold">
              <input type="text" placeholder={t.labels.nom} className="w-full p-4 rounded-xl bg-white/90 outline-none" onChange={e => setFormData({...formData, nom: e.target.value})} />
              <div className="grid grid-cols-2 gap-4">
                <input type="date" className="p-4 rounded-xl bg-white/90 outline-none" onChange={e => setFormData({...formData, date: e.target.value})} />
                <input type="number" placeholder={t.labels.invites} className="p-4 rounded-xl bg-white/90 outline-none text-center" onChange={e => setFormData({...formData, invites: e.target.value})} />
              </div>
              <input type="text" placeholder={t.labels.lieu} className="w-full p-4 rounded-xl bg-white/90 outline-none" onChange={e => setFormData({...formData, lieu: e.target.value})} />
              <button onClick={handleWhatsApp} className="w-full mt-4 bg-[#fbbf24] text-emerald-950 font-black text-xl py-5 rounded-2xl flex items-center justify-center gap-3 shadow-xl active:scale-95 transition-transform"><Send size={24} /> {t.labels.btn}</button>
              <div className="text-center pt-6 text-yellow-500"><a href="tel:0522336877" className="text-3xl font-bold flex items-center justify-center gap-3"><Phone size={24} /> 052-2336877</a></div>
            </div>
          </section>
        </div>

        <section id="about" className="mt-24 bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 text-center">
          <h2 className="text-3xl font-bold text-yellow-500 mb-8">{t.aboutTitle}</h2>
          <div className="max-w-3xl mx-auto space-y-6 leading-relaxed text-lg text-gray-100">
            <p className="text-xl font-bold text-yellow-200">{t.aboutContent.intro}</p>
            <p>{t.aboutContent.description}</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-emerald-900/40 p-4 rounded-xl border border-yellow-500/30 text-right">
                <h4 className="font-bold text-yellow-500 mb-2">{t.aboutContent.whyUsTitle}</h4>
                <p className="text-sm">{t.aboutContent.whyUsDetail1}</p>
              </div>
              <div className="bg-emerald-900/40 p-4 rounded-xl border border-yellow-500/30 text-right">
                <h4 className="font-bold text-yellow-500 mb-2">{isRtl ? "אווירה מרגשת" : "Ambiance émouvante"}</h4>
                <p className="text-sm">{t.aboutContent.whyUsDetail2}</p>
              </div>
            </div>
            <p className="italic text-yellow-500">{t.aboutContent.footer}</p>
          </div>
        </section>

        <section id="reviews" className="mt-24 mb-16">
          <h2 className="text-3xl font-bold text-yellow-500 mb-10 text-center">{t.nav.reviews}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.reviews.map((rev, idx) => (
              <div key={idx} className="bg-emerald-900/40 p-8 rounded-3xl border-l-4 border-yellow-500 relative">
                <Quote className="absolute top-4 right-4 opacity-10 text-yellow-500" size={48} />
                <div className="flex text-yellow-500 mb-4"><Star size={16}/><Star size={16}/><Star size={16}/><Star size={16}/><Star size={16}/></div>
                <p className="text-lg leading-relaxed mb-4 italic">"{rev.text}"</p>
                <p className="font-bold text-yellow-500">— {rev.author}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;