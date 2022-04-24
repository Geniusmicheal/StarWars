import * as React from "react";

import { useQuery, gql } from "@apollo/client";

import { Link } from "react-router-dom";
import { elements } from "./../../helper/element";

// const PEOPLE_QUERY = gql`
//   query getAllPeople {
//     allPeople {
//       name
//       height
//       mass
//       gender
//       homeworld
//     }
//   }
// `;

const PAGE_PEOPLE_QUERY = gql`
query getAllPeople($page: Int!){
  people(page: $page) {
    name
    height
    mass
    gender
    homeworld
  }
}`;
// query getAllPeople($page: Int!){ 
  
//   people(page: $page) {
//     name
//   }
// }
// ,variables page:2 


// const PERSON_QUERY = gql`
//   query getAllPeople($id: String!) {
//     person(name: $id) {
//       name
//       height
//       mass
//       gender
//       homeworld
//     }
//   }
// `;
const Home = () => {
  const [page, setPage] =  React.useState(0);
  const [allPeople, setAllPeople] = React.useState([]);
  let { loading, error, data, fetchMore } = useQuery(PAGE_PEOPLE_QUERY,{variables: {page:1}});

  React.useEffect(() => {
    if(!loading)setAllPeople(data.people);
  },[loading]);

  const paginationHandle = async (e:any) => {
    const allButton = elements.createList('button');
    allButton.forEach(elem => {
      (elem as HTMLButtonElement).disabled = true;
    });
    const num = e.target.innerText=='Previous'? page-1:page+1;
    if(num>0){
      setPage(num);
      const {loading,  data,} = await fetchMore({variables: {page:num}, updateQuery(){ } })
      setAllPeople(data.people);
    }
    allButton.forEach(elem => {
      (elem as HTMLButtonElement).disabled = false;
    });
  }

  if (loading) return (<p>Loading...</p>);
  if (error){
      console.log(error)
    return <p>Error :(`{error.message}`</p>;

  }
  return(<>
    <div className="parallax"></div>
      <div className="container mx-auto" style={{marginTop: '-100px'}}>
        <div className="card table-responsive" style ={{ boxShadow: '0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12)'}}>
          <table className="table table-striped table-condensed card-body">
          <thead>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Height</th>
              <th>Mass</th>
              <th>Homeworld</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{allPeople.map(({ name, height, mass, gender, homeworld }: any) =>{return (
            <tr key={`${name.replace(/\s+/g, '')}${mass}`} >
              <td>{name}</td>
              <td>{gender}</td>
              <td>{height}</td>
              <td>{mass}</td>
              <td>{homeworld}</td>
              <td><Link to={`/person/${name}`} className="btn btn-outline-primary btn-sm"> Details </Link></td>
            </tr>
          )})}</tbody>
          </table>
          <div className="footer-card gap-2 d-flex justify-content-between p-2" style={{ marginTop: '-15px'}}>
            <button className="btn btn-outline-secondary rounded-pill btn-sm" type="button" style={{width: '78px'}} onClick={paginationHandle}>Previous</button>
            <button className="btn btn-outline-secondary rounded-pill btn-sm" type="button" style={{width: '78px'}} onClick={paginationHandle}>Next</button>
          </div>
          </div>
      </div>
  </>)
}
export default Home;
