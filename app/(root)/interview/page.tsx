import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";

const Page = async () => {
  const user = await getCurrentUser();

  return (
    <>
      <h3>Interview generation</h3>

      <Agent
        userName={user?.name?? (() => { throw new Error("User is null") })()}
        userId={user?.id?? (() => { throw new Error("User is null") })()}
        // profileImage={user?.profileURL?? (() => { throw new Error("User is null") })()}
        type="generate"
      />
    </>
  );
};

export default Page;