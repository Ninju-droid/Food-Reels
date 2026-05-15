import { useState, useEffect, useCallback } from 'react';
import { api } from '../lib/api';

export function useOrders(session) {
  const [orders, setOrders] = useState([]);
  const [partnerOrders, setPartnerOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadOrders = useCallback(async () => {
    if (!session) return;
    setLoading(true);
    try {
      if (session.role === 'user') {
        const data = await api.get('/orders/me');
        setOrders(data.orders || []);
      } else if (session.role === 'partner') {
        const data = await api.get('/orders/partner');
        setPartnerOrders(data.orders || []);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [session]);

  useEffect(() => {
    loadOrders();
  }, [loadOrders]);

  const placeOrder = async (foodId, details) => {
    try {
      const data = await api.post('/orders', {
        ...details,
        foodId,
        quantity: Number(details.quantity) || 1
      });
      setOrders((current) => [data.order, ...current]);
      return data.order;
    } catch (err) {
      if (foodId.startsWith('demo-')) {
        throw new Error('Login to order live items');
      }
      throw err;
    }
  };

  const updateOrderStatus = async (orderId, status) => {
    try {
      const data = await api.patch(`/orders/${orderId}/status`, { status });
      setPartnerOrders((current) => 
        current.map((order) => order._id === orderId ? data.order : order)
      );
      return data.order;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  return {
    orders,
    partnerOrders,
    loading,
    error,
    placeOrder,
    updateOrderStatus,
    refresh: loadOrders
  };
}
