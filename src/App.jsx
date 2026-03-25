import React, { useState, useEffect, useRef } from 'react';
import { Music, Lightbulb, Shirt, Armchair, Coffee, Send, Languages, Phone, ChevronDown, Star, Quote, Menu, X } from 'lucide-react';

// Imports des assets (assurez-vous que les fichiers existent dans ./assets/)
import henneBG from './assets/henne.jpeg';
import chairImg from './assets/chair.jpeg';
import tenuesImg from './assets/tenues.jpeg';
import gateauxImg from './assets/gateaux.jpeg';
import teouraImg from './assets/teoura.jpeg';

// Composant pour l'effet de fondu au défilement
const FadeInSection = ({ children }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(domRef.current);
        }
      });
    }, { threshold: 0.1 });
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={domRef} className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {children}
    </div>
  );
};

const App = () => {
  const [lang, setLang] = useState('he');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [formData, setFormData] = useState({ date: '', lieu: '', invites: 50, nom: '', services: [] });

  const content = {
    fr: {
      title: "Un Henné Inoubliable",
      subtitle: "Marrakech : quand la tradition rencontre la royauté",
      nav: { services: "Nos Services", reserve: "Réserver", about: "À Propos", reviews: "Témoignages" },
      logisticsTitle: "Réserver votre moment",
      labels: {
        fauteuil: "Fauteuil Somptueux", eclairage: "Éclairage Ambiance",
        tenues: "Tenues Mariés", musique: "Sonorisation & Musique",
        gateaux: "Plateaux de Gâteaux", nom: "Nom Complet",
        lieu: "Lieu", invites: "Invités", btn: "RÉSERVER VIA WHATSAPP"
      },
      aboutContent: {
        intro: "Le moment où le cœur bat au rythme de la darbouka.",
        description: "Chez 'Marrakech', nous vous invitons dans un rêve marocain authentique, riche en couleurs et en sons préservés.",
        whyUsTitle: "Pourquoi nous ?",
        whyUsDetail1: "Les petits détails : Chaque cérémonie est une histoire unique que nous soignons avec passion.",
        whyUsDetail2: "Ambiance : Un mélange précis entre l'authenticité d'autrefois et une énergie festive moderne.",
        footer: "Nous tissons pour vous le plus doux des souvenirs."
      },
      reviews: [
        { text: "Un vrai Henné marocain ! Le service était professionnel et l'ambiance vraiment émouvante.", author: "Yossi A." },
        { text: "Expérience incroyable, le design était soigné et impressionnant. Recommandé de tout cœur !", author: "Hadar D." }
      ]
    },
    he: {
      title: "חינה בלתי נשכחת",
      subtitle: "מרקש: כשהמסורת פוגשת מלכות",
      nav: { services: "השירותים שלנו", reserve: "הזמינו", about: "אודות", reviews: "המלצות" },
      logisticsTitle: "הזמינו את הרגע שלכם",
      labels: {
        fauteuil: "כיסא חינה מפואר", eclairage: "תאורת אווירה",
        tenues: "תלבושות חתן וכלה", musique: "הגברה ומוזיקה",
        gateaux: "מגשי עוגיות", nom: "שם מלא",
        lieu: "מיקום", invites: "מוזמנים", btn: "הזמנה בוואטסאפ"
      },
      aboutContent: {
        intro: "הרגע שבו הלב פועם בקצב הדרבוקה.",
        description: "ב-\"מרקש\", אנו מזמינים אתכם להשאיר את המודרניות מאחור ולצעוד לתוך חלום מרוקאי אותנטי.",
        whyUsTitle: "למה לחגוג איתנו?",
        whyUsDetail1: "הפרטים הקטנים: טקס חינה הוא סיפור שאנחנו בונים יחד, מהכפתן ועד לעיצוב.",
        whyUsDetail2: "אווירה מרגשת: שילוב מדויק בין האותנטיות של פעם לאווירה טובה ומוזיקלית.",
        footer: "אנחנו רוקמים עבורכם את הזיכרון המתוק ביותר."
      },
      reviews: [
        { text: "אם אתם מחפשים חינה מרוקאית אמיתית – מרקש זה המקום! שירות מקצועי ואווירה מדהימה.", author: "יוסי א." },
        { text: "חגגנו חינה עם מרקש וזו הייתה חוויה מדהימה! העיצוב היה מושקע ומרשים. מומלץ!", author: "הדר ד." }
      ]
    }
  };

  const t = content[lang];
  const isRtl = lang === 'he';

  const servicesList = [
    { id: 'Fauteuil', label: t.labels.fauteuil, icon: <Armchair size={20} />, media: chairImg },
    { id: 'Eclairage', label: t.labels.eclairage, icon: <Lightbulb size={20} />, media: teouraImg },
    { id: 'Tenues', label: t.labels.tenues, icon: <Shirt size={20} />, media: tenuesImg },
    { id: 'Musique', label: t.labels.musique, icon: <Music size={20} />, media: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600" },
    { id: 'Gateaux', label: t.labels.gateaux, icon: <Coffee size={20} />, media: gateauxImg },
  ];

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleWhatsApp = () => {
    const message = `*${t.title}*\n👤 *${t.labels.nom}:* ${formData.nom}\n📅 *Date:* ${formData.date}\n📍 *Lieu:* ${formData.lieu}\n✨ *Services:* ${formData.services.join(', ')}`;
    window.open(`https://wa.me/972522336877?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className={`min-h-screen font-serif relative ${isRtl ? 'rtl' : 'ltr'}`} dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Background */}
      <div className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${henneBG})` }} />
      <div className="fixed inset-0 z-10 bg-emerald-950/85 backdrop-blur-[2px]" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-emerald-950/90 backdrop-blur-md border-b border-yellow-500/20 px-4 py-3">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span className="text-2xl font-black text-yellow-500 cursor-pointer" onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>MARRAKECH</span>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLang(lang === 'fr' ? 'he' : 'fr')}
              className="flex items-center gap-1 bg-yellow-500 text-emerald-950 px-3 py-1 rounded-full text-xs font-bold shadow-md active:scale-90 transition-transform"
            >
              <Languages size={14} /> {lang === 'fr' ? 'עברית' : 'FR'}
            </button>
            <div className="hidden md:flex items-center gap-6 text-white font-bold mx-4">
              <button onClick={() => scrollTo('services')} className="hover:text-yellow-500 transition-colors">{t.nav.services}</button>
              <button onClick={() => scrollTo('reserve')} className="hover:text-yellow-500 transition-colors">{t.nav.reserve}</button>
              <button onClick={() => scrollTo('about')} className="hover:text-yellow-500 transition-colors">{t.nav.about}</button>
              <button onClick={() => scrollTo('reviews')} className="hover:text-yellow-500 transition-colors">{t.nav.reviews}</button>
            </div>
            <button className="md:hidden text-yellow-500 p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
        <div className={`md:hidden absolute top-full left-0 right-0 bg-emerald-950 border-b border-yellow-500/20 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col p-6 gap-6 text-center text-white font-bold">
            <button onClick={() => scrollTo('services')}>{t.nav.services}</button>
            <button onClick={() => scrollTo('reserve')}>{t.nav.reserve}</button>
            <button onClick={() => scrollTo('about')}>{t.nav.about}</button>
            <button onClick={() => scrollTo('reviews')}>{t.nav.reviews}</button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-20 pt-28 p-4 md:p-10 max-w-6xl mx-auto text-white">
        <FadeInSection>
          <header className="text-center mb-6"> {/* Marge réduite ici */}
            <h1 className="text-5xl md:text-8xl font-black text-yellow-500 uppercase tracking-tighter mb-4 drop-shadow-lg">{t.title}</h1>
            <p className="text-xl md:text-2xl text-gray-200 italic opacity-90 leading-tight">"{t.subtitle}"</p>
          </header>
        </FadeInSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Services Section */}
          <section id="services" className="space-y-4">
            {/* Titre masqué sur mobile */}
            <h2 className="hidden md:block text-3xl font-bold text-yellow-500 mb-8 border-r-4 border-yellow-500 pr-4">
              {t.nav.services}
            </h2>
            {servicesList.map((s) => (
              <FadeInSection key={s.id}>
                <div className="rounded-2xl border border-white/10 bg-emerald-900/40 backdrop-blur-md overflow-hidden transition-all hover:border-yellow-500/30">
                  <div
                    onClick={() => setOpenAccordion(openAccordion === s.id ? null : s.id)}
                    className={`flex items-center justify-between p-5 cursor-pointer ${openAccordion === s.id ? 'bg-yellow-500 text-emerald-950' : 'text-white'}`}
                  >
                    <div className="flex items-center gap-4">
                      {s.icon}
                      <span className="font-bold text-lg">{s.label}</span>
                    </div>
                    <ChevronDown size={20} className={`transition-transform duration-300 ${openAccordion === s.id ? 'rotate-180' : ''}`} />
                  </div>
                  {openAccordion === s.id && (
                    <div className="p-4 bg-black/20">
                      <img src={s.media} alt={s.label} className="w-full h-64 object-cover rounded-xl border border-white/10" />
                    </div>
                  )}
                </div>
              </FadeInSection>
            ))}
          </section>

          {/* Form Section */}
          <section id="reserve" className="sticky top-28">
            <FadeInSection>
              <div className="bg-emerald-900/60 backdrop-blur-2xl p-8 rounded-3xl border border-white/20 shadow-2xl">
                <h2 className="text-3xl font-bold text-yellow-500 mb-8">{t.logisticsTitle}</h2>
                <div className="space-y-4 text-emerald-950 font-bold">
                  <input type="text" placeholder={t.labels.nom} className="w-full p-4 rounded-xl bg-white outline-none focus:ring-4 ring-yellow-500/50" onChange={e => setFormData({...formData, nom: e.target.value})} />
                  <div className="grid grid-cols-2 gap-4">
                    <input type="date" className="p-4 rounded-xl bg-white outline-none focus:ring-4 ring-yellow-500/50" onChange={e => setFormData({...formData, date: e.target.value})} />
                    <input type="number" placeholder={t.labels.invites} className="p-4 rounded-xl bg-white outline-none text-center focus:ring-4 ring-yellow-500/50" onChange={e => setFormData({...formData, invites: e.target.value})} />
                  </div>
                  <input type="text" placeholder={t.labels.lieu} className="w-full p-4 rounded-xl bg-white outline-none focus:ring-4 ring-yellow-500/50" onChange={e => setFormData({...formData, lieu: e.target.value})} />
                  <button onClick={handleWhatsApp} className="w-full mt-4 bg-yellow-500 text-emerald-950 font-black text-xl py-5 rounded-2xl flex items-center justify-center gap-3 shadow-xl active:scale-95 transition-transform">
                    <Send size={24} /> {t.labels.btn}
                  </button>
                  <a href="tel:0522336877" className="flex items-center justify-center gap-3 text-yellow-500 text-3xl font-black pt-4">
                    <Phone size={28} /> 052-2336877
                  </a>
                </div>
              </div>
            </FadeInSection>
          </section>
        </div>

        {/* About Section */}
        <FadeInSection>
          <section id="about" className="mt-32 text-center bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-8 underline decoration-yellow-500/30 underline-offset-8">
               {isRtl ? `מרקש : ${t.aboutContent.intro}` : `Marrakech : ${t.aboutContent.intro}`}
            </h2>
            <p className="text-xl max-w-3xl mx-auto mb-12 opacity-90">{t.aboutContent.description}</p>
            <div className="grid md:grid-cols-2 gap-8 text-right">
              <div className="bg-emerald-900/40 p-6 rounded-2xl border border-yellow-500/20">
                <h4 className="text-yellow-500 font-bold text-xl mb-3">{t.aboutContent.whyUsTitle}</h4>
                <p>{t.aboutContent.whyUsDetail1}</p>
              </div>
              <div className="bg-emerald-900/40 p-6 rounded-2xl border border-yellow-500/20">
                <h4 className="text-yellow-500 font-bold text-xl mb-3">{isRtl ? "אווירה מרגשת" : "Ambiance Émouvante"}</h4>
                <p>{t.aboutContent.whyUsDetail2}</p>
              </div>
            </div>
            <p className="mt-12 text-2xl font-black text-yellow-500 italic">"{t.aboutContent.footer}"</p>
          </section>
        </FadeInSection>

        {/* Reviews Section */}
        <section id="reviews" className="mt-32 mb-20">
          <h2 className="text-4xl font-bold text-yellow-500 mb-12 text-center">{t.nav.reviews}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.reviews.map((rev, idx) => (
              <FadeInSection key={idx}>
                <div className="bg-emerald-900/40 p-8 rounded-3xl border-r-4 border-yellow-500 relative">
                  <Quote className="absolute top-4 left-4 opacity-10 text-yellow-500" size={48} />
                  <div className="flex text-yellow-500 mb-4">
                    {/* Etoiles pleines */}
                    {Array(5).fill(0).map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                  </div>
                  <p className="text-lg italic mb-4">"{rev.text}"</p>
                  <p className="font-bold text-yellow-500">— {rev.author}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;