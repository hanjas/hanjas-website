import React from 'react'
import styled from 'styled-components'

import medium from '../public/medium.svg'

export default function Blogs() {

    const blogs = [
        {
            title: "How to make your MySQL transactions valuable in Node.js",
            content: "MySQL transactions come in handy when we deal with multiples queries. Also, we should roll back all queries if one of them failed. We can avoid callback hell which is shown in the document by using promises. In this tutorial, we are going to write a wrapper on top of MySQL library.",
            publishicon: medium,
            img: "https://miro.medium.com/max/2000/1*pK8P0MWjU1HiHkR1CDnb2A.jpeg",
            link: "https://hanjas.medium.com/how-to-make-your-mysql-transactions-valuable-in-node-js-19d62dca8764"
        },
        {
            title: "These cassandra utils will save you a lot of time",
            content: "This article shows you how to implement Cassandra util in your Node.js project. Apache Cassandra is a highly scalable open-source NoSQL database system being the right choice when you need scalability and high availability without compromising performance.",
            publishicon: medium,
            img: "https://miro.medium.com/max/2000/1*U2JmThnxLsAG9hsVs-Nz6Q.jpeg",
            link: "https://hanjas.medium.com/these-cassandra-utils-will-save-you-a-lot-of-time-54e3e0453996"
        },
        {
            title: "How to write your own date library in 15mins",
            content: "Most of us find it very hard when we work with multiple date formats. Handling date in javascript is not easy, so most of us use existing libraries like moment.js for our use case without even knowing what is happening inside those libraries.",
            publishicon: medium,
            img: "https://miro.medium.com/max/16668/1*htNbPUpyseYGhPohu9SZ7Q.jpeg",
            link: "https://hanjas.medium.com/how-to-write-your-own-date-library-in-15mins-da105b039b78"
        }
    ]

    const Blogs = styled.div`
        height: 90vh;
        // padding: 60px 40px;
        position: relative;
    `;

    const Title = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
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
        text-align: center;
        color: #585858;

        .titlebg {
            width: 100%;
            font-family: 'Montserrat-Normal';
            font-style: normal;
            font-weight: normal;
            font-size: 110px;
            text-align: center;
            
            color: #F1F1F1;
            position: absolute;
            top: 60px;
            left: 0;
            z-index: -1;
        }
    `;

    const Content = styled.div`
        widht: 100%;
        margin-top: 100px;
        display: flex;
        justify-content: center;
    `;

    const CardContainer = styled.div`
        width: 1442px;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        align-items: center;
    `;

    const Card = styled.div`
        width: 357px;
        height: 500px;
        box-shadow: 0px 8px 23px rgba(121, 116, 175, 0.4);
        border-radius: 14px;
        overflow: hidden;

        .header {
            padding: 10px;
            display: flex;
            align-items: center;
            height: 130px;
            position: relative;

            img {
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
            }
        }
        .body {
            height: 225px;
            padding: 20px;
            color: #3A3A3A;
            line-height: 29px;
            font-family: 'ProximaNova';
        }
        .footer {

            padding: 20px;
            display: flex;
            justify-content: space-between;

            img {
                width: 80px;
            }
        }
    `;

    const Link = styled.a`
        width: 134px;
        height: 40px;
        left: 262px;
        top: 2069px;
        text-align: center;
        line-height: 40px;
        text-decoration: none;
        color: #fff;
        
        background: #000000;
        border-radius: 29.5px;
    `;

    return (
        <Blogs>
            <Title>
                <TitleContent>MY BLOGS
                    <div className="titlebg">MY BLOGS</div>
                </TitleContent>
            </Title>
            <Content>
                <CardContainer>
                    {blogs.map((item)=>(
                        <Card>
                            <div className="header">
                                <img src={item.img} alt="cardtitle" />
                            </div>
                            <div className="body">{item.content}</div>
                            <div className="footer">
                                <img src={item.publishicon} alt="publisher" />
                                <Link href={item.link}>Read more</Link>
                            </div>
                        </Card>
                    ))}
                </CardContainer>
            </Content>
        </Blogs>
    )
}
