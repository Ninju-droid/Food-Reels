import { Clock3, Heart, IndianRupee, MapPin, ShoppingBag, Store } from 'lucide-react';

export default function ReelCard({ food, onOrder }) {
  return (
    <article className="reel-card">
      <video src={food.video} controls muted loop playsInline />

      <div className="reel-info">
        <div>
          <span className="pill">{food.category}</span>
          <h2>{food.name}</h2>
          <p>{food.description}</p>
        </div>

        <div className="meta-row">
          <span><Store size={15} /> {food.foodPartner?.name || 'Verified vendor'}</span>
          <span><MapPin size={15} /> {food.location}</span>
          <span><Clock3 size={15} /> {food.cookTime}</span>
        </div>

        <div className="reel-actions">
          <strong><IndianRupee size={18} /> {food.price || 0}</strong>
          <button><Heart size={18} /></button>
          <button className="primary-button" onClick={() => onOrder(food)}>
            <ShoppingBag size={17} /> Order now
          </button>
        </div>
      </div>
    </article>
  );
}
