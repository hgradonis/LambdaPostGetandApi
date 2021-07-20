'use strict';
const fetch = require("node-fetch");

const fetchCharacters = async () => {
  const res = await fetch("https://swapi.py4e.com/api/people/");
  const { results } = await res.json();

const result_modified = results.map((item) => ({ nombre: item.name }))

  // I must see at my watchlog-aws
  console.log(results);
  console.log(result_modified);
  return result_modified;
};

module.exports.myFuncGetSwapi = async (event) => {

  const peoples = await fetchCharacters();
  
  return {

    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Get Swipe obtenido correctamente mostrado por nombre/name of the people',
        item: peoples,
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};