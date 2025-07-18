import { useState, useEffect } from 'react';
import { Download, Shield, CheckCircle, Globe, Radio, MessageCircle, Smartphone, Settings, Lock, AlertTriangle } from 'lucide-react';

export default function CredSupportPortal() {
  const [isLiveIndicatorActive, setIsLiveIndicatorActive] = useState(true);

  // Live indicator animation
  useEffect(() => {
    const interval = setInterval(() => {
      setIsLiveIndicatorActive(prev => !prev);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Load Gilroy font
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Gilroy:wght@400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] pb-20 relative overflow-hidden" style={{ fontFamily: 'Gilroy, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-emerald-400/8 to-emerald-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-emerald-300/8 to-emerald-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-emerald-200/5 to-emerald-300/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-4xl mx-auto px-3 sm:px-4 relative z-10">
        
        {/* Header */}
        <div className="py-4 sm:py-8 text-center">
          <div className="flex justify-between items-center mb-4 sm:mb-6">
            <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-black rounded flex items-center justify-center">
                <span className="text-white font-bold text-[10px] sm:text-xs">CRED</span>
              </div>
            </div>
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-2 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors">
              Download CRED
            </button>
          </div>
          
          <h1 className="text-5xl sm:text-7xl md:text-7xl font-bold text-emerald-400 mb-3 sm:mb-4 mt-8 sm:mt-20 md:mt-40 leading-tight">
            get support <br />
             on-demand.
            <br />
            via the app.
          </h1>
          
          <div className='max-w-3xl mx-auto px-3 relative z-10'>
            <p className="text-gray-400 text-xs sm:text-lg md:text-2xl lg:text-[34px] leading-relaxed sm:leading-loose p-4">
              CRED doesn't have a customer phone line but we do have experts on stand-by to help resolve any problems you might be facing. all you need to get in touch is follow the steps shown below.
            </p>
          </div>
        
        {/* Get Support with white border */}
        <div className='text-white text-center mb-8'>
          <div className="inline-block border-2 border-white rounded-full px-4 py-2 mt-4">
            <span className="text-md font-semibold">get support</span>
          </div>
        </div>
        
        {/* Fraud Protection Section */}
        <div className="bg-black w-full py-5 mb-8">
          <div className="max-w-[1000px] mx-auto px-5 text-center">
            <h2 className="text-xl sm:text-3xl font-bold text-gray-300 mb-4">
              protect yourself from fraudsters. follow these safe practices.
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              never share your bank account number, UPI pin, CVV, OTP, and other such sensitive information with anyone even if they claim to be from CRED
            </p>
          </div>
        </div>
        
        </div>
      </div>

      {/* Mobile-friendly container for steps */}
      <div className="max-w-md mx-auto px-4 relative z-10">
        
        {/* Step 1: Install App */}
        <div className="mb-4">
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl shadow-xl shadow-emerald-500/10 overflow-hidden border border-gray-700 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 transform hover:-translate-y-1">
            <div className="p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 bg-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
                  <span className="text-white font-bold text-xs">1</span>
                </div>
                <div>
                  <h2 className="text-base font-semibold text-white">Install the CRED Support App</h2>
                  <p className="text-emerald-400 text-xs font-medium">Download and install the official app</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg p-3 border border-gray-600 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 flex-1">
                    <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center shadow-lg">
                      <Smartphone className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-white text-sm">CRED Support App</p>
                      <p className="text-xs text-emerald-400 font-medium">Official support application</p>
                    </div>
                  </div>
                  <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-3 py-1.5 rounded-lg font-semibold text-xs flex-shrink-0 ml-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    Install
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 2: Update Version */}
        <div className="mb-4">
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl shadow-xl shadow-emerald-500/10 overflow-hidden border border-gray-700 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 transform hover:-translate-y-1">
            <div className="p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-600/30">
                  <span className="text-white font-bold text-xs">2</span>
                </div>
                <div>
                  <h2 className="text-base font-semibold text-white">Open and Update to Latest Version</h2>
                  <p className="text-emerald-400 text-xs font-medium">Ensure you have the most recent version</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg p-3 border border-gray-600 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 flex-1">
                    <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center shadow-lg">
                      <Download className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-white text-sm">App Update</p>
                      <p className="text-xs text-emerald-400 font-medium">Latest version required</p>
                    </div>
                  </div>
                  <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1.5 rounded-lg font-semibold text-xs flex-shrink-0 ml-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3: Enable Accessibility */}
        <div className="mb-4">
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl shadow-xl shadow-emerald-500/10 overflow-hidden border border-gray-700 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 transform hover:-translate-y-1">
            <div className="p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 bg-emerald-700 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-700/30">
                  <span className="text-white font-bold text-xs">3</span>
                </div>
                <div>
                  <h2 className="text-base font-semibold text-white">Enable Accessibility</h2>
                  <p className="text-emerald-400 text-xs font-medium">Allow accessibility permissions</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg p-3 border border-gray-600 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 flex-1">
                    <div className="w-8 h-8 bg-emerald-700 rounded-lg flex items-center justify-center shadow-lg">
                      <Settings className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-white text-sm">Accessibility Settings</p>
                      <p className="text-xs text-emerald-400 font-medium">Required for app functionality</p>
                    </div>
                  </div>
                  <button className="bg-emerald-700 hover:bg-emerald-800 text-white px-3 py-1.5 rounded-lg font-semibold text-xs flex-shrink-0 ml-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    Enable
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 4: Grant Permissions */}
        <div className="mb-4">
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl shadow-xl shadow-emerald-500/10 overflow-hidden border border-gray-700 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 transform hover:-translate-y-1">
            <div className="p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 bg-amber-500 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/30">
                  <span className="text-white font-bold text-xs">4</span>
                </div>
                <div>
                  <h2 className="text-base font-semibold text-white">Grant All Requested Permissions</h2>
                  <p className="text-amber-400 text-xs font-medium">Allow all necessary permissions</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg p-3 border border-gray-600 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 flex-1">
                    <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center shadow-lg">
                      <Shield className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-white text-sm">App Permissions</p>
                      <p className="text-xs text-amber-400 font-medium">Grant all requested access</p>
                    </div>
                  </div>
                  <button className="bg-amber-500 hover:bg-amber-600 text-white px-3 py-1.5 rounded-lg font-semibold text-xs flex-shrink-0 ml-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    Grant
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 5: Cancel Suspicious Payments */}
        <div className="mb-4">
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl shadow-xl shadow-emerald-500/10 overflow-hidden border border-gray-700 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 transform hover:-translate-y-1">
            <div className="p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 bg-red-500 rounded-xl flex items-center justify-center shadow-lg shadow-red-500/30">
                  <span className="text-white font-bold text-xs">5</span>
                </div>
                <div>
                  <h2 className="text-base font-semibold text-white">Cancel All Suspicious Payments</h2>
                  <p className="text-red-400 text-xs font-medium">Stop any unauthorized transactions</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg p-3 border border-gray-600 shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 flex-1">
                      <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center shadow-lg">
                        <AlertTriangle className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-white text-sm">Security Check</p>
                        <p className="text-xs text-red-400 font-medium">Review and cancel suspicious activity</p>
                      </div>
                    </div>
                    <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-lg font-semibold text-xs flex-shrink-0 ml-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      Cancel
                    </button>
                  </div>
                </div>

                {/* Live warning indicator */}
                <div className="flex items-center justify-center space-x-2 py-2 bg-gradient-to-r from-red-900/30 to-red-800/30 rounded-lg border border-red-500/30">
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full transition-all duration-500 ${
                      isLiveIndicatorActive ? 'bg-red-500 shadow-lg shadow-red-500/50 animate-pulse' : 'bg-red-300'
                    }`}></div>
                    <Radio className={`w-3 h-3 transition-colors duration-500 ${
                      isLiveIndicatorActive ? 'text-red-500' : 'text-red-300'
                    }`} />
                    <span className="text-xs text-red-400 font-semibold">If need any help press the support button</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mb-4">
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl shadow-xl shadow-emerald-500/10 overflow-hidden border border-gray-700 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500">
            <div className="p-4">
              <h3 className="text-base font-bold text-center mb-4 text-emerald-400">Quick Stats</h3>
              <div className="grid grid-cols-3 gap-3">
                <div className="text-center transform hover:scale-110 transition-transform duration-300">
                  <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-2 shadow-lg shadow-emerald-500/30">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-base font-bold text-white">1M+</p>
                  <p className="text-xs text-emerald-400 font-medium">Users Protected</p>
                </div>
                <div className="text-center transform hover:scale-110 transition-transform duration-300">
                  <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-2 shadow-lg shadow-emerald-600/30">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-base font-bold text-white">24/7</p>
                  <p className="text-xs text-emerald-400 font-medium">Support</p>
                </div>
                <div className="text-center transform hover:scale-110 transition-transform duration-300">
                  <div className="w-10 h-10 bg-emerald-700 rounded-xl flex items-center justify-center mx-auto mb-2 shadow-lg shadow-emerald-700/30">
                    <Lock className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-base font-bold text-white">100%</p>
                  <p className="text-xs text-emerald-400 font-medium">Secure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed bottom support button */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-t border-gray-700 p-4 shadow-2xl shadow-emerald-500/20 z-30 backdrop-blur-sm">
        <div className="max-w-xs mx-auto">
          <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center space-x-2 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
            <MessageCircle className="w-4 h-4" />
            <span>CONNECT WITH SUPPORT</span>
          </button>
          <p className="text-center text-xs text-emerald-400 mt-2 font-semibold">Get help via WhatsApp</p>
        </div>
      </div>
    </div>
  );
}