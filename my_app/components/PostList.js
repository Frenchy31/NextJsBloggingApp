
import {gql} from '@apollo/client'
import PostPreview from "./PostPreview";
import {Query} from "@apollo/client/react/components";
import {Component, Fragment} from "react";
import PostPaginator from "./PostPaginator";
import {POSTS_PER_PAGE} from '../lib/constants'

//Fetch all blogs from the DB
const GET_BLOGS = gql`
    query getBlogs ($offset: Int, $limit:Int) {
        Blog (offset: $offset, limit: $limit){
            uid
            title
            content
            coverImage
            createdAt
            User {
                uid
                firstName
                lastName
                photo
            }
            Reactions {
                type
            }
            Tags {
                name
            }
        }
    }
`

/**
 * PostList Component
 * @returns {JSX.Element|*}
 * @constructor
 */
class PostList extends Component {
    constructor(props) {
        super(props);
    }

    _getQueryVariables = () => {
        const page = parseInt(this.props.page, 10)
        const offset = (page - 1) * POSTS_PER_PAGE
        const limit = POSTS_PER_PAGE
        return { limit, offset }
    }

    render() {
        return (
            <>
                <Query query={GET_BLOGS} variables={this._getQueryVariables()}>
                {({loading, error, data}) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error </p>;
                    return (
                        <Fragment>{
                            data.Blog.map(post => (<PostPreview post={post}/>))
                        }
                        </Fragment>
                    )
                }}
                </Query>
                <PostPaginator activeNb={parseInt(this.props.page)} />
            </>
        )
    }
}

export default PostList;
