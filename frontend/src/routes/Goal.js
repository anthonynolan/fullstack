import axios from "axios";
import { useLoaderData } from "react-router-dom";

const Goal = () => {
  const goal = useLoaderData();

  return (
    <div>
      <div>goal detail</div>
      <div>{goal.name}</div>
    </div>
  );
};

export async function loader({ params }) {
  const goalDetail = await axios.get(`/api/goals/${params.goalId}`);
  return goalDetail.data;
}

export default Goal;
