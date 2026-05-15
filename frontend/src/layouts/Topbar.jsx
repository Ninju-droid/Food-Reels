import React from 'react';
import { CircleUserRound, LogOut, Search, Store } from 'lucide-react';
import Button from '../components/ui/Button';

const Topbar = ({ mode, query, session, onModeChange, onQueryChange, onLogout }) => {
  return (
    <header className="flex items-center gap-6 mb-8">
      <div className="flex-1 glass rounded-2xl flex items-center px-5 py-1 focus-within:border-white/20 transition-all">
        <Search size={18} className="text-[#8e8e93]" />
        <input
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Search dishes, reels, locations..."
          className="bg-transparent border-none focus:ring-0 w-full py-3 text-sm"
        />
      </div>

      <div className="flex items-center gap-2 bg-white/5 p-1 rounded-xl border border-white/5">
        <button 
          onClick={() => onModeChange('user')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${
            mode === 'user' ? 'bg-white/10 text-white shadow-sm' : 'text-[#8e8e93] hover:text-white'
          }`}
        >
          <CircleUserRound size={16} />
          User
        </button>
        <button 
          onClick={() => onModeChange('partner')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${
            mode === 'partner' ? 'bg-white/10 text-white shadow-sm' : 'text-[#8e8e93] hover:text-white'
          }`}
        >
          <Store size={16} />
          Vendor
        </button>
      </div>

      {session && (
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={onLogout}
          className="text-[#8e8e93] hover:text-white"
        >
          <LogOut size={18} className="mr-2" />
          Logout
        </Button>
      )}
    </header>
  );
};

export default Topbar;
