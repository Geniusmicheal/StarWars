module.exports = {
    Query: {
      allPeople: (_:any, __:any, { dataSources }:any) =>
        dataSources.starWarsAPI.getAllPeople(),
      people: (_:any, { page }:any, { dataSources }:any) =>
        dataSources.starWarsAPI.getPeopleByPage({ pageNum: page }),
      person: (_:any, { name }:any, { dataSources }:any) =>
        dataSources.starWarsAPI.getPeopleByName({ nameSearch: name }),
    },
  };