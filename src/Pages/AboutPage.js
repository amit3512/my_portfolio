import React from 'react'
import Tittle from '../Components/Tittle'
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';


function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Tittle title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'React Js'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'Node Js'} progress={'50%'} width={'50%'} />
                <SkillsSection skill={'Laravel Php FrameWork'} progress={'50%'} width={'50%'} />
                <SkillsSection skill={'Web Design'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'UI/Ux Design'} progress={'76%'} width={'76%'} />
            </div>

            <Tittle title={'Services'} span={'Services'} />
            <div className="servives-container">
                <ServicesSection image={design} title={'Web design'} 
                text={'Magazines,Ecommerce,Blogs,Portfolios,Social Media.'}
                />
                
                
                <ServicesSection image={intelligence} title={'Web Development'} 
                text={'Web content development, client liaison, client-side/server-side scripting, Web server and network security configuration, and e-commerce development.'}
                />
                
                
            </div>

        </div>
    )
}

export default AboutPage;
