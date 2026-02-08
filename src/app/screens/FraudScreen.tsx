import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Phone, X, Shield, AlertTriangle } from 'lucide-react';

export function FraudScreen() {
  const navigate = useNavigate();
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleChoice = (choice: 'share' | 'cut') => {
    setSelectedChoice(choice);
    setShowResult(true);
    
    // Auto-reset after 3 seconds
    setTimeout(() => {
      setShowResult(false);
      setSelectedChoice(null);
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-orange-50 p-6">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => navigate('/home')}
            className="bg-white p-3 rounded-full shadow-lg hover:scale-110 transition-all"
          >
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </button>
          <h1 className="text-3xl font-bold text-gray-800">Fraud Alert</h1>
        </div>

        {/* Warning Banner */}
        <div className="bg-red-100 border-4 border-red-300 rounded-3xl p-6 mb-8">
          <div className="flex items-center gap-3 mb-2">
            <AlertTriangle className="w-8 h-8 text-red-600" />
            <span className="text-xl font-bold text-red-700">Stay Safe!</span>
          </div>
          <p className="text-red-700 text-lg">Learn to spot fraud attempts</p>
        </div>

        {/* Phone Call Scenario */}
        {!showResult ? (
          <>
            <div className="bg-white rounded-3xl p-8 shadow-xl mb-8">
              <div className="text-center mb-6">
                <div className="inline-block bg-red-100 p-6 rounded-full mb-4 animate-pulse">
                  <Phone className="w-16 h-16 text-red-600" />
                </div>
                <p className="text-xl font-bold text-gray-800 mb-4">📞 Incoming Call...</p>
                <p className="text-lg text-gray-700 mb-2">Unknown Number</p>
              </div>

              <div className="bg-yellow-50 border-2 border-yellow-300 rounded-2xl p-6">
                <p className="text-lg text-gray-800 text-center font-semibold">
                  "Hello, I am from your bank. Please share your OTP to update your account."
                </p>
              </div>
            </div>

            {/* Choice Buttons */}
            <div className="space-y-4">
              <button
                onClick={() => handleChoice('share')}
                className="w-full bg-red-200 hover:bg-red-300 p-6 rounded-3xl shadow-lg hover:scale-105 transition-all border-4 border-red-400"
              >
                <div className="flex items-center gap-4 justify-center">
                  <div className="bg-white p-3 rounded-2xl">
                    <AlertTriangle className="w-8 h-8 text-red-700" />
                  </div>
                  <span className="text-2xl font-semibold text-gray-800">Share OTP</span>
                </div>
              </button>

              <button
                onClick={() => handleChoice('cut')}
                className="w-full bg-green-200 hover:bg-green-300 p-6 rounded-3xl shadow-lg hover:scale-105 transition-all border-4 border-green-400"
              >
                <div className="flex items-center gap-4 justify-center">
                  <div className="bg-white p-3 rounded-2xl">
                    <X className="w-8 h-8 text-green-700" />
                  </div>
                  <span className="text-2xl font-semibold text-gray-800">Cut Call</span>
                </div>
              </button>
            </div>
          </>
        ) : (
          /* Result Display */
          <div className={`${
            selectedChoice === 'cut' ? 'bg-green-100 border-green-400' : 'bg-red-100 border-red-400'
          } border-4 rounded-3xl p-8 shadow-xl animate-fade-in`}>
            <div className="text-center">
              <div className="text-6xl mb-4">
                {selectedChoice === 'cut' ? '✅' : '❌'}
              </div>
              <p className={`text-2xl font-bold mb-4 ${
                selectedChoice === 'cut' ? 'text-green-700' : 'text-red-700'
              }`}>
                {selectedChoice === 'cut' ? 'Correct!' : 'Wrong!'}
              </p>
              <p className="text-lg text-gray-700">
                {selectedChoice === 'cut' 
                  ? 'Never share OTP with anyone. Banks never ask for OTP on calls!'
                  : 'This was a fraud attempt! Never share OTP with anyone on phone calls.'
                }
              </p>
            </div>
          </div>
        )}

        {/* Safety Tips */}
        <div className="mt-8 bg-white rounded-3xl p-6 shadow-lg">
          <div className="flex gap-3 mb-4">
            <Shield className="w-6 h-6 text-green-500 flex-shrink-0" />
            <h3 className="font-bold text-gray-800 text-lg">Safety Tips:</h3>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li className="flex gap-2">
              <span>🔒</span>
              <span>Never share OTP with anyone</span>
            </li>
            <li className="flex gap-2">
              <span>📱</span>
              <span>Banks don't call and ask for OTP</span>
            </li>
            <li className="flex gap-2">
              <span>⚠️</span>
              <span>Don't click unknown links</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
