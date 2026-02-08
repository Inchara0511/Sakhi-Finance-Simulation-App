import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Plus, Minus, ArrowLeft, UtensilsCrossed, Home, GraduationCap, PiggyBank } from 'lucide-react';

interface Jar {
  id: string;
  name: string;
  icon: typeof UtensilsCrossed;
  color: string;
  amount: number;
}

export function BudgetJarsScreen() {
  const navigate = useNavigate();
  const [jars, setJars] = useState<Jar[]>([
    { id: 'food', name: 'Food', icon: UtensilsCrossed, color: 'bg-pink-300', amount: 500 },
    { id: 'rent', name: 'Rent', icon: Home, color: 'bg-blue-300', amount: 2000 },
    { id: 'education', name: 'Education', icon: GraduationCap, color: 'bg-green-300', amount: 800 },
    { id: 'savings', name: 'Savings', icon: PiggyBank, color: 'bg-purple-300', amount: 1200 },
  ]);

  const addMoney = (id: string) => {
    setJars(jars.map(jar => 
      jar.id === id ? { ...jar, amount: jar.amount + 100 } : jar
    ));
  };

  const removeMoney = (id: string) => {
    setJars(jars.map(jar => 
      jar.id === id ? { ...jar, amount: Math.max(0, jar.amount - 100) } : jar
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-orange-50 p-6">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => navigate('/home')}
            className="bg-white p-3 rounded-full shadow-lg hover:scale-110 transition-all"
          >
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </button>
          <h1 className="text-3xl font-bold text-gray-800">Budget Jars</h1>
        </div>

        {/* Jars Grid */}
        <div className="grid grid-cols-2 gap-6">
          {jars.map((jar) => {
            const Icon = jar.icon;
            const percentage = Math.min((jar.amount / 3000) * 100, 100);
            
            return (
              <div key={jar.id} className="bg-white rounded-3xl p-6 shadow-lg">
                {/* Jar Visualization */}
                <div className="flex flex-col items-center gap-4 mb-4">
                  {/* Icon */}
                  <div className={`${jar.color} p-4 rounded-2xl`}>
                    <Icon className="w-10 h-10 text-gray-700" />
                  </div>
                  
                  {/* Jar Container */}
                  <div className="relative w-24 h-32 bg-gray-100 rounded-b-3xl border-4 border-gray-300 overflow-hidden">
                    {/* Water/Fill Level */}
                    <div
                      className={`absolute bottom-0 w-full ${jar.color} transition-all duration-500`}
                      style={{ height: `${percentage}%` }}
                    />
                  </div>
                  
                  {/* Name */}
                  <span className="font-semibold text-gray-800 text-lg">{jar.name}</span>
                </div>

                {/* Amount Display */}
                <div className="text-center mb-4">
                  <span className="text-2xl font-bold text-gray-800">₹{jar.amount}</span>
                </div>

                {/* Plus/Minus Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() => removeMoney(jar.id)}
                    className="flex-1 bg-red-100 hover:bg-red-200 text-red-700 p-3 rounded-xl transition-all hover:scale-105"
                  >
                    <Minus className="w-6 h-6 mx-auto" />
                  </button>
                  <button
                    onClick={() => addMoney(jar.id)}
                    className="flex-1 bg-green-100 hover:bg-green-200 text-green-700 p-3 rounded-xl transition-all hover:scale-105"
                  >
                    <Plus className="w-6 h-6 mx-auto" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Total Display */}
        <div className="mt-8 bg-white rounded-3xl p-6 shadow-lg">
          <div className="flex justify-between items-center">
            <span className="text-xl font-semibold text-gray-700">Total Budget:</span>
            <span className="text-3xl font-bold text-purple-600">
              ₹{jars.reduce((sum, jar) => sum + jar.amount, 0)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
