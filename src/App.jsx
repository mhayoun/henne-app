import React, { useState, useEffect, useRef } from 'react';
import { Music, Lightbulb, Shirt, Armchair, Coffee, Send, Languages, Phone, ChevronDown, Star, Quote, Menu, X } from 'lucide-react';
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
    });
    observer.observe(domRef.current);
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
        description: "Il y a des moments dans la vie qui vont au-delà d'une simple fête – ce sont des voyages dans le temps. Chez 'Marrakech', nous vous invitons à laisser la modernité derrière vous pour entrer dans un rêve marocain authentique.",
        whyUsTitle: "Pourquoi fêter avec nous ?",
        whyUsDetail1: "Les petits détails : Une cérémonie de Henné n'est pas seulement un événement, c'est une histoire.",
        whyUsDetail2: "Ambiance émouvante : Un mélange précis entre l'authenticité d'autrefois et une atmosphère musicale vibrante.",
        footer: "Chez Marrakech, nous ne produisons pas seulement un événement. Nous tissons pour vous le plus doux des souvenirs."
      },
      reviews: [
        { text: "Si vous cherchez un vrai Henné marocain – Marrakech est l'endroit idéal ! Le service était professionnel, l'ambiance joyeuse et émouvante.", author: "Yossi A." },
        { text: "Nous avons fêté notre Henné avec Marrakech et ce fut une expérience incroyable ! Le design était soigné et impressionnant.", author: "Hadar D." }
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
        description: "יש רגעים בחיים שהם מעבר לחגיגה – הם מסע בזמן. ב-\"מרקש\", אנו מזמינים אתכם להשאיר את המודרניות מאחור ולצעוד לתוך חלום מרוקאי אותנטי.",
        whyUsTitle: "למה לחגוג איתנו?",
        whyUsDetail1: "הפרטים הקטנים: טקס חינה הוא לא רק אירוע, הוא סיפור. אנחנו דואגים לכל פרט.",
        whyUsDetail2: "אווירה מרגשת: שילוב מדויק בין האותנטיות של פעם לאווירה טובה ומוזיקלית.",
        footer: "\"במרקש, אנחנו לא רק מפיקים אירוע. אנחנו רוקמים עבורכם את הזיכרון המתוק ביותר.\""
      },
      reviews: [
        { text: "אם אתם מחפשים חינה מרוקאית אמיתית – מרקש זה המקום! השירות היה מקצועי, האווירה הייתה שמחה ומרגשת.", author: "יוסי א." },
        { text: "חגגנו חינה עם מרקש וזו הייתה חוויה מדהימה! העיצוב היה מושקע ומרשים, והאירוע היה פשוט מושלם.", author: "הדר ד." }
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
      window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleWhatsApp = () => {
    const message = `*${t.title}*\n👤 *${t.labels.nom}:* ${formData.nom}\n📅 *Date:* ${formData.date}\n📍 *Lieu:* ${formData.lieu}\n✨ *Services:* ${formData.services.join(', ')}`;
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
            <button onClick={() => setLang(lang === 'fr' ? 'he' : 'fr')} className="flex items-center gap-1 bg-yellow-500 text-emerald-950 px-3 py-1.5 rounded-full text-xs font-black shadow-lg">
              <Languages size={14} /> {lang === 'fr' ? 'HE' : 'FR'}
            </button>
            <div className="hidden md:flex items-center gap-6 text-white font-bold ml-4">
              <button onClick={() => scrollTo('services')} className="hover:text-yellow-500">{t.nav.services}</button>
              <button onClick={() => scrollTo('reserve')} className="hover:text-yellow-500">{t.nav.reserve}</button>
              <button onClick={() => scrollTo('about')} className="hover:text-yellow-500">{t.nav.about}</button>
              <button onClick={() => scrollTo('reviews')} className="hover:text-yellow-500">{t.nav.reviews}</button>
            </div>
            <button className="md:hidden text-yellow-500" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      <div className="relative z-20 pt-24 p-4 md:p-10 lg:p-16 max-w-6xl mx-auto text-white">
        <FadeInSection>
          <header className="text-center mb-10">
            <h1 className="text-4xl md:text-8xl font-black text-[#fbbf24] uppercase tracking-tighter mb-2 drop-shadow-2xl">{t.title}</h1>
            <p className="text-lg md:text-2xl text-gray-100 font-light italic max-w-2xl mx-auto leading-tight opacity-90">"{t.subtitle}"</p>
            <div className="h-1 w-32 md:w-48 bg-yellow-500 mx-auto mt-4" />
          </header>
        </FadeInSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-12">
          <section id="services" className="space-y-4">
            <h2 className="hidden md:flex text-3xl font-bold text-[#fbbf24] mb-8 items-center gap-3">{t.nav.services}</h2>
            {servicesList.map((s, idx) => (
              <FadeInSection key={s.id}>
                <div className="overflow-hidden rounded-2xl border border-white/20 bg-emerald-900/40 backdrop-blur-md transition-all hover:border-yellow-500/50">
                  <div onClick={() => setOpenAccordion(openAccordion === s.id ? null : s.id)} className={`flex items-center justify-between p-5 cursor-pointer ${openAccordion === s.id ? 'bg-yellow-500 text-emerald-950' : 'text-white'}`}>
                    <div className="flex items-center gap-5">
                      <div className={openAccordion === s.id ? 'text-emerald-900' : 'text-yellow-500'}>{s.icon}</div>
                      <span className="font-bold text-lg">{s.label}</span>
                    </div>
                    <ChevronDown className={`transition-transform ${openAccordion === s.id ? 'rotate-180' : ''}`} />
                  </div>
                  <div className={`transition-all duration-500 overflow-hidden ${openAccordion === s.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="p-4 pt-0">
                      {s.media.endsWith('.mp4') ? <video src={s.media} autoPlay muted loop playsInline className="w-full h-64 object-cover rounded-xl" /> : <img src={s.media} alt={s.label} className="w-full h-64 object-contain rounded-xl" />}
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </section>

          <section id="reserve" className="sticky top-24">
            <FadeInSection>
              <div className="bg-emerald-900/40 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-2xl">
                <h2 className="text-3xl font-bold text-[#fbbf24] mb-8">{t.logisticsTitle}</h2>
                <div className="space-y-5 text-emerald-950 font-bold">
                  <input type="text" placeholder={t.labels.nom} className="w-full p-4 rounded-xl bg-white/90 outline-none focus:ring-2 ring-yellow-500" onChange={e => setFormData({...formData, nom: e.target.value})} />
                  <div className="grid grid-cols-2 gap-4">
                    <input type="date" className="p-4 rounded-xl bg-white/90 outline-none focus:ring-2 ring-yellow-500" onChange={e => setFormData({...formData, date: e.target.value})} />
                    <input type="number" placeholder={t.labels.invites} className="p-4 rounded-xl bg-white/90 outline-none text-center focus:ring-2 ring-yellow-500" onChange={e => setFormData({...formData, invites: e.target.value})} />
                  </div>
                  <input type="text" placeholder={t.labels.lieu} className="w-full p-4 rounded-xl bg-white/90 outline-none focus:ring-2 ring-yellow-500" onChange={e => setFormData({...formData, lieu: e.target.value})} />
                  <button onClick={handleWhatsApp} className="w-full mt-4 bg-[#fbbf24] text-emerald-950 font-black text-xl py-5 rounded-2xl flex items-center justify-center gap-3 active:scale-95 transition-transform"><Send size={24} /> {t.labels.btn}</button>
                  <div className="text-center pt-6 text-yellow-500"><a href="tel:0522336877" className="text-3xl font-bold flex items-center justify-center gap-3"><Phone size={24} /> 052-2336877</a></div>
                </div>
              </div>
            </FadeInSection>
          </section>
        </div>

        <FadeInSection>
          <section id="about" className="mt-24 bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 text-center">
            <h2 className="text-3xl font-bold text-yellow-500 mb-8">{t.aboutTitle}</h2>
            <div className="max-w-3xl mx-auto space-y-6 text-gray-100">
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
        </FadeInSection>

        <section id="reviews" className="mt-24 mb-16">
          <h2 className="text-3xl font-bold text-yellow-500 mb-10 text-center">{t.nav.reviews}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.reviews.map((rev, idx) => (
              <FadeInSection key={idx}>
                <div className="bg-emerald-900/40 p-8 rounded-3xl border-l-4 border-yellow-500 relative group">
                  <Quote className="absolute top-4 right-4 opacity-10 text-yellow-500" size={48} />
                  <div className="flex text-yellow-500 mb-4">
                    {Array(5).fill(0).map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" className="transition-all duration-500 delay-[200ms]" style={{ transform: `scale(${1})` }} />
                    ))}
                  </div>
                  <p className="text-lg mb-4 italic leading-relaxed">"{rev.text}"</p>
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