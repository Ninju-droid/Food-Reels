import React, { useState } from 'react';
import { useAuth } from './hooks/useAuth';
import { useFeed } from './hooks/useFeed';
import { useOrders } from './hooks/useOrders';
import { request } from './lib/api';
import MainLayout from './layouts/MainLayout';
import AuthPanel from './features/auth/AuthPanel';
import UserDashboard from './features/dashboard/UserDashboard';
import PartnerDashboard from './features/partner/PartnerDashboard';
import OrderDrawer from './features/orders/OrderDrawer';
import './styles/design-system.css';

export default function App() {
  const [mode, setMode] = useState('user');
  const [authView, setAuthView] = useState('login');
  const [query, setQuery] = useState('');
  const [selectedFood, setSelectedFood] = useState(null);
  const [notice, setNotice] = useState(null);

  const { session, loading: authLoading, error: authError, login, logout, isPartner, setError: setAuthError } = useAuth();
  const { foods, addFood, loading: feedLoading } = useFeed(query);
  const { orders, partnerOrders, placeOrder, updateOrderStatus, loading: orderLoading } = useOrders(session);

  const handleAuth = async (event) => {
    event.preventDefault();
    const payload = Object.fromEntries(new FormData(event.currentTarget).entries());
    try {
      await login(payload, mode, authView);
      setNotice({ type: 'success', message: 'Authentication successful!' });
    } catch (err) {
      // Error is handled by useAuth
    }
  };

  const handleCreateFood = async (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    try {
      const data = await request('/food', { method: 'POST', body: form });
      addFood(data.foodItem);
      event.currentTarget.reset();
      setNotice({ type: 'success', message: 'Kitchen reel published successfully!' });
    } catch (error) {
      setNotice({ type: 'error', message: error.message });
    }
  };

  const handlePlaceOrder = async (details) => {
    try {
      await placeOrder(selectedFood._id, details);
      setSelectedFood(null);
      setNotice({ type: 'success', message: 'Your order is being prepared!' });
    } catch (error) {
      setNotice({ type: 'error', message: error.message });
    }
  };

  return (
    <MainLayout
      mode={mode}
      query={query}
      session={session}
      onModeChange={setMode}
      onQueryChange={setQuery}
      onLogout={logout}
    >
      {notice && (
        <div 
          className={`fixed bottom-8 right-8 z-50 px-6 py-4 rounded-2xl glass border-white/10 shadow-2xl animate-fade-in flex items-center gap-3 ${
            notice.type === 'error' ? 'text-red-500' : 'text-green-500'
          }`}
          onClick={() => setNotice(null)}
        >
          <div className={`w-2 h-2 rounded-full ${notice.type === 'error' ? 'bg-red-500' : 'bg-green-500'}`} />
          <span className="font-bold text-sm">{notice.message}</span>
        </div>
      )}

      {!session ? (
        <AuthPanel
          mode={mode}
          authView={authView}
          setAuthView={setAuthView}
          onSubmit={handleAuth}
          loading={authLoading}
          error={authError}
        />
      ) : isPartner ? (
        <PartnerDashboard
          createFood={handleCreateFood}
          orders={partnerOrders}
          updateStatus={updateOrderStatus}
          loading={feedLoading || orderLoading}
        />
      ) : (
        <UserDashboard 
          foods={foods} 
          orders={orders} 
          onOrder={setSelectedFood} 
        />
      )}

      {selectedFood && (
        <OrderDrawer
          food={selectedFood}
          onClose={() => setSelectedFood(null)}
          onSubmit={handlePlaceOrder}
        />
      )}
    </MainLayout>
  );
}
