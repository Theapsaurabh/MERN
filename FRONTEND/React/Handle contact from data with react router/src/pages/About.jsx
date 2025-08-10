import React, { useState, useEffect } from "react";
import { Star, Film, Users, Award, Play, ChevronDown } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      title: "Massive Movie Library",
      desc: "Access thousands of titles with details, ratings, and trailers from every genre imaginable.",
      img: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=800&q=80",
      icon: <Film className="w-8 h-8" />,
      stats: "50K+ Movies"
    },
    {
      title: "Latest Releases",
      desc: "Stay ahead with updates on new blockbusters and hidden gems before they hit mainstream.",
      img: "https://images.unsplash.com/photo-1598899134739-24c46f58b8f3?auto=format&fit=crop&w=800&q=80",
      icon: <Star className="w-8 h-8" />,
      stats: "Weekly Updates"
    },
    {
      title: "Personalized Picks",
      desc: "AI-powered recommendations that learn your taste and suggest movies you'll absolutely love.",
      img: "https://images.unsplash.com/photo-1587691592099-24045742c181?auto=format&fit=crop&w=800&q=80",
      icon: <Users className="w-8 h-8" />,
      stats: "98% Match Rate"
    },
  ];

  const stats = [
    { label: "Movies", value: "50K+", icon: <Film className="w-6 h-6" /> },
    { label: "Users", value: "2M+", icon: <Users className="w-6 h-6" /> },
    { label: "Reviews", value: "10M+", icon: <Star className="w-6 h-6" /> },
    { label: "Awards", value: "25+", icon: <Award className="w-6 h-6" /> },
  ];

  return (
    <section className="bg-black text-white overflow-hidden">
      {/* Hero Section with Parallax */}
      <div className="relative w-full h-screen flex items-center justify-center">
        {/* Background with Parallax */}
        <div 
          className="absolute inset-0"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <img
            src="https://images.unsplash.com/photo-1608889175123-8bcb059b3fda?auto=format&fit=crop&w=1950&q=80"
            alt="Cinema Background"
            className="w-full h-[120%] object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-ping"></div>
          <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-amber-400 rounded-full animate-bounce"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-5xl md:text-8xl font-black mb-6 bg-gradient-to-r from-white via-amber-200 to-amber-500 bg-clip-text text-transparent">
              CineVerse
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover, explore, and immerse yourself in the infinite universe of cinema
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-black font-bold rounded-full shadow-lg hover:shadow-amber-500/25 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Start Exploring
              </button>
              <button className="px-8 py-4 border-2 border-amber-500 text-amber-500 font-semibold rounded-full hover:bg-amber-500 hover:text-black transition-all duration-300">
                Watch Trailer
              </button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-amber-500" />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative py-16 bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-amber-500 mb-2 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Mission</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            We believe cinema is a universal language that transcends boundaries. Our mission is to create 
            the ultimate destination where movie enthusiasts can discover, discuss, and celebrate the art of filmmaking.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Why Choose <span className="text-amber-500">CineVerse?</span>
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group cursor-pointer transition-all duration-500 ${
                  activeFeature === index ? 'scale-105' : 'hover:scale-102'
                }`}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl border border-gray-800 hover:border-amber-500/50 transition-all duration-300">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={feature.img}
                      alt={feature.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                    
                    {/* Stats Badge */}
                    <div className="absolute top-4 right-4 bg-amber-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                      {feature.stats}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-amber-500 group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                      {feature.desc}
                    </p>
                    
                    {/* Learn More Button */}
                    <button className="mt-6 text-amber-500 font-semibold hover:text-amber-400 transition-colors flex items-center gap-2 group/btn">
                      Learn More
                      <ChevronDown className="w-4 h-4 rotate-[-90deg] group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-red-500/10">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Dive Into the CineVerse?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join millions of movie lovers and start your cinematic journey today.
          </p>
          <button className="group px-10 py-5 bg-gradient-to-r from-amber-500 to-orange-500 text-black font-bold rounded-full text-lg shadow-2xl hover:shadow-amber-500/30 transition-all duration-300 hover:scale-105">
            <span className="flex items-center gap-3">
              Get Started Now
              <div className="w-6 h-6 bg-black/20 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                →
              </div>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;