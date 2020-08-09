import {Component} from "react";
import {Card} from "react-bootstrap";

export class UserCard extends Component {
    render() {
        return <Card className="text-center">
            <Card.Header>
                <h3>{this.props.mUser.firstName} {this.props.mUser.lastName}</h3>
            </Card.Header>
            <Card.Body>
                <p>Tél : {this.props.mUser.phone}</p>
                <p>Mail : <a href={"mailTo:" + this.props.mUser.mail}>{this.props.mUser.mail}</a></p>
                <p>Website : {this.props.mUser.website}</p>
            </Card.Body>
        </Card>;
    }
}