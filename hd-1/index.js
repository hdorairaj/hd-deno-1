import { serve } from "../deps.js";


serve((_req) => {
  return new Response("Hello World_commit6!", {
    headers: { "content-type": "text/plain" },
  });
});