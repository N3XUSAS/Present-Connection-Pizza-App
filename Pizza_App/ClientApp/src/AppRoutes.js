import { Home } from "./components/Home";
import Orders from "./components/Orders"
import PizzaCreator from "./components/PizzaCreator"

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
      path: '/orders',
      element: <Orders />
  },
  {
      path: '/pizza-creator',
      element: <PizzaCreator />
  }
];

export default AppRoutes;
