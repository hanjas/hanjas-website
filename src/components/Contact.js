import React from 'react'
import styled from 'styled-components'
import icons from '../lib/utils/icons'
import { device } from '../lib/utils/devices'

const Main = styled.div`
    height: 80vh;
    padding: 0 60px;
    position: relative;

    @media ${device.mobile} {
        padding: 30px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`;

const Title = styled.div`
    display: flex;
    position: relative;
    // margin-left: 100px;
`;

const TitleContent = styled.div`
    width: 100%;
    height: 62px;
    margin-top: 99px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: bold;
    font-size: 50px;
    // line-height: 102%;
    color: #585858;

    .titlebg {
        width: 100%;
        font-family: 'Montserrat-Normal';
        font-style: normal;
        font-weight: normal;
        font-size: 110px;
        
        color: #F1F1F1;
        position: absolute;
        top: 60px;
        left: 0;
        z-index: -1;
    }

    @media ${device.mobile} {
        margin-top: 42px;
        font-size: 28px;

        .titlebg {
            font-size: 45px;
            top: 30px;
        }
    }
`;

const Body = styled.div`
    height: 400px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${device.mobile} {
        height: 320px;
        flex-direction: column;
        justify-content: space-between;
    }
`;

const Name = styled.div`
    font-family: 'PalanquinDark';
    font-size: 85px;
    color: #363636;

    @media ${device.mobile} {
        width: 100%;
        font-size: 48px;
        // margin-left: -20px;
    }
`;

const ContactDetails = styled.div`
    display: flex;
    // margin-left: 500px;

    .icons {
        height: 130px;
        padding: 20px 10px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        background: #121B2B;
        border-radius: 19px;
        color: #fff;

        svg {
            width: 25px;
            height: 25px;
            
        }
    }

    .details {
        height: 130px;
        padding: 20px 10px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;

        div {
            height: 25px;
            font-family: 'ProximaNova';
            font-size: 25px;
            line-height: 28px;
            opacity: 0.7;
        }
    }

    @media ${device.mobile} {
        width: 100%;
        margin-top: 30px;

        .details {
            flex: 1;

            div {
                font-size: 17px;
            }
        }
    }
`;

const Footer = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${device.mobile} {
        flex-direction: column;
        height: 120px;
    }
`;

const HireButton = styled.button`
    width: 417px;
    height: 72px;

    background: #121B2B;
    color: #fff;
    font-family: PalanquinDark;
    font-size: 36px;
    text-align: center;

    @media ${device.mobile} {
        width: 100%;
        display: none;
    }
`;

const Links = styled.div`
    width: 200px;
    display: flex;

    svg {
        filter: grayscale(1);
        width: 25px;
        height: 25px;
        margin-right: 10px;
    }

    svg:hover {
        filter: none;
    }

    @media ${device.mobile} {
        margin-top: 40px;
        justify-content: space-between;
    }
`;

export default function Contact() {

    return (
        <Main>
            <Title>
                <TitleContent>CONTACT ME
                    <div className="titlebg">CONTACT ME</div>
                </TitleContent>
            </Title>
            <Body>
                <Name>Roshin Hanjas</Name>
                <ContactDetails>
                    <div className="icons">
                        {icons.mobile.icon}
                        {icons.mail.icon}
                        {icons.address.icon}
                    </div>
                    <div className="details">
                        <div>+91 77 36 988892</div>
                        <div>roshan.hanjas@gmail.com</div>
                        <div>HSR Layout, Sector 1, Bangalore</div>
                    </div>
                </ContactDetails>
            </Body>
            <Footer>
                <Links>
                    <a href="https://github.com/hanjas">{icons.github.icon}</a>
                    <a href="https://hanjas.medium.com/">{icons.medium.icon}</a>
                    <a href="https://www.linkedin.com/in/roshan-hanjas/">{icons.linkedin.icon}</a>
                </Links>
                <HireButton>Hire me!</HireButton>
            </Footer>
        </Main>
    )
}
