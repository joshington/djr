//import our graph query parser


import gql from 'graphql-tag';

//our first query will request all movies, with only given fields
//note the usage of gql 


export const MOVIE_LIST_QUERY = gql`
    query movieList{
        movieList{
            name,posterUrl, slug
        }
    }
`;


//note the usage of argument
// the exclamation mark makes the slug argument as required
//without it, argument will be optional
export const MOVIE_QUERY = gql`
    query movie($slug:String!){
        movie(slug:$slug){
            id, name,year,summary, posterUrl,slug
        }
    }
`;

