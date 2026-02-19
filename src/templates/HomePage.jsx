import React from 'react';
import Header from '@/components/Shared/NavBar/Header';
import Banner from '@/components/HomePageComponents/Banner';
import Footer from '@/components/Shared/Footer/Footer';
import CTASection from '@/components/HomePageComponents/CTASection';
import TopSellersSection from '@/components/HomePageComponents/TopSellersSection';

const HomePage = () => {
    return (
        <div className="min-h-screen bg-[#DAC1A9] flex flex-col">
            {/* --- Header --- */}
            <div className="lg:absolute top-0 z-100 w-full">
                <Header className='bg-[#DCC0AB] lg:bg-transparent' />
            </div>
            <div className='-mb-1'>
                <Banner />
            </div>
            <div className='flex-1 w-full bg-linear-to-b from-[#DBC0A6] to-[#FBF3EA]  mx-auto relative z-1'>
                <CTASection />
                <TopSellersSection />
            </div>
            <Footer className="mx-auto" />
        </div>
    );
};

export default HomePage;       