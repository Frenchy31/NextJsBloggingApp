import {Pagination} from "react-bootstrap";
import React from "react";
import {POSTS_PER_PAGE} from "../lib/constants";
import {Query} from "@apollo/client/react/components";
import {gql, useQuery} from "@apollo/client";
import Link from "next";

//Count all blogs from DB
const COUNT_BLOGS = gql`
    query countBlogs {
        Blog_aggregate {
            aggregate {
                count
            }
        }
    }
`

export default function PostPaginator ({activeNb}){
    let items = [];
    const {loading, error, data} = useQuery(COUNT_BLOGS)
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error </p>;
    for (let number = 1; number*POSTS_PER_PAGE <= data.Blog_aggregate.aggregate.count; number++) {
        items.push(
            <Pagination.Item key={number} active={number === activeNb} href={'/posts/'+number}>
                {number}
            </Pagination.Item>
        );
    }
    return (
        <div>
            <Pagination>{items}</Pagination>
        </div>
    )
}