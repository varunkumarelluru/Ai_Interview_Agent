import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";

const Page = async () => {
  const user = await getCurrentUser();

  // Ensure user is present and valid
  if (!user || !user.name || !user.id) {
    return <p>User not found. Please log in.</p>;
  }

  return (
    <>
      <h3>Interview Generation</h3>
      <Agent userName={user.name} userId={user.id} type="generate" />
    </>
  );
};

export default Page;
