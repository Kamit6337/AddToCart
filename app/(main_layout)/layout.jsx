import Navbar from "@containers/Navbar";
import UserConnectionProvider from "@providers/UserConnectionProvider";
import verifyUserLogin from "@utils/auth/verifyUserLogin";

const MainLayout = async ({ children }) => {
  await verifyUserLogin();

  return (
    <UserConnectionProvider>
      <div className="h-20 w-full border-b-2 sticky top-0 z-10 bg-white">
        <Navbar />
      </div>
      <div className="w-full">{children}</div>
    </UserConnectionProvider>
  );
};

export default MainLayout;
