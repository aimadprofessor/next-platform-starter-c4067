import '../styles/globals.css';
import { Footer } from '../components/footer';

export const metadata = {
    title: 'Spawnback',
    description: 'Welcome to Spawnback'
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="antialiased text-white bg-neutral-950">
                {children}
                <Footer />
            </body>
        </html>
    );
}
