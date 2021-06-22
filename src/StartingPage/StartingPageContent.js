import classes from "./StartingPageContent.module.css";
import { useAuth0 } from "@auth0/auth0-react";

const StartingPageContent = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <section className={classes.starting}>
      <h1>{!isAuthenticated ? "Kindly Login!" : "Welcome on Board!"}</h1>
    </section>
  );
};

export default StartingPageContent;
