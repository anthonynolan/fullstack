import { Button } from "@mui/material";

import { Link, Outlet, useLoaderData } from "react-router-dom";

import axios from "axios";

import GoalGrid from "./GoalGrid";

function App() {
  const goals = useLoaderData();

  return (
    <div>
      <div>
        <GoalGrid goals={goals} />
        <Button>
          <Link to={`addGoal/`}>Add Goal</Link>
        </Button>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export async function loader() {
  const goals = await axios.get(`/api/goals/`);
  return goals.data;
}

export default App;
