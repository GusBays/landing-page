import { isEmpty } from "@/helpers/helper";
import { IMeta, IMetaBreadcrumb } from "@ds/types";
import {
  createRouter,
  createWebHistory,
  NavigationGuardNext,
  RouteLocationNormalized,
  RouteRecordRaw,
  RouterOptions,
} from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "",
    component: () => import("@/views/Home.vue"),
    meta: {
      title: "Home",
      breadcrumbs: null,
    },
  },
];

const options: RouterOptions = {
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, SavedPosition) {
    if (to.hash) {
      const el = window.location.href.split("#")[1];
      if (el.length) {
        document.getElementById(el).scrollIntoView({ behavior: "smooth" });
      }
    } else if (SavedPosition) {
      return SavedPosition;
    } else {
      document.getElementById("app").scrollIntoView({ behavior: "smooth" });
    }
  },
};

export const router = createRouter(options);

const authorize = async (
  to: RouteLocationNormalized,
  _from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  return next();
};
router.beforeEach(authorize);

const setTitle = (to: RouteLocationNormalized) => {
  const { title, breadcrumbs } = to.meta as any as IMeta;

  if (isEmpty(breadcrumbs)) document.title = title;
  else {
    const toName = (breadcrumb: IMetaBreadcrumb) => breadcrumb.name;
    document.title = title + breadcrumbs.map(toName).join(" ~ ");
  }
};
router.afterEach(setTitle);
