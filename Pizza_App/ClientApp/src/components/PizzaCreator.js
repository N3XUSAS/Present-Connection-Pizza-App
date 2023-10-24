import React, { useState, useEffect } from 'react';
import axios from 'axios'

export default function PizzaCreator() { 

    const [counter, setCounter] = useState(0);
    const [sauce, setSauce] = useState(0);
    const [cheese, setcheese] = useState(0);
    const [ham, setHam] = useState(0);
    const [onions, setOnions] = useState(0);
    const [salami, setSalami] = useState(0);
    const [olives, setOlives] = useState(0);
    const [mozzarella, setMozzarella] = useState(0);
    const [size, setSize] = useState("Small");
    const [message, setMessage] = useState("");
    const [price, setPrice] = useState(0);
    const [toppings, setTopings] = useState([])
    const [toppingsList, setToppingsList] = useState("");
    const handleClick = () => setCounter(sauce + cheese + ham + onions + salami + olives + mozzarella)
    const handleSauce = (type) => {
        if (type === "+" && sauce === 0) {
            setSauce(sauce + 1);
            topingsList("Sauce", 1);
        }
        else if (type === "+" && sauce < 3)
            setSauce(sauce + 1);
        else if (type === "-" && sauce === 1) {
            setSauce(sauce - 1);
            topingsList("Sauce", 0);
        }
        else if (type === "-" && sauce > 0)
            setSauce(sauce - 1);
    }
    const handlecheese = (type) => {
        if (type === "+" && cheese === 0) {
            setcheese(cheese + 1);
            topingsList("Cheese", 1);
        }
        else if (type === "+" && cheese < 3)
            setcheese(cheese + 1);
        else if (type === "-" && cheese === 1) {
            setcheese(cheese - 1);
            topingsList("Cheese", 0);
        }
        else if (type === "-" && cheese > 0)
            setcheese(cheese - 1);
    }
    const handleHam = (type) => {
        if (type === "+" && ham === 0) {
            setHam(ham + 1);
            topingsList("Ham", 1);
        }
        else if (type === "+" && ham < 3)
            setHam(ham + 1);
        else if (type === "-" && ham === 1) {
            setHam(ham - 1);
            topingsList("Ham", 0);
        }
        else if (type === "-" && ham > 0)
            setHam(ham - 1);
    }
    const handleOnions = (type) => {
        if (type === "+" && onions === 0) {
            setOnions(onions + 1);
            topingsList("Onions", 1);
        }
        else if (type === "+" && onions < 3)
            setOnions(onions + 1);
        else if (type === "-" && onions === 1) {
            setOnions(onions - 1);
            topingsList("Onions", 0);
        }
        else if (type === "-" && onions > 0)
            setOnions(onions - 1);
    }
    const handleSalami = (type) => {
        if (type === "+" && salami === 0) {
            setSalami(salami + 1);
            topingsList("Salami", 1);
        }
        else if (type === "+" && salami < 3)
            setSalami(salami + 1);
        else if (type === "-" && salami === 1) {
            setSalami(salami - 1);
            topingsList("Salami", 0);
        }
        else if (type === "-" && salami > 0)
            setSalami(salami - 1);
    }
    const handleOlives = (type) => {
        if (type === "+" && olives === 0) {
            setOlives(olives + 1);
            topingsList("Olives", 1);
        }
        else if (type === "+" && olives < 3)
            setOlives(olives + 1);
        else if (type === "-" && olives === 1) {
            setOlives(olives - 1);
            topingsList("Olives", 0);
        }
        else if (type === "-" && olives > 0)
            setOlives(olives - 1);
    }
    const handleMozzarella = (type) => {
        if (type === "+" && mozzarella === 0) {
            setMozzarella(mozzarella + 1);
            topingsList("Mozzarella", 1);
        }
        else if (type === "+" && mozzarella < 3 && mozzarella >= 1)
            setMozzarella(mozzarella + 1);
        else if (type === "-" && mozzarella === 1) {
            setMozzarella(mozzarella - 1);
            topingsList("Mozzarella", 0);
        }
        else if (type === "-" && mozzarella > 1)
            setMozzarella(mozzarella - 1);
    }

    const topingsList = (tName, operation) => {
        var index = toppings.indexOf(tName)
        var array = toppings;
        if (operation === 0) {
            array.splice(index, 1);
        }
        else if (operation === 1) {
            array.push(tName);
            
        }
        setTopings(array);
        var stringData = toppings.reduce((result, item) => {
            return `${result}${item}, `
        }, "")
        stringData = stringData.substring(0, stringData.length - 2);
        setToppingsList(stringData);
    }

    useEffect(() => {
        handleClick();
    }, [sauce, cheese, ham, onions, salami, olives, mozzarella]);

    useEffect(() => {
        if (size !== "")
            Send();
    }, [counter])

    useEffect(() => {
        Send()
    }, [size])

    function Send() {
        fetch(`api/pizza2/price?size=${size}&toppings=${counter}`)
            .then((results) => {
            return results.json();
        })
            .then(data => {
                setPrice(data)
            })
    }

    function getDate() {
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        return `${year}-${month}-${date}`;
    }

    function getTime() {
        var time = new Date();
        var hours = time.getHours();
        if (hours < 10) {
            hours = '0' + hours;
        }
        var minutes = time.getMinutes();
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        var seconds = time.getSeconds();
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        return `${hours}:${minutes}:${seconds}`;
    }

    function Post() {
        const time = getTime();
        const today = getDate();
        let data = {
            Name: today + " " + time,
            Size: size,
            Toppings: toppingsList,
            Price: price,
            ToppingsCount: counter
        };
        const url = "https://localhost:44486/api/pizza2/post";
        axios.post(url, data).then((result) => {
            setMessage("Order placed " + time.toString());
            setSauce(0);
            setcheese(0);
            setHam(0);
            setOnions(0);
            setSalami(0);
            setOlives(0);
            setMozzarella(0);
            setTopings([]);
            setToppingsList("")
            setSize("Small");
        });
    }

    return (
        <main style={{ backgroundColor: "Orange", height: "89.7vh" }}>
            <div class="row">
                <div class="col align-self-center">
                    <div class="Creator">
                        <h3>Select size of the pizza</h3>
                    </div>
                    <div class="Creator">
                        <button type="button" class="button button1" onClick={() => {
                            setSize("Small")
                        }}>Small</button>
                        <button type="button" class="button button1" onClick={() => {
                            setSize("Medium")
                        }}>Medium</button>
                        <button type="button" class="button button1" onClick={() => {
                            setSize("Large")
                        }}>Large</button>
                    </div>
                </div>
                <div class="col align-self-center">
                    <div class="Creator">
                        <h3>Select topings for pizza</h3>
                    </div>
                    <div class="Creator">
                        <ul>
                            <il>
                                <div class="Creator grid">
                                    <button class="button button2" onClick={() => {
                                        handleSauce("-")
                                    }}>-</button>

                                    <h4 class="Center">Sauce {sauce}x</h4>

                                    <button class="button button2" onClick={() => {
                                        handleSauce("+")
                                    }}>+</button>
                                </div>
                            </il>
                            <il>
                                <div class="Creator grid">
                                    <button class="button button2" onClick={() => {
                                        handlecheese("-")
                                    }}>-</button>

                                    <h4 class="Center">Cheese {cheese}x</h4>

                                    <button class="button button2" onClick={() => {
                                        handlecheese("+")
                                    }}>+</button>
                                </div>
                            </il>
                            <il>
                                <div class="Creator grid">
                                    <button class="button button2" onClick={() => {
                                        handleHam("-")
                                    }}>-</button>

                                    <h4 class="Center">Ham {ham}x</h4>

                                    <button class="button button2" onClick={() => {
                                        handleHam("+")
                                    }}>+</button>
                                </div>
                            </il>
                            <il>
                                <div class="Creator grid">
                                    <button class="button button2" onClick={() => {
                                        handleOnions("-")
                                    }}>-</button>

                                    <h4 class="Center">Onions {onions}x</h4>

                                    <button class="button button2" onClick={() => {
                                        handleOnions("+")
                                    }}>+</button>
                                </div>
                            </il>
                            <il>
                                <div class="Creator grid">
                                    <button class="button button2" onClick={() => {
                                        handleSalami("-")
                                    }}>-</button>

                                    <h4 class="Center">Salami {salami}x</h4>

                                    <button class="button button2" onClick={() => {
                                        handleSalami("+")
                                    }}>+</button>
                                </div>
                            </il>
                            <il>
                                <div class="Creator grid">
                                    <button class="button button2" onClick={() => {
                                        handleOlives("-")
                                    }}>-</button>

                                    <h4 class="Center">Olives {olives}x</h4>

                                    <button class="button button2" onClick={() => {
                                        handleOlives("+")
                                    }}>+</button>
                                </div>
                            </il>
                            <il>
                                <div class="Creator grid">
                                    <button class="button button2" onClick={() => {
                                        handleMozzarella("-")
                                    }}>-</button>

                                    <h4 class="Center">Mozarella {mozzarella}x</h4>

                                    <button class="button button2" onClick={() => {
                                        handleMozzarella("+")
                                    }}>+</button>
                                </div>
                            </il>
                        </ul>
                    </div>
                </div>
                <div class="col align-self-center">
                    <h4>Total price for pizza is:</h4>
                    <h4>{price.toString()} Eur.</h4>
                    <br></br>
                    <h4>Your pizza size is:</h4>
                    <h4>{size}</h4>
                    <br></br>
                    <h4>Toppings included:</h4>
                    <h4>{toppingsList}</h4>
                    
                </div>
            </div>
            <div class="row">
                <div class="col"></div>
                <div class="col align-self-center Creator">
                    <button type="button" class="button button3" onClick={() => {
                        Post()
                    }}>Order</button>
                    
                </div>
                <div class="col">
                    <h4>{message}</h4>
                </div>
            </div>
        </main>
    )
}
