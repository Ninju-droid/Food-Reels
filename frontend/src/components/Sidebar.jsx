import { BadgeCheck, Home, ShoppingBag, Sparkles, Video, WalletCards } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <span className="brand-mark"><Video size={22} /></span>
        <div>
          <strong>Food Reels</strong>
          <small>Verified food discovery</small>
        </div>
      </div>

      <nav>
        <a className="active"><Home size={18} /> Feed</a>
        <a><Sparkles size={18} /> Verified Kitchens</a>
        <a><ShoppingBag size={18} /> Orders</a>
        <a><WalletCards size={18} /> Payments</a>
      </nav>

      <div className="quality-panel">
        <BadgeCheck size={20} />
        <strong>Prep-first ordering</strong>
        <span>Watch the cooking process before you buy.</span>
      </div>
    </aside>
  );
}
