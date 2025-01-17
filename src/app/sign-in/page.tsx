import { type FC } from "react";
import SignInForm from "./_component/signInForm";

const SignInPage: FC = () => {
  return (
    <main className="flex min-h-screen w-full items-center justify-center">
      <div className="w-full max-w-lg flex-shrink-0">
        <SignInForm />
      </div>
    </main>
  );
};

export default SignInPage;
