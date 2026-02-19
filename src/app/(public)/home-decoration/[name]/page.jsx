
import SingleItemPage from '@/templates/SingleItemPage';
import { Suspense } from 'react';

export const metadata = {
    title: 'Home Decoration Details | Gift Khana',
    description: 'Discover details about our home decoration items at Gift Khana.',
};

export default function Page() {
    return (
        <Suspense>
            <SingleItemPage />
        </Suspense>
    );
}
