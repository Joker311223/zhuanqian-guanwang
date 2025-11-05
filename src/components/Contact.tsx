import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    project: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    // 这里可以添加实际的表单提交逻辑
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: '📞',
      title: '联系电话',
      content: '17826854004',
      description: '客服A 为您服务'
    },
    {
      icon: '📧',
      title: '电子邮件',
      content: 'contact@studio.com',
      description: '24小时内回复'
    },
    {
      icon: '💬',
      title: '在线咨询',
      content: '微信客服',
      description: '扫码添加客服'
    },
    {
      icon: '📍',
      title: '工作时间',
      content: '周一至周日',
      description: '9:00 - 21:00'
    }
  ];

  return (
    <section className="contact" id="contact">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">联系我们</h2>
          <p className="section-subtitle">
            让我们一起探讨您的项目需求，为您提供专业的技术解决方案
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info-section"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="info-title">联系方式</h3>
            <div className="contact-info-grid">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="info-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="info-icon">{info.icon}</div>
                  <div className="info-details">
                    <div className="info-label">{info.title}</div>
                    <div className="info-value">{info.content}</div>
                    <div className="info-desc">{info.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="contact-highlight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="highlight-icon">📱</div>
              <div className="highlight-content">
                <h4>立即拨打</h4>
                <a href="tel:17826854004" className="highlight-phone">17826854004</a>
                <p>客服A 随时为您解答疑问</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="contact-form-section"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">您的姓名 *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="请输入您的姓名"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="company">公司名称</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="请输入公司名称"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">联系电话 *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="请输入联系电话"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">电子邮箱</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="请输入电子邮箱"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="project">项目类型 *</label>
                <select
                  id="project"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  required
                >
                  <option value="">请选择项目类型</option>
                  <option value="website">企业官网</option>
                  <option value="system">管理系统</option>
                  <option value="miniapp">小程序</option>
                  <option value="mobile">移动应用</option>
                  <option value="backend">后端服务</option>
                  <option value="other">其他</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">项目描述 *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="请简要描述您的项目需求..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="submit-button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={submitted}
              >
                {submitted ? '✓ 提交成功' : '提交咨询'}
              </motion.button>

              {submitted && (
                <motion.div
                  className="success-message"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  感谢您的咨询！我们会尽快与您联系。
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
