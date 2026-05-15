import { Plus } from 'lucide-react';
import OrderList from './OrderList';

export default function PartnerDashboard({ createFood, orders, updateStatus }) {
  return (
    <div className="content-grid">
      <section className="vendor-panel">
        <h2>Publish preparation reel</h2>
        <form className="food-form" onSubmit={createFood}>
          <label>Dish name<input name="name" required /></label>
          <label>Description<textarea name="description" required rows="4" /></label>

          <div className="form-row">
            <label>Price<input name="price" type="number" min="0" required /></label>
            <label>Category<input name="category" placeholder="Meal bowl" /></label>
          </div>

          <div className="form-row">
            <label>Location<input name="location" placeholder="Near customer" /></label>
            <label>Cook time<input name="cookTime" placeholder="20 min" /></label>
          </div>

          <label>Preparation video<input name="video" type="file" accept="video/*" required /></label>

          <button className="primary-button" type="submit">
            <Plus size={17} /> Publish reel
          </button>
        </form>
      </section>

      <OrderList
        title="Incoming Orders"
        orders={orders}
        empty="New customer orders will appear here."
        onStatus={updateStatus}
      />
    </div>
  );
}
