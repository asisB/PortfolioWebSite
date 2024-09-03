import React, { useEffect, useRef, useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: false
    });

    const form = useRef();
    const [status, setStatus] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [controls, inView]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    const sendEmail = (e) => {
        e.preventDefault();
        console.log("Form submitted");

        emailjs.sendForm('service_yny1nc9', 'template_yopg2y4', form.current, 'zKgy_XiLsIEMn21YP')
            .then((result) => {
                console.log(result.text);
                setStatus("Message sent successfully!");
                form.current.reset();
            }, (error) => {
                console.log(error.text);
                setStatus("Failed to send message. Please try again.");
            })
            .finally(() => {
                setIsLoading(false);
            })
    };

    return (
        <motion.section 
            ref={ref}
            id="contact" 
            className="border-b border-neutral-900 pb-4 lg:mb-35"
            initial="hidden"
            animate={controls}
            variants={containerVariants}
        >
            <div className="container mx-auto px-4">
                <motion.h2 
                    className="text-4xl font-bold text-center mb-12"
                    variants={itemVariants}
                >
                    Get in Touch
                </motion.h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <motion.div variants={itemVariants}>
                        <div className="grid grid-cols-1 gap-8">
                            <ContactItem icon={<FaEnvelope />} title="Email" content="ashishbasnet468@gmail.com" />
                            <ContactItem icon={<FaPhone />} title="Phone" content="+447392832200" />
                            <ContactItem icon={<FaMapMarkerAlt />} title="Location" content="Uxbridge, United Kingdom" />
                        </div>
                    </motion.div>
                    <motion.div 
                        className='border border-neutral-700 lg:col-span-2'
                        variants={itemVariants}
                    >
                        <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 md:grid-cols-6 gap-4 items-end p-6">
                            <motion.input
                                whileFocus={{ scale: 1.05 }}
                                type="text"
                                name="user_name"
                                placeholder="Name"
                                required
                                className="p-4 rounded md:col-span-3 bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-green-600 transition-all duration-200"
                            />
                            <motion.input
                                whileFocus={{ scale: 1.05 }}
                                type="email"
                                name="user_email"
                                placeholder="Email Address"
                                required
                                className="p-4 rounded md:col-span-3 bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-green-600 transition-all duration-200"
                            />
                            <motion.textarea
                                whileFocus={{ scale: 1.05 }}
                                name="message"
                                placeholder="Message"
                                rows="3"
                                required
                                className="p-5 rounded md:col-span-6 bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-green-600 transition-all duration-200"
                            ></motion.textarea>
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type="submit" 
                                disabled={isLoading}
                                className={`text-white py-4 px-6 rounded transition duration-300 md:col-span-6 ${
                                    isLoading ? 'bg-gray-500 cursor-not-allowed' : 'bg-green-600 hover:bg-green-800'
                                }`}
                            >
                                {isLoading ? 'Sending...' : 'Send'}
                            </motion.button>
                        </form>
                        {status && <p className="text-center mt-4">{status}</p>}
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

const ContactItem = ({ icon, title, content }) => (
    <motion.div 
        className="flex items-center p-2 bg-neutral-900 rounded-lg shadow-md"
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300 }}
    >
        <div className="text-2xl text-green-600 mr-6">{icon}</div>
        <div>
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-gray-400">{content}</p>
        </div>
    </motion.div>
);