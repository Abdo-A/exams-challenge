import Announcement from "../pages/Announcement/Announcement";
import Courses from "../pages/Courses/Courses";
import Dashboard from "../pages/Dashboard/Dashboard";
import Gradebook from "../pages/Gradebook/Gradebook";
import PerformancePage from "../pages/Performance/Performance";
import Schedule from "../pages/Schedule/Schedule";

const pages = [
  { name: "dashboard", path: "/dashboard", icon: "home", component: Dashboard },
  { name: "schedule", path: "/schedule", icon: "home", component: Schedule },
  { name: "courses", path: "/courses", icon: "home", component: Courses },
  { name: "gradebook", path: "/gradebook", icon: "home", component: Gradebook },
  {
    name: "performance",
    path: "/performance",
    icon: "home",
    component: PerformancePage
  },
  {
    name: "announcement",
    path: "/announcement",
    icon: "home",
    component: Announcement
  }
];

//Note: the 'icon' property is the name of the SEMANTIC UI alternative icon

export default pages;
