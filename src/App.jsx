import React, { useState } from 'react';
import {
  Music, Lightbulb, Shirt, Armchair, Coffee, Send,
  Languages, Phone, ChevronDown, Menu, X, Star, Quote,
  Info, MessageSquare
} from 'lucide-react';


// Assets
import henneBG from './assets/henne.jpeg';
import chairImg from './assets/chair.jpeg';
import tenuesImg from './assets/tenues.jpeg';
import gateauxImg from './assets/gateaux.jpeg';
import teouraImg from './assets/teoura.jpeg';
// Re-import the provided image and give it a variable name.
// Assume this file is placed in your assets folder as 'gallery.png' or similar.
import galleryImg from './assets/gallery.png';

const App = () => {
  const [lang, setLang] = useState('he');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [formData, setFormData] = useState({
    date: '',
    lieu: '',
    invites: 50,
    nom: '',
    services: ['Fauteuil', 'Eclairage', 'Tenues', 'Musique', 'Gateaux']
  });

  const content = {
    fr: {
      title: "Un Henné Inoubliable",
      subtitle: "Vous célébrez, et nous nous occupons de toute la magie !",
      nav: { services: "Services", reserve: "Réserver", about: "À Propos", reviews: "Témoignages" },
      logisticsTitle: "Réserver votre moment",
      aboutTitle: "Notre Histoire",
      aboutText: "Chez 'Marrakech', nous transformons vos traditions en moments royaux. Spécialistes du Henné authentique, nous allions le prestige moderne au charme ancestral du Maroc pour créer une expérience sensorielle unique.",
      whyUs: ["Décors Faits Main", "Ambiance Traditionnelle", "Service Premium"],
      reviewsTitle: "Vos Avis",
      reviews: [
        { name: "Yossi A.", text: "Si vous cherchez un vrai henné marocain, Marrakech est l'endroit idéal ! Le service était professionnel, l'ambiance joyeuse et émouvante, et tout était parfaitement planifié. Nous avions l'impression d'être dans un rêve marocain authentique. Nous recommandons vivement !" },
        { name: "Gal M.", text: "Nous voulions un henné spécial et différent – et Marrakech a totalement réalisé notre rêve. Le design, les tissus, les couleurs et l'atmosphère ont créé une sensation de fête royale. Les invités n'ont cessé de nous complimenter. Merci beaucoup pour une soirée inoubliable !" },
        { name: "Yael C.", text: "C'était tout simplement parfait ! Le décor était incroyable et le service au-delà des attentes. Nous nous sommes sentis comme des rois." },
        { name: "Aviv L.", text: "Un henné du plus haut niveau possible. Je recommande vivement à tous ceux qui veulent un événement digne d'un film sans aucun souci." }
      ],
      labels: {
        fauteuil: "Fauteuil Somptueux", eclairage: "Éclairage Ambiance",
        tenues: "Tenues Mariés", musique: "Sonorisation & Musique",
        gateaux: "Plateaux de Gâteaux", nom: "Votre Nom Complet",
        lieu: "Lieu (Ville / Salle)", invites: "Nombre d'invités", btn: "RÉSERVER SUR WHATSAPP"
      }
    },
    he: {
      title: "חינה בלתי נשכחת",
      subtitle: "אתם חוגגים, ואנחנו דואגים לכל הקסם!",
      nav: { services: "שירותים", reserve: "הזמנה", about: "אודות", reviews: "המלצות" },
      logisticsTitle: "הזמינו את הרגע שלכם",
      aboutTitle: "אודות",
      aboutText: (
        <div className="space-y-4">
          <p className="font-bold text-2xl text-yellow-500">מרקש: כשהמסורת פוגשת מלכות</p>
          <p className="italic">הרגע שבו הלב פועם בקצב הדרבוקה, והנשמה מתעטפת בזהב.</p>
          <p>יש רגעים בחיים שהם מעבר לחגיגה – הם מסע בזמן. ב-"מרקש", אנו מזמינים אתכם להשאיר את המודרניות מאחור ולצעוד לתוך חלום מרוקאי אותנטי, עשיר בצבעים, ניחוחות וצלילים שנשמרים מדור לדור.</p>
          <p className="font-bold text-yellow-500 text-lg pt-2">למה לחגוג איתנו?</p>
          <ul className="list-none space-y-2">
            <li><span className="font-bold">הפרטים הקטנים:</span> טקס חינה הוא לא רק אירוע, הוא סיפור. אנחנו דואגים לכל פרט – מהכפתן של הכלה ועד לעיצוב של האירוע.</li>
            <li><span className="font-bold">אווירה מרגשת:</span> שילוב מדויק בין האותנטיות של פעם לאווירה טובה ומוזיקלית. אנחנו יוצרים עבורכם ועבור האורחים שלכם חוויה שבה כל אחד מרגיש כמו בן מלוכה.</li>
          </ul>
          <p className="bg-yellow-500/10 p-4 rounded-lg border-r-4 border-yellow-500 italic mt-4">
            "במרקש, אנחנו לא רק מפיקים אירוע. אנחנו רוקמים עבורכם את הזיכרון המתוק ביותר שלפני החתונה – כזה שמחבר שורשים, משפחה ואהבה גדולה."
          </p>
          <p className="font-bold pt-4 text-yellow-500">השטיח האדום כבר פרוס, הניחוחות כבר באוויר – ומה איתכם?</p>
          <p>צרו קשר עכשיו והבטיחו לעצמכם חגיגה של פעם בחינה.</p>
          <p className="text-2xl font-black">052-2336877</p>
        </div>
      ),
      whyUs: ["הקפדה על פרטים", "אווירה אותנטית", "שירות VIP"],
      reviewsTitle: "הלקוחות שלנו מספרים",
      reviews: [
        { name: "יוסי א.", text: "אם אתם מחפשים חינה מרוקאית אמיתית – מרקש זה המקום! השירות היה מקצועי, האווירה הייתה שמחה ומרגשת, והכול היה מתוכנן בצורה מושלמת. הרגשנו שאנחנו בתוך חלום מרוקאי אותנטי. בהחלט ממליצים בחום!" },
        { name: "גל מ.", text: "רצינו חינה מיוחדת ושונה – ומרקש לגמרי הגשימו לנו את החלום. העיצוב, הבדים, הצבעים והאווירה יצרו תחושה של חגיגה מלכותית. האורחים לא הפסיקו להחמיא על האווירה וההשקעה. תודה רבה על ערב בלתי נשכח!" },
        { name: "יעל כהן", text: "היה פשוט מושלם! התפאורה הייתה מדהימה והשירות מעל המצופה. הרגשנו כמו מלכים." },
        { name: "אביב לוי", text: "חינה ברמה הכי גבוהה שיש. ממליץ בחום לכל מי שרוצה אירוע מהסרטים בלי דאגות." }
      ],
      labels: {
        fauteuil: "כיסא חינה מפואר", eclairage: "תאורת אווירה",
        tenues: "תלבושות חתן וכלה", musique: "הגברה ומוזיקה",
        gateaux: "מגשי עוגיות", nom: "שם מלא",
        lieu: "מיקום (עיר / אולם)", invites: "מספר מוזמנים", btn: "הזמנה בוואטסאפ"
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
      const offset = 90;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
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
      {/* Background Layers */}
      <div className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105" style={{ backgroundImage: `url(${henneBG})`, backgroundAttachment: 'fixed' }} />
      <div className="fixed inset-0 z-10 bg-gradient-to-b from-emerald-950/70 via-emerald-950/85 to-emerald-950/95 backdrop-blur-[2px]" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-emerald-950/90 backdrop-blur-md border-b border-yellow-500/20 px-4 py-3">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span className="text-2xl font-black text-yellow-500 cursor-pointer tracking-tighter" onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>
            MARRAKECH
          </span>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-6 text-white font-bold mx-4">
              <button onClick={() => scrollTo('services')} className="hover:text-yellow-500 transition-colors">{t.nav.services}</button>
              <button onClick={() => scrollTo('about')} className="hover:text-yellow-500 transition-colors">{t.nav.about}</button>
              <button onClick={() => scrollTo('reviews')} className="hover:text-yellow-500 transition-colors">{t.nav.reviews}</button>
              <button onClick={() => scrollTo('reserve')} className="text-yellow-500 border border-yellow-500/50 px-3 py-1 rounded-lg hover:bg-yellow-500 hover:text-emerald-950 transition-all">{t.nav.reserve}</button>
            </div>

            <button
              onClick={() => setLang(lang === 'fr' ? 'he' : 'fr')}
              className="flex items-center gap-2 bg-yellow-500 text-emerald-950 px-4 py-1.5 rounded-full text-sm font-bold shadow-lg active:scale-95 transition-transform"
            >
              <Languages size={16} /> {lang === 'fr' ? 'עברית' : 'FR'}
            </button>

            <button className="md:hidden text-yellow-500 p-1" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div className={`md:hidden absolute top-full left-0 right-0 bg-emerald-950/95 border-b border-yellow-500/20 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-none opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col p-6 gap-6 text-center text-white font-bold">
            <button onClick={() => scrollTo('services')}>{t.nav.services}</button>
            <button onClick={() => scrollTo('about')}>{t.nav.about}</button>
            <button onClick={() => scrollTo('reviews')}>{t.nav.reviews}</button>
            <button onClick={() => scrollTo('reserve')}>{t.nav.reserve}</button>
            <a href="tel:0522336877" className="text-yellow-500 flex items-center justify-center gap-2 border-t border-white/10 pt-4">
              <Phone size={18} /> 052-2336877
            </a>
          </div>
        </div>
      </nav>

      {/* Main Container */}
      <div className="relative z-20 pt-32 pb-20 p-4 md:p-10 max-w-6xl mx-auto text-white">

        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-8xl font-black text-yellow-500 uppercase tracking-tighter mb-4 drop-shadow-2xl">
            {t.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 italic opacity-90 leading-tight max-w-2xl mx-auto">
            "{t.subtitle}"
          </p>
          <div className="h-1.5 w-32 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mt-8" />
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-32">
          {/* Section: Services */}
          <section id="services" className="space-y-6">
            {/* Modification: Added 'hidden md:flex' class to the heading.
              This keeps it flex on desktop, but hides it on mobile.
            */}
            <h2 className={`text-3xl font-bold text-yellow-500 mb-8 items-center gap-3 ${isRtl ? 'border-r-4 pr-4' : 'border-l-4 pl-4'} border-yellow-500 hidden md:flex`}>
              {t.nav.services}
            </h2>
            <div className="space-y-4">
              {servicesList.map((s) => (
                <div key={s.id} className="rounded-2xl border border-white/10 bg-emerald-900/40 backdrop-blur-md overflow-hidden">
                  <div
                    onClick={() => setOpenAccordion(openAccordion === s.id ? null : s.id)}
                    className={`flex items-center justify-between p-5 cursor-pointer transition-colors ${openAccordion === s.id ? 'bg-yellow-500 text-emerald-950' : 'text-white hover:bg-white/5'}`}
                  >
                    <div className="flex items-center gap-4">
                      <span className={openAccordion === s.id ? 'text-emerald-900' : 'text-yellow-500'}>{s.icon}</span>
                      <span className="font-bold text-lg">{s.label}</span>
                    </div>
                    <ChevronDown size={20} className={`transition-transform duration-300 ${openAccordion === s.id ? 'rotate-180' : ''}`} />
                  </div>
                  {openAccordion === s.id && (
                    <div className="p-4 bg-black/20 animate-in fade-in slide-in-from-top-2 duration-300">
                      <img src={s.media} alt={s.label} className="w-full h-64 object-cover rounded-xl border border-yellow-500/20" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Section: Form */}
          <section id="reserve" className="lg:sticky lg:top-28">
            <div className="bg-emerald-900/60 backdrop-blur-2xl p-8 rounded-3xl border border-white/20 shadow-2xl">
              <h2 className="text-3xl font-bold text-yellow-500 mb-8">{t.logisticsTitle}</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder={t.labels.nom}
                  className="w-full p-4 rounded-xl bg-white text-emerald-950 font-bold outline-none focus:ring-4 ring-yellow-500/50"
                  onChange={e => setFormData({...formData, nom: e.target.value})}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="date" className="p-4 rounded-xl bg-white text-emerald-950 font-bold outline-none" onChange={e => setFormData({...formData, date: e.target.value})} />
                  <input type="number" placeholder={t.labels.invites} className="p-4 rounded-xl bg-white text-emerald-950 font-bold outline-none text-center" onChange={e => setFormData({...formData, invites: e.target.value})} />
                </div>
                <input
                  type="text"
                  placeholder={t.labels.lieu}
                  className="w-full p-4 rounded-xl bg-white text-emerald-950 font-bold outline-none focus:ring-4 ring-yellow-500/50"
                  onChange={e => setFormData({...formData, lieu: e.target.value})}
                />

                <button onClick={handleWhatsApp} className="w-full mt-4 bg-yellow-500 text-emerald-950 font-black text-xl py-5 rounded-2xl flex items-center justify-center gap-3 shadow-xl active:scale-95 transition-transform">
                  <Send size={24} className={isRtl ? 'rotate-180' : ''} /> {t.labels.btn}
                </button>

                <div className="text-center pt-6">
                  <a href="tel:0522336877" className="text-3xl font-bold text-yellow-500 flex items-center justify-center gap-3 hover:scale-105 transition-transform">
                    <Phone size={24} /> 052-2336877
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Section: About (אודות) */}
        <section id="about" className="mb-32 py-16 border-y border-white/10">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className={isRtl ? 'order-1' : 'order-1'}>
              <h2 className="text-4xl font-bold text-yellow-500 mb-6 flex items-center gap-3">
                <Info className="text-yellow-500" /> {t.aboutTitle}
              </h2>
              <div className="text-xl leading-relaxed opacity-90 mb-8">
                {t.aboutText}
              </div>
              <div className="flex flex-wrap gap-4 mt-6">
                {t.whyUs.map((item, i) => (
                  <span key={i} className="px-5 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-500 font-bold">
                    ✓ {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="h-full min-h-[400px] bg-emerald-900/40 rounded-3xl border border-white/10 overflow-hidden relative group">
                <img
                  src={henneBG}
                  alt="Marrakech Henne"
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                   <span className="text-yellow-500 font-black text-2xl tracking-widest opacity-40">MARRAKECH</span>
                </div>
            </div>
          </div>
        </section>

        {/* Section: Reviews (המלצות) */}
        <section id="reviews" className="mb-20">
          <h2 className="text-4xl font-bold text-yellow-500 mb-16 text-center flex items-center justify-center gap-3">
            <MessageSquare className="text-yellow-500" /> {t.reviewsTitle}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {t.reviews.map((rev, i) => (
              <div key={i} className="bg-emerald-900/40 p-10 rounded-3xl border-r-4 border-yellow-500 relative backdrop-blur-sm">
                <Quote className={`absolute top-6 ${isRtl ? 'left-6' : 'right-6'} opacity-10 text-yellow-500`} size={48} />
                <div className="flex text-yellow-500 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                </div>
                <p className="text-xl italic mb-6 leading-relaxed">"{rev.text}"</p>
                <p className="font-bold text-yellow-500 text-xl">— {rev.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery Image Section at the end */}
        <section className="mb-20 flex justify-center">
          <img
            src={galleryImg}
            alt="Marrakech Showcase"
            className="rounded-3xl shadow-2xl border-4 border-yellow-500/50 max-w-full md:max-w-4xl"
          />
        </section>

        <footer className="text-center py-12 border-t border-white/10 opacity-60 text-sm tracking-widest">
          © 2026 MARRAKECH HENNE | CREATING ROYAL TRADITIONS
        </footer>
      </div>
    </div>
  );
};

export default App;