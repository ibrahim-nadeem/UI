 

// <<<<<<< HEAD

// import React from 'react';
// import { motion } from 'framer-motion';

// const DATA_SERVICES = [
//   {
//     title: 'Data Management & Governance​',
//     description: 'Ensure data reliability, security, and regulatory compliance through structured governance frameworks, metadata cataloging, and lifecycle management strategies.​',
//     features: [
//       'Metadata cataloging',
//       'Access controls',
//       'Audit trails'
//     ],
//     icon: (
//       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//       </svg>
//     )
//   },
//   {
//     title: 'Data Migration​',
//     description: 'Seamlessly migrate data across legacy systems, cloud platforms, and hybrid environments with minimal downtime and uncompromised data integrity.​',
//     features: [
//       'Real-time synchronization',
//       'Cloud-native solutions',
//       'Error handling'
//     ],
//     icon: (
//       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//       </svg>
//     )
//   },
//   {
//     title: 'Unified Analytics with Databricks​',
//     description: 'Design and implement scalable data solutions using the Databricks Lakehouse Platform, combining data engineering, real-time analytics, and machine learning on a unified architecture.​',
//     features: [
//       'Interactive dashboards',
//       'KPI tracking',
//       'Custom reporting'
//     ],
//     icon: (
//       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
//       </svg>
//     )
//   }
// ];

// const SERVICE_GROUPS = [
//   {
//     title: 'Modernizing Legacy Ecosystems',
//     services: [
//       {
//         title: 'End-to-End System Migration',
//         description: 'Transition critical systems to modern platforms through structured migration paths, validation frameworks, and disruption-free execution.',
//         features: [
//           'Legacy system assessment',
//           'Phased migration approach',
//           'Zero-downtime transition'
//         ],
//         icon: (
//           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
// =======
// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
 
// const DATA_SERVICES = [
//   {
//     title: 'Data Management & Governance',
//     description: 'End-to-end solutions ensuring data integrity, security, and compliance across your enterprise architecture.',
//     features: [
//       'Enterprise metadata cataloging',
//       'Granular access controls',
//       'Comprehensive audit trails',
//       'Data quality monitoring',
//       'Regulatory compliance'
//     ],
//     icon: (
//       <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//       </svg>
//     ),
//     animationType: 'spin'
//   },
//   {
//     title: 'Data Migration',
//     description: 'Seamless transition of data assets between systems with zero downtime and complete integrity preservation.',
//     features: [
//       'Automated schema conversion',
//       'Real-time synchronization',
//       'Comprehensive validation',
//       'Rollback capabilities',
//       'Performance optimization'
//     ],
//     icon: (
//       <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
//       </svg>
//     ),
//     animationType: 'horizontal'
//   },
//   {
//     title: 'Unified Analytics',
//     description: 'Transform raw data into actionable intelligence with our cutting-edge analytics platforms.',
//     features: [
//       'Interactive dashboards',
//       'Predictive modeling',
//       'Real-time KPI tracking',
//       'Custom reporting frameworks',
//       'AI-powered insights'
//     ],
//     icon: (
//       <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
//       </svg>
//     ),
//     animationType: 'pulse'
//   },
   
