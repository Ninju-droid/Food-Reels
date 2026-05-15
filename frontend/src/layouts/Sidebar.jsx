import React from 'react';
import { BadgeCheck, Home, ShoppingBag, Sparkles, Video, WalletCards } from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { icon: <Home size={20} />, label: 'Feed', active: true },
    { icon: <Sparkles size={20} />, label: 'Verified Kitchens' },
    { icon: <ShoppingBag size={20} />, label: 'Orders' },
    { icon: <WalletCards size={20} />, label: 'Payments' },
  ];

  return (
    <aside className="w-[280px] h-screen sticky top-0 bg-[#0a0a0b] border-r border-white/5 p-6 flex flex-col gap-10">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-[#ff3b30] rounded-xl flex items-center justify-center shadow-lg shadow-red-500/30">
          <Video size={22} color="white" />
        </div>
        <div>
          <h2 className="text-xl font-extrabold tracking-tight text-white">Food Reels</h2>
          <p className="text-[10px] uppercase tracking-widest text-[#8e8e93] font-bold">Premium Discovery</p>
        </div>
      </div>

      <nav className="flex flex-col gap-2">
        {navItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 ${
              item.active 
                ? 'bg-white/5 text-white' 
                : 'text-[#8e8e93] hover:text-white hover:bg-white/[0.02]'
            }`}
          >
            {item.icon}
            <span className="font-semibold">{item.label}</span>
          </a>
        ))}
      </nav>

      <div className="mt-auto glass p-5 rounded-2xl border-white/5">
        <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center mb-3">
          <BadgeCheck size={18} className="text-[#ff3b30]" />
        </div>
        <h3 className="text-sm font-bold text-white mb-1">Prep-first ordering</h3>
        <p className="text-xs text-[#8e8e93] leading-relaxed">
          Watch the cooking process before you buy.
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
