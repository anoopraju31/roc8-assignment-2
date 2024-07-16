import { type FC } from "react";
import VerifyEmailForm from "./_component/verifyEmailForm";

const VerifyEmailPage: FC = () => {
  return (
    <main className="flex min-h-screen w-full items-center justify-center">
      <div className="w-full max-w-lg flex-shrink-0">
        <VerifyEmailForm />
      </div>
    </main>
  );
};

export default VerifyEmailPage;
