import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, PiggyBank, Heart, Banknote, Sparkles, TrendingUp, AlertCircle } from 'lucide-react';

export function DecisionScreen() {
  const navigate = useNavigate();
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [showOutcome, setShowOutcome] = useState(false);

  const handleChoice = (choice: string) => {
    setSelectedChoice(choice);
    setShowOutcome(true);
    
    // Auto-reset after 3 seconds
    setTimeout(() => {
      setShowOutcome(false);
      setSelectedChoice(null);
    }, 3000);
  };

  const outcomes = {
    save: {
      icon: Sparkles,
      text: 'Great choice! Your savings grow',
      color: 'bg-green-100',
      textColor: 'text-green-700',
      emoji: '✨',
    },
    spend: {
      icon: Heart,
      text: 'Family is happy but savings stayed same',
      color: 'bg-yellow-100',
      textColor: 'text-yellow-700',
      emoji: '😊',
    },
    loan: {
      icon: TrendingUp,
      text: 'Good! Less debt means more freedom',
      color: 'bg-blue-100',
      textColor: 'text-blue-700',
      emoji: '📈',
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 p-6">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => navigate('/home')}
            className="bg-white p-3 rounded-full shadow-lg hover:scale-110 transition-all"
          >
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </button>
          <h1 className="text-3xl font-bold text-gray-800">Decision Time</h1>
        </div>

        {/* Scenario Card */}
        <div className="bg-gradient-to-r from-purple-200 to-pink-200 rounded-3xl p-8 shadow-xl mb-8">
          <div className="text-center">
            <div className="text-6xl mb-4">💰</div>
            <p className="text-2xl font-bold text-gray-800 mb-2">You got ₹2000 extra income</p>
            <p className="text-lg text-gray-700">What will you do?</p>
          </div>
        </div>

        {/* Choices */}
        {!showOutcome ? (
          <div className="space-y-4">
            <button
              onClick={() => handleChoice('save')}
              className="w-full bg-green-200 hover:bg-green-300 p-6 rounded-3xl shadow-lg hover:scale-105 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="bg-white p-4 rounded-2xl">
                  <PiggyBank className="w-10 h-10 text-green-700" />
                </div>
                <span className="text-2xl font-semibold text-gray-800">Save Money</span>
              </div>
            </button>

            <button
              onClick={() => handleChoice('spend')}
              className="w-full bg-pink-200 hover:bg-pink-300 p-6 rounded-3xl shadow-lg hover:scale-105 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="bg-white p-4 rounded-2xl">
                  <Heart className="w-10 h-10 text-pink-700" />
                </div>
                <span className="text-2xl font-semibold text-gray-800">Spend on Family</span>
              </div>
            </button>

            <button
              onClick={() => handleChoice('loan')}
              className="w-full bg-blue-200 hover:bg-blue-300 p-6 rounded-3xl shadow-lg hover:scale-105 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="bg-white p-4 rounded-2xl">
                  <Banknote className="w-10 h-10 text-blue-700" />
                </div>
                <span className="text-2xl font-semibold text-gray-800">Pay Loan</span>
              </div>
            </button>
          </div>
        ) : (
          /* Outcome Display */
          <div className={`${outcomes[selectedChoice as keyof typeof outcomes].color} rounded-3xl p-8 shadow-xl animate-fade-in`}>
            <div className="text-center">
              <div className="text-6xl mb-4">{outcomes[selectedChoice as keyof typeof outcomes].emoji}</div>
              <p className={`text-2xl font-bold ${outcomes[selectedChoice as keyof typeof outcomes].textColor}`}>
                {outcomes[selectedChoice as keyof typeof outcomes].text}
              </p>
            </div>
          </div>
        )}

        {/* Info Box */}
        <div className="mt-8 bg-white rounded-3xl p-6 shadow-lg">
          <div className="flex gap-3">
            <AlertCircle className="w-6 h-6 text-blue-500 flex-shrink-0" />
            <p className="text-gray-700">
              Each choice teaches you about money management. Try different options!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
