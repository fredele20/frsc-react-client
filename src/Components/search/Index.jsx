import React, { useState, useEffect } from 'react'
import axios from "axios"

export function IndexSearch() {

    const [buses, setBuses] = useState([])

    useEffect(() => {
        axios.get('https://bus-registration-test.herokuapp.com/buses')
            .then(response => {
                setBuses(response.data)
                console.log(response.data)
            });
    }, [])

    const [input, setInput] = useState("")
    
    const handleInput = event => {
        setInput(
          event.target.value
        );
    };

    const searchedBus = buses.filter(bus => {
        return (
          bus.plate
            .toUpperCase()
            .indexOf(input.toUpperCase()) !== -1
        );
      });
    

    return (
        <div>
            <input
            className="input"
            style={{ margin: "auto" }}
            onChange={handleInput}
            type="text"
            value={input}
            placeholder="Search Country"
            />
            { searchedBus }
        </div>
    )
}
