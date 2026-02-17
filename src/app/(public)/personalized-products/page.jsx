
import PersonalizedProductsPage from '@/templates/PersonalizedProductsPage';
import { Suspense } from 'react';

export const metadata = {
    title: 'Personalized Custom Gifts | Gift Khana',
    description: 'Design your own custom gifts with Gift Khana. Choose from a wide range of personalized products.',
};

export default function Page() {
    return (
        <Suspense>
            <PersonalizedProductsPage />
        </Suspense>
    );
}
