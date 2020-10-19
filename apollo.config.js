module.exports = {
  client: {
    service: {
      name: "github",
      url: "https://api.github.com/graphql",
      // optional headers
      headers: {
        authorization: "Bearer ***"
      },
      // optional disable SSL validation check
      skipSSLValidation: true,
      // localSchemaFile: "./schema.public.graphql"
    }
  }
};