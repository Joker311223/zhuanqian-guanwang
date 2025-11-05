import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: '全部' },
    { id: 'website', name: '企业官网' },
    { id: 'system', name: '管理系统' },
    { id: 'miniapp', name: '小程序' },
    { id: 'mobile', name: '移动应用' }
  ];

  const projects = [
    {
      id: 1,
      title: '智能制造企业官网',
      category: 'website',
      description: '为某智能制造企业打造的现代化官网，展示企业实力与产品',
      image: '🏭',
      tags: ['React', 'TypeScript', 'Next.js'],
      stats: { views: '50K+', time: '2周' }
    },
    {
      id: 2,
      title: '电商管理系统',
      category: 'system',
      description: '完整的电商后台管理系统，包含订单、库存、用户管理等功能',
      image: '🛒',
      tags: ['Vue3', 'Element Plus', 'Node.js'],
      stats: { views: '100K+', time: '3个月' }
    },
    {
      id: 3,
      title: '餐饮点餐小程序',
      category: 'miniapp',
      description: '支持扫码点餐、在线支付、会员管理的餐饮小程序',
      image: '🍽️',
      tags: ['微信小程序', '云开发', 'Taro'],
      stats: { views: '200K+', time: '1个月' }
    },
    {
      id: 4,
      title: '健身运动APP',
      category: 'mobile',
      description: 'iOS/Android健身应用，包含课程、打卡、社交等功能',
      image: '💪',
      tags: ['React Native', 'Redux', 'Firebase'],
      stats: { views: '150K+', time: '2个月' }
    },
    {
      id: 5,
      title: '金融科技官网',
      category: 'website',
      description: '金融科技公司品牌官网，强调安全性与专业性',
      image: '💰',
      tags: ['React', 'Tailwind', 'Framer Motion'],
      stats: { views: '80K+', time: '3周' }
    },
    {
      id: 6,
      title: 'CRM客户管理系统',
      category: 'system',
      description: '企业级CRM系统，支持客户跟进、销售漏斗、数据分析',
      image: '📊',
      tags: ['Angular', 'Spring Boot', 'MySQL'],
      stats: { views: '120K+', time: '4个月' }
    }
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section className="projects" id="projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">精选案例</h2>
          <p className="section-subtitle">
            我们为各行业客户提供优质的技术解决方案
          </p>
        </motion.div>

        <motion.div
          className="category-filter"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`filter-button ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="projects-grid"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
              >
                <div className="project-image">
                  <div className="project-emoji">{project.image}</div>
                  <div className="project-overlay">
                    <motion.button
                      className="view-button"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      查看详情
                    </motion.button>
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="project-tag">{tag}</span>
                    ))}
                  </div>
                  <div className="project-stats">
                    <div className="stat">
                      <span className="stat-icon">👁️</span>
                      <span>{project.stats.views}</span>
                    </div>
                    <div className="stat">
                      <span className="stat-icon">⏱️</span>
                      <span>{project.stats.time}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
