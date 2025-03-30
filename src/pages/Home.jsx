'use client'
import HeroSection from '@/components/HeroSection';
import Section4 from '@/components/Section4';
import VideoSection from '@/components/VideoSection';
import YoutubeSection from '@/components/YouTubeSection';
import Footer from '@/components/Footer';
import ProcessSection from '@/components/ProcessSection';
const Home = () => {

    return (
        <div>
            <HeroSection />
            <ProcessSection />
            <Section4 />
            <VideoSection />
            <YoutubeSection />
            <Footer />
        </div>
    );
};

export default Home;