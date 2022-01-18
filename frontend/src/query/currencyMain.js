import {gql} from "@apollo/client";
import {client} from "../route/QueryRoute";

export async function currencyMain() {

    const query = gql`{
              currencies
          }
        `;

    const {data: {currencies}} = await client.query({query});
    // const {products} = await graphqlRequest(print(query));
    return currencies
}
