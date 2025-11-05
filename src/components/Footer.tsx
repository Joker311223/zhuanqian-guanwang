import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: '企业官网开发', href: '#services' },
      { name: '管理系统开发', href: '#services' },
      { name: '小程序开发', href: '#services' },
      { name: '移动应用开发', href: '#services' }
    ],
    company: [
      { name: '关于我们', href: '#home' },
      { name: '服务案例', href: '#projects' },
      { name: '技术团队', href: '#tech' },
      { name: '联系我们', href: '#contact' }
    ],
    resources: [
      { name: '技术博客', href: '#' },
      { name: '开发文档', href: '#' },
      { name: '常见问题', href: '#' },
      { name: '隐私政策', href: '#' }
    ]
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-brand"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="footer-logo">
              <span className="logo-icon">⚡</span>
              <span className="logo-text">创新科技工作室</span>
            </div>
            <p className="footer-description">
              专业的技术团队，为您提供从前端到后端的完整解决方案。
              让技术赋能业务，助力企业数字化转型。
            </p>
            <div className="footer-contact">
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>17826854004</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span>contact@studio.com</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="footer-links-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <div className="footer-links-group">
              <h4 className="links-title">服务项目</h4>
              <ul className="links-list">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-links-group">
              <h4 className="links-title">公司信息</h4>
              <ul className="links-list">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-links-group">
              <h4 className="links-title">资源中心</h4>
              <ul className="links-list">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} 创新科技工作室. All rights reserved.
            </p>
            <div className="social-links">
              <motion.a
                href="#"
                className="social-link"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <span>微信</span>
              </motion.a>
              <motion.a
                href="#"
                className="social-link"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <span>GitHub</span>
              </motion.a>
              <motion.a
                href="#"
                className="social-link"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <span>邮箱</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
