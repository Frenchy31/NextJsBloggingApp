import {Nav} from "react-bootstrap";
import React from "react";

/**
 * Nav Component
 * @returns {JSX.Element}
 * @constructor
 */
export default function CustomNav () {
    return(
        <Nav.Item>
            <Nav.Link href={"/posts/1"}>Posts</Nav.Link>
        </Nav.Item>
    )
}
