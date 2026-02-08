import { useNavigate } from 'react-router';
import { Mic, Wallet, Target, Smartphone, ShieldAlert, TrendingUp } from 'lucide-react';

export function HomeScreen() {
  const navigate = useNavigate();

  const menuItems = [
    { icon: Wallet, label: 'Budget Jars', color: 'bg-pink-200', route: '/budget-jars' },
    { icon: Target, label: 'Savings Goals', color: 'bg-blue-200', route: '/decision' },
    { icon: Smartphone, label: 'Digital Payments', color: 'bg-green-200', route: '/home' },
    { icon: ShieldAlert, label: 'Fraud Alert', color: 'bg-orange-200', route: '/fraud' },
    { icon: TrendingUp, label: 'My Progress', color: 'bg-purple-200', route: '/progress' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-pink-50 p-6">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-1">Namaste 👋</h1>
          <p className="text-lg text-gray-600">Welcome back!</p>
        </div>

        {/* Large Voice Button */}
        <button className="w-full bg-gradient-to-r from-pink-400 to-purple-400 text-white p-8 rounded-3xl shadow-2xl mb-8 hover:scale-105 transition-all">
          <div className="flex flex-col items-center gap-3">
            <div className="bg-white/20 p-6 rounded-full">
              <Mic className="w-16 h-16" />
            </div>
            <span className="text-2xl font-semibold">Speak to Sakhi</span>
          </div>
        </button>

        {/* Icon Grid */}
        <div className="grid grid-cols-2 gap-4">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => navigate(item.route)}
              className={`${item.color} p-6 rounded-3xl shadow-lg hover:scale-105 transition-all`}
            >
              <div className="flex flex-col items-center gap-3">
                <div className="bg-white/50 p-4 rounded-2xl">
                  <item.icon className="w-12 h-12 text-gray-700" />
                </div>
                <span className="text-base font-semibold text-gray-800 text-center">
                  {item.label}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}