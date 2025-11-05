import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  stats: { views: string; time: string };
  detailInfo: {
    client: string;
    duration: string;
    team: string;
    challenge: string;
    solution: string;
    results: string[];
    technologies: string[];
    screenshots: string[];
  };
}

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: '全部' },
    { id: 'website', name: '企业官网' },
    { id: 'system', name: '管理系统' },
    { id: 'miniapp', name: '小程序' },
    { id: 'mobile', name: '移动应用' }
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: '智能制造企业官网',
      category: 'website',
      description: '为某智能制造企业打造的现代化官网，展示企业实力与产品',
      image: '🏭',
      tags: ['React', 'TypeScript', 'Next.js'],
      stats: { views: '50K+', time: '2周' },
      detailInfo: {
        client: '某智能制造科技有限公司',
        duration: '2周（设计1周 + 开发1周）',
        team: '1名UI设计师 + 2名前端工程师',
        challenge: '客户需要一个能够充分展示其智能制造能力和产品线的官网，同时要求具有良好的SEO优化和快速的加载速度。',
        solution: '采用Next.js框架实现SSR服务端渲染，确保SEO友好；使用TypeScript提高代码质量；实现响应式设计适配各种设备；集成CMS系统方便客户自主更新内容。',
        results: [
          '网站加载速度提升60%，首屏渲染时间<1.5s',
          'Google PageSpeed得分达到95+',
          '移动端访问量提升40%',
          '客户询盘量增加35%'
        ],
        technologies: ['React 18', 'Next.js 13', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Strapi CMS'],
        screenshots: ['📊', '🎨', '📱', '💻']
      }
    },
    {
      id: 2,
      title: '电商管理系统',
      category: 'system',
      description: '完整的电商后台管理系统，包含订单、库存、用户管理等功能',
      image: '🛒',
      tags: ['Vue3', 'Element Plus', 'Node.js'],
      stats: { views: '100K+', time: '3个月' },
      detailInfo: {
        client: '某电商平台',
        duration: '3个月（需求分析2周 + 开发10周 + 测试2周）',
        team: '1名产品经理 + 3名前端工程师 + 2名后端工程师 + 1名测试工程师',
        challenge: '需要处理大量并发订单，实时库存同步，复杂的权限管理，以及多维度的数据统计分析。',
        solution: '前端采用Vue3 + Element Plus构建，后端使用Node.js + Express + MongoDB，实现微服务架构；使用Redis缓存提升性能；WebSocket实现实时数据推送；RBAC权限模型实现细粒度权限控制。',
        results: [
          '支持10000+并发用户同时操作',
          '订单处理效率提升70%',
          '库存准确率达到99.9%',
          '管理员操作效率提升50%'
        ],
        technologies: ['Vue 3', 'Element Plus', 'Node.js', 'Express', 'MongoDB', 'Redis', 'WebSocket', 'ECharts'],
        screenshots: ['📈', '📦', '👥', '⚙️']
      }
    },
    {
      id: 3,
      title: '餐饮点餐小程序',
      category: 'miniapp',
      description: '支持扫码点餐、在线支付、会员管理的餐饮小程序',
      image: '🍽️',
      tags: ['微信小程序', '云开发', 'Taro'],
      stats: { views: '200K+', time: '1个月' },
      detailInfo: {
        client: '某连锁餐饮品牌',
        duration: '1个月（设计1周 + 开发2周 + 测试1周）',
        team: '1名UI设计师 + 2名小程序工程师 + 1名后端工程师',
        challenge: '需要实现快速点餐流程，支持多门店管理，实时订单推送，以及会员积分系统。',
        solution: '使用Taro框架开发，一套代码支持微信和支付宝小程序；采用微信云开发降低后端成本；实现扫码点餐、在线支付、会员系统、优惠券等功能；集成打印机API实现自动打印订单。',
        results: [
          '日均订单量3000+',
          '点餐效率提升80%',
          '会员复购率提升45%',
          '人工成本降低30%'
        ],
        technologies: ['Taro 3', '微信小程序', '微信云开发', '微信支付', 'Vant Weapp', 'WebSocket'],
        screenshots: ['🍜', '💳', '🎫', '📊']
      }
    },
    {
      id: 4,
      title: '健身运动APP',
      category: 'mobile',
      description: 'iOS/Android健身应用，包含课程、打卡、社交等功能',
      image: '💪',
      tags: ['React Native', 'Redux', 'Firebase'],
      stats: { views: '150K+', time: '2个月' },
      detailInfo: {
        client: '某健身连锁品牌',
        duration: '2个月（设计2周 + 开发5周 + 测试1周）',
        team: '1名UI/UX设计师 + 2名移动端工程师 + 1名后端工程师',
        challenge: '需要实现视频课程播放、运动数据追踪、社交互动、个性化推荐等复杂功能，同时保证流畅的用户体验。',
        solution: '使用React Native实现跨平台开发；集成Firebase实现用户认证和实时数据库；使用Redux管理复杂状态；集成健康数据API追踪运动数据；实现视频缓存和离线播放；AI算法实现个性化课程推荐。',
        results: [
          '用户日活跃度提升60%',
          '课程完成率提升55%',
          '用户平均使用时长增加40分钟',
          'App Store评分4.8/5.0'
        ],
        technologies: ['React Native', 'Redux', 'Firebase', 'TypeScript', 'React Navigation', 'Video.js', 'TensorFlow Lite'],
        screenshots: ['🏃', '📹', '📈', '👥']
      }
    },
    {
      id: 5,
      title: '金融科技官网',
      category: 'website',
      description: '金融科技公司品牌官网，强调安全性与专业性',
      image: '💰',
      tags: ['React', 'Tailwind', 'Framer Motion'],
      stats: { views: '80K+', time: '3周' },
      detailInfo: {
        client: '某金融科技公司',
        duration: '3周（设计1周 + 开发1.5周 + 优化0.5周）',
        team: '1名UI设计师 + 2名前端工程师 + 1名内容策划',
        challenge: '金融行业对安全性和专业性要求极高，需要在展示创新性的同时传递信任感，并确保网站的安全性和合规性。',
        solution: '采用React + Tailwind CSS构建现代化界面；使用Framer Motion实现精致的动画效果；实现HTTPS加密、CSP内容安全策略；优化SEO和页面性能；集成多语言支持；添加实时数据展示和计算器工具。',
        results: [
          '品牌认知度提升50%',
          '网站安全评级A+',
          '用户停留时间增加3分钟',
          '咨询转化率提升28%'
        ],
        technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Next.js', 'i18next', 'Chart.js', 'Helmet'],
        screenshots: ['💼', '📊', '🔒', '🌐']
      }
    },
    {
      id: 6,
      title: 'CRM客户管理系统',
      category: 'system',
      description: '企业级CRM系统，支持客户跟进、销售漏斗、数据分析',
      image: '📊',
      tags: ['Angular', 'Spring Boot', 'MySQL'],
      stats: { views: '120K+', time: '4个月' },
      detailInfo: {
        client: '某B2B企业',
        duration: '4个月（需求调研3周 + 开发12周 + 测试培训1周）',
        team: '1名产品经理 + 3名前端工程师 + 3名后端工程师 + 1名DBA + 1名测试工程师',
        challenge: '需要整合多个业务系统的数据，实现复杂的销售流程管理，提供强大的数据分析能力，同时保证系统的稳定性和扩展性。',
        solution: '前端采用Angular框架，后端使用Spring Boot微服务架构；MySQL主从复制保证数据安全；Redis缓存提升性能；Elasticsearch实现全文搜索；集成第三方邮件、短信服务；使用ECharts实现数据可视化；实现工作流引擎支持自定义流程。',
        results: [
          '销售效率提升65%',
          '客户跟进及时率提升80%',
          '销售转化率提升35%',
          '数据查询速度提升90%'
        ],
        technologies: ['Angular 15', 'Spring Boot', 'MySQL', 'Redis', 'Elasticsearch', 'RabbitMQ', 'ECharts', 'Docker'],
        screenshots: ['👤', '📈', '📧', '🎯']
      }
    }
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const handleToggleProject = (projectId: number) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

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
            className="projects-list"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-item"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="project-card" onClick={() => handleToggleProject(project.id)}>
                  <div className="project-image">
                    <div className="project-emoji">{project.image}</div>
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
                    <motion.button
                      className="toggle-detail-button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {expandedProject === project.id ? '收起详情 ▲' : '查看详情 ▼'}
                    </motion.button>
                  </div>
                </div>

                <AnimatePresence>
                  {expandedProject === project.id && (
                    <motion.div
                      className="project-detail"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="detail-content">
                        <div className="detail-section">
                          <h3 className="detail-title">📋 项目信息</h3>
                          <div className="detail-grid">
                            <div className="detail-item">
                              <span className="detail-label">客户：</span>
                              <span className="detail-value">{project.detailInfo.client}</span>
                            </div>
                            <div className="detail-item">
                              <span className="detail-label">周期：</span>
                              <span className="detail-value">{project.detailInfo.duration}</span>
                            </div>
                            <div className="detail-item">
                              <span className="detail-label">团队：</span>
                              <span className="detail-value">{project.detailInfo.team}</span>
                            </div>
                          </div>
                        </div>

                        <div className="detail-section">
                          <h3 className="detail-title">🎯 项目挑战</h3>
                          <p className="detail-text">{project.detailInfo.challenge}</p>
                        </div>

                        <div className="detail-section">
                          <h3 className="detail-title">💡 解决方案</h3>
                          <p className="detail-text">{project.detailInfo.solution}</p>
                        </div>

                        <div className="detail-section">
                          <h3 className="detail-title">🏆 项目成果</h3>
                          <ul className="results-list">
                            {project.detailInfo.results.map((result, idx) => (
                              <li key={idx} className="result-item">
                                <span className="result-icon">✓</span>
                                {result}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="detail-section">
                          <h3 className="detail-title">🛠️ 技术栈</h3>
                          <div className="tech-tags">
                            {project.detailInfo.technologies.map((tech, idx) => (
                              <span key={idx} className="tech-tag">{tech}</span>
                            ))}
                          </div>
                        </div>

                        <div className="detail-section">
                          <h3 className="detail-title">📸 项目展示</h3>
                          <div className="screenshots-grid">
                            {project.detailInfo.screenshots.map((screenshot, idx) => (
                              <div key={idx} className="screenshot-item">
                                <div className="screenshot-emoji">{screenshot}</div>
                                <div className="screenshot-label">截图 {idx + 1}</div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="detail-footer">
                          <motion.button
                            className="contact-cta-button"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => {
                              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                          >
                            咨询类似项目
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
