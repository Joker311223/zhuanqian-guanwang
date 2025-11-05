import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Services.css';

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [isDiscountActive, setIsDiscountActive] = useState(false);
  const [discountEndTime, setDiscountEndTime] = useState<Date | null>(null);
  const [timeRemaining, setTimeRemaining] = useState('');

  // 检查是否在折扣活动期间
  useEffect(() => {
    const checkDiscountPeriod = () => {
      const now = new Date();

      // 获取用户首次访问时间
      let firstVisit = localStorage.getItem('firstVisitTime');
      if (!firstVisit) {
        firstVisit = now.toISOString();
        localStorage.setItem('firstVisitTime', firstVisit);
      }

      const firstVisitDate = new Date(firstVisit);
      const sevenDaysLater = new Date(firstVisitDate);
      sevenDaysLater.setDate(sevenDaysLater.getDate() + 7);

      // 检查是否在首次访问后7天内
      const isWithinSevenDays = now <= sevenDaysLater;

      // 检查是否在每月1-3号
      const dayOfMonth = now.getDate();
      const isMonthlyPromo = dayOfMonth >= 1 && dayOfMonth <= 3;

      if (isWithinSevenDays) {
        setIsDiscountActive(true);
        setDiscountEndTime(sevenDaysLater);
      } else if (isMonthlyPromo) {
        setIsDiscountActive(true);
        const endOfPromo = new Date(now.getFullYear(), now.getMonth(), 3, 23, 59, 59);
        setDiscountEndTime(endOfPromo);
      } else {
        setIsDiscountActive(false);
        setDiscountEndTime(null);
      }
    };

    checkDiscountPeriod();
    const interval = setInterval(checkDiscountPeriod, 60000); // 每分钟检查一次

    return () => clearInterval(interval);
  }, []);

  // 倒计时
  useEffect(() => {
    if (!discountEndTime) return;

    const updateCountdown = () => {
      const now = new Date();
      const diff = discountEndTime.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeRemaining('活动已结束');
        setIsDiscountActive(false);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeRemaining(`${days}天 ${hours}时 ${minutes}分 ${seconds}秒`);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [discountEndTime]);

  // 计算折扣价格
  const calculateDiscountPrice = (priceRange: string) => {
    const prices = priceRange.split(' - ');
    const minPrice = parseInt(prices[0].replace(/,/g, ''));
    const maxPrice = parseInt(prices[1].replace(/,/g, ''));

    const discountMin = Math.round(minPrice * 0.88);
    const discountMax = Math.round(maxPrice * 0.88);

    return `${discountMin.toLocaleString()} - ${discountMax.toLocaleString()}`;
  };

  const services = [
    {
      icon: '🌐',
      title: '企业官网开发',
      description: '打造专业、现代化的企业官网，提升品牌形象，支持响应式设计，SEO优化',
      features: ['响应式设计', 'SEO优化', '高性能', '易维护'],
      color: '#6366f1',
      pricing: {
        basic: {
          name: '基础版',
          price: '8,000 - 15,000',
          duration: '2-3周',
          features: [
            '5-8个页面',
            '响应式设计',
            '基础SEO优化',
            '联系表单',
            '1个月免费维护'
          ]
        },
        standard: {
          name: '标准版',
          price: '15,000 - 30,000',
          duration: '3-4周',
          features: [
            '10-15个页面',
            '高级响应式设计',
            '深度SEO优化',
            'CMS内容管理系统',
            '多语言支持',
            '3个月免费维护'
          ]
        },
        premium: {
          name: '高级版',
          price: '30,000 - 60,000',
          duration: '4-6周',
          features: [
            '15+个页面',
            '定制化设计',
            '全站SEO优化',
            '高级CMS系统',
            '多语言+多站点',
            '会员系统',
            '数据分析',
            '6个月免费维护'
          ]
        }
      }
    },
    {
      icon: '💼',
      title: '管理系统开发',
      description: '定制化企业管理系统，包括CRM、ERP、OA等，提高企业运营效率',
      features: ['权限管理', '数据可视化', '流程自动化', '多端适配'],
      color: '#ec4899',
      pricing: {
        basic: {
          name: '基础版',
          price: '30,000 - 60,000',
          duration: '1-2个月',
          features: [
            '基础功能模块',
            '用户权限管理',
            '数据报表',
            '移动端适配',
            '3个月技术支持'
          ]
        },
        standard: {
          name: '标准版',
          price: '60,000 - 150,000',
          duration: '2-3个月',
          features: [
            '完整业务流程',
            '多角色权限体系',
            '高级数据可视化',
            '工作流引擎',
            'API接口',
            '移动端APP',
            '6个月技术支持'
          ]
        },
        premium: {
          name: '企业版',
          price: '150,000 - 500,000',
          duration: '3-6个月',
          features: [
            '全功能定制开发',
            '微服务架构',
            '大数据分析',
            'AI智能推荐',
            '多系统集成',
            '私有化部署',
            '1年技术支持'
          ]
        }
      }
    },
    {
      icon: '📱',
      title: '小程序开发',
      description: '微信小程序、支付宝小程序等多平台小程序开发，助力企业移动化转型',
      features: ['多平台支持', '原生体验', '快速迭代', '数据分析'],
      color: '#14b8a6',
      pricing: {
        basic: {
          name: '基础版',
          price: '8,000 - 20,000',
          duration: '2-3周',
          features: [
            '展示型小程序',
            '5-10个页面',
            '基础交互功能',
            '微信/支付宝单平台',
            '1个月维护'
          ]
        },
        standard: {
          name: '标准版',
          price: '20,000 - 50,000',
          duration: '1-2个月',
          features: [
            '功能型小程序',
            '用户系统',
            '在线支付',
            '数据统计',
            '多平台支持',
            '3个月维护'
          ]
        },
        premium: {
          name: '商城版',
          price: '50,000 - 150,000',
          duration: '2-3个月',
          features: [
            '完整电商功能',
            '会员体系',
            '营销工具',
            '订单管理',
            '库存管理',
            '数据分析',
            '6个月维护'
          ]
        }
      }
    },
    {
      icon: '🎨',
      title: '前端应用开发',
      description: '使用React、Vue等现代框架，构建高性能、可维护的前端应用',
      features: ['组件化开发', '状态管理', '性能优化', '测试覆盖'],
      color: '#f59e0b',
      pricing: {
        basic: {
          name: '单页应用',
          price: '15,000 - 30,000',
          duration: '2-3周',
          features: [
            'SPA单页应用',
            '响应式设计',
            '基础状态管理',
            'API对接',
            '2个月维护'
          ]
        },
        standard: {
          name: '中型应用',
          price: '30,000 - 80,000',
          duration: '1-2个月',
          features: [
            '复杂交互应用',
            '高级状态管理',
            '性能优化',
            '单元测试',
            'PWA支持',
            '3个月维护'
          ]
        },
        premium: {
          name: '大型应用',
          price: '80,000 - 200,000',
          duration: '2-4个月',
          features: [
            '企业级应用',
            '微前端架构',
            '完整测试覆盖',
            '性能监控',
            'CI/CD部署',
            '技术文档',
            '6个月维护'
          ]
        }
      }
    },
    {
      icon: '📲',
      title: '移动端应用',
      description: 'iOS、Android原生应用及跨平台应用开发，提供完整的移动解决方案',
      features: ['原生开发', '跨平台', '离线支持', '推送通知'],
      color: '#8b5cf6',
      pricing: {
        basic: {
          name: '跨平台版',
          price: '30,000 - 60,000',
          duration: '1-2个月',
          features: [
            'React Native/Flutter',
            'iOS + Android双平台',
            '基础功能',
            '推送通知',
            '3个月维护'
          ]
        },
        standard: {
          name: '标准版',
          price: '60,000 - 150,000',
          duration: '2-3个月',
          features: [
            '原生或跨平台',
            '完整功能模块',
            '离线支持',
            '第三方集成',
            '数据同步',
            '6个月维护'
          ]
        },
        premium: {
          name: '原生版',
          price: '150,000 - 400,000',
          duration: '3-6个月',
          features: [
            'iOS + Android原生开发',
            '高性能优化',
            '复杂动画',
            'AR/VR功能',
            '完整测试',
            '上架协助',
            '1年维护'
          ]
        }
      }
    },
    {
      icon: '⚙️',
      title: '后端服务开发',
      description: '构建稳定、高效的后端服务，支持微服务架构，提供完整的API解决方案',
      features: ['微服务架构', 'RESTful API', '数据库设计', '云部署'],
      color: '#10b981',
      pricing: {
        basic: {
          name: '基础版',
          price: '20,000 - 50,000',
          duration: '2-4周',
          features: [
            'RESTful API',
            '数据库设计',
            '用户认证',
            '基础安全',
            '3个月维护'
          ]
        },
        standard: {
          name: '标准版',
          price: '50,000 - 120,000',
          duration: '1-2个月',
          features: [
            '完整API服务',
            '微服务架构',
            '缓存优化',
            '消息队列',
            '日志监控',
            '6个月维护'
          ]
        },
        premium: {
          name: '企业版',
          price: '120,000 - 300,000',
          duration: '2-4个月',
          features: [
            '分布式架构',
            '高并发处理',
            '数据库集群',
            '容器化部署',
            '自动扩缩容',
            '完整监控',
            '1年维护'
          ]
        }
      }
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

        {/* 折扣活动横幅 */}
        {isDiscountActive && (
          <motion.div
            className="discount-banner"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="discount-content">
              <div className="discount-icon">🎉</div>
              <div className="discount-text">
                <div className="discount-title">限时特惠！全场8.8折</div>
                <div className="discount-subtitle">新客专享 + 每月1-3号特惠活动</div>
              </div>
              <div className="discount-countdown">
                <div className="countdown-label">距离结束</div>
                <div className="countdown-time">{timeRemaining}</div>
              </div>
            </div>
          </motion.div>
        )}

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
              <motion.button
                className="pricing-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedService(selectedService === index ? null : index)}
              >
                {selectedService === index ? '收起报价 ▲' : '查看报价 💰'}
              </motion.button>
              <motion.div
                className="service-hover-effect"
                style={{ background: `linear-gradient(135deg, ${service.color}22, ${service.color}11)` }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* 报价详情展示 */}
        <AnimatePresence>
          {selectedService !== null && (
            <motion.div
              className="pricing-detail"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="pricing-content">
                <h3 className="pricing-title">
                  {services[selectedService].icon} {services[selectedService].title} - 报价详情
                </h3>
                <p className="pricing-subtitle">
                  {isDiscountActive ? '🎉 限时特惠价格，错过再等一个月！' : '以下价格仅供参考，具体报价需根据项目需求评估'}
                </p>

                <div className="pricing-tiers">
                  <motion.div
                    className="pricing-tier"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <div className="tier-header">
                      <h4 className="tier-name">{services[selectedService].pricing.basic.name}</h4>
                      {isDiscountActive ? (
                        <div className="price-container">
                          <div className="tier-price original-price">¥{services[selectedService].pricing.basic.price}</div>
                          <div className="tier-price discount-price">¥{calculateDiscountPrice(services[selectedService].pricing.basic.price)}</div>
                        </div>
                      ) : (
                        <div className="tier-price">¥{services[selectedService].pricing.basic.price}</div>
                      )}
                      <div className="tier-duration">周期：{services[selectedService].pricing.basic.duration}</div>
                    </div>
                    <ul className="tier-features">
                      {services[selectedService].pricing.basic.features.map((feature, idx) => (
                        <li key={idx}>
                          <span className="feature-check">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div
                    className="pricing-tier featured"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="popular-badge">推荐</div>
                    <div className="tier-header">
                      <h4 className="tier-name">{services[selectedService].pricing.standard.name}</h4>
                      {isDiscountActive ? (
                        <div className="price-container">
                          <div className="tier-price original-price">¥{services[selectedService].pricing.standard.price}</div>
                          <div className="tier-price discount-price">¥{calculateDiscountPrice(services[selectedService].pricing.standard.price)}</div>
                        </div>
                      ) : (
                        <div className="tier-price">¥{services[selectedService].pricing.standard.price}</div>
                      )}
                      <div className="tier-duration">周期：{services[selectedService].pricing.standard.duration}</div>
                    </div>
                    <ul className="tier-features">
                      {services[selectedService].pricing.standard.features.map((feature, idx) => (
                        <li key={idx}>
                          <span className="feature-check">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div
                    className="pricing-tier"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="tier-header">
                      <h4 className="tier-name">{services[selectedService].pricing.premium.name}</h4>
                      {isDiscountActive ? (
                        <div className="price-container">
                          <div className="tier-price original-price">¥{services[selectedService].pricing.premium.price}</div>
                          <div className="tier-price discount-price">¥{calculateDiscountPrice(services[selectedService].pricing.premium.price)}</div>
                        </div>
                      ) : (
                        <div className="tier-price">¥{services[selectedService].pricing.premium.price}</div>
                      )}
                      <div className="tier-duration">周期：{services[selectedService].pricing.premium.duration}</div>
                    </div>
                    <ul className="tier-features">
                      {services[selectedService].pricing.premium.features.map((feature, idx) => (
                        <li key={idx}>
                          <span className="feature-check">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                <div className="pricing-notes">
                  <h4>💡 价格说明</h4>
                  <ul>
                    {isDiscountActive && (
                      <li className="highlight-note">🎉 当前享受8.8折特惠价格，活动结束后恢复原价</li>
                    )}
                    <li>以上报价为参考价格，实际费用根据具体需求、功能复杂度、开发周期等因素确定</li>
                    <li>支持分期付款：首付30% → 开发中期30% → 验收完成40%</li>
                    <li>提供免费需求评估和技术咨询服务</li>
                    <li>所有项目均包含源代码交付和技术文档</li>
                    <li>维护期内提供免费bug修复和技术支持</li>
                  </ul>
                </div>

                <div className="pricing-cta">
                  <motion.button
                    className="consult-button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {isDiscountActive ? '🔥 立即抢购特惠名额' : '立即咨询获取精准报价'}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

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
