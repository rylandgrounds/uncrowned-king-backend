import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Grid, Transition } from "semantic-ui-react";
import WorkoutCard from "./WorkoutCard";

const FETCH_WORKOUTS_QUERY = gql`
  {
    getWorkouts {
      id
      body
      createdAt
      username
    }
  }
`;

function Home() {
  const { loading, error, data } = useQuery(FETCH_WORKOUTS_QUERY);

  if (loading === false) {
    const workouts = data.getWorkouts;
    return (
      <Grid columns={3}>
        <Grid.Row className="page-title">
          <h1>Recent Workouts</h1>
        </Grid.Row>
        <Grid.Row>
          {loading ? (
            <h1>Loading Workouts..</h1>
          ) : (
            <Transition.Group>
              {workouts &&
                workouts.map((workout) => (
                  <Grid.Column key={workout.id} style={{ marginBottom: 20 }}>
                    <WorkoutCard workout={workout} />
                  </Grid.Column>
                ))}
            </Transition.Group>
          )}
        </Grid.Row>
      </Grid>
    );
  } else {
    return <div> Loading....</div>;
  }
}
export default Home;
