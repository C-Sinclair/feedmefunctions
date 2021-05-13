import { Handler } from "@netlify/functions";

let counter = 0;

const handler: Handler = async () => {
  console.log("hit counter");
  counter++;
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html",
    },
    body: /*html*/ `
      <h6>Clicked ${counter} times!</h6>
    `,
  };
};

export { handler };
