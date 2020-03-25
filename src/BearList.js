import React, {useEffect, useState} from "react"

export default function BeerList({value})
{
    const [beer, setBeer] = useState([]);

    useEffect(() => {
        fetch('https://api.punkapi.com/v2/beers?page='+ value)
            .then(response => response.json())
            .then(setBeer)
    }, [value]);

    return (
        <React.Fragment>

            <h1>Page : {value}</h1>

            <ul>
                {
                    beer.map((beer) => (
                        <li key={beer.id}>{beer.name}</li>
                    ))
                }
            </ul>

        </React.Fragment>
    )
}