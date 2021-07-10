import React from 'react'
import styled from 'styled-components'

import icons from '../lib/utils/icons'

export default function WhatIKnow() {

    const Main = styled.div`
        // width: 1600px;
        // margin: 0 auto;
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

    const Cards = styled.div`
        width: 95%;
        height: 92.5px;
        background: #fff;
        margin: 15px;
        border-radius: 10px;
        box-shadow: 0px 8px 23px rgba(121, 116, 175, 0.1);
    `;




    // const 
    const wik = [
        'nodejs',
        'express',
        'docker',
        'git',
        // 'github',
        'js',
        'mysql',
        'nginx',
        'npm',
        'postgres',
        'python',
        'ubuntu',
        // 'vscode',
        'webpack',
        'babel',
        'sass',
        'd3',
        'react',
        // 'photoshop',
        // 'xd',
        // 'ai',
        'redux',
        // 'angular',
        'aws',
        'figma',
        'firebase',
        'gcloud',
        // 'graphql',
        // 'heroku',
        'java',
        'laravel',
        'socketio',
        // 'threejs',
    ];
    // const wik = [[{},{},{},{}],[{},{},{},{}],[{},{},{},{}],[{},{},{},{}]];

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
                 
                {/* {
                    
                    wik.map( (list)=>(<div className="parent">
                        {list.map((item)=>(<Cards></Cards>))}
                    </div>) )


                    // wik.map( (list)=>(
                    //     list.map((item)=>(<Cards></Cards>))
                    //  ) )

                 } */}
                 
                {/* {wik.map((item) => (<Cards></Cards>))} */}

            </RightSide>
        </Main>
    )
}
