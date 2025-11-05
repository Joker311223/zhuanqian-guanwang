import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero: React.FC = () => {
  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="container hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            打造卓越的
            <span className="gradient-text"> 数字化解决方案</span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            专业团队 · 企业级品质 · 全栈开发能力
            <br />
            为您的业务提供从前端到后端的完整技术支持
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.button
              className="primary-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              开始合作
              <span className="button-icon">→</span>
            </motion.button>

            <motion.button
              className="secondary-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              查看案例
            </motion.button>
          </motion.div>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="stat-item">
              <div className="stat-number">100+</div>
              <div className="stat-label">成功项目</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">企业客户</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">客户满意度</div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <motion.div
            className="visual-card card-1"
            animate={floatingAnimation}
          >
            <div className="card-icon">💻</div>
            <div className="card-title">前端开发</div>
          </motion.div>

          <motion.div
            className="visual-card card-2"
            animate={{
              ...floatingAnimation,
              transition: { ...floatingAnimation.transition, delay: 0.5 }
            }}
          >
            <div className="card-icon">📱</div>
            <div className="card-title">移动应用</div>
          </motion.div>

          <motion.div
            className="visual-card card-3"
            animate={{
              ...floatingAnimation,
              transition: { ...floatingAnimation.transition, delay: 1 }
            }}
          >
            <div className="card-icon">⚙️</div>
            <div className="card-title">后端服务</div>
          </motion.div>

          <div className="visual-center">
            <motion.div
              className="center-circle"
              animate={{
                rotate: 360,
                transition: { duration: 20, repeat: Infinity, ease: "linear" }
              }}
            >
              <div className="circle-dot"></div>
              <div className="circle-dot"></div>
              <div className="circle-dot"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        animate={{
          y: [0, 10, 0],
          transition: { duration: 1.5, repeat: Infinity }
        }}
      >
        <div className="scroll-line"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
