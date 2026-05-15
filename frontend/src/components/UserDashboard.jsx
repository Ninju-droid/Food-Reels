import OrderList from './OrderList';
import ReelCard from './ReelCard';

export default function UserDashboard({ foods, orders, onOrder }) {
  return (
    <div className="content-grid">
      <section className="reel-feed">
        {foods.map((food) => (
          <ReelCard key={food._id} food={food} onOrder={onOrder} />
        ))}
      </section>

      <OrderList title="My Orders" orders={orders} empty="Orders appear here after checkout." />
    </div>
  );
}
