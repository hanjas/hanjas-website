import React from 'react'
import styled from 'styled-components'

import icons from '../lib/utils/icons'

const Main = styled.div`
    height: 80vh;
    display: flex;
    background: #F2F2F2;
`;

const LeftSide = styled.div`
    width: 650px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LeftLabel = styled.div`
    font-family: 'Montserrat';
    color: #585858;
    font-size: 50px;

    div {
        font-family: 'Montserrat';
        font-size: 70px;
    }
`;

const RightSide = styled.div`
    padding: 0 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex: 1;

    .parent {
        width: 100%;
        display: flex;
    }

    .iconGrid {
        width: 1000px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap; 
    }
      
      .iconGrid-i {
        width: 125px;
        text-align: center;
        margin: 0 0 40px; 
    }
      
      .iconGrid-i svg {
        width: 50px;
        margin-bottom: 10px;
        filter: grayscale(1);
        transition: 200ms filter; 
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
                <LeftLabel>WHAT<div>I KNOW</div></LeftLabel>
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
