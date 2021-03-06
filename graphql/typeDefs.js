const gql = require("graphql-tag");

module.exports = gql`
  type Workout {
    id: ID
    body: String
    createdAt: String
    username: String
    points: Int
    type: String
  }
  type User {
    id: ID!
    email: String!
    token: String!
    username: String!
    createdAt: String!
  }
  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
  }
  type Query {
    getWorkouts: [Workout]
    getWorkout(workoutId: ID!): Workout
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
    createWorkout(body: String!, type: String!, points: String!): Workout!
    deleteWorkout(workoutId: ID!): String!
  }
`;
