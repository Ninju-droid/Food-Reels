import React from 'react';
import { UserPlus, LogIn, Mail, Lock, User } from 'lucide-react';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import Input from '../../components/ui/Input';

const AuthPanel = ({ mode, authView, setAuthView, onSubmit, loading, error }) => {
  const isRegister = authView === 'register';

  return (
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12">
      <div className="space-y-6">
        <h1 className="text-5xl font-black gradient-text">
          {isRegister ? 'Join the community' : 'Welcome back'}
        </h1>
        <p className="text-xl text-[#8e8e93]">
          {isRegister 
            ? 'Discover verified kitchens and watch real-time prep reels.' 
            : 'Sign in to order your favorite verified dishes.'}
        </p>
        <div className="flex gap-4">
          <div className="flex -space-x-3">
            {[1,2,3,4].map(i => (
              <img 
                key={i}
                src={`https://i.pravatar.cc/100?u=${i + 10}`} 
                className="w-10 h-10 rounded-full border-2 border-[#0a0a0b]" 
                alt="User"
              />
            ))}
          </div>
          <p className="text-sm text-[#8e8e93] self-center">
            Joined by <span className="text-white font-bold">2k+</span> foodies
          </p>
        </div>
      </div>

      <Card className="border-white/5 shadow-2xl">
        <div className="flex bg-white/5 p-1 rounded-xl mb-8">
          <button
            onClick={() => setAuthView('login')}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-bold transition-all ${
              !isRegister ? 'bg-white/10 text-white shadow-sm' : 'text-[#8e8e93] hover:text-white'
            }`}
          >
            <LogIn size={16} /> Login
          </button>
          <button
            onClick={() => setAuthView('register')}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-bold transition-all ${
              isRegister ? 'bg-white/10 text-white shadow-sm' : 'text-[#8e8e93] hover:text-white'
            }`}
          >
            <UserPlus size={16} /> Register
          </button>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          {isRegister && (
            <Input
              name="name"
              label="Full Name"
              placeholder="John Doe"
              icon={<User size={18} />}
              required
            />
          )}
          <Input
            name="email"
            label="Email Address"
            type="email"
            placeholder="john@example.com"
            icon={<Mail size={18} />}
            required
          />
          <Input
            name="password"
            label="Password"
            type="password"
            placeholder="••••••••"
            icon={<Lock size={18} />}
            required
          />

          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-500 text-xs p-3 rounded-lg">
              {error}
            </div>
          )}

          <Button 
            type="submit" 
            className="w-full mt-4"
            disabled={loading}
          >
            {loading ? 'Processing...' : (isRegister ? 'Create Account' : 'Sign In')}
          </Button>

          <p className="text-[10px] text-center text-[#48484a] mt-4 uppercase tracking-widest font-bold">
            Secured by Food Reels Cloud™
          </p>
        </form>
      </Card>
    </div>
  );
};

export default AuthPanel;
