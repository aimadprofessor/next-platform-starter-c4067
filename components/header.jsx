import Image from 'next/image';
import netlifyLogo from 'public/netlify-logo.svg';

export function Header() {
    return (
        <header className="absolute top-0 left-0 right-0 z-10 flex items-center justify-center py-6">
            <Image src={netlifyLogo} alt="Logo" className="h-8 w-auto" priority />
        </header>
    );
}
