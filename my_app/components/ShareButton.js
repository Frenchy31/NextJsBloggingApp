import {CopyToClipboard} from "react-copy-to-clipboard/lib/Component";
import {Button, Toast} from "react-bootstrap";
import {useState} from "react";

export default function ShareButton({link}) {
    //Initialize Toast Hook
    const [show, setShow] = useState(false)
    return(
        <>
        {window && <CopyToClipboard text={link}><Button onClick={() => setShow(true)}>Share</Button></CopyToClipboard>}
        <div style={{
            width: "100px",
            marginTop: "10px",
        }}>
            <Toast  onClose={() => setShow(false)} show={show} delay={3000} autohide>
                <Toast.Body>Lien copié !</Toast.Body>
            </Toast>
        </div>
        </>
    )
}