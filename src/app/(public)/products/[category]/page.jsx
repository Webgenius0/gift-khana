
import ProductsPage from '@/templates/ProductsPage';
import { Suspense } from 'react';

export async function generateMetadata({ params }) {
    const { category } = await params;
    const title = category
        ? `${category.replace(/-/g, ' ').split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} | Gift Khana`
        : 'Products | Gift Khana';
    return {
        title,
        description: 'Explore our wide range of products at Gift Khana.',
    };
}

export default function Page() {
    return (
        <Suspense>
            <ProductsPage />
        </Suspense>
    );
}
