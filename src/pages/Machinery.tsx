import React from 'react';
import { motion } from 'framer-motion';
import { Settings } from 'lucide-react';

const machines = [
  {
    id: 1,
    name: 'Industrial Buffing System',
    description: 'High-capacity buffing machine for commercial utensils.',
    image: '/assets/buff.png',
    specs: [
      'Processing speed: 500 pieces/hour',
      'Multiple buffing stages',
      '20 Buffing Motors'
    ]
  },
  {
    id: 2,
    name: 'Precision Polisher',
    description: 'Specialized equipment for delicate and intricate items.',
    image: '/assets/matte.png',
    specs: [
      'Variable speed control',
      'Custom buffing patterns',
      '8 Matte Machines'
    ]
  },
  {
    id: 3,
    name: 'Hydraulic Press',
    description: 'Advanced machinery for premium press of utensils.',
    image: '/assets/press.png',
    specs: [
      'Multi-stage treatment process',
      'Environmental control system',
      '2 Hydraulic Press'
    ]
  },
  {
    id: 4,
    name: 'Bidding Lathe Machine',
    description: 'Advanced machinery for premium bidding.',
    image: '/assets/lathe.png',
    specs: [
      'Multi-stage treatment process',
      'Environmental control system',
      '2 Bidding lathe Machine'
    ]
  },
  {
    id: 5,
    name: 'Laser Engraving Machine',
    description: 'Advanced machinery for premium engraving.',
    image: '/assets/laser.png',
    specs: [
      'Multi-stage treatment process',
      'Environmental control system',
      '1 laser Engraving Machine'
    ]
  }
];

const Machinery = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl font-bold text-center mb-12 text-white">Our Machinery</h1>
          <div className="space-y-16">
            {machines.map((machine, index) => (
              <motion.div
                key={machine.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8 items-center`}
              >
                <div className="w-full md:w-1/2">
                  <img
                    src={machine.image}
                    alt={machine.name}
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="w-full md:w-1/2 space-y-4">
                  <div className="flex items-center space-x-2">
                    <Settings className="h-6 w-6 text-blue-400" />
                    <h3 className="text-2xl font-semibold text-white">{machine.name}</h3>
                  </div>
                  <p className="text-gray-300">{machine.description}</p>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-white">Specifications:</h4>
                    <ul className="space-y-2">
                      {machine.specs.map((spec, i) => (
                        <li key={i} className="text-sm text-gray-300 flex items-center">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default Machinery;