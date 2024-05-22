import { joinURL } from "ufo";

export default defineEventHandler(async (event) => {
  // Get the runtime configuration proxy URL
  const proxyUrl = useRuntimeConfig().myProxyUrl;

  // Check the path
  const path = event.path.replace(/^\/api\//, ""); // /api/Conta/Register --> Conta/Register
  const target = joinURL(proxyUrl, path);
  console.log(target);

  // Proxy it!
  return proxyRequest(event, target);
});
