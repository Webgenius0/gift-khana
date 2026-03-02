
import SingleItemPage from '@/templates/SingleItemPage';
import { Suspense } from 'react';

export async function generateMetadata({ params }) {
    const { name } = await params;
    const title = name
        ? `${name.replace(/-/g, ' ').split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} | Gift Khana`
        : 'Product Details | Gift Khana';
    return {
        title,
        description: 'Discover details about our products at Gift Khana.',
    };
}

export default function Page() {
    return (
        <Suspense>
            <SingleItemPage />
        </Suspense>
    );
}
