import React from 'react'

export const Card = (burger) => {
    return (
        <div className="card">
                <h3 className="card-title">{burger.burger.name}</h3>
                <p className="card-description">{burger.burger.description}</p>
                <p className="card-location">{burger.burger.location.address}</p>
                <p className="card-web">{burger.burger.location.web}</p>
        </div>
    )
}

export default Card