import React from 'react';
import { motion } from 'framer-motion';
import './Advantages.css';

const Advantages: React.FC = () => {
  const advantages = [
    {
      icon: '🏆',
      title: '专业团队',
      description: '5年以上经验的资深开发者，来自一线互联网公司',
      stats: '平均8年经验'
    },
    {
      icon: '⚡',
      title: '快速交付',
      description: '敏捷开发流程，快速响应需求，按时交付高质量产品',
      stats: '准时率98%'
    },
    {
      icon: '💎',
      title: '品质保证',
      description: '严格的代码审查，完善的测试流程，确保产品质量',
      stats: 'Bug率<0.5%'
    },
    {
      icon: '🔒',
      title: '安全可靠',
      description: '遵循最佳安全实践，保护您的数据和用户隐私',
      stats: '零安全事故'
    },
    {
      icon: '💰',
      title: '性价比高',
      description: '合理的价格，优质的服务，为您节省开发成本',
      stats: '节省30%成本'
    },
    {
      icon: '🤝',
      title: '售后无忧',
      description: '提供长期技术支持，快速响应问题，持续优化升级',
      stats: '24小时响应'
    }
  ];

  return (
    <section className="advantages" id="advantages">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">为什么选择我们</h2>
          <p className="section-subtitle">
            专业、高效、可靠的技术合作伙伴
          </p>
        </motion.div>

        <div className="advantages-grid">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              className="advantage-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <motion.div
                className="advantage-icon"
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
              >
                {advantage.icon}
              </motion.div>
              <h3 className="advantage-title">{advantage.title}</h3>
              <p className="advantage-description">{advantage.description}</p>
              <div className="advantage-stats">{advantage.stats}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="process-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h3 className="process-title">合作流程</h3>
          <div className="process-steps">
            {['需求沟通', '方案设计', '开发实施', '测试验收', '上线部署', '持续维护'].map((step, index) => (
              <motion.div
                key={index}
                className="process-step"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="step-number">{index + 1}</div>
                <div className="step-name">{step}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Advantages;
