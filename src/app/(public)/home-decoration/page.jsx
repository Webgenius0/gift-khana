
import HomeDecorationPage from '@/templates/HomeDecorationPage';
import { Suspense } from 'react';

export const metadata = {
    title: 'Home Decoration | Gift Khana',
    description: 'Explore our beautiful home decoration products and designs at Gift Khana.',
};

export default function Page() {
    return (
        <Suspense>
            <HomeDecorationPage />
        </Suspense>
    );
}
