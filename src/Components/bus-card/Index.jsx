import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios"


export function Index() {
    const [buses, setBuses] = useState([])

    useEffect(() => {
        axios.get('https://bus-registration-test.herokuapp.com/buses')
            .then(response => {
                setBuses(response.data)
                console.log(response.data)
            });
    }, [])

    return (
        buses.map(bus => (
            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 space" style={{ marginTop: '5%', marginBottom: "10%" }} key={bus.plate}>
          <div class="card custom" style={{ width: "18rem" }}>
            <div class="card-body">
              <h2 class="card-title">{bus.brand}</h2>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item" style={{ fontWeight: 'bolder' }}>Color: {bus.color}</li>
              <li class="list-group-item" style={{ fontWeight: 'bolder' }}>Plate: {bus.plate}</li>
              <li class="list-group-item" style={{ fontWeight: 'bolder' }}>Model: {bus.model}</li>
              <li class="list-group-item" style={{ fontWeight: 'bolder' }}>Membership: {bus.membership}</li>
            </ul>
          </div>
        </div>
        ))
    )
}


