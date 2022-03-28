import { serve } from "https://deno.land/std@0.114.0/http/server.ts";


serve((_req) => {
  return new Response("Hello World commit7!", {
    headers: { "content-type": "text/plain" },
  });
});