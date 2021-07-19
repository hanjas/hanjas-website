import React from 'react'
import styled from 'styled-components'
import { device } from '../lib/utils/devices'

import icon from '../public/icon.svg';
import welcomebg from '../public/welcomebg.svg';

const Main = styled.div`
    height: 100vh;
    display: flex;
    // background: #F2F2F2;
`;

const HeroSide = styled.div`
    background: #131925;

    @media ${device.mobile} { 
        display: none;
    }
`;

const WelcomeBG = styled.img`
    height: 100%;

    @media ${device.desktop} { 
        width: 700px;
    }
`;

const InfoSide = styled.div`
    // height: 100%;
    padding: 80px;
    display: flex;
    flex-direction: column;
    flex:1;

    @media ${device.mobile} { 
        padding: 25px;
    }
`;

const Icon = styled.div`
    flex: 1;

    img {
        @media ${device.mobile} { 
            width: 45px;
            height: 45px;
        }
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    flex: 2;

    @media ${device.mobile} { 
        // margin-top: -100px;
    }

    @media ${device.laptop} { 
        width: 620px;
    }
`;

const IAM = styled.div`
    font-size: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const HLine = styled.div`
    background: #C4C4C4;
    height: 1px;
    margin-left: 5px;
    flex: 1;
`;

const Name = styled.div`
    font-family: 'Montserrat';
    color: #FF0000;
    font-size: 80px;
    margin-left: -5px;
    margin-top: -3px;
    line-height: 0.95;

    @media ${device.mobile} { 
        font-size: 65px;
    }
`;

const Designation = styled.div`
    font-family: 'ProximaNova';
    font-size: 35px;
    // font-weight: Light;
    // margin-top: -5px;

    @media ${device.mobile} { 
        font-size: 23px;
    }
`;

const Caption = styled.div`
    margin-top: 20px;
    width: 322px;
    font-family: 'Kanit';
    font-weight: 200;
    font-size: 16px;
    line-height: 16px;
    opacity: 0.5;
    margin-top: 10px;
`;

const VLine = styled.div`
    margin-top: 20px;
    background: #e6e1e1;
    width: 2px;
    flex: 1;

    @media ${device.mobile} { 
        display: none;
    }
`;

export default function WelcomePage() {

    return (
        <Main>
            <InfoSide>
                <Icon>
                    <img src={icon} alt="website icon"/>
                </Icon>
                <Content>
                    <div>
                        <IAM>
                            <div>I 'AM</div>
                            <HLine/>
                        </IAM>
                        <div>
                            <Name>ROSHIN HANJAS</Name>
                        </div>
                        <div>
                            <Designation>FULLSTACK ENGINEER</Designation>
                        </div>
                        <div>
                            <Caption>I always take responsibilities for the direction. I Look more broadly at the whole team.</Caption>
                        </div> 
                    </div>
                    <VLine></VLine>
                </Content>
            </InfoSide>
            <HeroSide>
                <WelcomeBG src={welcomebg} alt="welcome background" />
            </HeroSide>
        </Main>
    )
}
