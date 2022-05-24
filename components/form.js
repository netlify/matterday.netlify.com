import { useUser } from "context/user";
import NiceMatterForm from "components/nice-matter-form";
import NiceSignInForm from "components/nice-sign-in-form";

const Form = () => {
  const { user } = useUser();
  return user ? <NiceMatterForm /> : <NiceSignInForm />;
};

export default Form;
