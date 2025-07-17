import React, { useState } from 'react';
import { MessageCircle, Download, CreditCard, CheckCircle, Phone, Globe } from 'lucide-react';

export default function ChallanPaymentPortal() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
    

      {/* Container for centered content */}
      <div className="max-w-md mx-auto px-3 sm:px-4">
        {/* Title */}
        <div className="py-5 text-center">
          <h1 className="text-xl font-bold text-gray-900">How to Pay Challan</h1>
          <p className="text-gray-600 mt-1 text-sm">Follow these simple steps to pay your traffic challan</p>
        </div>

        {/* Step 1 - Check Challan */}
        <div className="mb-5">
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="p-5">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 bg-red-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xs">1</span>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">Check Your Challan</h2>
                  <p className="text-gray-600 text-sm">Check your challan number on WhatsApp</p>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-3 sm:p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 sm:space-x-3 flex-1">
                    <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 text-xs sm:text-sm">WhatsApp Service</p>
                      <p className="text-xs text-gray-600 truncate">Get challan details instantly</p>
                    </div>
                  </div>
                  <div className="flex items-center  sm:space-x-2 flex-shrink-0 ml-2">
                    <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500" />
                    <span className="text-xs text-gray-600 whitespace-nowrap">+91 7000000000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 2 - Download App */}
        <div className="mb-5">
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="p-5">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 bg-red-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">Download App</h2>
                  <p className="text-gray-600 text-sm">Download the mParivahan app to proceed</p>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-3 sm:p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 sm:space-x-3 flex-1">
                    <div className="w-8 h-8 sm:w-7 sm:h-7 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Download className="w-3 h-3 sm:w-3 sm:h-3 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 text-xs sm:text-sm">mParivahan App</p>
                      <p className="text-xs text-gray-600 truncate">Official transport app</p>
                    </div>
                  </div>
                  <button className="bg-green-500 text-white px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg font-medium text-xs flex-shrink-0 ml-2">
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3 - Pay Challan */}
        <div className="mb-5">
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="p-5">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 bg-red-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">Pay Your Challan</h2>
                  <p className="text-gray-600 text-sm">View and pay your challan securely</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {/* Sample Challan */}
                <div className="bg-gray-50 rounded-xl p-3 sm:p-4">
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <div className="flex items-center space-x-2 sm:space-x-3 flex-1">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-xs">CH</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-900 text-xs sm:text-sm">Challan #MP2024001</p>
                        <p className="text-xs text-gray-600">Speed Violation</p>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="font-bold text-gray-900 text-sm sm:text-base">₹500</p>
                      <p className="text-xs text-gray-600">Fine Amount</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 sm:space-x-2">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
                      <span className="text-xs text-green-600">Verified</span>
                    </div>
                    <button className="bg-blue-500 text-white px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg font-medium text-xs flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
                      <CreditCard className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>Pay Now</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mb-5">
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="p-5">
              <h3 className="text-base font-semibold text-gray-900 mb-4 text-center">Quick Stats</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <p className="text-sm font-medium text-gray-900">50,000+</p>
                  <p className="text-xs text-gray-600">Paid Online</p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                    <Globe className="w-5 h-5 text-blue-600" />
                  </div>
                  <p className="text-sm font-medium text-gray-900">24/7</p>
                  <p className="text-xs text-gray-600">Available</p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                    <CreditCard className="w-5 h-5 text-purple-600" />
                  </div>
                  <p className="text-sm font-medium text-gray-900">100%</p>
                  <p className="text-xs text-gray-600">Secure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Download CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 sm:p-4">
        <div className="max-w-md mx-auto">
          <button className="w-full bg-green-500 text-white py-3 rounded-xl font-semibold text-sm sm:text-base flex items-center justify-center space-x-2 shadow-lg">
            <Download className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>DOWNLOAD APP</span>
          </button>
          <p className="text-center text-xs text-gray-600 mt-2">mparivahan.gov.in</p>
        </div>
      </div>
    </div>
  );
}