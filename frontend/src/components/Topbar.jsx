import { CircleUserRound, LogOut, Search, Store } from 'lucide-react';

export default function Topbar({ mode, query, session, onModeChange, onQueryChange, onLogout }) {
  return (
    <header className="topbar">
      <div className="search">
        <Search size={18} />
        <input
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Search dishes, reels, locations"
        />
      </div>

      <div className="mode-switch">
        <button className={mode === 'user' ? 'selected' : ''} onClick={() => onModeChange('user')}>
          <CircleUserRound size={16} /> User
        </button>
        <button className={mode === 'partner' ? 'selected' : ''} onClick={() => onModeChange('partner')}>
          <Store size={16} /> Vendor
        </button>
      </div>

      {session ? (
        <button className="ghost-button" onClick={onLogout}>
          <LogOut size={17} /> Logout
        </button>
      ) : null}
    </header>
  );
}
