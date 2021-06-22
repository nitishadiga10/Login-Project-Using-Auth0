import ProfileForm from "./ProfileForm";
import classes from "./UserProfile.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import LoadingSpinner from "../LoadSpinner/LoadingSpinner";


const UserProfile = () => {
  const { user, loginWithRedirect, isAuthenticated, isLoading, logout } =
    useAuth0();

    if (isLoading) {
      return (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <LoadingSpinner></LoadingSpinner>
        </div>
      );
    }

  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <div>
        <img src={user.picture} alt={user.name}></img>
        <h2>{user.name}</h2>
        <p2>{user.email}</p2>
      </div>
      <ProfileForm />
    </section>
  );
};

export default UserProfile;
