import React from 'react';
import { motion } from 'framer-motion';
import './TechStack.css';

const TechStack: React.FC = () => {
  const techCategories = [
    {
      title: '前端技术',
      icon: '🎨',
      techs: ['React', 'Vue', 'Angular', 'TypeScript', 'Next.js', 'Nuxt.js', 'Tailwind CSS', 'Sass']
    },
    {
      title: '移动端',
      icon: '📱',
      techs: ['React Native', 'Flutter', 'Uni-app', '微信小程序', '支付宝小程序', 'Taro', 'Swift', 'Kotlin']
    },
    {
      title: '后端技术',
      icon: '⚙️',
      techs: ['Node.js', 'Python', 'Java', 'Go', 'Express', 'Nest.js', 'Spring Boot', 'Django']
    },
    {
      title: '数据库',
      icon: '💾',
      techs: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Oracle']
    },
    {
      title: '云服务',
      icon: '☁️',
      techs: ['AWS', '阿里云', '腾讯云', 'Docker', 'Kubernetes', 'CI/CD', 'Nginx']
    },
    {
      title: '工具链',
      icon: '🛠️',
      techs: ['Git', 'Webpack', 'Vite', 'Jest', 'Cypress', 'ESLint', 'Prettier']
    }
  ];

  return (
    <section className="tech-stack" id="tech">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">技术栈</h2>
          <p className="section-subtitle">
            掌握主流技术，紧跟行业趋势，为您提供最优解决方案
          </p>
        </motion.div>

        <div className="tech-grid">
          {techCategories.map((category, index) => (
            <motion.div
              key={index}
              className="tech-category"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="tech-header">
                <span className="tech-icon">{category.icon}</span>
                <h3 className="tech-title">{category.title}</h3>
              </div>
              <div className="tech-list">
                {category.techs.map((tech, idx) => (
                  <motion.span
                    key={idx}
                    className="tech-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + idx * 0.05, duration: 0.3 }}
                    whileHover={{ scale: 1.1, backgroundColor: 'var(--primary-color)', color: 'white' }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
