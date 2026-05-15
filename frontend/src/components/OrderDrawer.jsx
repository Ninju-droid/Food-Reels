import { ShoppingBag } from 'lucide-react';

export default function OrderDrawer({ food, onClose, onSubmit }) {
  return (
    <div className="drawer-backdrop">
      <form className="order-drawer" onSubmit={onSubmit}>
        <button type="button" className="close-button" onClick={onClose}>x</button>
        <video src={food.video} autoPlay muted loop playsInline />
        <h2>{food.name}</h2>
        <p>{food.description}</p>
        <label>Quantity<input name="quantity" type="number" min="1" defaultValue="1" /></label>
        <label>Delivery address<textarea name="address" required rows="3" /></label>
        <label>Phone<input name="phone" required /></label>
        <button className="primary-button" type="submit">
          <ShoppingBag size={17} /> Place order
        </button>
      </form>
    </div>
  );
}
