import { AdminLayout } from "../Layouts";
import {
  OrdersAdmin,
  UsersAdmin,
  CategoriesAdmin,
  ProductAdmin,
  TablesAdmin,
  TableDetailsAdmin,
  PaymentsHistory,
  BodegaAdmin,
  Cocinaadmin,
} from "../pages/Admin";

const routesAdmin = [
  {
    path: "/admin",
    layout: AdminLayout,
    component: OrdersAdmin,
    exact: true,
  },
  {
    path: "/admin/users",
    layout: AdminLayout,
    component: UsersAdmin,
    exact: true,
  },
  {
    path: "/admin/categories",
    layout: AdminLayout,
    component: CategoriesAdmin,
    exact: true,
  },
  {
    path: "/admin/products",
    layout: AdminLayout,
    component: ProductAdmin,
    exact: true,
  },
  {
    path: "/admin/tables",
    layout: AdminLayout,
    component: TablesAdmin,
    exact: true,
  },
  {
    path: "/admin/table/:id",
    layout: AdminLayout,
    component: TableDetailsAdmin,
    exact: true,
  },
  {
    path: "/admin/payments-history",
    layout: AdminLayout,
    component: PaymentsHistory,
    exact: true,
  },
  {
    path: "/admin/bodega/",
    layout: AdminLayout,
    component: BodegaAdmin,
    exact: true,
  },
  {
    path: "/admin/cocina/",
    layout: AdminLayout,
    component: Cocinaadmin,
    exact: true,
  },
];
export default routesAdmin;
