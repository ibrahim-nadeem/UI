 


import React from 'react';
import { motion } from 'framer-motion';

const DATA_SERVICES = [
  {
    title: 'Data Management & Governance​',
    description: 'Ensure data reliability, security, and regulatory compliance through structured governance frameworks, metadata cataloging, and lifecycle management strategies.​',
    features: [
      'Metadata cataloging',
      'Access controls',
      'Audit trails'
    ],
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: 'Data Migration​',
    description: 'Seamlessly migrate data across legacy systems, cloud platforms, and hybrid environments with minimal downtime and uncompromised data integrity.​',
    features: [
      'Real-time synchronization',
      'Cloud-native solutions',
      'Error handling'
    ],
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: 'Unified Analytics with Databricks​',
    description: 'Design and implement scalable data solutions using the Databricks Lakehouse Platform, combining data engineering, real-time analytics, and machine learning on a unified architecture.​',
    features: [
      'Interactive dashboards',
      'KPI tracking',
      'Custom reporting'
    ],
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  }
];

const SERVICE_GROUPS = [
  {
    title: 'Modernizing Legacy Ecosystems',
    services: [
      {
        title: 'End-to-End System Migration',
        description: 'Transition critical systems to modern platforms through structured migration paths, validation frameworks, and disruption-free execution.',
        features: [
          'Legacy system assessment',
          'Phased migration approach',
          'Zero-downtime transition'
        ],
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
        )
      },
      {
        title: 'SAP Integration',
        description: 'Integrate SAP environments with legacy applications to ensure seamless data exchange, process orchestration, and consistent performance.',
        features: [
          'Real-time data synchronization',
          'Process harmonization',
          'Performance optimization'
        ],
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        )
      },
      {
        title: 'Workflow Automation',
        description: 'Build intelligent integration layers using APIs, middleware, and automation tools to unify disparate systems.',
        features: [
          'API-led connectivity',
          'Low-code automation',
          'End-to-end monitoring'
        ],
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        )
      }
    ]
  },
  {
    title: 'Cloud Migration',
    subtitle: 'Multi-Cloud Integration Strategies',
    services: [
      {
        title: 'Cloud Migration',
        description: 'Accelerate your shift to the cloud with strategic planning, architecture modernization, and secure workload migration.',
        features: [
          'AWS/Azure/GCP',
          'Workload assessment',
          'Secure migration'
        ],
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
        )
      },
      {
        title: 'Multi-Cloud',
        description: 'Integrate seamlessly with leading cloud platforms (GCP, AWS, Azure) supporting hybrid and multi-cloud environments.',
        features: [
          'Cross-cloud networking',
          'Unified operations',
          'Portable workloads'
        ],
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
        )
      },
      {
        title: 'Cloud Optimization',
        description: 'Leverage cloud-native tools and architectures to optimize cost and increase reliability.',
        features: [
          'Auto-scaling',
          'Cost management',
          'Performance tuning'
        ],
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        )
      }
    ]
  }
];

const ServicesSection = ({ id }) => {
  return (
    <div id={id} className="py-16" style={{ backgroundColor: '#D7D6C2' }}> {/* Background color changed to #D7D6C2 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Our Services</h2> {/* Text changed to gray-900 */}
 
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-left mb-8 pl-2 border-l-4 border-blue-700 text-gray-900">Data Services</h3> {/* Text changed to gray-900, border to blue-700 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DATA_SERVICES.map((service, index) => (
              <motion.div 
                key={`data-${index}`}
        
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}  
                transition={{ duration: 0.6, delay: index * 0.1 }}  
                className="bg-white p-6 rounded-lg border border-gray-200 shadow-md" 
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-blue-600/20 p-2 rounded-lg text-blue-800">  
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{service.title}</h4>  
             
                    {service.subtitle && <p className="text-gray-700 text-sm mt-1">{service.subtitle}</p>} 
                  </div>
                </div>
                <p className="text-gray-800 text-sm mb-3">{service.description}</p>  
                <ul className="text-gray-600 text-xs space-y-1.5">  
                  {service.features.map((feature, i) => (
                    <li key={`feature-${i}`} className="flex items-start">
                      <span className="mr-1.5 mt-1">•</span> {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
 
        {SERVICE_GROUPS.map((group, groupIndex) => (
          <div key={`group-${groupIndex}`} className="mb-20">
            <h3 className="text-2xl font-semibold text-left mb-8 pl-2 border-l-4 border-blue-700 text-gray-900">
              {group.title}
              {group.subtitle && (
                <span className="block text-gray-700 text-lg font-normal mt-1">  
                  {group.subtitle}
                </span>
              )}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {group.services.map((service, serviceIndex) => (
                <motion.div
                  key={`service-${serviceIndex}`}
 
                  initial={{ opacity: 0, x: serviceIndex % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }} 
                  transition={{ duration: 0.6, delay: serviceIndex * 0.1 }} 
                  className="bg-white p-6 rounded-lg border border-gray-200 shadow-md" 
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-blue-600/20 p-2 rounded-lg text-blue-800">  
                      {service.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">{service.title}</h4>  
                    </div>
                  </div>
                  <p className="text-gray-800 text-sm mb-3">{service.description}</p>  
                  <ul className="text-gray-600 text-xs space-y-1.5">  
                    {service.features.map((feature, i) => (
                      <li key={`feature-${i}`} className="flex items-start">
                        <span className="mr-1.5 mt-1">•</span> {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
