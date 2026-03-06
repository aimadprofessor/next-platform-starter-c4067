import '../styles/globals.css';
import { Footer } from '../components/footer';

export const metadata = {
    metadataBase: new URL('https://spawnback.com'),
    title: 'Spawnback | Sovereign AI Backend as a Service',
    description: 'Beyond cloud dependency. A scalable, vendor-agnostic foundation for intelligent AI applications—from global edge to private on-premises cloud.',
    keywords: ['Sovereign AI', 'Global Backend as a Service', 'Scalable AI Infrastructure', 'Vector Database', 'Python Microservices', 'BaaS'],
    icons: {
        icon: [
            { url: '/favicon.svg', type: 'image/svg+xml' },
            { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
        ],
        shortcut: '/favicon.ico',
        apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
    openGraph: {
        title: 'Spawnback | Sovereign AI Infrastructure',
        description: 'The scalable global strategy for independent AI applications.',
        url: 'https://spawnback.com',
        siteName: 'Spawnback',
        images: [{ url: '/images/logo.png' }], // AI looks for visual branding context
        type: 'website',
    }
};

export default function RootLayout({ children }) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Spawnback",
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "Cloud, On-Premise",
        "description": "Scalable global Backend as a Service (BaaS) for sovereign AI applications.",
        "author": {
            "@type": "Organization",
            "name": "Spawnback AB"
        },
        "offers": {
            "@type": "Offer",
            "availability": "https://schema.org"
        }
    };

    return (
        <html lang="en">
        <head>
            <link rel="icon" href="/favicon.svg" sizes="any" />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </head>
        <body className="antialiased text-white bg-neutral-950">
        <main>{children}</main>
        <Footer />
        </body>
        </html>
    );
}
