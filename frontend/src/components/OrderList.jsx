import { PackageCheck } from 'lucide-react';

const orderStatuses = [
  'placed',
  'accepted',
  'preparing',
  'out-for-delivery',
  'delivered',
  'cancelled'
];

export default function OrderList({ title, orders, empty, onStatus }) {
  return (
    <aside className="orders-panel">
      <h2><PackageCheck size={20} /> {title}</h2>

      {orders.length === 0 ? <p className="empty-state">{empty}</p> : null}

      {orders.map((order) => (
        <article className="order-item" key={order._id}>
          <strong>{order.food?.name || 'Food item'}</strong>
          <span>{order.quantity} item - {order.status}</span>
          <small>{order.address}</small>

          {onStatus ? (
            <select value={order.status} onChange={(event) => onStatus(order._id, event.target.value)}>
              {orderStatuses.map((status) => (
                <option key={status} value={status}>{formatStatus(status)}</option>
              ))}
            </select>
          ) : null}
        </article>
      ))}
    </aside>
  );
}

function formatStatus(status) {
  return status
    .split('-')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');
}
