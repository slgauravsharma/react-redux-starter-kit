import App from "./components/App";
import StudentDashboard from "./components/student/StudentDashboard";

const routes = [
  {
    path: "/",
    component: App
  },
  {
    path: "/dashboard",
    component: StudentDashboard
  }
];
export default routes;
