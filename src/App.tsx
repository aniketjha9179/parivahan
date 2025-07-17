import WhatsappImage from '../src/asset/whatsapp.png';
import AppImage from '../src/asset/Vehical.png';
import  { useState, useEffect } from 'react';
import { Download, CreditCard, CheckCircle, Phone, Globe, Radio } from 'lucide-react';

export default function ChallanPaymentPortal() {
  const [activeStep, setActiveStep] = useState(1);
  const [isLiveIndicatorActive, setIsLiveIndicatorActive] = useState(true);

  // Live indicator animation
  useEffect(() => {
    const interval = setInterval(() => {
      setIsLiveIndicatorActive(prev => !prev);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 pb-20 relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-violet-300/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-300/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-pink-200/10 to-rose-300/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Container for centered content */}
      <div className="max-w-md mx-auto px-3 sm:px-4 relative z-10">
        {/* Enhanced Title */}
        <div className="py-6 text-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">How to Pay Challan</h1>
          <p className="text-gray-600 mt-2 text-sm">Follow these simple steps to pay your traffic challan</p>
        </div>

        {/* Step 1 - Check Challan - Enhanced with warm colors */}
        <div className="mb-6">
          <div className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 rounded-2xl shadow-xl shadow-emerald-200/30 overflow-hidden border border-emerald-100 hover:shadow-2xl hover:shadow-emerald-200/40 transition-all duration-500 transform hover:-translate-y-1">
            <div className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">Check Your Challan</h2>
                  <p className="text-emerald-600 text-sm font-medium">Check your challan number on WhatsApp</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-white to-emerald-50 rounded-xl p-4 border border-emerald-200 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 flex-1">
                    <div className="rounded-xl flex items-center justify-center shadow-lg">
                      <img src={WhatsappImage} className="w-10 h-10 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-800 text-sm">WhatsApp Service</p>
                      <p className="text-xs text-emerald-600 font-medium">Get challan details instantly</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center sm:justify-end flex-shrink-0">
                    <div className="bg-[linear-gradient(86deg,_#00A348_-9.85%,_#008A3C_93.35%)] px-3 py-2 rounded-lg shadow-lg flex items-center justify-center">
                      <span className="text-xs text-white font-semibold text-center">Parivahan Sewas</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 2 - Download App - Enhanced with vibrant colors */}
        <div className="mb-6">
          <div className="bg-gradient-to-br from-amber-50 via-white to-orange-50 rounded-2xl shadow-xl shadow-orange-200/30 overflow-hidden border border-orange-100 hover:shadow-2xl hover:shadow-orange-200/40 transition-all duration-500 transform hover:-translate-y-1">
            <div className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/30">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">Download App</h2>
                  <p className="text-orange-500 text-sm font-medium">Download the mParivahan app to proceed</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-white to-orange-50 rounded-xl p-4 border border-orange-200 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 flex-1">
                    <div className="rounded-full flex items-center justify-center shadow-lg">
                      <img src={AppImage} className="w-10 h-10 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-800 text-sm">mParivahan App</p>
                      <p className="text-xs text-orange-600 font-medium">Official transport app</p>
                    </div>
                  </div>
                  <button className="bg-[linear-gradient(86deg,_#00A348_-9.85%,_#008A3C_93.35%)] text-white px-4 py-2 rounded-xl font-semibold text-sm flex-shrink-0 ml-2 shadow-lg hover:shadow-xl hover:from-amber-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105">
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3 - Pay Challan - Enhanced with premium colors */}
        <div className="mb-6">
          <div className="bg-gradient-to-br from-rose-50 via-white to-pink-50 rounded-2xl shadow-xl shadow-pink-200/30 overflow-hidden border border-pink-100 hover:shadow-2xl hover:shadow-pink-200/40 transition-all duration-500 transform hover:-translate-y-1">
            <div className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-rose-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg shadow-pink-500/30">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">Pay Your Challan</h2>
                  <p className="text-black text-sm font-medium">View and pay your challan securely</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {/* Sample Challan - Enhanced */}
                <div className="bg-gradient-to-r from-white to-pink-50 rounded-xl p-4 border border-pink-200 shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3 flex-1">
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-gray-800 text-sm">Challan <span className='text-black font-bold'>#MTPCHM1801139164</span></p>
                        <p className="text-xs text-black font-medium">Speed Violation</p>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="font-bold text-gray-800 text-xl bg-gradient-to-r from-black to-black/70 bg-clip-text text-transparent">₹ 6,500</p>
                      <p className="text-xs text-black font-medium">Fine Amount</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                      <span className="text-sm text-emerald-600 font-semibold">Verified</span>
                    </div>
                    <button className="bg-[linear-gradient(86deg,_#00A348_-9.85%,_#008A3C_93.35%)] 500 text-white px-4 py-2 rounded-xl font-semibold text-sm flex items-center space-x-2 flex-shrink-0 shadow-lg hover:shadow-xl hover:from-rose-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
                      <span>Pay Now</span>
                    </button>
                  </div>
                </div>

                {/* Enhanced Live Update Indicator */}
                <div className="flex items-center justify-center space-x-2 py-3 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl border border-red-100">
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full transition-all duration-500 ${
                      isLiveIndicatorActive ? 'bg-red-500 shadow-lg shadow-red-500/50 animate-pulse' : 'bg-red-300'
                    }`}></div>
                    <Radio className={`w-4 h-4 transition-colors duration-500 ${
                      isLiveIndicatorActive ? 'text-red-500' : 'text-red-300'
                    }`} />
                    <span className="text-sm text-red-600 font-semibold">Pay your challan timely to avoid penalty</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          
        {/* Enhanced Quick Stats */}
        <div className="mb-6">
          <div className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 rounded-2xl shadow-xl shadow-indigo-200/30 overflow-hidden border border-indigo-100 hover:shadow-2xl hover:shadow-indigo-200/40 transition-all duration-500">
            <div className="p-5">
              <h3 className="text-lg font-bold text-center mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Quick Stats</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center transform hover:scale-110 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg shadow-emerald-500/30">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-lg font-bold text-gray-800">50,000+</p>
                  <p className="text-xs text-emerald-600 font-medium">Paid Online</p>
                </div>
                <div className="text-center transform hover:scale-110 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg shadow-blue-500/30">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-lg font-bold text-gray-800">24/7</p>
                  <p className="text-xs text-blue-600 font-medium">Available</p>
                </div>
                <div className="text-center transform hover:scale-110 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg shadow-purple-500/30">
                    <CreditCard className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-lg font-bold text-gray-800">100%</p>
                  <p className="text-xs text-purple-600 font-medium">Secure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Download CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-white via-indigo-50 to-purple-50 border-t border-indigo-200 p-4 shadow-2xl shadow-indigo-200/50 z-30 backdrop-blur-sm">
        <div className="max-w-md mx-auto">
          <button className="w-full bg-[linear-gradient(86deg,_#00A348_-9.85%,_#008A3C_93.35%)]  text-white py-4 rounded-2xl font-bold text-base flex items-center justify-center space-x-3 shadow-2xl hover:shadow-3xl hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
            <Download className="w-5 h-5" />
            <span>DOWNLOAD APP</span>
          </button>
          <p className="text-center text-sm text-indigo-600 mt-3 font-semibold">mparivahan.gov.in</p>
        </div>
      </div>
    </div>
  );
}