import React from 'react';
import { motion } from 'framer-motion';
import './Services.css';

const Services: React.FC = () => {
  const services = [
    {
      icon: '🌐',
      title: '企业官网开发',
      description: '打造专业、现代化的企业官网，提升品牌形象，支持响应式设计，SEO优化',
      features: ['响应式设计', 'SEO优化', '高性能', '易维护'],
      color: '#6366f1'
    },
    {
      icon: '💼',
      title: '管理系统开发',
      description: '定制化企业管理系统，包括CRM、ERP、OA等，提高企业运营效率',
      features: ['权限管理', '数据可视化', '流程自动化', '多端适配'],
      color: '#ec4899'
    },
    {
      icon: '📱',
      title: '小程序开发',
      description: '微信小程序、支付宝小程序等多平台小程序开发，助力企业移动化转型',
      features: ['多平台支持', '原生体验', '快速迭代', '数据分析'],
      color: '#14b8a6'
    },
    {
      icon: '🎨',
      title: '前端应用开发',
      description: '使用React、Vue等现代框架，构建高性能、可维护的前端应用',
      features: ['组件化开发', '状态管理', '性能优化', '测试覆盖'],
      color: '#f59e0b'
    },
    {
      icon: '📲',
      title: '移动端应用',
      description: 'iOS、Android原生应用及跨平台应用开发，提供完整的移动解决方案',
      features: ['原生开发', '跨平台', '离线支持', '推送通知'],
      color: '#8b5cf6'
    },
    {
      icon: '⚙️',
      title: '后端服务开发',
      description: '构建稳定、高效的后端服务，支持微服务架构，提供完整的API解决方案',
      features: ['微服务架构', 'RESTful API', '数据库设计', '云部署'],
      color: '#10b981'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="services" id="services">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">专业服务能力</h2>
          <p className="section-subtitle">
            提供全方位的技术解决方案，从前端到后端，从设计到部署
          </p>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="service-icon" style={{ background: `linear-gradient(135deg, ${service.color}, ${service.color}dd)` }}>
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-features">
                {service.features.map((feature, idx) => (
                  <span key={idx} className="feature-tag">
                    {feature}
                  </span>
                ))}
              </div>
              <motion.div
                className="service-hover-effect"
                style={{ background: `linear-gradient(135deg, ${service.color}22, ${service.color}11)` }}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="services-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h3>需要定制化解决方案？</h3>
          <p>我们的专业团队随时为您提供咨询服务</p>
          <motion.button
            className="cta-button-large"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            联系我们
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
