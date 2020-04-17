import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Title = styled.h1`
    color: red;
    padding: 15px;
    font-family: 'Space Mono', monospace;
`;

const Img = styled.img`
    width: 50vw;
    hight: 50vh;
    margin-bottom: 1%;
`;

const Info = styled.p`
    display: inline;
    margin: 15%;
    color: white;
`;

const Explain = styled.p`
    display: flex;
    width: 75vw;
    margin: 3% auto;
    color: white;
    padding-bottom: 75px;
`;

const Api = () => {
    const [dayImg, setDayImg] = useState({data:[]});
    const nasa = dayImg.data;

    useEffect(() => {
        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=9qsXo6hTRJAN88vgd4XhOH0J3SIybr0t6ZOkSgvW')
            .then(response => {
                console.log(response)
                setDayImg(response)
            })
            .catch(error => console.log('Error!', error));
    }, [])

    return (
        <div>
            <Title>{nasa.title} </Title>
            <Img src={nasa.url} alt={nasa.title} /><br/>
            <Info>{nasa.copyright}</Info>
            <Info>{nasa.date}</Info>
            <Explain>{nasa.explanation}</Explain>
        </div>
    )
}

export default Api;