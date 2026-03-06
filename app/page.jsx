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

                {/* Centered Logo */}
                <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center">
                    <Image
                        src={netlifyLogo}
                        alt="Spawnback logo"
                        className="h-20 w-auto sm:h-28 md:h-36 drop-shadow-2xl"
                        priority
                    />
                    <p className="text-lg sm:text-xl md:text-2xl font-light tracking-wide text-white/90 max-w-xl">
                        Something great is coming
                    </p>
                </div>
            </section>

            {/* Info Section */}
            <section className="bg-neutral-900 px-6 py-20 sm:px-12 sm:py-28">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
                        About Spawnback
                    </h2>
                    <p className="text-lg leading-relaxed text-neutral-300">
                        We are building something exciting. Stay tuned for updates as we prepare to
                        launch. Our team is working hard to bring you an experience that will
                        redefine what you expect.
                    </p>
                </div>
            </section>
        </>
    );
}
