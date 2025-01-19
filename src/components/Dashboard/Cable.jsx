import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import clsx from 'clsx';
import logo from '../assets/logo.jpg';

// Define the services for cable subscriptions
const services = [
  {
    title: 'DSTV',
    description: 'Digital Satellite Television',
    icon: logo,
    image: logo,
  },
  {
    title: 'GOTV',
    description: 'Digital TV for Africa',
    icon: logo,
    image: logo,
  },
  {
    title: 'StarTimes',
    description: 'Digital TV Service',
    icon: logo,
    image: logo,
  },
  {
    title: 'ShowMax',
    description: 'Online Streaming Service',
    icon: logo,
    image: logo,
  },
];

const Cable = ({ onBack }) => {
  const [selectedService, setSelectedService] = useState(null);
  const [smartCardNumber, setSmartCardNumber] = useState('');
  const [subscriptionPlan, setSubscriptionPlan] = useState('');
  const [loading, setLoading] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const handleBackClick = () => {
    if (selectedService) {
      if (window.confirm('Are you sure you want to go back? Unsaved progress will be lost.')) {
        setSelectedService(null);
        setSmartCardNumber('');
        setSubscriptionPlan('');
      }
    } else {
      onBack();
    }
  };

  const handleProceed = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert('Subscription successful!');
    }, 3000);
  };

  const subscriptionPlans = {
    DSTV: ['Premium - ₦24,500', 'Compact Plus - ₦16,600', 'Compact - ₦10,500', 'Basic - ₦7,900'],
    GOTV: ['Max - ₦4,850', 'Jinja - ₦2,250', 'Jolli - ₦3,300', 'Smallie - ₦1,100'],
    StarTimes: ['Classic - ₦2,600', 'Super - ₦4,900', 'Nova - ₦1,200', 'Basic - ₦1,700'],
    ShowMax: ['Mobile - ₦1,200', 'Standard - ₦2,900', 'Pro - ₦6,300'],
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Cable TV Subscription</h1>

      {/* Back Button */}
      <button
        className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md p-1"
        aria-label="Go back"
        onClick={handleBackClick}
      >
        <ArrowLeft className="w-5 h-5" />
        <span>{selectedService ? 'Back' : 'Go to Dashboard'}</span>
      </button>

      {!selectedService ? (
        <div className="bg-white rounded-xl p-6 shadow-md">
          <h3 className="text-xl font-bold mb-4">Please choose your Service Provider</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 border rounded-md hover:shadow-lg cursor-pointer"
                onClick={() => handleServiceClick(service)}
              >
                <img
                  src={service.icon}
                  alt={`${service.title} logo`}
                  className="w-12 h-12"
                />
                <h4 className="text-lg font-bold">{service.title}</h4>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[500px]">
          <div
            className="flex flex-col items-center rounded-lg justify-center bg-cover bg-center text-white"
            style={{
              backgroundImage: `url(${selectedService.image})`,
            }}
          >
            <h3 className="text-2xl font-bold mb-4 bg-black bg-opacity-50 p-2 rounded-md">
              {selectedService.title}
            </h3>
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <h3 className="text-xl font-bold">Subscription Details</h3>

            {/* Smart Card Number Input */}
            <label className="block text-sm font-medium">
              Enter your Smart Card Number
            </label>
            <input
              type="text"
              placeholder="Enter Smart Card Number"
              value={smartCardNumber}
              onChange={(e) => setSmartCardNumber(e.target.value.replace(/\D/g, ''))}
              className="border p-2 rounded w-full"
            />
            {!smartCardNumber && (
              <p className="text-red-500 text-sm">Smart Card number is required.</p>
            )}

            {/* Subscription Plans */}
            <label className="block text-sm font-medium">
              Select Subscription Plan
            </label>
            <div className="grid grid-cols-1 gap-4">
              {subscriptionPlans[selectedService.title].map((plan) => (
                <button
                  key={plan}
                  onClick={() => setSubscriptionPlan(plan)}
                  className={clsx(
                    'px-4 py-2 border rounded-md transition duration-300 text-left',
                    subscriptionPlan === plan
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 hover:bg-gray-300'
                  )}
                >
                  {plan}
                </button>
              ))}
            </div>

            {/* Proceed Button */}
            <button
              onClick={handleProceed}
              disabled={!smartCardNumber || !subscriptionPlan || loading}
              className={clsx(
                'mt-6 px-6 py-3 rounded-md text-white font-bold text-sm transition duration-500',
                smartCardNumber && subscriptionPlan && !loading
                  ? 'bg-blue-500 hover:bg-blue-600'
                  : 'bg-gray-300 cursor-not-allowed'
              )}
            >
              {loading ? (
                <span className="animate-pulse">Processing...</span>
              ) : (
                'Proceed'
              )}
            </button>
          </div>
        </div>
      )}

      {/* Help Button */}
      <button
        onClick={() => setIsDialogOpen(!isDialogOpen)}
        className="fixed bottom-6 right-6 bg-blue-500 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-600"
      >
        ?
      </button>

      {/* Help Dialog */}
      {isDialogOpen && (
        <div className="fixed bottom-20 right-6 bg-white shadow-lg rounded-lg p-4 w-64">
          <h3 className="text-lg font-bold mb-2">Contact Us</h3>
          <div className="flex flex-col space-y-2">
            <button
              onClick={() => (window.location.href = 'mailto:contact@cable.com')}
              className="border p-2 rounded-lg bg-white hover:bg-blue-300 transition duration-200 flex items-center space-x-2"
            >
              <span>📧</span>
              <span>Email: contact@cable.com</span>
            </button>
            <button
              onClick={() => (window.location.href = 'tel:+1234567890')}
              className="border p-2 rounded-lg bg-white hover:bg-blue-300 transition duration-200 flex items-center space-x-2"
            >
              <span>📞</span>
              <span>Phone: +1234567890</span>
            </button>
            <button
              onClick={() => (window.location.href = '/livechat')}
              className="border p-2 rounded-lg bg-white hover:bg-blue-300 transition duration-200 flex items-center space-x-2"
            >
              <span>💬</span>
              <span>Live Chat</span>
            </button>
          </div>
          <button
            onClick={() => setIsDialogOpen(false)}
            className="mt-4 text-sm text-gray-500 underline"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Cable;