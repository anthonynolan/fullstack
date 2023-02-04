// import { Button } from "@mui/material";

import { Outlet, useLoaderData, Form } from "react-router-dom";

import GoalGrid from "./GoalGrid";

import { getGoals, createGoal } from "./Goals";

export async function action() {
  const goal = await createGoal();
  return { goal };
}

function App() {
  const goals = useLoaderData();

  return (
    <div>
      <div>
        <GoalGrid goals={goals} />
        <Form method="post">
          <button type="submit">new</button>
        </Form>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export async function loader() {
  const goals = await getGoals();
  return goals;
}

export default App;
