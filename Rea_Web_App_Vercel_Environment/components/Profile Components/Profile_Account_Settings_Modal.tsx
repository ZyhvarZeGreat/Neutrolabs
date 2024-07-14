"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
// import { Bank, ArrowRight } from "iconsax-react";
import Profile_Account_Settings_Content from "./Profile_Account_Settings_Content";

const Profile_Account_Settings_Modal = () => {
  return (
    <Dialog>
      <DialogTrigger className="hidden w-full items-center justify-between   gap-2 rounded-xl  px-2 py-4 text-lg hover:bg-[#ECE5FF] sm:flex sm:w-2/5">
        <div className="flex w-full gap-2   ">
          {/*<Bank variant="Bulk" />*/}
          <h3>Bank Accounts</h3>
        </div>

        {/*<ArrowRight />*/}
      </DialogTrigger>
      <DialogContent>
        <Profile_Account_Settings_Content />
      </DialogContent>
    </Dialog>
  );
};

export default Profile_Account_Settings_Modal;
