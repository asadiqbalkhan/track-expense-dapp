import React from 'react'
import {ReactComponent as ImageOne} from '../../images/svg-5.svg'

import {InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Subtitle,
    ImgWrap, 
    Heading} from './InfoElements'




const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark}) => {
    return (
       <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                    <TextWrapper>
                        <TopLine>
                            {topLine}
                        </TopLine>
                        <Heading lightText={lightText}>
                            {headline}
                        </Heading>
                        <Subtitle darkText={darkText}>
                            {description}
                        </Subtitle>
                    </TextWrapper>
                    </Column1>
                    <Column2>
                    <ImgWrap>
                    <ImageOne width='500px' height='500px'/> 
                    </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
       </>
    )
}

export default InfoSection
