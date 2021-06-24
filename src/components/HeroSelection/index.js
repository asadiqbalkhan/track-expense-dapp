import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroSelectionElements'
import { Button } from '../ButtonElement'
const HeroSection = () => {

    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'>

                </VideoBg>
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    Secure your Data on the Blockchain
                </HeroH1>
                <HeroP>
                    Your data stored on the blockchain is immutable and stored on a distributed ledger. Complete transparency of 
                    your transactions exclusively available to you and can be viewed whenever you want and where ever you want.
                    
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='track-expenses' 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    primary="true"
                    dark="true"
                    smooth={true} duration={1000} spy={true} exact='true'
                    offset={-79}
                    >
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
