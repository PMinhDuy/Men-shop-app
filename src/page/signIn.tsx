import AuthenticationForm from "../shared/components/common/AuthencationForm";
import MainLayout from "../shared/hocs/MainLayout";

function SignIn() {
  return (
    <MainLayout>
      <AuthenticationForm />
    </MainLayout>
  );
}

export default SignIn;
