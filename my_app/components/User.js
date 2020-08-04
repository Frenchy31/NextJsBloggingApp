import {gql, useQuery} from '@apollo/client'
import Link from "next/link";

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

    return (
        <div>
            <h1>{mUser.firstName} {mUser.lastName}</h1>

            <ul>
                <li><p>Tél : {mUser.phone}</p></li>
                <li><p>Mail : {mUser.mail}</p></li>
            </ul>
            <h2>Posts : </h2>
            <ul>
                {mUser.Blogs.map( blog=> (
                    <li>
                        <Link href={"/post/"+blog.uid}>
                            <a>{ blog.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>

        </div>
    )
}