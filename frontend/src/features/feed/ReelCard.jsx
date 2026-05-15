import React from 'react';
import { ShoppingCart, Star, MapPin, Play } from 'lucide-react';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';

const ReelCard = ({ food, onOrder }) => {
  return (
    <Card className="p-0 overflow-hidden border-white/5 group bg-[#000]">
      <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] min-h-[600px]">
        <div className="relative aspect-[9/16] lg:aspect-auto bg-black">
          <video
            src={food.videoUrl}
            className="w-full h-full object-cover"
            loop
            muted
            playsInline
            onMouseOver={(e) => e.target.play()}
            onMouseOut={(e) => e.target.pause()}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
              <Play size={32} className="text-white fill-white ml-1" />
            </div>
          </div>
        </div>

        <div className="p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-[#ff3b30]/10 text-[#ff3b30] text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-md">
                Verified Kitchen
              </span>
              <div className="flex items-center gap-1 text-yellow-500">
                <Star size={14} className="fill-yellow-500" />
                <span className="text-xs font-bold text-white">4.8</span>
              </div>
            </div>

            <h2 className="text-4xl font-black text-white mb-2 leading-tight">
              {food.title}
            </h2>
            <p className="text-[#8e8e93] text-lg mb-6 leading-relaxed">
              {food.description || 'Watch how we prepare this masterpiece with fresh ingredients and authentic spices.'}
            </p>

            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-[#ff3b30]" />
                <span className="text-sm font-semibold text-[#8e8e93]">{food.location || 'Central Kitchen'}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-semibold text-green-500">Live in Prep</span>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-xs text-[#48484a] font-bold uppercase tracking-widest">Price</span>
              <span className="text-3xl font-black text-white">₹{food.price}</span>
            </div>
            <Button onClick={() => onOrder(food)} className="px-8 py-4">
              <ShoppingCart size={20} className="mr-2" />
              Order Now
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ReelCard;
