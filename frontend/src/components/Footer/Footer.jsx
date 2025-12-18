import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Üst Bölüm */}
        <div className="footer-top">
          {/* Logo ve Açıklama */}
          <div className="footer-section footer-about">
            <div className="footer-logo">
              <div className="footer-logo-icon-wrapper">
                <span className="footer-logo-icon">🛒</span>
              </div>
              <span className="footer-logo-text">İNDİRİMSEPETİ</span>
            </div>
            <p className="footer-description">
              En iyi fiyatlarla en kaliteli ürünleri bulabileceğiniz 
              güvenilir alışveriş platformu. Binlerce ürün, yüzlerce marka, 
              tek adres.
            </p>
            {/* Sosyal Medya */}
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Hızlı Linkler */}
          <div className="footer-section footer-links">
            <h3 className="footer-title">Hızlı Linkler</h3>
            <ul className="footer-link-list">
              <li>
                <a href="/" className="footer-link">Ana Sayfa</a>
              </li>
              <li>
                <a href="/favorites" className="footer-link">Favorilerim</a>
              </li>
              <li>
                <a href="/profile" className="footer-link">Hesabım</a>
              </li>
              <li>
                <a href="#" className="footer-link">Kategoriler</a>
              </li>
            </ul>
          </div>

          {/* Müşteri Hizmetleri */}
          <div className="footer-section footer-support">
            <h3 className="footer-title">Müşteri Hizmetleri</h3>
            <ul className="footer-link-list">
              <li>
                <a href="#" className="footer-link">Hakkımızda</a>
              </li>
              <li>
                <a href="#" className="footer-link">İletişim</a>
              </li>
              <li>
                <a href="#" className="footer-link">Sık Sorulan Sorular</a>
              </li>
              <li>
                <a href="#" className="footer-link">Kargo ve Teslimat</a>
              </li>
              <li>
                <a href="#" className="footer-link">İade ve Değişim</a>
              </li>
            </ul>
          </div>

          {/* İletişim Bilgileri */}
          <div className="footer-section footer-contact">
            <h3 className="footer-title">İletişim</h3>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>İstanbul, Türkiye</span>
              </li>
              <li className="footer-contact-item">
                <FaPhone className="contact-icon" />
                <a href="tel:+905551234567">+90 (555) 123 45 67</a>
              </li>
              <li className="footer-contact-item">
                <FaEnvelope className="contact-icon" />
                <a href="mailto:info@indirimsepeti.com">info@indirimsepeti.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Alt Bölüm - Telif Hakkı */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © {currentYear} İNDİRİMSEPETİ. Tüm hakları saklıdır.
            </p>
            <div className="footer-legal">
              <a href="#" className="footer-legal-link">Gizlilik Politikası</a>
              <span className="footer-separator">|</span>
              <a href="#" className="footer-legal-link">Kullanım Koşulları</a>
              <span className="footer-separator">|</span>
              <a href="#" className="footer-legal-link">KVKK</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

