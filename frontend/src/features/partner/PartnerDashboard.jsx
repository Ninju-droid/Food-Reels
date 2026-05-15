import React from 'react';
import { Upload, PieChart, Activity, Clock } from 'lucide-react';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import Input from '../../components/ui/Input';
import OrderList from '../orders/OrderList';

const PartnerDashboard = ({ createFood, orders, updateStatus, loading }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8">
      <div className="space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card className="bg-gradient-to-br from-white/5 to-transparent">
            <Activity className="text-[#ff3b30] mb-3" size={24} />
            <h4 className="text-2xl font-black text-white">{orders.length}</h4>
            <p className="text-xs text-[#8e8e93] font-bold uppercase tracking-widest">Total Orders</p>
          </Card>
          <Card className="bg-gradient-to-br from-white/5 to-transparent">
            <PieChart className="text-blue-500 mb-3" size={24} />
            <h4 className="text-2xl font-black text-white">₹{orders.reduce((sum, o) => sum + o.totalAmount, 0)}</h4>
            <p className="text-xs text-[#8e8e93] font-bold uppercase tracking-widest">Revenue</p>
          </Card>
          <Card className="bg-gradient-to-br from-white/5 to-transparent">
            <Clock className="text-green-500 mb-3" size={24} />
            <h4 className="text-2xl font-black text-white">98%</h4>
            <p className="text-xs text-[#8e8e93] font-bold uppercase tracking-widest">Efficiency</p>
          </Card>
        </div>

        <Card className="border-white/5">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-[#ff3b30]/10 rounded-xl flex items-center justify-center">
              <Upload className="text-[#ff3b30]" size={20} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Publish Kitchen Reel</h3>
              <p className="text-sm text-[#8e8e93]">Showcase your preparation to customers</p>
            </div>
          </div>

          <form onSubmit={createFood} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input label="Dish Title" name="title" placeholder="Spicy Ramen Bowl" required />
              <Input label="Price (₹)" name="price" type="number" placeholder="299" required />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#8e8e93] ml-1">Dish Description</label>
              <textarea 
                name="description" 
                rows="3" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ff3b30] focus:bg-white/10 transition-all"
                placeholder="Describe the ingredients and preparation..."
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#8e8e93] ml-1">Preparation Video</label>
              <div className="relative group cursor-pointer">
                <input 
                  type="file" 
                  name="video" 
                  accept="video/*" 
                  className="absolute inset-0 opacity-0 z-10 cursor-pointer" 
                  required
                />
                <div className="border-2 border-dashed border-white/10 group-hover:border-[#ff3b30]/30 rounded-2xl p-8 flex flex-col items-center justify-center transition-all bg-white/[0.02]">
                  <Upload className="text-[#48484a] group-hover:text-[#ff3b30] mb-3 transition-colors" size={32} />
                  <p className="text-sm text-[#8e8e93] font-medium">Click to upload or drag and drop</p>
                  <p className="text-[10px] text-[#48484a] mt-1 font-bold uppercase tracking-widest">MP4 or MOV preferred</p>
                </div>
              </div>
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Publishing Reel...' : 'Publish Reel for Discovery'}
            </Button>
          </form>
        </Card>
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-white">Incoming Orders</h3>
          <span className="bg-white/5 text-xs font-bold px-2 py-1 rounded-md text-[#8e8e93]">Real-time</span>
        </div>
        <OrderList 
          orders={orders} 
          isPartner={true} 
          onUpdateStatus={updateStatus} 
        />
      </div>
    </div>
  );
};

export default PartnerDashboard;
