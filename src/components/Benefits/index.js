import React from 'react'
import Icon1 from '../../images/svg-3.svg'
import Icon2 from '../../images/svg-6.svg'
import Icon3 from '../../images/svg-9.svg'

import { BenefitsCard, BenefitsContainer, BenefitsH1, BenefitsIcon, BenefitsWrapper, BenefitsH2, BenefitsP } from './BenefitsElements'

const Benefits = () => {
    return (
        <BenefitsContainer id="benefits">
            <BenefitsH1>Benefits</BenefitsH1>
            <BenefitsWrapper>
                <BenefitsCard>
                    <BenefitsIcon src={Icon1} />
                        <BenefitsH2>
                            Data Security & Storage
                            <BenefitsP>
                            Your data is secured by complex security algorithms and distributed (many copies of the data stored across different locations) making it practically impossible to exploit
                            </BenefitsP>
                        </BenefitsH2>
                </BenefitsCard>
                <BenefitsCard>
                    <BenefitsIcon src={Icon2} />
                        <BenefitsH2>
                            Ease of usage
                            <BenefitsP>
                            No complex application design , simply connect your wallet using meta mask and add your transactions
                            </BenefitsP>
                        </BenefitsH2>
                </BenefitsCard>
                <BenefitsCard>
                    <BenefitsIcon src={Icon3} />
                        <BenefitsH2>
                            Trackable
                        <BenefitsP>
                            All your contracts deployed on the ethereum main net can be pubicly verified but ONLY you can view the details
                            </BenefitsP>
                        </BenefitsH2>
                </BenefitsCard>
            </BenefitsWrapper>
        </BenefitsContainer>
    )
}

export default Benefits
