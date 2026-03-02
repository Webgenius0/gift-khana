
import ProductsPage from '@/templates/ProductsPage';
import { Suspense } from 'react';

export const metadata = {
    title: 'Products | Gift Khana',
    description: 'Explore our wide range of products at Gift Khana.',
};

export default function Page() {
    return (
        <Suspense>
            <ProductsPage />
        </Suspense>
    );
}
