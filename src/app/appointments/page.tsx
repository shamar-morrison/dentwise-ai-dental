import Navbar from "@/components/Navbar";
import AppointmentsClient from "@/components/appointments/AppointmentsClient";
import { currentUser } from "@clerk/nextjs/server";

async function AppointmentsPage() {
  const user = await currentUser();
  const isAdmin = user?.emailAddresses?.[0]?.emailAddress === process.env.ADMIN_EMAIL;

  return (
    <>
      <Navbar isAdmin={isAdmin} />
      <AppointmentsClient />
    </>
  );
}

export default AppointmentsPage;
