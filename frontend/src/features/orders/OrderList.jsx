import React from 'react';
import Card from '../../components/ui/Card';

const OrderList = ({ orders, isPartner, onUpdateStatus }) => {
  if (!orders.length) {
    return (
      <div className="text-center py-12 glass rounded-2xl border-dashed border-white/10">
        <p className="text-[#48484a] font-bold uppercase tracking-widest text-xs">No active orders</p>
      </div>
    );
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'delivered': return 'bg-green-500/20 text-green-500';
      case 'cancelled': return 'bg-red-500/20 text-red-500';
      default: return 'bg-yellow-500/20 text-yellow-500';
    }
  };

  return (
    <div className="space-y-4">
      {orders.map((order) => (
        <Card key={order._id} className="p-4 border-white/5 hover:border-white/10">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h4 className="font-bold text-white text-sm">{order.foodItem?.title || 'Dish'}</h4>
              <p className="text-[10px] text-[#8e8e93] uppercase font-bold tracking-wider">
                Qty: {order.quantity} • Total: ₹{order.totalAmount}
              </p>
            </div>
            <span className={`text-[10px] px-2 py-1 rounded-md font-black uppercase tracking-tighter ${getStatusColor(order.status)}`}>
              {order.status}
            </span>
          </div>
          
          {isPartner && order.status !== 'delivered' && (
            <div className="mt-4 flex gap-2">
              <button 
                onClick={() => onUpdateStatus(order._id, 'delivered')}
                className="flex-1 py-1.5 bg-green-500/10 text-green-500 text-[10px] font-bold rounded-lg border border-green-500/20 hover:bg-green-500/20 transition-all"
              >
                Mark Delivered
              </button>
            </div>
          )}
        </Card>
      ))}
    </div>
  );
};

export default OrderList;