// ];

 
// const SERVICE_GROUPS = [
//   {
//     title: 'Modernizing Legacy Ecosystems',
//     subtitle: 'Transform outdated systems into agile digital platforms',
//     services: [
//       {
//         title: 'End-to-End System Migration',
//         description: 'Comprehensive transition of legacy systems to modern architectures with guaranteed uptime.',
//         features: [
//           'Legacy system assessment',
//           'Phased migration approach',
//           'Zero-downtime transition',
//           'Post-migration optimization'
//         ],
//         icon: (
//           <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
// >>>>>>> 61b773b (initialize)
//           </svg>
//         )
//       },
//       {
//         title: 'SAP Integration',
// <<<<<<< HEAD
//         description: 'Integrate SAP environments with legacy applications to ensure seamless data exchange, process orchestration, and consistent performance.',
//         features: [
//           'Real-time data synchronization',
//           'Process harmonization',
//           'Performance optimization'
//         ],
//         icon: (
//           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
// =======
//         description: 'Seamless connectivity between SAP and other enterprise systems with real-time sync.',
//         features: [
//           'SAP S/4HANA migration',
//           'Process harmonization',
//           'Performance optimization',
//           'Custom interface development'
//         ],
//         icon: (
//           <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
// >>>>>>> 61b773b (initialize)
//           </svg>
//         )
//       },
//       {
//         title: 'Workflow Automation',
// <<<<<<< HEAD
//         description: 'Build intelligent integration layers using APIs, middleware, and automation tools to unify disparate systems.',
//         features: [
//           'API-led connectivity',
//           'Low-code automation',
//           'End-to-end monitoring'
//         ],
//         icon: (
//           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
// =======
//         description: 'Intelligent automation of business processes to reduce manual effort and errors.',
//         features: [
//           'RPA implementation',
//           'Low-code automation',
//           'End-to-end monitoring',
//           'AI-powered decisioning'
//         ],
//         icon: (
//           <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
// >>>>>>> 61b773b (initialize)
//           </svg>
//         )
//       }
//     ]
//   },
//   {
// <<<<<<< HEAD
//     title: 'Cloud Migration',
//     subtitle: 'Multi-Cloud Integration Strategies',
//     services: [
//       {
//         title: 'Cloud Migration',
//         description: 'Accelerate your shift to the cloud with strategic planning, architecture modernization, and secure workload migration.',
//         features: [
//           'AWS/Azure/GCP',
//           'Workload assessment',
//           'Secure migration'
//         ],
//         icon: (
//           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
// =======
//     title: 'Cloud Transformation',
//     subtitle: 'Multi-cloud and hybrid cloud integration strategies',
//     services: [
//       {
//         title: 'Cloud Migration',
//         description: 'Strategic movement of workloads to cloud environments with optimized architecture.',
//         features: [
//           'AWS/Azure/GCP migration',
//           'Workload assessment',
//           'Secure migration framework',
//           'Cost optimization'
//         ],
//         icon: (
//           <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
// >>>>>>> 61b773b (initialize)
//           </svg>
//         )
//       },
//       {
// <<<<<<< HEAD
//         title: 'Multi-Cloud',
//         description: 'Integrate seamlessly with leading cloud platforms (GCP, AWS, Azure) supporting hybrid and multi-cloud environments.',
//         features: [
//           'Cross-cloud networking',
//           'Unified operations',
//           'Portable workloads'
//         ],
//         icon: (
//           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
// =======
//         title: 'Multi-Cloud Strategy',
//         description: 'Unified management of workloads across multiple cloud platforms.',
//         features: [
//           'Cross-cloud networking',
//           'Unified operations',
//           'Portable workloads',
//           'Governance framework'
//         ],
//         icon: (
//           <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
// >>>>>>> 61b773b (initialize)
//           </svg>
//         )
//       },
//       {
//         title: 'Cloud Optimization',
// <<<<<<< HEAD
//         description: 'Leverage cloud-native tools and architectures to optimize cost and increase reliability.',
//         features: [
//           'Auto-scaling',
//           'Cost management',
//           'Performance tuning'
//         ],
//         icon: (
//           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
// =======
//         description: 'Continuous improvement of cloud environments for performance and cost.',
//         features: [
//           'Auto-scaling configuration',
//           'Cost management',
//           'Performance tuning',
//           'Security hardening'
//         ],
//         icon: (
//           <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
// >>>>>>> 61b773b (initialize)
//           </svg>
//         )
//       }
//     ]
//   }
// ];
// <<<<<<< HEAD

// const ServicesSection = ({ id }) => {
//   return (
//     <div id={id} className="py-16" style={{ backgroundColor: '#D3D3D3' }}> {/* Background color changed to #D7D6C2 */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 
//         <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Our Services</h2> {/* Text changed to gray-900 */}
 
//         <div className="mb-20">
//           <h3 className="text-2xl font-semibold text-left mb-8 pl-2 border-l-4 border-blue-700 text-gray-900">Data Services</h3> {/* Text changed to gray-900, border to blue-700 */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {DATA_SERVICES.map((service, index) => (
//               <motion.div 
//                 key={`data-${index}`}
        
//                 initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true, amount: 0.3 }}  
//                 transition={{ duration: 0.6, delay: index * 0.1 }}  
//                 className="bg-white p-6 rounded-lg border border-gray-200 shadow-md" 
//               >
//                 <div className="flex items-start gap-4 mb-4">
//                   <div className="bg-blue-600/20 p-2 rounded-lg text-blue-800">  
//                   </div>
//                   <div>
//                     <h4 className="text-lg font-semibold text-gray-900">{service.title}</h4>  
             
//                     {service.subtitle && <p className="text-gray-700 text-sm mt-1">{service.subtitle}</p>} 
//                   </div>
//                 </div>
//                 <p className="text-gray-800 text-sm mb-3">{service.description}</p>  
//                 <ul className="text-gray-600 text-xs space-y-1.5">  
//                   {service.features.map((feature, i) => (
//                     <li key={`feature-${i}`} className="flex items-start">
//                       <span className="mr-1.5 mt-1">•</span> {feature}
//                     </li>
//                   ))}
//                 </ul>
//               </motion.div>
//             ))}
//           </div>
//         </div>
 
//         {SERVICE_GROUPS.map((group, groupIndex) => (
//           <div key={`group-${groupIndex}`} className="mb-20">
//             <h3 className="text-2xl font-semibold text-left mb-8 pl-2 border-l-4 border-blue-700 text-gray-900">
//               {group.title}
//               {group.subtitle && (
//                 <span className="block text-gray-700 text-lg font-normal mt-1">  
// =======
 
