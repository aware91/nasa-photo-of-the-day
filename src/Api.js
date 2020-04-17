import React, { useEffect, useState } from 'react';
import axios from 'axios';


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
            <h2>{nasa.title} </h2>
            <img src={nasa.url} alt={nasa.title} />
            <p>{nasa.copyright}</p>
            <p>{nasa.date}</p>
            <p>{nasa.explanation}</p>
        </div>
    )
}

export default Api;