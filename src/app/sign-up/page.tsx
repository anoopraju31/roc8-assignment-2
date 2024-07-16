import { type FC } from "react";
import SignUpForm from "./_components/signUpForm";

const SignIn: FC = () => {
  return (
    <main className="flex min-h-screen w-full items-center justify-center">
      <div className="w-full max-w-lg flex-shrink-0">
        <SignUpForm />
      </div>
    </main>
  );
};

export default SignIn;
