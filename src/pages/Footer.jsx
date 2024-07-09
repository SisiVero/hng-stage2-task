import React from "react";

export default function Footer() {
  return (
    <div className="footer-container">
      <div>
        <div className="newsletter-footer">
          <div>
            <p>
              Be the first to receive all the recent updates, articles, and
              valuable materials.
            </p>
            <div>
              <input type="text" /> <button>Subscribe</button>
            </div>
          </div>
        </div>
        <div className="company-footer">
          <p className="company">Company</p>
          <p>About</p>
          <p>Security</p>
          <p>Blog</p>
          <p>Careers</p>
          <p>Service Status</p>
          <p>Partnerships</p>
          <p>Mission roadmaps</p>
          <p>Community</p>
        </div>
        <div className="products-footer">
          <p>Products</p>
          <p>Overview</p>
          <p>Features</p>
          <p>Tutorials</p>
          <p>Pricing</p>
        </div>
        <div className="socials-footer">
          <p>Follow Us</p>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
          <p>TikTok</p>
        </div>
      </div>
      <div className="bottom-footer">
        <p>Terms of Service</p>
        <p>Privacy Policy</p>
        <p>Security</p>
        <p>Sitemap</p>
      </div>
    </div>
  );
}
