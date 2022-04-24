import accessEnv from "../helper/accessEnv";

const { RESTDataSource } = require("apollo-datasource-rest");

class StarWarsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = accessEnv("STARWAR_URL");
  }

  async getAllPeople() {
    const response = await this.get("people");
    return Array.isArray(response.results)
      ? response.results.map((person:any) => this.personReducer(person))
      : [];
  }

  async getPeopleByPage({ pageNum }:any) {
    const response = await this.get("people/", { page: pageNum });
    return Array.isArray(response.results)
      ? response.results.map((person:any) => this.personReducer(person))
      : [];
  }

  async getPeopleByName({ nameSearch }:any) {
    const response = await this.get("people/", { search: nameSearch });
    return Array.isArray(response.results)
      ? response.results.map((person:any) => this.personReducer(person))
      : [];
  }
  personReducer(person:any) {
    return {
      name: person.name,
      height: person.height,
      mass: person.mass,
      gender: person.gender,
      homeworld: person.homeworld,
    };
  }
}

module.exports = StarWarsAPI;