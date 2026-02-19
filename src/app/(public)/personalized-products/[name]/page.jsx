
import SinglePersonalizeItemPage from '@/templates/SinglePersonalizeItemPage';
import { Suspense } from 'react';

export const metadata = {
    title: 'Customize Your Gift | Gift Khana',
    description: 'Personalize your item with custom designs at Gift Khana.',
};

export default function Page() {
    return (
        <Suspense>
            <SinglePersonalizeItemPage />
        </Suspense>
    );
}
