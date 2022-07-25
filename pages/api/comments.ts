import { NextApiRequest, NextApiResponse } from 'next';
import { GraphQLClient, gql } from 'graphql-request';
import { CommentData } from '../../types';


const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
const graphcmsToken = process.env.GRAPHCMS_TOKEN;

export default async function comments(
  req: NextApiRequest,
  res: NextApiResponse<CommentData>
) {
  const graphQLClient = new GraphQLClient(graphqlAPI!, {
    headers: {
      authorization: `Bearer ${graphcmsToken}`
    }
  }) ;

  const query = gql`
    mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!) {
      createComment(data: { name: $name, email: $email, comment: $comment, post: { connect: { slug: $slug } } }) { id }
    }
  `

  try {
    const result = await graphQLClient.request(query, req.body);
    return res.status(200).send(result);
  } catch (error) {
    return res.status(500).send(error);
  }
}
