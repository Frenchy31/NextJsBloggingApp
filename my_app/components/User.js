import {gql, useQuery} from '@apollo/client'
import Link from "next/link";
import {Col, Container, Row} from "react-bootstrap";
import CustomNav from "./CustomNav";
import UserPostsList from "./UserPostsList"
import {UserCard} from "./UserCard";

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
                    <Col md={{span: 4, offset: 4}}>
                        <div style={{marginTop: '3em'}}>
                            <UserCard mUser={mUser}/>
                        </div>
                    </Col>
                </Row>
                {mUser.Blogs.length > 0 &&
                <UserPostsList mUserBlogs={mUserBlogs} element={blog => (
                    <li>
                        <Link href={"/post/" + blog.uid}>
                            <a>{blog.title}</a>
                        </Link>
                    </li>
                )}/>
                }
            </Container>
        </>
    )
}
