import App from "./app";

async function main() {
  const app = new App();
  try {
      app.listen();
  } catch (err) {
    console.log("Error to connect our server:", { err });
  }
}

main();