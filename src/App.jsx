import React, { useState, useEffect } from 'react';
import { ChevronDown, Brain, Database, Server, Code, Shield, Rocket, Users, Award, Lightbulb, Menu, X } from 'lucide-react';
import './App.css';

// Import des assets
import logoCosmosV1 from './assets/logo_cosmos_v1.png';
import innovationImage from './assets/UmIAx4FQYJ1K.jpg';
import teamworkImage from './assets/OXD1uwJd3bam.jpg';
import techImage from './assets/wqsaz200G72V.jpg';
import collaborationImage from './assets/PXXyLqslfy5O.jpg';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Gestion du scroll pour la navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'mission', 'values', 'services', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Composant Stars pour l'arrière-plan
  const Stars = () => {
    const stars = Array.from({ length: 100 }, (_, i) => (
      <div
        key={i}
        className="absolute bg-white rounded-full star"
        style={{
          width: `${Math.random() * 3 + 1}px`,
          height: `${Math.random() * 3 + 1}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
        }}
      />
    ));
    return <div className="absolute inset-0 overflow-hidden opacity-30">{stars}</div>;
  };

  // Navigation
  const Navigation = () => (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src={logoCosmosV1} alt="Cosmos Logo" className="h-10 w-10" />
            <span className="text-2xl font-bold cosmos-text-gradient">COSMOS</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {[
              { id: 'home', label: 'Accueil' },
              { id: 'mission', label: 'Mission' },
              { id: 'values', label: 'Valeurs' },
              { id: 'services', label: 'Services' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`transition-colors hover:text-primary ${
                  activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 mt-4">
              {[
                { id: 'home', label: 'Accueil' },
                { id: 'mission', label: 'Mission' },
                { id: 'values', label: 'Valeurs' },
                { id: 'services', label: 'Services' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );

  // Section Hero
  const HeroSection = () => (
    <section id="home" className="relative min-h-screen flex items-center justify-center cosmos-gradient">
      <Stars />
      <div className="container mx-auto px-6 text-center z-10">
        <div className="float-animation">
          <img src={logoCosmosV1} alt="Cosmos Logo" className="h-32 w-32 mx-auto mb-8 pulse-glow" />
        </div>
        <h1 className="text-6xl md:text-8xl font-bold mb-6 cosmos-text-gradient">
          COSMOS
        </h1>
        <p className="text-2xl md:text-3xl mb-8 text-primary">
          Propulsez votre entreprise vers l'excellence numérique
        </p>
        <p className="text-xl mb-12 text-muted-foreground max-w-2xl mx-auto">
          IA • Gestion des Données • Serveurs • Applications
        </p>
        <button className="cosmos-button px-8 py-4 rounded-lg text-lg font-semibold text-white">
          Découvrir nos services
        </button>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-primary" />
        </div>
      </div>
    </section>
  );

  // Section Mission & Vision
  const MissionSection = () => (
    <section id="mission" className="py-20 cosmos-gradient">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8 cosmos-text-gradient">Mission & Vision</h2>
            
            <div className="cosmos-card p-6 mb-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Notre Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                Propulser les entreprises vers <span className="text-secondary font-semibold">l'excellence opérationnelle</span> et 
                <span className="text-secondary font-semibold"> l'innovation continue</span> grâce à des solutions d'IA, 
                de gestion de données, d'infrastructure serveur et de développement d'applications sur mesure.
              </p>
            </div>
            
            <div className="cosmos-card p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Notre Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                Devenir le <span className="text-secondary font-semibold">partenaire technologique de référence</span> pour 
                les entreprises cherchant à maîtriser la complexité du monde numérique, en rendant l'IA et la gestion 
                intelligente des données accessibles à tous.
              </p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <img 
              src={innovationImage} 
              alt="Innovation technologique" 
              className="rounded-lg shadow-2xl max-w-full h-auto cosmos-glow"
            />
          </div>
        </div>
      </div>
    </section>
  );

  // Section Valeurs
  const ValuesSection = () => (
    <section id="values" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 cosmos-text-gradient">Nos Valeurs</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {[
            { icon: Lightbulb, title: 'Innovation', description: 'Culture d\'exploration et d\'expérimentation, recherche constante de nouvelles approches.' },
            { icon: Award, title: 'Excellence', description: 'Engagement à fournir des services de la plus haute qualité avec une expertise approfondie.' },
            { icon: Shield, title: 'Intégrité', description: 'Actions menées avec honnêteté, transparence et éthique pour des relations durables.' },
            { icon: Users, title: 'Collaboration', description: 'Puissance du travail d\'équipe pour co-créer des solutions adaptées aux besoins.' },
            { icon: Rocket, title: 'Adaptabilité', description: 'Agilité et réactivité face aux évolutions technologiques et aux tendances du marché.' }
          ].map((value, index) => (
            <div key={index} className="cosmos-card p-6 rounded-lg hover:scale-105 transition-transform duration-300">
              <value.icon size={48} className="text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-primary">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center">
          <img 
            src={teamworkImage} 
            alt="Collaboration d'équipe" 
            className="rounded-lg shadow-2xl max-w-2xl w-full cosmos-glow"
          />
        </div>
      </div>
    </section>
  );

  // Section Services
  const ServicesSection = () => (
    <section id="services" className="py-20 cosmos-gradient">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 cosmos-text-gradient">Nos Services</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Brain,
              title: 'Intelligence Artificielle',
              services: ['Machine Learning & Deep Learning', 'Traitement du Langage Naturel', 'Vision par Ordinateur', 'Stratégie et Conseil en IA']
            },
            {
              icon: Database,
              title: 'Gestion des Données',
              services: ['Data Lakes & Data Warehouses', 'Pipelines de Données (ETL/ELT)', 'Qualité et Gouvernance', 'Analyse et Visualisation']
            },
            {
              icon: Server,
              title: 'Serveurs & Infrastructure',
              services: ['Cloud Computing', 'Administration Système', 'Virtualisation & Conteneurisation', 'Sécurité des Infrastructures']
            },
            {
              icon: Code,
              title: 'Développement d\'Applications',
              services: ['Applications Web (Front/Back-end)', 'Applications Mobiles', 'Applications Métier', 'Intégration d\'Applications']
            },
            {
              icon: Shield,
              title: 'Support & Maintenance',
              services: ['Support Technique 24/7', 'Maintenance Préventive', 'Surveillance Continue', 'Optimisation Performance']
            }
          ].map((service, index) => (
            <div key={index} className="cosmos-card p-6 rounded-lg hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-primary to-secondary mr-4">
                  <service.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary">{service.title}</h3>
              </div>
              <ul className="space-y-2">
                {service.services.map((item, idx) => (
                  <li key={idx} className="text-muted-foreground text-sm flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <img 
            src={techImage} 
            alt="Technologies avancées" 
            className="rounded-lg shadow-2xl max-w-3xl w-full cosmos-glow"
          />
        </div>
      </div>
    </section>
  );

  // Section Contact
  const ContactSection = () => (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8 cosmos-text-gradient">Contactez-nous</h2>
            <p className="text-xl mb-8 text-muted-foreground">
              Prêt à propulser votre entreprise vers l'excellence numérique ? 
              Contactez nos experts pour discuter de vos projets.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">@</span>
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-muted-foreground">contact@cosmos-tech.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">📞</span>
                </div>
                <div>
                  <p className="font-semibold">Téléphone</p>
                  <p className="text-muted-foreground">+33 (0)1 23 45 67 89</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4">
                  <span className="text-background font-bold">🌐</span>
                </div>
                <div>
                  <p className="font-semibold">Site Web</p>
                  <p className="text-muted-foreground">www.cosmos-tech.com</p>
                </div>
              </div>
            </div>
            
            <button className="cosmos-button px-8 py-4 rounded-lg text-lg font-semibold text-white mt-8">
              Demander un devis
            </button>
          </div>
          
          <div className="flex justify-center">
            <img 
              src={collaborationImage} 
              alt="Collaboration technologique" 
              className="rounded-lg shadow-2xl max-w-full h-auto cosmos-glow"
            />
          </div>
        </div>
      </div>
    </section>
  );

  // Footer
  const Footer = () => (
    <footer className="py-12 cosmos-gradient border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <img src={logoCosmosV1} alt="Cosmos Logo" className="h-8 w-8" />
            <span className="text-xl font-bold cosmos-text-gradient">COSMOS</span>
          </div>
          <p className="text-muted-foreground text-center md:text-right">
            © 2025 Cosmos. Tous droits réservés. | Excellence numérique et innovation technologique.
          </p>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <MissionSection />
      <ValuesSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;

