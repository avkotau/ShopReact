import {gql} from "@apollo/client";
import {client} from "../route/QueryRoute";

export async function loadJobs() {

    const query = gql`{
              category{
                products{
                  id
                  name
                  gallery
                  description
                  attributes{
                      id
                      name
                      items{
                          displayValue
                          value
                          id
                      }
                  }
                  prices{
                    currency
                    amount
                  }
                }
              }
          }
        `;

    const {data: {category}} = await client.query({query});
    return category.products
}
