module.exports = {
  client: {
    service: {
      name: "github",
      url: "https://api.github.com/graphql",
      // optional headers
      headers: {
        authorization: "Bearer ef803f457efdb5bad219a64171db75b5cbd55d9d"
      },
      // optional disable SSL validation check
      skipSSLValidation: true,
      localSchemaFile: "./schema.public.graphql"
    }
  }
};