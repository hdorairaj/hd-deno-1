import { serve } from "../deps";


serve((_req) => {
  return new Response("Hello World_commit6!", {
    headers: { "content-type": "text/plain" },
  });
});