import { ApolloServer } from "@apollo/server"
import { startStandaloneServer, } from "@apollo/server/standalone"
const server = new ApolloServer({
    // Scaler Types >> String ,Boolean ,Int , Float ,ID
    // typeDefs: `#graphql
    // type Query{   // ==> types
    // id:ID!    
    // name: String 
    // age:Int
    // isActive:Boolean
    // height:Float
    // }
    // `,
    //
    // resolvers: {
    // Query:{
    //     id:()=>"1",
    //     name:()=>"Pathik",
    //     age:()=>"21",
    //     isActive:()=>true,
    //     height:()=>"5.50",
    // }

    //
    //--------------------------------------------------------------------
    //     typeDefs: `#graphql
    //     type Post{  # Custom type   // ==>initiating a custom type
    //     id:ID!   
    //     title:String!
    //     body:String!
    //     tag:[String]
    // }

    // type Query{
    //     posts:[Post]
    // }
    // `,
    //
    //     resolvers: {
    //         Query: {
    //             posts: () => [
    //                 {
    //                     id: "1",
    //                     title: "post_one",
    //                     body: "hello",
    //                     tag: ["one", "next_is_two"]
    //                 },
    //                 {
    //                     id: "2",
    //                     title: "post_two",
    //                     body: "hello",
    //                     tag: ["two", "next_is_three"]
    //                 }
    //             ]
    //         }
    //     },


    //
    //
    //-------------------------------------------------------------
    // // =>take argument as a string and return as a string  \/
    //     typeDefs: `#graphql
    // type Query{  
    // greetings(name:String):String!      
    // add(a:Int!,b:Int!): Int     
    // }`,

    //     resolvers: {
    //         Query: {
    //             greetings(parent, args, ctx, info) {
    //                 console.log(args);
    //                 return ` Hello ${args.name}`;
    //             },
    //             add: (_, { a, b }) => a + b,
    //         }
    //     },

    //
    //---------------------------------------------------------------------- 
    //==>  use array in array
    typeDefs: `#graphql
    type Query{
    greetings:[String]
    }`,
    resolvers: {
        Query: {    
            greetings: () => {
                return ["Hello", "Welcome", "Bye"]
            }
        }
    }
    //
    //
})
const { url } = await startStandaloneServer(server, { listen: { port: 4000 } })
console.log(`server ready at ${url}`);






