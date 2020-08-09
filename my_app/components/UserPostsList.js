import {Component} from "react";
import {Col, Jumbotron, Row} from "react-bootstrap";

export default class UserPostsList extends Component {
    render() {
        return <Row>
            <Col md={{span: 4, offset: 4}}>
                <div style={{marginTop: "1em"}}>
                    <Jumbotron>
                        <h2>Posts : </h2>
                        <ol>
                            {this.props.mUserBlogs.map(this.props.element)}
                        </ol>
                    </Jumbotron>
                </div>
            </Col>
        </Row>;
    }
}