// const ServiceIcon = ({ icon, type, isHovered }) => {
//   const iconAnimations = {
//     spin: {
//       rotate: isHovered ? 360 : 0,
//       transition: { duration: 1.5, ease: "linear" }
//     },
//     horizontal: {
//       x: isHovered ? [0, 10, -10, 0] : 0,
//       transition: { duration: 1.5, repeat: Infinity }
//     },
//     pulse: {
//       scale: isHovered ? [1, 1.1, 1] : 1,
//       transition: { duration: 1.5, repeat: Infinity }
//     },
//     default: {
//       y: isHovered ? [0, -5, 0] : 0,
//       transition: { duration: 1.5, repeat: Infinity }
//     }
//   };

//   return (
//     <motion.div
//       animate={iconAnimations[type] || iconAnimations.default}
//       className={`p-3 rounded-xl ${isHovered ? 'bg-blue-600/20' : 'bg-blue-600/10'} transition-colors duration-300`}
//     >
//       {React.cloneElement(icon, { className: "w-7 h-7 text-black" })}
//     </motion.div>
//   );
// };

// const GlassCard = ({ service, index, isActive, setActive }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: "-50px" }}
//       transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
//       onHoverStart={() => setActive(index)}
//       className="relative h-full cursor-pointer"
//     >
//       <motion.div
//         className="p-8 rounded-2xl bg-white/90 backdrop-blur-sm border border-gray-200/50 overflow-hidden h-full flex flex-col shadow-lg"
//         whileHover={{ 
//           y: -10,
//           boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
//           backgroundColor: 'rgba(255, 255, 255, 1)'
//         }}
//         transition={{ type: "spring", stiffness: 300 }}
//       >
    
//         <motion.div 
//           className="absolute inset-0 rounded-2xl p-px bg-gradient-to-br from-#D3D3D3 via-#D3D3D3 to-#D3D3D3/30 -z-10"
//           animate={{
//             opacity: isActive ? 1 : 0.5
//           }}
//         />
        
//         <div className="flex items-start gap-6 mb-6">
//           <ServiceIcon 
//             icon={service.icon} 
//             type={service.animationType} 
//             isHovered={isActive}
//           />
//           <h4 className="text-xl font-semibold text-gray-900 mt-1.5">{service.title}</h4>
//         </div>
        
//         <p className="text-gray-800 mb-6 flex-grow">{service.description}</p>
        
//         <ul className="space-y-3">
//           {service.features.map((feature, i) => (
//             <motion.li 
//               key={i}
//               initial={{ x: -10 }}
//               animate={{ x: isActive ? 0 : -10 }}
//               transition={{ delay: i * 0.05 }}
//               className="text-gray-800 flex items-start"
//             >
//               <span className="inline-block mr-3 text-#D3D3D3">▹</span>
//               <span>{feature}</span>
//             </motion.li>
//           ))}
//         </ul>
        
      
//         <motion.div 
//           className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-black to-grey"
//           initial={{ scaleX: 0 }}
//           animate={{ scaleX: isActive ? 1 : 0 }}
//           transition={{ type: "spring", stiffness: 300 }}
//         />
//       </motion.div>
//     </motion.div>
//   );
// };

// const ServicesSection = ({ id }) => {
//   const [activeCard, setActiveCard] = useState(null);
  
//   return (
//     <section 
//       id={id} 
//       className="relative py-32 overflow-hidden"
//       style={{
//         backgroundColor: '#D3D3D3',
//         backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.8) 0%, rgba(211,211,211,1) 100%)'
//       }}
//     >
 
