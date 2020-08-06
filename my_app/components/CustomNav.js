import {Nav} from "react-bootstrap";
import Link from "next";

/**
 * Nav Component
 * @returns {JSX.Element}
 * @constructor
 */
export default function CustomNav () {
    return(
        <Nav.Item>
            <Nav.Link href={"/posts"}>Posts</Nav.Link>
        </Nav.Item>
    )
}
