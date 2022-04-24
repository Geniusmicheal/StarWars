import * as React from "react";
import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router";

const PERSON_QUERY = gql`
  query getAllPeople($id: String!) {
    person(name: $id) {
      name
      height
      mass
      gender
      homeworld
    }
  }
`;

const Detail = () => {
    const { id } = useParams();
    const { loading, error, data } = useQuery(PERSON_QUERY, {
        variables: {id},
    });
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
  
    const { height, mass, gender, homeworld, name }:any = data.person[0];
    return(
        <div className="container mx-auto mt-4 mb-4">
            <div className="card">
                <div className="card-body table-responsive">
                    <table className="table table-striped table-condensed">
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <td>{ name }</td>
                            </tr>

                            <tr>
                                <th>Gender</th>
                                <td>{ gender }</td>
                            </tr>

                            <tr>
                                <th>Height</th>
                                <td>{ height }</td>
                            </tr>

                            <tr>
                                <th>Mass</th>
                                <td>{ mass }</td>
                            </tr>

                            <tr>
                                <th>Home World</th>
                                <td>{ homeworld }</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
export default Detail;
