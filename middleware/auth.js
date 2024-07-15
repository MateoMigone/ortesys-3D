/* import { useAuthStore } from "../stores/auth";

export default defineNuxtRouteMiddleware((to) => {
  const authStore = useAuthStore();

  // List of route names that do not require authentication
  const publicPath = "/login";
  const isPublicPath = to.path.startsWith(publicPath);

  // Redirect to login page if not authenticated and trying to access a protected route
  if (!isPublicPath && !authStore.isAuthenticated) {
    return navigateTo("/login");
  }
}); */
