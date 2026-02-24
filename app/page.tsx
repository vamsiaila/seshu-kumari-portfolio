"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { 
    Phone, 
    Mail, 
    Instagram, 
    MapPin, 
    Sparkles, 
    Camera, 
    Crown, 
    GlassWater, 
    ArrowRight 
} from "lucide-react";

export default function Home() {
    // Reusable animation variants
    const fadeUp: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    const staggerContainer: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
        },
    };

    // Reusable golden text class
    const goldGradientText =
        "bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] inline-block text-transparent bg-clip-text";

    return (
        <main className="bg-[#050505] text-white min-h-screen selection:bg-[#BF953F] selection:text-black overflow-hidden relative">
            
            {/* AMBIENT BACKGROUND GLOWS */}
            <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#C8A74E] opacity-[0.04] blur-[150px] rounded-full pointer-events-none" />
            <div className="fixed bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#BF953F] opacity-[0.03] blur-[150px] rounded-full pointer-events-none" />

            {/* STICKY HEADER */}
            <motion.header 
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="fixed top-0 left-0 w-full z-50 bg-[#050505]/70 backdrop-blur-xl border-b border-white/5 px-6 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    {/* Minimal Header Logo / Name */}
                    <a href="#" className={`text-xl font-light tracking-widest uppercase ${goldGradientText}`}>
                        Seshu Kumari
                    </a>

                    {/* Desktop Contact Links with Icons */}
                    <div className="hidden md:flex items-center gap-8 text-sm font-light tracking-wide text-gray-300">
                        <a href="tel:+919849013227" className="group flex items-center gap-2 hover:text-[#FCF6BA] transition-colors">
                            <Phone className="w-4 h-4 text-[#BF953F] group-hover:scale-110 transition-transform" />
                            +91 98490 13227
                        </a>
                        <a href="mailto:seshukumari2002@gmail.com" className="group flex items-center gap-2 hover:text-[#FCF6BA] transition-colors">
                            <Mail className="w-4 h-4 text-[#BF953F] group-hover:scale-110 transition-transform" />
                            Email
                        </a>
                        <a href="https://www.instagram.com/seshu388" target="_blank" rel="noreferrer" className="group flex items-center gap-2 hover:text-[#FCF6BA] transition-colors">
                            <Instagram className="w-4 h-4 text-[#BF953F] group-hover:scale-110 transition-transform" />
                            @seshu388
                        </a>
                    </div>

                    {/* Mobile Book CTA */}
                    <a 
                        href="#contact" 
                        className="md:hidden border border-[#BF953F] text-[#FCF6BA] px-5 py-2 rounded-full text-xs font-medium tracking-widest uppercase hover:bg-[#BF953F] hover:text-black transition-all"
                    >
                        Book
                    </a>
                </div>
            </motion.header>

            {/* HERO SECTION */}
            <section className="relative flex flex-col items-center justify-center text-center px-6 min-h-screen pt-20">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="z-10 flex flex-col items-center"
                >
                    {/* Floating Logo */}
                    <motion.div 
                        variants={fadeUp} 
                        animate={{ y: [0, -10, 0] }} 
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="mb-8"
                    >
                        <Image
                            src="/logo.png"
                            alt="Seshu Kumari Logo"
                            width={500}
                            height={200}
                            priority
                            className="drop-shadow-2xl"
                        />
                    </motion.div>

                    {/* Tagline */}
                    <motion.h1
                        variants={fadeUp}
                        className="text-4xl md:text-7xl font-light tracking-widest mb-6 uppercase"
                    >
                        <span className={goldGradientText}>
                            Makeup Artist
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        className="text-lg md:text-2xl max-w-2xl text-gray-300 mb-6 font-light"
                    >
                        22+ Years of Excellence in Bridal, Fashion Shows, Party
                        & Film Makeup.
                    </motion.p>

                    <motion.div variants={fadeUp} className="flex items-center gap-3 mb-12 opacity-80">
                        <Camera className="w-5 h-5 text-[#BF953F]" />
                        <p className="text-md md:text-lg text-[#FCF6BA] italic">
                            Now Available for Film & Professional Shoots
                        </p>
                    </motion.div>

                    {/* Animated CTA with Arrow */}
                    <motion.a
                        variants={fadeUp}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#contact"
                        className="group flex items-center gap-3 border border-[#BF953F] text-[#FCF6BA] px-10 py-4 rounded-full bg-black/50 backdrop-blur-md hover:bg-gradient-to-r hover:from-[#BF953F] hover:to-[#B38728] hover:text-black hover:border-transparent transition-all duration-300 font-medium tracking-wide shadow-[0_0_20px_rgba(200,167,78,0.1)] hover:shadow-[0_0_30px_rgba(200,167,78,0.4)]"
                    >
                        Book a Consultation
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                </motion.div>
            </section>

            {/* ABOUT SECTION */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer}
                className="relative py-32 px-6 bg-[#0a0a0a]"
            >
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <motion.h2 variants={fadeUp} className={`text-4xl md:text-5xl font-light ${goldGradientText}`}>
                        About Seshu Kumari
                    </motion.h2>

                    <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#BF953F] to-transparent mx-auto" />

                    <motion.p variants={fadeUp} className="text-xl text-gray-400 leading-relaxed font-light">
                        With over <span className="text-[#FCF6BA] font-medium">22 years of experience</span> in the beauty industry, Seshu Kumari is a highly respected professional makeup artist specializing in bridal, fashion show, party, and film makeup.
                    </motion.p>

                    <motion.p variants={fadeUp} className="text-xl text-gray-400 leading-relaxed font-light">
                        She currently manages three successful salons and an aesthetic center in <span className="text-white">Hyderabad, Guntur, and Narasaraopet</span>, leading a dedicated team of 25 professionals. A Bachelor of Arts graduate, she combines artistic creativity with professional expertise to deliver flawless results for every occasion.
                    </motion.p>
                </div>
            </motion.section>

            {/* SERVICES SECTION */}
            <section className="py-32 px-6 relative bg-[#050505]">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className={`text-4xl md:text-5xl font-light mb-16 ${goldGradientText}`}
                    >
                        Signature Services
                    </motion.h2>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={staggerContainer}
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {[
                            { title: "Bridal Makeup", icon: Crown, desc: "Elegant, long-lasting bridal looks tailored to enhance natural beauty for weddings and special ceremonies." },
                            { title: "Fashion Show", icon: Sparkles, desc: "Creative and high-impact looks designed for runway, modeling events, and professional showcases." },
                            { title: "Party Makeup", icon: GlassWater, desc: "Glamorous and modern styles perfect for parties, receptions, and social high-profile events." },
                            { title: "Film & Shoot", icon: Camera, desc: "Professional makeup for cinema, advertisements, and production shoots with precision and artistry." },
                        ].map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <motion.div
                                    key={index}
                                    variants={fadeUp}
                                    className="group relative bg-[#0a0a0a] border border-white/5 p-10 rounded-2xl hover:bg-white/[0.02] hover:border-[#BF953F]/40 transition-all duration-500 overflow-hidden text-center flex flex-col items-center"
                                >
                                    <div className="w-16 h-16 rounded-full bg-black/50 border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#BF953F] transition-colors duration-500 shadow-inner">
                                        <Icon className="w-8 h-8 text-[#BF953F] group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    <h3 className="text-2xl text-[#FCF6BA] mb-4 font-light">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed font-light text-sm">
                                        {service.desc}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* GALLERY SECTION */}
            <section className="py-32 px-6 bg-[#0a0a0a]">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className={`text-4xl md:text-5xl font-light mb-16 ${goldGradientText}`}
                    >
                        Portfolio Gallery
                    </motion.h2>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                    >
                        {[1, 2, 7, 4, 5, 6].map((num) => (
                            <motion.div
                                key={num}
                                variants={fadeUp}
                                className="group relative overflow-hidden rounded-xl aspect-[4/5] bg-black"
                            >
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-all duration-700 z-10" />
                                <Image
                                    src={`/gallery_${num}.jpg`}
                                    alt={`Portfolio ${num}`}
                                    fill
                                    className="object-cover scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out opacity-80 group-hover:opacity-100"
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CONTACT SECTION */}
            <section id="contact" className="relative py-32 px-6 bg-[#050505]">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className={`text-4xl md:text-5xl font-light mb-12 text-center ${goldGradientText}`}
                    >
                        Contact & Bookings
                    </motion.h2>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="bg-[#0a0a0a] border border-white/5 p-8 md:p-14 rounded-3xl flex flex-col gap-8 shadow-2xl relative overflow-hidden"
                    >
                        {/* Subtle inner glow */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#BF953F] opacity-5 blur-[100px] pointer-events-none" />

                        {/* Phone Row */}
                        <motion.div variants={fadeUp} className="flex flex-col md:flex-row md:justify-between md:items-center border-b border-white/5 pb-6 gap-4">
                            <div className="flex items-center gap-3">
                                <div className="p-3 rounded-full bg-white/[0.03] text-[#BF953F]">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <span className="text-gray-400 text-sm uppercase tracking-widest font-medium">Direct Line</span>
                            </div>
                            <a href="tel:+919849013227" className="text-2xl text-gray-200 hover:text-[#FCF6BA] transition-colors font-light ml-14 md:ml-0">
                                +91 98490 13227
                            </a>
                        </motion.div>

                        {/* Email Row */}
                        <motion.div variants={fadeUp} className="flex flex-col md:flex-row md:justify-between md:items-center border-b border-white/5 pb-6 gap-4">
                            <div className="flex items-center gap-3">
                                <div className="p-3 rounded-full bg-white/[0.03] text-[#BF953F]">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <span className="text-gray-400 text-sm uppercase tracking-widest font-medium">Email Address</span>
                            </div>
                            <a href="mailto:seshukumari2002@gmail.com" className="text-xl text-gray-200 hover:text-[#FCF6BA] transition-colors font-light ml-14 md:ml-0">
                                seshukumari2002@gmail.com
                            </a>
                        </motion.div>

                        {/* Instagram Row */}
                        <motion.div variants={fadeUp} className="flex flex-col md:flex-row md:justify-between md:items-center border-b border-white/5 pb-6 gap-4">
                            <div className="flex items-center gap-3">
                                <div className="p-3 rounded-full bg-white/[0.03] text-[#BF953F]">
                                    <Instagram className="w-5 h-5" />
                                </div>
                                <span className="text-gray-400 text-sm uppercase tracking-widest font-medium">Instagram</span>
                            </div>
                            <a href="https://www.instagram.com/seshu388" target="_blank" rel="noreferrer" className="text-xl text-gray-200 hover:text-[#FCF6BA] transition-colors font-light ml-14 md:ml-0">
                                @seshu388
                            </a>
                        </motion.div>

                        {/* Locations */}
                        <motion.div variants={fadeUp} className="flex flex-col md:flex-row md:justify-between md:items-center pt-2 gap-4">
                            <div className="flex items-center gap-3">
                                <div className="p-3 rounded-full bg-white/[0.03] text-[#BF953F]">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <span className="text-gray-400 text-sm uppercase tracking-widest font-medium">Studios</span>
                            </div>
                            <span className="text-lg text-[#FCF6BA] font-light ml-14 md:ml-0">
                                Hyderabad • Guntur • Narasaraopet
                            </span>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="bg-black text-center py-10 border-t border-white/5 text-gray-600 text-sm font-light">
                <p>
                    © {new Date().getFullYear()} Seshu Kumari. All Rights
                    Reserved.
                </p>
            </footer>
        </main>
    );
}