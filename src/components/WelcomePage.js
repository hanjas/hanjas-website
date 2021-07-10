import React from 'react'
import styled from 'styled-components'

import icon from '../public/icon.svg';
import welcomebg from '../public/welcomebg.svg';

const Main = styled.div`
    height: 100vh;
    display: flex;
`;

const HeroSide = styled.div`
    background: #131925;
`;

const WelcomeBG = styled.img`
    height: 100%;
`;

const InfoSide = styled.div`
    padding: 80px 80px 0 80px;
    dispay: flex;
    flex-direction: column;
    flex:1;
`;

const Content = styled.div`
    // background: #eee;
    margin-top: 200px;
`;

const IAM = styled.div`
    font-size: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 600px;

    @media (max-width: 1550px) {
        width: 500px;
    }
    @media (max-width: 1475px) {
        width: 500px;
    }
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
`;

const Designation = styled.div`
    font-family: 'ProximaNovaLight';
    font-size: 35px;
    font-weight: Light;
    margin-top: -5px;
`;

const Caption = styled.div`
    margin-top: 20px;
    width: 322px;
    font-family: 'Kanit';
    font-weight: 200;
    font-size: 16px;
    line-height: 16px;
    opacity: 0.5;
`;

const VLine = styled.div`
    margin-top: 20px;
    background: #e6e1e1;
    width: 2px;
    flex: 1;
`;

export default function WelcomePage() {

    return (
        <Main>
            <InfoSide>
                <div>
                    <img src={icon} alt="website icon"/>
                </div>
                <Content>
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
                </Content>
                <VLine></VLine>
            </InfoSide>
            <HeroSide>
                <WelcomeBG src={welcomebg} alt="welcome background" />
            </HeroSide>
        </Main>
    )
}
