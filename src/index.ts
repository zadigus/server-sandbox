import app from "App/App";

const port = process.env.PORT || 3000;
app
  .listen(3000)
  .on("listening", () => console.log(`Server started at port ${port}`));
