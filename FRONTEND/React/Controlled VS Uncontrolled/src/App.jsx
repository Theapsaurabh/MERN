// import CounterChallenge from "./UseStateChallenge/CounterChallenge"


// function App() {
  

//   return (
//     <>
//       <CounterChallenge/>
//     </>
//   )
// }

// export default App
import React, { useState, useEffect } from 'react';
import { ChevronRight, Calendar, Users, Star, MapPin, Clock, Phone, Mail, Menu, X, User } from 'lucide-react';

// Mock data for demonstration
const mockDoctors = [
  { _id: '1', name: 'Dr. Sarah Johnson', speciality: 'Cardiologist', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=300&fit=crop&crop=face', available: true, rating: 4.8, experience: '15 years' },
  { _id: '2', name: 'Dr. Michael Chen', speciality: 'Dermatologist', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=300&fit=crop&crop=face', available: true, rating: 4.9, experience: '12 years' },
  { _id: '3', name: 'Dr. Emily Davis', speciality: 'Pediatrician', image: 'https://images.unsplash.com/photo-1594824804732-ca8db89acb17?w=400&h=300&fit=crop&crop=face', available: false, rating: 4.7, experience: '10 years' },
  { _id: '4', name: 'Dr. James Wilson', speciality: 'Orthopedic', image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop&crop=face', available: true, rating: 4.6, experience: '18 years' }
];

const specialityData = [
  { speciality: 'General Physician', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=100&h=100&fit=crop' },
  { speciality: 'Gynecologist', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=100&h=100&fit=crop' },
  { speciality: 'Dermatologist', image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=100&h=100&fit=crop' },
  { speciality: 'Pediatricians', image: 'https://images.unsplash.com/photo-1594824804732-ca8db89acb17?w=100&h=100&fit=crop' },
  { speciality: 'Neurologist', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop' },
  { speciality: 'Gastroenterologist', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop' }
];

// Enhanced Header Component
const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 rounded-2xl mx-4 md:mx-10 my-8 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 -left-20 w-60 h-60 bg-white/5 rounded-full animate-bounce" style={{animationDuration: '3s'}}></div>
        <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-white/10 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className='flex flex-col md:flex-row items-center p-6 md:p-12 relative z-10'>
        {/* Left Side */}
        <div className='md:w-1/2 flex flex-col items-start justify-center gap-6 text-center md:text-left'>
          <h1 className={`text-3xl md:text-5xl lg:text-6xl text-white font-bold leading-tight transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            Book Appointment
            <br />
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              With Trusted Doctors
            </span>
          </h1>
          
          <div className={`flex flex-col md:flex-row items-center gap-4 text-white/90 transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="flex -space-x-2">
              {[1,2,3,4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full bg-white/20 border-2 border-white/30 flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
              ))}
            </div>
            <div>
              <p className="font-medium">Join 50,000+ satisfied patients</p>
              <p className="text-sm text-white/80">
                Simply browse through our extensive list of trusted doctors,
                <br className='hidden sm:block' />
                schedule your appointment hassle-free.
              </p>
            </div>
          </div>
          
          <button className={`group flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`} style={{transitionDelay: '700ms'}}>
            <Calendar className="w-5 h-5" />
            Book Appointment
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
        
        {/* Right Side */}
        <div className={`md:w-1/2 mt-8 md:mt-0 transition-all duration-1000 delay-900 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur-xl opacity-50 animate-pulse"></div>
            <img 
              className='relative w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500' 
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop" 
              alt="Doctor consultation" 
            />
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Available 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Enhanced Speciality Menu Component
const SpecialityMenu = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="flex flex-col items-center gap-8 py-16 px-4">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Find by Speciality</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover specialized healthcare professionals tailored to your specific needs
        </p>
      </div>
      
      <div className="flex gap-6 overflow-x-auto pb-4 w-full justify-center">
        {specialityData.map((item, index) => (
          <div
            key={index}
            className={`group flex flex-col items-center cursor-pointer flex-shrink-0 p-4 rounded-xl transition-all duration-500 transform ${
              hoveredIndex === index ? 'scale-110 -translate-y-2' : 'hover:scale-105 hover:-translate-y-1'
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="relative mb-3">
              <div className={`absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300 ${
                hoveredIndex === index ? 'scale-110 opacity-20' : 'scale-100 opacity-0'
              }`}></div>
              <img 
                className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg relative z-10" 
                src={item.image} 
                alt={item.speciality} 
              />
              <div className={`absolute -top-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center transition-all duration-300 ${
                hoveredIndex === index ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
              }`}>
                <ChevronRight className="w-3 h-3 text-white" />
              </div>
            </div>
            <p className="text-sm font-medium text-gray-700 text-center group-hover:text-blue-600 transition-colors">
              {item.speciality}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Enhanced Top Doctors Component
const TopDoctors = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className='flex flex-col items-center gap-8 py-16 px-4 md:px-10'>
      <div className="text-center">
        <h2 className='text-4xl font-bold text-gray-800 mb-4'>Top Doctors to Book</h2>
        <p className='text-gray-600 max-w-2xl mx-auto'>
          Meet our highly qualified medical professionals ready to provide you with exceptional care
        </p>
      </div>
      
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {mockDoctors.map((doctor, index) => (
          <div
            key={doctor._id}
            className={`group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden cursor-pointer transition-all duration-500 transform ${
              hoveredCard === index ? 'scale-105 shadow-2xl -translate-y-2' : 'hover:scale-102 hover:shadow-xl'
            }`}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="relative overflow-hidden">
              <img 
                className='w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110' 
                src={doctor.image} 
                alt={doctor.name}
              />
              <div className={`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent transition-opacity duration-300 ${
                hoveredCard === index ? 'opacity-100' : 'opacity-0'
              }`}></div>
              
              {/* Status Badge */}
              <div className={`absolute top-3 left-3 flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                doctor.available 
                  ? 'bg-green-500 text-white' 
                  : 'bg-red-500 text-white'
              }`}>
                <div className={`w-2 h-2 rounded-full ${
                  doctor.available ? 'bg-white animate-pulse' : 'bg-white'
                }`}></div>
                {doctor.available ? 'Available' : 'Busy'}
              </div>

              {/* Rating Badge */}
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                <span className="text-xs font-medium">{doctor.rating}</span>
              </div>
            </div>
            
            <div className='p-6'>
              <h3 className='text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors'>
                {doctor.name}
              </h3>
              <p className='text-blue-600 font-medium mb-2'>{doctor.speciality}</p>
              <p className='text-gray-500 text-sm mb-4'>{doctor.experience} experience</p>
              
              <button className={`w-full py-3 rounded-xl font-medium transition-all duration-300 ${
                doctor.available
                  ? 'bg-blue-500 text-white hover:bg-blue-600 transform hover:scale-105'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}>
                {doctor.available ? 'Book Appointment' : 'Currently Unavailable'}
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <button className='group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-12 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2'>
        View All Doctors
        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
      </button>
    </div>
  );
};

// Enhanced Banner Component
// const Banner = () => {
//   return (
//     <div className='relative overflow-hidden bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-600 rounded-2xl mx-4 md:mx-10 my-16'>
//       {/* Animated Background */}
//       <div className="absolute inset-0">
//         <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
//       </div>
      
//       <div className='flex flex-col md:flex-row items-center p-8 md:p-12 relative z-10'>
//         {/* Left Side */}
//         <div className='flex-1 text-center md:text-left mb-8 md:mb-0'>
//           <h2 className='text-3xl md:text-5xl font-bold text-white mb-6 leading-tight'>
//             Book Appointment
//             <br />
//             <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
//               With 100+ Trusted Doctors
//             </span>
//           </h2>
          
//           <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
//             <div className="flex items-center gap-2 text-white/90">
//               <Users className="w-5 h-5" />
//               <span>50,000+ Happy Patients</span>
//             </div>
//             <div className="flex items-center gap-2 text-white/90">
//               <Clock className="w-5 h-5" />
//               <span>24/7 Available</span>
//             </div>
//           </div>
          
//           <button className='group bg-white text-blue-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto md:mx-0'>
//             <Calendar className="w-5 h-5" />
//             Create Account
//             <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
//           </button>
//         </div>
        
//         {/* Right Side */}
//         <div className='hidden md:block md:w-1/2 lg:w-[400px] relative'>
//           <div className="relative">
//             <img 
//               className='w-full max-w-md ml-auto transform hover:scale-105 transition-transform duration-500' 
//               src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=500&fit=crop" 
//               alt="Medical appointment" 
//             />
//             <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl p-3">
//               <div className="flex items-center gap-2 text-green-600 font-medium">
//                 <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
//                 Available Now
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// Enhanced Footer Component
const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white mt-20'>
      <div className='container mx-auto px-4 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Company Info */}
          <div className='space-y-4'>
            <h3 className='text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
              Prescripto
            </h3>
            <p className='text-gray-400 leading-relaxed'>
              Your trusted healthcare partner, connecting you with the best medical professionals for comprehensive care.
            </p>
            <div className='flex space-x-4'>
              {/* Social media icons would go here */}
            </div>
          </div>
          
          {/* Quick Links */}
          <div className='space-y-4'>
            <h4 className='text-lg font-semibold'>Quick Links</h4>
            <ul className='space-y-2'>
              {['Home', 'About Us', 'Services', 'Doctors', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className='text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group'>
                    <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div className='space-y-4'>
            <h4 className='text-lg font-semibold'>Services</h4>
            <ul className='space-y-2'>
              {['Online Consultation', 'Emergency Care', 'Lab Tests', 'Health Packages', 'Telemedicine'].map((service) => (
                <li key={service}>
                  <a href="#" className='text-gray-400 hover:text-white transition-colors duration-300'>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className='space-y-4'>
            <h4 className='text-lg font-semibold'>Get In Touch</h4>
            <div className='space-y-3'>
              <div className='flex items-center gap-3 text-gray-400'>
                <Phone className="w-4 h-4" />
                <span>+91 7355018077</span>
              </div>
              <div className='flex items-center gap-3 text-gray-400'>
                <Mail className="w-4 h-4" />
                <span>ampsaurabh@gmail.com</span>
              </div>
              <div className='flex items-center gap-3 text-gray-400'>
                <MapPin className="w-4 h-4" />
                <span>Greater Noida, UP, India</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className='border-t border-gray-800 mt-12 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <p className='text-gray-400 text-sm'>
              Copyright 2024 © Prescripto - All Rights Reserved.
            </p>
            <div className='flex space-x-6 mt-4 md:mt-0'>
              <a href="#" className='text-gray-400 hover:text-white text-sm transition-colors'>Privacy Policy</a>
              <a href="#" className='text-gray-400 hover:text-white text-sm transition-colors'>Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
const HealthcareApp =() => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <SpecialityMenu />
      <TopDoctors />
      {/* <Banner /> */}
      <Footer />
    </div>
  );
};

export default HealthcareApp;