import React from 'react'
import styled from 'styled-components'

import icons from '../lib/utils/icons'
import { device } from '../lib/utils/devices'

const Main = styled.div`
    height: 80vh;
    display: flex;
    background: #F2F2F2;

    @media ${device.mobile} { 
        height: 120vh;
        flex-direction: column;
        align-items: center;
    }
`;

const LeftSide = styled.div`
    width: 650px;
    display: flex;
    justify-content: center;
    align-items: center;



    @media ${device.mobile} { 
        width: 100%;
        margin-top: 50px;
    }
`;

const LeftLabel = styled.div`
    font-family: 'Montserrat';
    color: #585858;
    font-size: 50px;

    @media ${device.mobile} { 
        font-size: 30px;
    }

    div {
        font-family: 'Montserrat';
        font-size: 70px;


        @media ${device.mobile} { 
            display: inline;
            font-size: 30px;
        }
    }
`;

const RightSide = styled.div`
    padding: 0 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex: 1;

    @media ${device.mobile} { 
        padding: 40px;
    }

    .iconGrid {
        width: 1000px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;

        @media ${device.mobile} { 
            width: 100%;
            justify-content: center;
        }
    }
      
      .iconGrid-i {
        width: 125px;
        text-align: center;
        margin: 0 0 40px; 

        @media ${device.mobile} { 
            width: 95px;
        }
    }
      
      .iconGrid-i svg {
        width: 50px;
        margin-bottom: 10px;
        filter: grayscale(1);
        transition: 200ms filter; 

        @media ${device.mobile} { 
            width: 40px;
        }
    }
      
      .iconGrid-i:hover svg {
        filter: none; 
    }
`;

export default function WhatIKnow() {

    const wik = [
        'js',
        'nodejs',
        'express',
        'java',
        'python',
        'git',
        'ubuntu',
        'kafka',
        'aws',
        'firebase',
        'gcloud',
        'laravel',
        'socketio',
        'cassandra',
        'mqtt',

        'docker',
        'nginx',
        'mysql',
        'npm',
        'postgres',
        'react',
        'redux',
        'figma',
    ];

    return (
        <Main>
            <LeftSide>
                <LeftLabel>WHAT <div>I KNOW</div></LeftLabel>
            </LeftSide>
            <RightSide>

                <div className='iconGrid'>
                    {wik.map((i, k) => {
                        if(!icons[i]) console.log('icon', i, 'missing')
                        if(!icons[i]) return null;
                        return <div className="iconGrid-i" key={k}>
                            {icons[i].icon}
                            <div>{icons[i].label}</div>
                        </div>
                    })}
                </div>

            </RightSide>
        </Main>
    )
}
