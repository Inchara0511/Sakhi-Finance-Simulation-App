import { useNavigate } from 'react-router';
import { ArrowLeft, Award, Star, TrendingUp, Target } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

export function ProgressScreen() {
  const navigate = useNavigate();

  // Mock savings data
  const savingsData = [
    { month: 'Jan', amount: 1000 },
    { month: 'Feb', amount: 1500 },
    { month: 'Mar', amount: 2200 },
    { month: 'Apr', amount: 2800 },
    { month: 'May', amount: 3500 },
    { month: 'Jun', amount: 4500 },
  ];

  const badges = [
    { name: 'First Save', icon: '🌟', earned: true, color: 'bg-yellow-200' },
    { name: 'Budget Pro', icon: '💰', earned: true, color: 'bg-green-200' },
    { name: 'Fraud Fighter', icon: '🛡️', earned: true, color: 'bg-blue-200' },
    { name: 'Save Master', icon: '👑', earned: false, color: 'bg-gray-200' },
  ];

  const confidenceScore = 75;

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 p-6 pb-20">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => navigate('/home')}
            className="bg-white p-3 rounded-full shadow-lg hover:scale-110 transition-all"
          >
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </button>
          <h1 className="text-3xl font-bold text-gray-800">My Progress</h1>
        </div>

        {/* Confidence Score */}
        <div className="bg-gradient-to-r from-purple-200 to-pink-200 rounded-3xl p-8 shadow-xl mb-6">
          <div className="text-center mb-4">
            <Star className="w-12 h-12 text-yellow-500 mx-auto mb-2" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Confidence Score</h2>
          </div>
          
          {/* Circular Progress */}
          <div className="relative w-40 h-40 mx-auto">
            <svg className="w-40 h-40 transform -rotate-90">
              <circle
                cx="80"
                cy="80"
                r="70"
                stroke="#e5e7eb"
                strokeWidth="12"
                fill="none"
              />
              <circle
                cx="80"
                cy="80"
                r="70"
                stroke="url(#gradient)"
                strokeWidth="12"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 70}`}
                strokeDashoffset={`${2 * Math.PI * 70 * (1 - confidenceScore / 100)}`}
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-5xl font-bold text-gray-800">{confidenceScore}%</span>
            </div>
          </div>
        </div>

        {/* Savings Growth Chart */}
        <div className="bg-white rounded-3xl p-6 shadow-xl mb-6">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-6 h-6 text-green-500" />
            <h2 className="text-xl font-bold text-gray-800">Savings Growth</h2>
          </div>
          
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={savingsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis 
                dataKey="month" 
                stroke="#6b7280"
                style={{ fontSize: '12px' }}
              />
              <YAxis 
                stroke="#6b7280"
                style={{ fontSize: '12px' }}
              />
              <Line 
                type="monotone" 
                dataKey="amount" 
                stroke="#8b5cf6" 
                strokeWidth={3}
                dot={{ fill: '#8b5cf6', r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>

          <div className="mt-4 bg-purple-50 rounded-2xl p-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Total Saved:</span>
              <span className="text-2xl font-bold text-purple-600">₹4,500</span>
            </div>
          </div>
        </div>

        {/* Badges Earned */}
        <div className="bg-white rounded-3xl p-6 shadow-xl">
          <div className="flex items-center gap-2 mb-4">
            <Award className="w-6 h-6 text-yellow-500" />
            <h2 className="text-xl font-bold text-gray-800">Badges Earned</h2>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {badges.map((badge, index) => (
              <div
                key={index}
                className={`${badge.color} rounded-2xl p-4 shadow transition-all ${
                  badge.earned ? 'scale-100' : 'opacity-50'
                }`}
              >
                <div className="text-center">
                  <div className="text-4xl mb-2">{badge.icon}</div>
                  <p className="text-sm font-semibold text-gray-800">{badge.name}</p>
                  {!badge.earned && (
                    <p className="text-xs text-gray-600 mt-1">Locked</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Summary */}
        <div className="mt-6 bg-gradient-to-r from-green-100 to-blue-100 rounded-3xl p-6 shadow-xl">
          <div className="flex items-center gap-2 mb-3">
            <Target className="w-6 h-6 text-green-600" />
            <h2 className="text-xl font-bold text-gray-800">Achievements</h2>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-3xl font-bold text-gray-800">12</p>
              <p className="text-sm text-gray-600">Lessons</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-800">8</p>
              <p className="text-sm text-gray-600">Decisions</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-800">3</p>
              <p className="text-sm text-gray-600">Badges</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
