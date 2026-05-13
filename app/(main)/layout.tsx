import { Metadata } from 'next';
import Layout from '../../layout/layout';


interface AppLayoutProps {
    children: React.ReactNode;
}

export const metadata: Metadata = {
    title: 'SK COFFEE',
    description: 'coffe pant on the top of BOLAVEN Montian',
    robots: { index: false, follow: false },
    viewport: { initialScale: 1, width: 'device-width' },
    openGraph: {
        type: 'website',
        title: 'SK COFFEE',
        description: 'Coffee BOLAVEN of Laos',
        images: ['https://res.cloudinary.com/dp3zeejct/image/upload/v1778651993/coffee_cupper_qjdtn8.png'],
        ttl: 604800
    },
    icons: {
        icon: '/favicon.ico'
    }
};

export default function AppLayout({ children }: AppLayoutProps) {
    return <Layout>{children}</Layout>;
}
