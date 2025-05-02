import PageNav from "../components/PageNav";
import styles from "./Product.module.css";
import { Link } from "react-router-dom";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />

      <section className={styles.hero}>
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div className={styles.heroContent}>
          <h2>Track Your World Adventures</h2>
          <p>
            WorldWide is your personal travel companion, helping you document every
            step of your journey. From bustling cities to serene landscapes,
            capture your memories with precision and style.
          </p>
          <div className={styles.features}>
            <div className={styles.feature}>
              <span className={styles.icon}>🗺️</span>
              <h3>Interactive Maps</h3>
              <p>Visualize your travels with our beautiful interactive maps</p>
            </div>
            <div className={styles.feature}>
              <span className={styles.icon}>📍</span>
              <h3>Pin Your Visits</h3>
              <p>Mark and organize every city you've explored</p>
            </div>
            <div className={styles.feature}>
              <span className={styles.icon}>📝</span>
              <h3>Travel Notes</h3>
              <p>Keep detailed notes about your experiences</p>
            </div>
          </div>
          <div className={styles.cta}>
            <Link to="/pricing" className={styles.ctaLink}>View Pricing</Link>
            <Link to="/login" className={styles.ctaLinkSecondary}>Start Now</Link>
          </div>
        </div>
      </section>

      <section className={styles.details}>
        <div className={styles.detailsContent}>
          <h2>Why Choose WorldWide?</h2>
          <div className={styles.benefits}>
            <div className={styles.benefit}>
              <h3>🌟 Beautiful Interface</h3>
              <p>An intuitive and visually stunning platform designed for travelers</p>
            </div>
            <div className={styles.benefit}>
              <h3>🔒 Secure Storage</h3>
              <p>Your travel memories are safely stored and always accessible</p>
            </div>
            <div className={styles.benefit}>
              <h3>📱 Mobile Friendly</h3>
              <p>Access your travel map from any device, anywhere in the world</p>
            </div>
            <div className={styles.benefit}>
              <h3>🤝 Community</h3>
              <p>Join a community of passionate travelers sharing their experiences</p>
            </div>
          </div>
        </div>
        <img
          src="img-2.jpg"
          alt="overview of a large city with skyscrapers"
          className={styles.detailsImage}
        />
      </section>
    </main>
  );
}
