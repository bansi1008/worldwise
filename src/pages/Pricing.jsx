import PageNav from "../components/PageNav";
import styles from "./Product.module.css";
import { Link } from "react-router-dom";

export default function Pricing() {
  return (
    <main className={styles.product}>
      <PageNav />

      <section className={styles.pricing}>
        <div className={styles.pricingHeader}>
          <h2>Choose Your Adventure Plan</h2>
          <p>Start tracking your worldwide adventures today</p>
        </div>

        <div className={styles.pricingGrid}>
          <div className={styles.pricingCard}>
            <div className={styles.pricingCardHeader}>
              <h3>Free</h3>
              <p className={styles.price}>$0<span>/month</span></p>
            </div>
            <ul className={styles.features}>
              <li>✓ Up to 5 cities</li>
              <li>✓ Basic city notes</li>
              <li>✓ Standard map features</li>
              <li>✓ Community access</li>
            </ul>
            <Link to="/login" className={styles.ctaLinkSecondary}>Start Free</Link>
          </div>

          <div className={`${styles.pricingCard} ${styles.featured}`}>
            <div className={styles.pricingCardHeader}>
              <h3>Pro</h3>
              <p className={styles.price}>$9<span>/month</span></p>
              <span className={styles.badge}>Popular</span>
            </div>
            <ul className={styles.features}>
              <li>✓ Unlimited cities</li>
              <li>✓ Advanced city notes</li>
              <li>✓ Premium map features</li>
              <li>✓ Priority support</li>
              <li>✓ Offline access</li>
              <li>✓ Custom categories</li>
            </ul>
            <Link to="/login" className={styles.ctaLink}>Start Pro Trial</Link>
          </div>

          <div className={styles.pricingCard}>
            <div className={styles.pricingCardHeader}>
              <h3>Ultimate</h3>
              <p className={styles.price}>$19<span>/month</span></p>
            </div>
            <ul className={styles.features}>
              <li>✓ All Pro features</li>
              <li>✓ Travel analytics</li>
              <li>✓ Team collaboration</li>
              <li>✓ API access</li>
              <li>✓ Custom branding</li>
              <li>✓ 24/7 VIP support</li>
            </ul>
            <Link to="/login" className={styles.ctaLinkSecondary}>Contact Sales</Link>
          </div>
        </div>

        <div className={styles.guarantee}>
          <h3>🎉 30-Day Money-Back Guarantee</h3>
          <p>Try WorldWide Pro risk-free. If you're not satisfied, get a full refund within the first 30 days.</p>
        </div>
      </section>
    </main>
  );
}
