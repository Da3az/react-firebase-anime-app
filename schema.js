const {GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLSchema} = require('graphql');

const axios = require('axios');


const ListType = new GraphQLObjectType({
  name:'tops',
  fields: ()=>({
    mal_id: { type:GraphQLString},
    rank:{type: GraphQLInt},
    title: {type:GraphQLString},
    image_url:{type: GraphQLString},
    url:{type:GraphQLString},
    trailer_url:{type: GraphQLString},
    synopsis:{type: GraphQLString}
  })
})




const RootQuery = new GraphQLObjectType({
  name: 'RouteQueryType',
  fields:{
    top:{
      type :new GraphQLList(ListType),
      args:{
        subtype: { type: GraphQLString }
      },
      resolve(parent,args){
        return axios
               .get(`https://api.jikan.moe/v3/top/anime/1/${args.subtype}`)
               .then( res => res.data.top)
               .catch(err => console.log(err.message))
      }
    },
    genres:{
      type :new GraphQLList(ListType),
      args:{
       genreId: { type: GraphQLString }
      },
      resolve(parent,args){
        return axios
               .get(`https://api.jikan.moe/v3/genre/anime/2/${args.genreId}`)
               .then( res => res.data.anime)
               .catch(err => console.log(err.message))
      }
    },
    schedule:{
      type :new GraphQLList(ListType),
      args:{
       day: { type: GraphQLString }
      },
      resolve(parent,args){
        return axios
               .get(`https://api.jikan.moe/v3/schedule/${args.day}`)
               .then( res => res.data[args.day])
               .catch(err => console.log(err.message))
      }
    },
    hello: {
        type: GraphQLString,
        resolve: () => 'Hello world!'
      },
    anime:{
      type :ListType,
      args:{
       animeId: { type: GraphQLString }
      },
      resolve(parent,args){
        return axios
               .get(`https://api.jikan.moe/v3/anime/${args.animeId}`)
               .then( res =>{console.log([res]);return res.data})
               .catch(err => console.log(err.message))
      }
    }

   }
});

module.exports = new GraphQLSchema({
  query : RootQuery,
})
