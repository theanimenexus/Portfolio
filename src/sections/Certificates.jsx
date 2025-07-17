import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Remove categories, selectedCategory, handleCategoryClick, and filteredCertificates logic

  const certificates = [
    {
      id: 1,
      title: "Harvard Certificate",
      issuer: "Harvard University",
      date: "2024",
      image: "assets/cert/harvard.png",
      description: "Leadership: Inspiring vision, guiding with integrity, and empowering others to achieve shared goals.",
      category: "Language"
    },
    {
      id: 2,
      title: "Full Stack Developer",
      issuer: "Professional Certification",
      date: "2024",
      image: "assets/cert/full_stack_developer.png",
      description: "Comprehensive full-stack development covering frontend, backend, and database technologies",
      category: "Full Stack"
    },
    {
      id: 3,
      title: "Blockchain Development",
      issuer: "DEC",
      date: "2024",
      image: "assets/cert/blockchain_DEC.png",
      description: "Blockchain technology fundamentals, smart contracts, and decentralized applications",
      category: "Blockchain"
    },
    {
      id: 4,
      title: "Computer Science Fundamentals",
      issuer: "Stanford University",
      date: "2024",
      image: "assets/cert/CS101_stanford.png",
      description: "Core computer science concepts, algorithms, and data structures",
      category: "Computer Science"
    },
    {
      id: 5,
      title: "AWS Data Lakes",
      issuer: "Amazon Web Services",
      date: "2024",
      image: "assets/cert/Datalakes_Aws.png",
      description: "Building and managing data lakes on AWS for big data analytics",
      category: "Cloud"
    },
    {
      id: 6,
      title: "AWS DevOps",
      issuer: "Amazon Web Services",
      date: "2024",
      image: "assets/cert/devops_AWS.png",
      description: "DevOps practices and tools for continuous integration and deployment on AWS",
      category: "DevOps"
    },
    {
      id: 7,
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2024",
      image: "assets/cert/AWS.png",
      description: "AWS cloud computing fundamentals and core services",
      category: "Cloud"
    },
    {
      id: 8,
      title: "Upper Intermediate English",
      issuer: "Language Institute",
      date: "2024",
      image: "assets/cert/upper_english.png",
      description: "Advanced English language proficiency and communication skills",
      category: "Language"
    },
    {
      id: 9,
      title: "Java Programming",
      issuer: "UC3M",
      date: "2024",
      image: "assets/cert/java_uc3m.png",
      description: "Object-oriented programming with Java, data structures, and algorithms",
      category: "Programming"
    },
    {
      id: 10,
      title: "Cloud Infrastructure with Linux",
      issuer: "Linux Foundation",
      date: "2024",
      image: "assets/cert/Cloud infrastructure_linux.png",
      description: "Linux system administration and cloud infrastructure management",
      category: "DevOps"
    },
    {
      id: 11,
      title: "JavaScript Fundamentals",
      issuer: "Google",
      date: "2024",
      image: "assets/cert/javascript_google.png",
      description: "JavaScript programming fundamentals, ES6+, and modern web development",
      category: "Programming"
    }
  ];

  // Get unique categories (excluding 'All')
  const categories = Array.from(new Set(certificates.map(cert => cert.category)));
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  // Filter certificates based on selected category
  const filteredCertificates = certificates.filter(cert => cert.category === selectedCategory);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleViewCertificate = (certificate) => {
    setSelectedCertificate(certificate);
    setIsModalOpen(true);
  };

  const handleDownloadCertificate = (certificate) => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = certificate.image;
    link.download = `${certificate.title}_${certificate.issuer}.pdf`;
    link.target = '_blank';
    
    // For images, we'll download as image first, then convert to PDF if needed
    if (certificate.image.endsWith('.png') || certificate.image.endsWith('.jpg') || certificate.image.endsWith('.jpeg')) {
      // Download as image
      link.download = `${certificate.title}_${certificate.issuer}.png`;
    }
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCertificate(null);
  };

  // Remove categories, selectedCategory, handleCategoryClick, and filteredCertificates logic

  return (
    <section id="certificates" className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Certificates & Achievements
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Professional certifications and achievements that validate my skills and expertise
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 border ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white border-blue-500'
                  : 'bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700 hover:border-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCertificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              {/* Certificate Image */}
              <div className="relative overflow-hidden">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 text-xs font-medium bg-blue-600 text-white rounded-full">
                    {certificate.category}
                  </span>
                </div>
              </div>

              {/* Certificate Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {certificate.title}
                </h3>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-gray-400 text-sm font-medium">
                    {certificate.issuer}
                  </span>
                  <span className="text-gray-500 text-sm">
                    {certificate.date}
                  </span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {certificate.description}
                </p>
                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button 
                    onClick={() => handleViewCertificate(certificate)}
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    View Certificate
                  </button>
                  <button 
                    onClick={() => handleDownloadCertificate(certificate)}
                    className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:border-blue-500 hover:text-blue-400 transition-colors"
                    title="Download Certificate"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredCertificates.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-400 text-lg">No certificates found in this category.</p>
          </motion.div>
        )}

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">{certificates.length}</div>
            <div className="text-gray-400">Total Certificates</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">9</div>
            <div className="text-gray-400">Different Categories</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">2023-2024</div>
            <div className="text-gray-400">Certification Period</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">100%</div>
            <div className="text-gray-400">Completion Rate</div>
          </div>
        </motion.div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {isModalOpen && selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl max-h-[90vh] bg-gray-900 rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-700">
                <div>
                  <h3 className="text-2xl font-bold text-white">{selectedCertificate.title}</h3>
                  <p className="text-gray-400">{selectedCertificate.issuer} • {selectedCertificate.date}</p>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Certificate Image */}
              <div className="p-6">
                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                  className="w-full h-auto max-h-[60vh] object-contain rounded-lg"
                />
              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-between p-6 border-t border-gray-700">
                <p className="text-gray-300 text-sm">{selectedCertificate.description}</p>
                <div className="flex gap-3">
                  <button
                    onClick={() => handleDownloadCertificate(selectedCertificate)}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Download
                  </button>
                  <button
                    onClick={closeModal}
                    className="px-6 py-2 border border-gray-600 text-gray-300 rounded-lg hover:border-blue-500 hover:text-blue-400 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates; 