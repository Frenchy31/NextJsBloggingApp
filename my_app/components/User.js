import {gql, useQuery} from '@apollo/client'
import Link from "next/link";
import {Jumbotron, Container, Row, Col, Card} from "react-bootstrap";
import CustomNav from "./CustomNav";

/**
 * User Card Page
 * @param uid
 * @returns {JSX.Element}
 * @constructor
 */
export default function User({uid}){
    const {loading, error, data} = useQuery(gql`
        query getOneUser($uid: Int!) {
            User_by_pk(uid: $uid) {
              Blogs {
                uid
                title
              }
              firstName
              lastName
              mail
              phone
              photo
              uid
            }
        }     
        `, {
        variables: {
            uid
        }
    })

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error </p>;

    const mUser = data.User_by_pk;
    const mUserBlogs = data.User_by_pk.Blogs
    return (
        <>
        <CustomNav/>
        <Container>
            <Row>
                <Col md={{ span:4, offset: 4}}>
                    <div style={{marginTop: '3em'}}>
                        <Card className="text-center">
                            <Card.Header>
                                <h3>{mUser.firstName} {mUser.lastName}</h3>
                            </Card.Header>
                            <Card.Body>
                                <p>Tél : {mUser.phone}</p>
                                <p>Mail : <a href={"mailTo:" +mUser.mail}>{mUser.mail}</a></p>
                                <p>Website : {mUser.website}</p>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
            </Row>
            { mUser.Blogs.length > 0 &&
                <Row>
                    <Col md={{ span:4, offset: 4}}>
                        <div style={{marginTop: '1em'}}>
                            <Jumbotron>
                                <h2>Posts : </h2>
                                    <ol>
                                        { mUserBlogs.map( blog=> (
                                            <li>
                                                <Link href={"/post/"+blog.uid}>
                                                    <a>{ blog.title}</a>
                                                </Link>
                                            </li>
                                        ))}
                                    </ol>
                            </Jumbotron>
                        </div>
                    </Col>
                </Row>
            }
        </Container>
            </>
    )
}
