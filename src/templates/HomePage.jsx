import React from 'react';
import Header from '@/components/Shared/NavBar/Header';
import Banner from '@/components/HomePageComponents/Banner';

const HomePage = () => {
    return (
        <div className="min-h-screen bg-bg-primary">
            {/* --- Header --- */}
            <div className="absolute top-0 z-100 w-full">
                <Header />
            </div>
            <Banner />
        </div>
    );
};

export default HomePage;