import { useState, useEffect } from 'react';
import * as React from 'react';
import './table.css';

export default function Orders() { 

    const [order, setOrder] = useState([]);

    useEffect(() => {
        const url = "https://localhost:44486/api/pizza2/get";
        fetch(url).then((results) => {
            return results.json();
        })
        .then(data => {
            setOrder(data)
        })
    }, [])

    return (
        
        <main style={{ backgroundColor: "Orange", height: "89.7vh" }}>
            <div className="Table" style={{ overflow: 'auto', height: "600px"}}>
                <table class="table table-hover fixed-header">
                    <thead>
                        <tr>
                            <th style={{ backgroundColor: "#ff8c42 " }} scope="col">Pizza name</th>
                            <th style={{ backgroundColor: "#ff8c42 " }} scope="col">Size</th>
                            <th style={{ backgroundColor: "#ff8c42 " }} scope="col">Toppings</th>
                            <th style={{ backgroundColor: "#ff8c42 " }} scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {order.map((val, key) => {
                            return (
                                <tr key={key}>
                                    <td style={{ backgroundColor: "#ffcf59" }}>{val.name}</td>
                                    <td style={{ backgroundColor: "#ffcf59" }}>{val.size}</td>
                                    <td style={{ backgroundColor: "#ffcf59" }}>{val.toppings}</td>
                                    <td style={{ backgroundColor: "#ffcf59" }}>{val.price} Eur.</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </main>


    )
}