import React, { useState } from 'react';
import { Calendar, MapPin, Users, Music, Lightbulb, Shirt, Armchair, Coffee, Send, Languages, Phone } from 'lucide-react';
// Assure-toi que le nom du fichier correspond à celui dans ton dossier assets
import hennePoster from './assets/henne.jpeg';

const App = () => {
  const [lang, setLang] = useState('fr');
  const [formData, setFormData] = useState({
    date: '', lieu: '', invites: 50, services: [], nom: ''
  });

  const content = {
    fr: {
      title: "Un Henné Inoubliable",
      subtitle: "Vous célébrez, et nous nous occupons de toute la magie !",
      servicesTitle: "Nos Services",
      logisticsTitle: "Réserver votre moment",
      labels: {
        fauteuil: "Fauteuil Somptueux",
        eclairage: "Éclairage Ambiance",
        tenues: "Tenues Mariés",
        musique: "Sonorisation & Musique",
        gateaux: "Plateaux de Gâteaux",
        nom: "Votre Nom Complet",
        lieu: "Lieu (Ville / Salle)",
        invites: "Nombre d'invités",
        btn: "RÉSERVER SUR WHATSAPP"
      }
    },
    he: {
      title: "חינה בלתי נשכחת",
      subtitle: "אתם חוגגים, ואנחנו דואגים לכל הקסם!",
      servicesTitle: "השירותים שלנו",
      logisticsTitle: "הזמינו את הרגע שלכם",
      labels: {
        fauteuil: "כיסא חינה מפואר",
        eclairage: "תאורת אווירה",
        tenues: "תלבושות חתן וכלה",
        musique: "הגברה ומוזיקה",
        gateaux: "מגשי עוגיות",
        nom: "שם מלא",
        lieu: "מיקום (עיר / אולם)",
        invites: "מספר מוזמנים",
        btn: "הזמנה בוואטסאפ"
      }
    }
  };

  const t = content[lang];
  const isRtl = lang === 'he';

  const servicesList = [
    { id: 'Fauteuil', label: t.labels.fauteuil, icon: <Armchair size={20} /> },
    { id: 'Eclairage', label: t.labels.eclairage, icon: <Lightbulb size={20} /> },
    { id: 'Tenues', label: t.labels.tenues, icon: <Shirt size={20} /> },
    { id: 'Musique', label: t.labels.musique, icon: <Music size={20} /> },
    { id: 'Gateaux', label: t.labels.gateaux, icon: <Coffee size={20} /> },
  ];

  const toggleService = (id) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(id) ? prev.services.filter(s => s !== id) : [...prev.services, id]
    }));
  };

  const handleWhatsApp = () => {
    const message = `*${t.title}*\n\n👤 *${t.labels.nom}:* ${formData.nom}\n📅 *Date:* ${formData.date}\n📍 *Lieu:* ${formData.lieu}\n👥 *Invités:* ${formData.invites}\n✨ *Services:* ${formData.services.join(', ')}`;
    window.open(`https://wa.me/972522336877?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div
      className={`min-h-screen font-serif relative ${isRtl ? 'rtl text-right' : 'ltr text-left'}`}
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      {/* BACKGROUND IMAGE LAYER */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage: `url(${hennePoster})`,
          backgroundAttachment: 'fixed'
        }}
      />

      {/* OVERLAY LAYER (Voile sombre pour lisibilité) */}
      <div className="fixed inset-0 z-10 bg-gradient-to-b from-emerald-950/40 via-emerald-950/70 to-emerald-950/90 backdrop-blur-[1px]" />

      {/* CONTENT LAYER */}
      <div className="relative z-20 p-4 md:p-10 lg:p-16 max-w-6xl mx-auto">

        {/* Language Switcher */}
        <div className="flex justify-end mb-8">
          <button
            onClick={() => setLang(lang === 'fr' ? 'he' : 'fr')}
            className="flex items-center gap-2 bg-yellow-600/30 border border-yellow-500 px-5 py-2 rounded-full hover:bg-yellow-500 hover:text-emerald-950 transition-all font-bold shadow-xl"
          >
            <Languages size={20} />
            {lang === 'fr' ? 'עברית' : 'Français'}
          </button>
        </div>

        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black text-[#fbbf24] uppercase tracking-tighter mb-4 drop-shadow-2xl">
            {t.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 font-light italic max-w-2xl mx-auto leading-relaxed">
            "{t.subtitle}"
          </p>
          <div className="h-1.5 w-48 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mt-6" />
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Section Services */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-[#fbbf24] mb-8 flex items-center gap-3">
              {t.servicesTitle}
            </h2>
            <div className="grid grid-cols-1 gap-3">
              {servicesList.map((s) => (
                <div
                  key={s.id}
                  onClick={() => toggleService(s.id)}
                  className={`flex items-center justify-between p-5 rounded-2xl border-2 transition-all duration-300 group ${
                    formData.services.includes(s.id)
                    ? 'bg-yellow-500 border-white text-emerald-950 scale-[1.02] shadow-2xl shadow-yellow-500/20'
                    : 'bg-white/10 border-white/20 hover:border-yellow-500/50 hover:bg-white/20'
                  }`}
                >
                  <div className="flex items-center gap-5">
                    <div className={formData.services.includes(s.id) ? 'text-emerald-900' : 'text-yellow-500'}>
                      {s.icon}
                    </div>
                    <span className="font-bold text-lg">{s.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section Formulaire */}
          <section className="bg-emerald-900/40 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-2xl">
            <h2 className="text-3xl font-bold text-[#fbbf24] mb-8">{t.logisticsTitle}</h2>
            <div className="space-y-5">
              <input
                type="text"
                placeholder={t.labels.nom}
                className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:bg-white/20 focus:border-yellow-500 outline-none transition-all"
                onChange={e => setFormData({...formData, nom: e.target.value})}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="date" className="p-4 rounded-xl bg-white/10 border border-white/20 text-white outline-none focus:border-yellow-500" onChange={e => setFormData({...formData, date: e.target.value})} />
                <input type="number" placeholder={t.labels.invites} className="p-4 rounded-xl bg-white/10 border border-white/20 text-white outline-none focus:border-yellow-500" onChange={e => setFormData({...formData, invites: e.target.value})} />
              </div>
              <input type="text" placeholder={t.labels.lieu} className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white outline-none focus:border-yellow-500" onChange={e => setFormData({...formData, lieu: e.target.value})} />

              <button
                onClick={handleWhatsApp}
                className="w-full mt-4 bg-[#fbbf24] text-emerald-950 font-black text-xl py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-yellow-400 shadow-xl transition-transform active:scale-95"
              >
                <Send size={24} className={isRtl ? 'rotate-180' : ''} /> {t.labels.btn}
              </button>

              <div className="text-center pt-6">
                <p className="text-gray-400 mb-2">Contact direct :</p>
                <a href="tel:0522336877" className="text-2xl font-bold text-yellow-500 flex items-center justify-center gap-2">
                  <Phone size={20} /> 052-2336877
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default App;