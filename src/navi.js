import React from 'react'
import { Link } from 'react-router-dom'
export default function Navigation() {
    return (
        <div>
            <div className="routes">
                <Link className="btn-danger routingBtn" to={"/"}>Home</Link>
                <br />
                <Link className="btn-danger routingBtn" to={"/compare"}>Compare</Link>
            </div>
        </div>
    )
}
