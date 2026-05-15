import React, { useState } from 'react';
import Modal from '../../components/ui/Modal';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';

const OrderDrawer = ({ food, onClose, onSubmit }) => {
  const [quantity, setQuantity] = useState(1);
  const [address, setAddress] = useState('');

  const handleOrder = (e) => {
    e.preventDefault();
    onSubmit({ quantity, address });
  };

  return (
    <Modal 
      isOpen={!!food} 
      onClose={onClose} 
      title="Confirm Order"
    >
      <div className="space-y-6">
        <div className="flex gap-4 p-3 bg-white/5 rounded-2xl border border-white/5">
          <img 
            src={food.videoUrl?.replace('.mp4', '.jpg')} 
            className="w-20 h-20 rounded-xl object-cover" 
            alt={food.title} 
            onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=200&q=80' }}
          />
          <div>
            <h3 className="font-bold text-white">{food.title}</h3>
            <p className="text-sm text-[#8e8e93]">₹{food.price} per portion</p>
          </div>
        </div>

        <form onSubmit={handleOrder} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Quantity"
              type="number"
              min="1"
              max="10"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
            />
            <div className="flex flex-col justify-end pb-2">
              <span className="text-[10px] text-[#48484a] font-bold uppercase tracking-widest">Total</span>
              <span className="text-xl font-black text-[#ff3b30]">₹{food.price * quantity}</span>
            </div>
          </div>

          <Input
            label="Delivery Address"
            placeholder="Enter your full address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />

          <div className="pt-4">
            <Button type="submit" className="w-full">
              Place Real-Time Order
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default OrderDrawer;
