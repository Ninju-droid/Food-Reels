export default function HeroBand({ foodCount, orderCount }) {
  return (
    <section className="hero-band">
      <div>
        <span className="eyebrow">MERN food reels platform</span>
        <h1>Order only after seeing how it is made.</h1>
        <p>Short preparation videos help customers verify quality while vendors showcase live kitchen craft.</p>
      </div>

      <div className="hero-stats">
        <span><strong>{foodCount}</strong> reels</span>
        <span><strong>{orderCount}</strong> live orders</span>
        <span><strong>4.8</strong> trust score</span>
      </div>
    </section>
  );
}
