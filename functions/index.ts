import { builder } from "@netlify/functions";

function html() {
  return /*html*/ `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Feed Me Functions</title>
    <script src="https://unpkg.com/htmx.org@1.3.3" ></script>
  </head>
  <body>
    <main>
      <h1>Title</h1>
      <button 
        data-counter
        hx-post="/clicked" 
        hx-target="[data-counter]"
      >
        Click Me
      </button>
      <span 
        data-counter
        hx-post="/clicked"
        hx-swap="outerHTML"
        hx-trigger="load delay:500ms"
      >
        Loading...
      </span>
    </main>
  </body>
  </html>
  `;
}

const handler = builder(async (event) => {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html",
    },
    body: html(),
  };
});

export { handler };
