import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../utils/constants';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-40 -top-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70" />
        <div className="absolute -left-40 -bottom-40 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70" />
      </div>

      <div className="container relative mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 backdrop-blur-sm bg-opacity-80">
              {[
                { Icon: Mail, title: 'Email', content: personalInfo.email },
                { Icon: Phone, title: 'Phone', content: personalInfo.phone },
                { Icon: MapPin, title: 'Location', content: personalInfo.location }
              ].map(({ Icon, title, content }, index) => (
                <motion.div 
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-center space-x-4 mb-6 last:mb-0"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{title}</h3>
                    <p className="text-gray-600">{content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 backdrop-blur-sm bg-opacity-80">
              <div className="space-y-6">
                {[
                  { name: 'name', type: 'text', placeholder: 'Your Name', value: formData.name },
                  { name: 'email', type: 'email', placeholder: 'Your Email', value: formData.email }
                ].map((input, index) => (
                  <motion.div
                    key={input.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="space-y-1"
                  >
                    <input
                      type={input.type}
                      name={input.name}
                      value={input.value}
                      onChange={handleChange}
                      placeholder={input.placeholder}
                      className={`w-full px-4 py-3 rounded-lg border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                        errors[input.name as keyof FormErrors] 
                          ? 'border-red-500 focus:ring-red-500' 
                          : 'border-gray-200'
                      }`}
                    />
                    {errors[input.name as keyof FormErrors] && (
                      <p className="text-red-500 text-sm">{errors[input.name as keyof FormErrors]}</p>
                    )}
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="space-y-1"
                >
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Your Message"
                    className={`w-full px-4 py-3 rounded-lg border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                      errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-200'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm">{errors.message}</p>
                  )}
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-6 rounded-lg text-white font-medium flex items-center justify-center space-x-2 transition-all ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-blue-500 hover:bg-blue-600'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>

                <AnimatePresence>
                  {submitStatus && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className={`flex items-center space-x-2 p-3 rounded-lg ${
                        submitStatus === 'success' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {submitStatus === 'success' ? (
                        <>
                          <CheckCircle className="w-5 h-5" />
                          <span>Message sent successfully!</span>
                        </>
                      ) : (
                        <>
                          <AlertCircle className="w-5 h-5" />
                          <span>Failed to send message. Please try again.</span>
                        </>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;