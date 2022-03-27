import { serve } from "..deps";


serve((_req) => {
  return new Response("Hello World1231!", {
    headers: { "content-type": "text/plain" },
  });
});