import Image from 'next/image';
import { Header } from 'components/header';
import netlifyLogo from 'public/netlify-logo.svg';

export default function Page() {
    return (
        <>
            {/* Hero Section with Video Background */}
            <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
                {/* Video Background */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover"
                >
                    <source src="/video/background.mp4" type="video/mp4" />
                </video>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/50" />

                {/* Header */}
                <Header />

                {/* Centered Logo and Hero Text */}
                <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center">
                    <Image
                        src="/images/logo.png"
                        alt="Spawnback logo"
                        width={1075}
                        height={901}
                        unoptimized
                        className="w-48 sm:w-[280px] md:w-[350px] h-auto drop-shadow-2xl"
                        style={{ height: 'auto' }}
                        priority
                    />

                    <div className="flex flex-col items-center gap-2 max-w-3xl">
                        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-white/95">
                            Beyond Cloud Dependent AI.
                        </h1>

                        <p className="text-sm sm:text-base md:text-lg font-light tracking-wide text-white/70 leading-relaxed max-w-2xl">
                            Reclaiming the autonomous backend. A scalable, vendor-agnostic foundation for
                            intelligent AI applications — from global edge to private on-premises cloud.
                        </p>
                    </div>

                    <div className="mt-2">
                        <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.4em] text-white/40">
                            In Active Development • 2026
                        </p>
                    </div>
                </div>

            </section>

            {/* Info Section */}
            <section className="bg-neutral-900 px-6 py-20 sm:px-12 sm:py-28">
                <div className="mx-auto max-w-3xl text-center">
                    <>
                        {/* Logo Container */}
                        <div style={{ marginBottom: '2.5rem' }}>
                            <img
                                src="/images/logo2.png"
                                alt="Spawnback Logo"
                                style={{ height: '60px', width: 'auto', display: 'block' }}
                            />
                        </div>
                        <div style={{ textAlign: 'left', maxWidth: '900px' }}>
                            <h2 style={{ fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#e4e4e7', marginBottom: '3rem', fontSize: '1rem', lineHeight: '1.4' }}>
                                The Sovereign, Scalable, Global Backend as a Service
                            </h2>

                            <div style={{ borderLeft: '2px solid #3f3f46', paddingLeft: '2rem', marginBottom: '4rem' }}>
                                <p style={{ fontSize: '1.5rem', fontWeight: 600, color: '#ffffff', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
                                    Beyond the Sandbox. Beyond Vendor Lock-in.
                                </p>

                                <p style={{ color: '#d4d4d8', lineHeight: 1.7, marginBottom: '1.5rem', fontSize: '1.15rem' }}>
                                    Modern AI development is currently trapped in proprietary silos. Most platforms offer speed at the cost of sovereignty, locking grandest ideas into restrictive infrastructures. <strong style={{ color: '#fff' }}>Spawnback is the strategic alternative.</strong>
                                </p>

                                <p style={{ color: '#d4d4d8', lineHeight: 1.7, fontSize: '1.15rem' }}>
                                    Built by cloud veterans with multiple successful exits, we provide a high-performance, vendor-agnostic ecosystem designed for absolute architectural freedom. From startups aiming for global scale to enterprises requiring on-premises private clouds, Spawnback delivers the foundation.
                                </p>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
                                {[
                                    { title: "Elastic Microservices", desc: "Distributed Python architecture built on FastAPI and WebSockets." },
                                    { title: "Intelligent Data Layer", desc: "High-performance PostgreSQL with integrated Vector ML support." },
                                    { title: "Infrastructure Sovereignty", desc: "Deploy anywhere—from global edge to secure private clouds." },
                                    { title: "Full-Stack Orchestration", desc: "Global payments, user management, and real-time AI assistance." }
                                ].map((item, i) => (
                                    <div key={i}>
                                        <strong style={{ color: '#ffffff', display: 'block', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.75rem' }}>{item.title}</strong>
                                        <span style={{ color: '#a1a1aa', fontSize: '1rem', lineHeight: '1.6' }}>{item.desc}</span>
                                    </div>
                                ))}
                            </div>

                            <div style={{ marginTop: '5rem', paddingTop: '2.5rem', borderTop: '1px solid #27272a' }}>
                                <p style={{ fontFamily: 'monospace', color: '#f4f4f5', fontSize: '0.75rem', letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: '0.75rem', fontWeight: 'bold' }}>
                                    Status: In Active Development
                                </p>
                                <p style={{ fontStyle: 'italic', color: '#d4d4d8', fontSize: '0.95rem', letterSpacing: '0.05em' }}>
                                    Architected for Exit. Built for Scale. Independent by Design.
                                </p>
                            </div>
                        </div>
                    </>

                </div>
            </section>
        </>
    );
}
