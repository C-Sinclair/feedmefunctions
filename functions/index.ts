import { builder } from "@netlify/functions";

function renderHtml() {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FeedMeFunctions</title>
  </head>
  <body>
    <main>
      <h1>Functions that return html!</h1>
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
    body: renderHtml(),
  };
});

export { handler };
