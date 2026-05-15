import React from 'react';
import ReelCard from '../feed/ReelCard';
import OrderList from '../orders/OrderList';

const UserDashboard = ({ foods, orders, onOrder }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8">
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-black text-white">Your Feed</h2>
            <p className="text-[#8e8e93] text-sm">Verified prep reels from kitchens near you</p>
          </div>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-bold text-white uppercase tracking-widest border border-white/10">All</span>
            <span className="px-3 py-1 bg-transparent rounded-full text-[10px] font-bold text-[#48484a] uppercase tracking-widest border border-white/5">Trending</span>
          </div>
        </div>

        <div className="space-y-12">
          {foods.map((food) => (
            <ReelCard key={food._id} food={food} onOrder={onOrder} />
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <div className="sticky top-24">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            Recent Orders
            <span className="w-2 h-2 rounded-full bg-green-500" />
          </h3>
          <OrderList orders={orders} isPartner={false} />
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
