import { ChefHat, Send } from 'lucide-react';

export default function AuthPanel({ mode, authView, setAuthView, onSubmit }) {
  const isRegister = authView === 'register';
  const isPartner = mode === 'partner';

  return (
    <section className="auth-grid">
      <div className="auth-copy">
        <ChefHat size={28} />
        <h2>{isPartner ? 'Vendor kitchen access' : 'Customer access'}</h2>
        <p>
          {isPartner
            ? 'Publish food preparation reels and manage real-time orders.'
            : 'Browse preparation videos, verify hygiene and order instantly.'}
        </p>
      </div>

      <form className="auth-form" onSubmit={onSubmit}>
        <div className="tabs">
          <button type="button" className={authView === 'login' ? 'active' : ''} onClick={() => setAuthView('login')}>
            Login
          </button>
          <button type="button" className={authView === 'register' ? 'active' : ''} onClick={() => setAuthView('register')}>
            Register
          </button>
        </div>

        {isRegister ? (
          <label>
            {isPartner ? 'Kitchen name' : 'Full name'}
            <input name={isPartner ? 'name' : 'fullName'} required />
          </label>
        ) : null}

        <label>Email<input name="email" type="email" required /></label>
        <label>Password<input name="password" type="password" required minLength="6" /></label>

        <button className="primary-button" type="submit">
          <Send size={17} /> Continue
        </button>
      </form>
    </section>
  );
}
