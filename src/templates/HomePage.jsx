import React from 'react';
import Header from '@/components/Shared/NavBar/Header';
import Banner from '@/components/HomePageComponents/Banner';
import Footer from '@/components/Shared/Footer/Footer';
import CTASection from '@/components/HomePageComponents/CTASection';
import TopSellersSection from '@/components/HomePageComponents/TopSellersSection';

const HomePage = () => {
    return (
        <div className="min-h-screen bg-bg-primary">
            {/* --- Header --- */}
            <div className="absolute top-0 z-100 w-full">
                <Header />
            </div>
            <Banner />
            <div className='bg-gradient-to-b from-[#DAC1A9] to-[#FBF3EA] max-w-[1920px] mx-auto'>
                <CTASection />
                <TopSellersSection />
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;