//       <div className="absolute inset-0 overflow-hidden">
//         {[...Array(8)].map((_, i) => (
//           <motion.div
//             key={i}
//             animate={{
//               y: [0, 100, 0],
//               opacity: [0.02, 0.05, 0.02]
//             }}
//             transition={{
//               duration: 15 + Math.random() * 10,
//               repeat: Infinity,
//               ease: "linear"
//             }}
//             className="absolute rounded-full bg-gray-500/10"
//             style={{
//               width: `${100 + Math.random() * 200}px`,
//               height: `${100 + Math.random() * 200}px`,
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`
//             }}
//           />
//         ))}
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
    
//         <motion.div
//           initial={{ opacity: 0, y: -50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-28"
//         >
//           <motion.span 
//             className="inline-block px-5 py-2 text-sm font-medium tracking-wider text-white uppercase bg-black rounded-full mb-6"
//             whileHover={{ scale: 1.05 }}
//           >
//             Enterprise Solutions
//           </motion.span>
          
//           <h2 className="text-5xl font-bold text-gray-900 sm:text-6xl mb-6">
//             Our <span className="text-black">Services</span>
//           </h2>
          
//           <motion.div 
//             className="mx-auto h-1 w-32 bg-gradient-to-r from-black to-black rounded-full"
//             initial={{ scaleX: 0 }}
//             whileInView={{ scaleX: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
//           />
//         </motion.div>
 
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true, margin: "-50px" }}
//           transition={{ duration: 0.8 }}
//           className="mb-36"
//         >
//           <h3 className="text-3xl font-semibold text-gray-900 mb-14 pl-8 relative">
//             <motion.span 
//               className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-12 bg-gradient-to-b from-black to-black rounded-full"
//               animate={{
//                 height: [20, 40, 20],
//                 opacity: [0.8, 1, 0.8]
//               }}
//               transition={{
//                 repeat: Infinity,
//                 duration: 3,
//                 ease: "easeInOut"
//               }}
//             />
//             Data Services
//           </h3>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <AnimatePresence>
//               {DATA_SERVICES.map((service, index) => (
//                 <GlassCard
//                   key={`data-${index}`}
//                   service={service}
//                   index={index}
//                   isActive={activeCard === index}
//                   setActive={setActiveCard}
//                 />
//               ))}
//             </AnimatePresence>
//           </div>
//         </motion.div>

         
//         {SERVICE_GROUPS.map((group, groupIndex) => (
//           <motion.div
//             key={`group-${groupIndex}`}
//             className="mb-36"
//           >
//             <h3 className="text-3xl font-semibold text-gray-900 mb-14 pl-8 relative">
//               <motion.span 
//                 className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-12 bg-gradient-to-b from-black to-black rounded-full"
//                 animate={{
//                   height: [20, 40, 20],
//                   opacity: [0.8, 1, 0.8]
//                 }}
//                 transition={{
//                   repeat: Infinity,
//                   duration: 3,
//                   ease: "easeInOut"
//                 }}
//               />
//               {group.title}
//               {group.subtitle && (
//                 <span className="block text-lg font-normal text-gray-700 mt-3">
// >>>>>>> 61b773b (initialize)
//                   {group.subtitle}
//                 </span>
//               )}
//             </h3>
// <<<<<<< HEAD
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               {group.services.map((service, serviceIndex) => (
//                 <motion.div
//                   key={`service-${serviceIndex}`}
 
//                   initial={{ opacity: 0, x: serviceIndex % 2 === 0 ? -100 : 100 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true, amount: 0.3 }} 
//                   transition={{ duration: 0.6, delay: serviceIndex * 0.1 }} 
//                   className="bg-white p-6 rounded-lg border border-gray-200 shadow-md" 
//                 >
//                   <div className="flex items-start gap-4 mb-4">
//                     <div className="bg-blue-600/20 p-2 rounded-lg text-blue-800">  
//                       {service.icon}
//                     </div>
//                     <div>
//                       <h4 className="text-lg font-semibold text-gray-900">{service.title}</h4>  
//                     </div>
//                   </div>
//                   <p className="text-gray-800 text-sm mb-3">{service.description}</p>  
//                   <ul className="text-gray-600 text-xs space-y-1.5">  
//                     {service.features.map((feature, i) => (
//                       <li key={`feature-${i}`} className="flex items-start">
//                         <span className="mr-1.5 mt-1">•</span> {feature}
//                       </li>
//                     ))}
//                   </ul>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ServicesSection;
 
// =======
            
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               <AnimatePresence>
//                 {group.services.map((service, serviceIndex) => {
//                   const cardIndex = DATA_SERVICES.length + serviceIndex + (groupIndex * 3);
//                   return (
//                     <GlassCard
//                       key={`service-${serviceIndex}`}
//                       service={service}
//                       index={cardIndex}
//                       isActive={activeCard === cardIndex}
//                       setActive={setActiveCard}
//                     />
//                   );
//                 })}
//               </AnimatePresence>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;
// >>>>>>> 61b773b (initialize)







// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const DATA_SERVICES = [
//   {
//     title: 'Data Management & Governance​',
//     description: 'Ensure data reliability, security, and regulatory compliance through structured governance frameworks, metadata cataloging, and lifecycle management strategies.​',
//     features: [
//       'Metadata cataloging',
//       'Access controls',
//       'Audit trails'
//     ],
//     icon: (
//       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//       </svg>
//     )
//   },
//   {
//     title: 'Data Migration​',
//     description: 'Seamlessly migrate data across legacy systems, cloud platforms, and hybrid environments with minimal downtime and uncompromised data integrity.​',
//     features: [
//       'Real-time synchronization',
//       'Cloud-native solutions',
//       'Error handling'
//     ],
//     icon: (
//       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//       </svg>
//     )
//   },
//   {
//     title: 'Unified Analytics with Databricks​',
//     description: 'Design and implement scalable data solutions using the Databricks Lakehouse Platform, combining data engineering, real-time analytics, and machine learning on a unified architecture.​',
//     features: [
//       'Interactive dashboards',
//       'KPI tracking',
//       'Custom reporting'
//     ],
//     icon: (
//       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
//       </svg>
//     )
//   }
// ];

// const SERVICE_GROUPS = [
//   {
//     title: 'Modernizing Legacy Ecosystems',
//     services: [
//       {
//         title: 'End-to-End System Migration',
//         description: 'Transition critical systems to modern platforms through structured migration paths, validation frameworks, and disruption-free execution.',
//         features: [
//           'Legacy system assessment',
//           'Phased migration approach',
//           'Zero-downtime transition'
//         ],
//         icon: (
//           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
// =======
// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
 
// const DATA_SERVICES = [
//   {
//     title: 'Data Management & Governance',
//     description: 'End-to-end solutions ensuring data integrity, security, and compliance across your enterprise architecture.',
//     features: [
//       'Enterprise metadata cataloging',
//       'Granular access controls',
//       'Comprehensive audit trails',
//       'Data quality monitoring',
//       'Regulatory compliance'
//     ],
//     icon: (
//       <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//       </svg>
//     ),
//     animationType: 'spin'
//   },
//   {
//     title: 'Data Migration',
//     description: 'Seamless transition of data assets between systems with zero downtime and complete integrity preservation.',
//     features: [
//       'Automated schema conversion',
//       'Real-time synchronization',
//       'Comprehensive validation',
//       'Rollback capabilities',
//       'Performance optimization'
//     ],
//     icon: (
//       <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
//       </svg>
//     ),
//     animationType: 'horizontal'
//   },
//   {
//     title: 'Unified Analytics',
//     description: 'Transform raw data into actionable intelligence with our cutting-edge analytics platforms.',
//     features: [
//       'Interactive dashboards',
//       'Predictive modeling',
//       'Real-time KPI tracking',
//       'Custom reporting frameworks',
//       'AI-powered insights'
//     ],
//     icon: (
//       <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
//       </svg>
//     ),
//     animationType: 'pulse'
//   },
   
// ];

 
// const SERVICE_GROUPS = [
//   {
//     title: 'Modernizing Legacy Ecosystems',
//     subtitle: 'Transform outdated systems into agile digital platforms',
//     services: [
//       {
//         title: 'End-to-End System Migration',
//         description: 'Comprehensive transition of legacy systems to modern architectures with guaranteed uptime.',
//         features: [
//           'Legacy system assessment',
//           'Phased migration approach',
//           'Zero-downtime transition',
//           'Post-migration optimization'
//         ],
//         icon: (
//           <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
// >>>>>>> 61b773b (initialize)
//           </svg>
//         )
//       },
//       {
//         title: 'SAP Integration',
// <<<<<<< HEAD
//         description: 'Integrate SAP environments with legacy applications to ensure seamless data exchange, process orchestration, and consistent performance.',
//         features: [
//           'Real-time data synchronization',
//           'Process harmonization',
//           'Performance optimization'
//         ],
//         icon: (
//           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
// =======
//         description: 'Seamless connectivity between SAP and other enterprise systems with real-time sync.',
//         features: [
//           'SAP S/4HANA migration',
//           'Process harmonization',
//           'Performance optimization',
//           'Custom interface development'
//         ],
//         icon: (
//           <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
// >>>>>>> 61b773b (initialize)
//           </svg>
//         )
//       },
//       {
//         title: 'Workflow Automation',
// <<<<<<< HEAD
//         description: 'Build intelligent integration layers using APIs, middleware, and automation tools to unify disparate systems.',
//         features: [
//           'API-led connectivity',
//           'Low-code automation',
//           'End-to-end monitoring'
//         ],
//         icon: (
//           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
// =======
//         description: 'Intelligent automation of business processes to reduce manual effort and errors.',
//         features: [
//           'RPA implementation',
//           'Low-code automation',
//           'End-to-end monitoring',
//           'AI-powered decisioning'
//         ],
//         icon: (
//           <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
// >>>>>>> 61b773b (initialize)
//           </svg>
//         )
//       }
//     ]
//   },
//   {
// <<<<<<< HEAD
//     title: 'Cloud Migration',
//     subtitle: 'Multi-Cloud Integration Strategies',
//     services: [
//       {
//         title: 'Cloud Migration',
//         description: 'Accelerate your shift to the cloud with strategic planning, architecture modernization, and secure workload migration.',
//         features: [
//           'AWS/Azure/GCP',
//           'Workload assessment',
//           'Secure migration'
//         ],
//         icon: (
//           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
// =======
//     title: 'Cloud Transformation',
//     subtitle: 'Multi-cloud and hybrid cloud integration strategies',
//     services: [
//       {
//         title: 'Cloud Migration',
//         description: 'Strategic movement of workloads to cloud environments with optimized architecture.',
//         features: [
//           'AWS/Azure/GCP migration',
//           'Workload assessment',
//           'Secure migration framework',
//           'Cost optimization'
//         ],
//         icon: (
//           <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
// >>>>>>> 61b773b (initialize)
//           </svg>
//         )
//       },
//       {
// <<<<<<< HEAD
//         title: 'Multi-Cloud',
//         description: 'Integrate seamlessly with leading cloud platforms (GCP, AWS, Azure) supporting hybrid and multi-cloud environments.',
//         features: [
//           'Cross-cloud networking',
//           'Unified operations',
//           'Portable workloads'
//         ],
//         icon: (
//           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
// =======
//         title: 'Multi-Cloud Strategy',
//         description: 'Unified management of workloads across multiple cloud platforms.',
//         features: [
//           'Cross-cloud networking',
//           'Unified operations',
//           'Portable workloads',
//           'Governance framework'
//         ],
//         icon: (
//           <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
// >>>>>>> 61b773b (initialize)
//           </svg>
//         )
//       },
//       {
//         title: 'Cloud Optimization',
// <<<<<<< HEAD
//         description: 'Leverage cloud-native tools and architectures to optimize cost and increase reliability.',
//         features: [
//           'Auto-scaling',
//           'Cost management',
//           'Performance tuning'
//         ],
//         icon: (
//           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
// =======
//         description: 'Continuous improvement of cloud environments for performance and cost.',
//         features: [
//           'Auto-scaling configuration',
//           'Cost management',
//           'Performance tuning',
//           'Security hardening'
//         ],
//         icon: (
//           <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
// >>>>>>> 61b773b (initialize)
//           </svg>
//         )
//       }
//     ]
//   }
// ];


 
// const ServiceIcon = ({ icon, type, isHovered }) => {
//   const iconAnimations = {
//     spin: {
//       rotate: isHovered ? 360 : 0,
//       transition: { duration: 1.5, ease: "linear" }
//     },
//     horizontal: {
//       x: isHovered ? [0, 10, -10, 0] : 0,
//       transition: { duration: 1.5, repeat: Infinity }
//     },
//     pulse: {
//       scale: isHovered ? [1, 1.1, 1] : 1,
//       transition: { duration: 1.5, repeat: Infinity }
//     },
//     default: {
//       y: isHovered ? [0, -5, 0] : 0,
//       transition: { duration: 1.5, repeat: Infinity }
//     }
//   };

//   return (
//     <motion.div
//       animate={iconAnimations[type] || iconAnimations.default}
//       className={`p-3 rounded-xl ${isHovered ? 'bg-blue-600/20' : 'bg-blue-600/10'} transition-colors duration-300`}
//     >
//       {React.cloneElement(icon, { className: "w-7 h-7 text-black" })}
//     </motion.div>
//   );
// };

// const GlassCard = ({ service, index, isActive, setActive }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: "-50px" }}
//       transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
//       onHoverStart={() => setActive(index)}
//       className="relative h-full cursor-pointer"
//     >
//       <motion.div
//         className="p-8 rounded-2xl bg-white/90 backdrop-blur-sm border border-gray-200/50 overflow-hidden h-full flex flex-col shadow-lg"
//         whileHover={{
//           y: -10,
//           boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
//           backgroundColor: 'rgba(255, 255, 255, 1)'
//         }}
//         transition={{ type: "spring", stiffness: 300 }}
//       >
//         <div className="flex items-start gap-6 mb-6">
//           <ServiceIcon
//             icon={service.icon}
//             type={service.animationType}
//             isHovered={isActive}
//           />
//           <h4 className="text-xl font-semibold text-gray-900 mt-1.5">{service.title}</h4>
//         </div>

//         <p className="text-gray-800 mb-6 flex-grow">{service.description}</p>

//         <ul className="space-y-3">
//           {service.features.map((feature, i) => (
//             <motion.li
//               key={i}
//               initial={{ x: -10 }}
//               animate={{ x: isActive ? 0 : -10 }}
//               transition={{ delay: i * 0.05 }}
//               className="text-gray-800 flex items-start"
//             >
//               <span className="inline-block mr-3 text-gray-400">▹</span>
//               <span>{feature}</span>
//             </motion.li>
//           ))}
//         </ul>
//       </motion.div>
//     </motion.div>
//   );
// };

// const ServicesSection = ({ id }) => {
//   const [activeCard, setActiveCard] = useState(null);

//   return (
//     <section
//       id={id}
//       className="relative py-32 overflow-hidden"
//       style={{
//         backgroundColor: '#D3D3D3',
//         backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.8) 0%, rgba(211,211,211,1) 100%)'
//       }}
//     >
//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
//         <motion.div
//           initial={{ opacity: 0, y: -50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-28"
//         >
//           <motion.span
//             className="inline-block px-5 py-2 text-sm font-medium tracking-wider text-white uppercase bg-black rounded-full mb-6"
//             whileHover={{ scale: 1.05 }}
//           >
//             Enterprise Solutions
//           </motion.span>

//           <h2 className="text-5xl font-bold text-gray-900 sm:text-6xl mb-6">
//             Our <span className="text-black">Services</span>
//           </h2>

//           <motion.div
//             className="mx-auto h-1 w-32 bg-gradient-to-r from-black to-black rounded-full"
//             initial={{ scaleX: 0 }}
//             whileInView={{ scaleX: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
//           />
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true, margin: "-50px" }}
//           transition={{ duration: 0.8 }}
//           className="mb-36"
//         >
//           <h3 className="text-3xl font-semibold text-gray-900 mb-14 pl-8 relative">
//             <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-12 bg-gradient-to-b from-black to-black rounded-full"></span>
//             Data Services
//           </h3>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <AnimatePresence>
//               {DATA_SERVICES.map((service, index) => (
//                 <GlassCard
//                   key={`data-${index}`}
//                   service={service}
//                   index={index}
//                   isActive={activeCard === index}
//                   setActive={setActiveCard}
//                 />
//               ))}
//             </AnimatePresence>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;






import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DATA_SERVICES = [
  {
    title: 'Data Management & Governance',
    description: 'End-to-end solutions ensuring data integrity, security, and compliance across your enterprise architecture.',
    features: [
      'Enterprise metadata cataloging',
      'Granular access controls',
      'Comprehensive audit trails',
      'Data quality monitoring',
      'Regulatory compliance'
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    animationType: 'spin'
  },
  {
    title: 'Data Migration',
    description: 'Seamless transition of data assets between systems with zero downtime and complete integrity preservation.',
    features: [
      'Automated schema conversion',
      'Real-time synchronization',
      'Comprehensive validation',
      'Rollback capabilities',
      'Performance optimization'
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    animationType: 'horizontal'
  },
  {
    title: 'Unified Analytics',
    description: 'Transform raw data into actionable intelligence with our cutting-edge analytics platforms.',
    features: [
      'Interactive dashboards',
      'Predictive modeling',
      'Real-time KPI tracking',
      'Custom reporting frameworks',
      'AI-powered insights'
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    animationType: 'pulse'
  },
];

const SERVICE_GROUPS = [
  {
    title: 'Modernizing Legacy Ecosystems',
    subtitle: 'Transform outdated systems into agile digital platforms',
    services: [
      {
        title: 'End-to-End System Migration',
        description: 'Comprehensive transition of legacy systems to modern architectures with guaranteed uptime.',
        features: [
          'Legacy system assessment',
          'Phased migration approach',
          'Zero-downtime transition',
          'Post-migration optimization'
        ],
        icon: (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
        )
      },
      {
        title: 'SAP Integration',
        description: 'Seamless connectivity between SAP and other enterprise systems with real-time sync.',
        features: [
          'SAP S/4HANA migration',
          'Process harmonization',
          'Performance optimization',
          'Custom interface development'
        ],
        icon: (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        )
      },
      {
        title: 'Workflow Automation',
        description: 'Intelligent automation of business processes to reduce manual effort and errors.',
        features: [
          'RPA implementation',
          'Low-code automation',
          'End-to-end monitoring',
          'AI-powered decisioning'
        ],
        icon: (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        )
      }
    ]
  },
  {
    title: 'Cloud Transformation',
    subtitle: 'Multi-cloud and hybrid cloud integration strategies',
    services: [
      {
        title: 'Cloud Migration',
        description: 'Strategic movement of workloads to cloud environments with optimized architecture.',
        features: [
          'AWS/Azure/GCP migration',
          'Workload assessment',
          'Secure migration framework',
          'Cost optimization'
        ],
        icon: (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
        )
      },
      {
        title: 'Multi-Cloud Strategy',
        description: 'Unified management of workloads across multiple cloud platforms.',
        features: [
          'Cross-cloud networking',
          'Unified operations',
          'Portable workloads',
          'Governance framework'
        ],
        icon: (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
        )
      },
      {
        title: 'Cloud Optimization',
        description: 'Continuous improvement of cloud environments for performance and cost.',
        features: [
          'Auto-scaling configuration',
          'Cost management',
          'Performance tuning',
          'Security hardening'
        ],
        icon: (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        )
      }
    ]
  }
];

const ServiceIcon = ({ icon, type, isHovered }) => {
  const iconAnimations = {
    spin: {
      rotate: isHovered ? 360 : 0,
      transition: { duration: 1.5, ease: "linear" }
    },
    horizontal: {
      x: isHovered ? [0, 10, -10, 0] : 0,
      transition: { duration: 1.5, repeat: Infinity }
    },
    pulse: {
      scale: isHovered ? [1, 1.1, 1] : 1,
      transition: { duration: 1.5, repeat: Infinity }
    },
    default: {
      y: isHovered ? [0, -5, 0] : 0,
      transition: { duration: 1.5, repeat: Infinity }
    }
  };

  return (
    <motion.div
      animate={iconAnimations[type] || iconAnimations.default}
      className={`p-3 rounded-xl ${isHovered ? 'bg-blue-600/20' : 'bg-blue-600/10'} transition-colors duration-300`}
    >
      {React.cloneElement(icon, { className: "w-7 h-7 text-black" })}
    </motion.div>
  );
};

const GlassCard = ({ service, index, isActive, setActive }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
      onHoverStart={() => setActive(index)}
      className="relative h-full cursor-pointer"
    >
      <motion.div
        className="p-8 rounded-2xl bg-white/90 backdrop-blur-sm border border-gray-200/50 overflow-hidden h-full flex flex-col shadow-lg"
        whileHover={{ 
          y: -10,
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
          backgroundColor: 'rgba(255, 255, 255, 1)'
        }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.div 
          className="absolute inset-0 rounded-2xl p-px bg-gradient-to-br from-#D3D3D3 via-#D3D3D3 to-#D3D3D3/30 -z-10"
          animate={{
            opacity: isActive ? 1 : 0.5
          }}
        />
        
        <div className="flex items-start gap-6 mb-6">
          <ServiceIcon 
            icon={service.icon} 
            type={service.animationType} 
            isHovered={isActive}
          />
          <h4 className="text-xl font-semibold text-gray-900 mt-1.5">{service.title}</h4>
        </div>
        
        <p className="text-gray-800 mb-6 flex-grow">{service.description}</p>
        
        <ul className="space-y-3">
          {service.features.map((feature, i) => (
            <motion.li 
              key={i}
              initial={{ x: -10 }}
              animate={{ x: isActive ? 0 : -10 }}
              transition={{ delay: i * 0.05 }}
              className="text-gray-800 flex items-start"
            >
              <span className="inline-block mr-3 text-#D3D3D3">▹</span>
              <span>{feature}</span>
            </motion.li>
          ))}
        </ul>
        
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-black to-grey"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isActive ? 1 : 0 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
      </motion.div>
    </motion.div>
  );
};

const ServicesSection = ({ id }) => {
  const [activeCard, setActiveCard] = useState(null);
  
  return (
    <section 
      id={id} 
      className="relative py-32 overflow-hidden"
      style={{
        backgroundColor: '#D3D3D3',
        backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.8) 0%, rgba(211,211,211,1) 100%)'
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, 100, 0],
              opacity: [0.02, 0.05, 0.02]
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute rounded-full bg-gray-500/10"
            style={{
              width: `${100 + Math.random() * 200}px`,
              height: `${100 + Math.random() * 200}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-28"
        >
          <motion.span 
            className="inline-block px-5 py-2 text-sm font-medium tracking-wider text-white uppercase bg-black rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            Enterprise Solutions
          </motion.span>
          
          <h2 className="text-5xl font-bold text-gray-900 sm:text-6xl mb-6">
            Our <span className="text-black">Services</span>
          </h2>
          
          <motion.div 
            className="mx-auto h-1 w-32 bg-gradient-to-r from-black to-black rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          />
        </motion.div>
 
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="mb-36"
        >
          <h3 className="text-3xl font-semibold text-gray-900 mb-14 pl-8 relative">
            <motion.span 
              className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-12 bg-gradient-to-b from-black to-black rounded-full"
              animate={{
                height: [20, 40, 20],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut"
              }}
            />
            Data Services
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatePresence>
              {DATA_SERVICES.map((service, index) => (
                <GlassCard
                  key={`data-${index}`}
                  service={service}
                  index={index}
                  isActive={activeCard === index}
                  setActive={setActiveCard}
                />
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
         
        {SERVICE_GROUPS.map((group, groupIndex) => (
          <motion.div
            key={`group-${groupIndex}`}
            className="mb-36"
          >
            <h3 className="text-3xl font-semibold text-gray-900 mb-14 pl-8 relative">
              <motion.span 
                className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-12 bg-gradient-to-b from-black to-black rounded-full"
                animate={{
                  height: [20, 40, 20],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut"
                }}
              />
              {group.title}
              {group.subtitle && (
                <span className="block text-lg font-normal text-gray-700 mt-3">
                  {group.subtitle}
                </span>
              )}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {group.services.map((service, serviceIndex) => (
                <GlassCard
                  key={`service-${serviceIndex}`}
                  service={service}
                  index={serviceIndex}
                  isActive={activeCard === serviceIndex}
                  setActive={setActiveCard}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;