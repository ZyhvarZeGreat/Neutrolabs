import UnAuthenticatedNavbar from "@/components/common/Navbar/UnAuthenticatedNavbar";
import getUserAction from "@/app/actions/getUsers";
import AuthenticatedNavbar from "@/components/common/Navbar/AuthenticatedNavbar";


const Navbar = async  () => {

   const user = await getUserAction()

    return (
    <div className=" ">
      {/*<UnAuthenticatedNavbar />*/}
      {user ?    (
        <AuthenticatedNavbar user={user} />
      ) : (
        <UnAuthenticatedNavbar />
      )}
    </div>
  );
};

export default Navbar;
