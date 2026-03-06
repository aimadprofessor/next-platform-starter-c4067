import Image from 'next/image';
import netlifyLogo from 'public/netlify-logo.svg';

export function Header() {
    return (
        <header className="absolute top-0 left-0 right-0 z-20 flex items-center justify-start py-2 px-4">
            <div className="flex items-center">
                <Image
                    src="/images/logo2.png"
                    alt="Spawnback logo"
                    width={1171}
                    height={178}
                    unoptimized
                    className="w-20 sm:w-28 md:w-32 h-auto drop-shadow-lg"
                    style={{ height: 'auto' }}
                    priority
                />
            </div>
        </header>
    );
}
