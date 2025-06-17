import React, { useEffect, useRef } from 'react';

const PartnerSlider = () => {
  const partners = [
    { id: 1, logo: '/images/aws_logo_smile_1200x630.png', name: 'AWS' },
    { id: 2, logo: '/images/microsoft-azure-logo.png', name: 'Azure' },
    { id: 3, logo: '/images/social-icon-google-cloud-1200-630.png', name: 'Google Cloud' },
    { id: 4, logo: '/images/shopify-bag.png', name: 'Shopify' },
    { id: 5, logo: '/images/salesforce-logo-png_seeklogo-256541.png', name: 'Salesforce' },
    { id: 6, logo: '/images/Screenshot from 2025-06-16 12-28-47.png', name: 'Partner' },
  ];

  const containerRef = useRef(null);
  const requestRef = useRef();
  const animationSpeed = 1;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const allPartners = [...partners, ...partners];
    
    container.innerHTML = '';
    const sliderTrack = document.createElement('div');
    sliderTrack.className = 'flex items-center';
    
    allPartners.forEach(partner => {
      const logoContainer = document.createElement('div');
      logoContainer.className = 'mx-6 flex-shrink-0';  
      
      const img = document.createElement('img');
      img.src = partner.logo;
      img.alt = partner.name;
      img.className = 'h-14 w-28 object-contain';  
      logoContainer.appendChild(img);
      sliderTrack.appendChild(logoContainer);
    });

    container.appendChild(sliderTrack);

    let position = 0;
    const animate = () => {
      position += animationSpeed;
      
      if (position >= sliderTrack.scrollWidth / 2) {
        position = 0;
      }
      
      sliderTrack.style.transform = `translateX(-${position}px)`;
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return (
    <div className="bg-gray-50 pt-8 pb-10 overflow-hidden">  
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Our Associate Partners</h2>
        
        <div 
          ref={containerRef}
          className="relative h-20 w-full"  
        />
      </div>
    </div>
  );
};

export default PartnerSlider;