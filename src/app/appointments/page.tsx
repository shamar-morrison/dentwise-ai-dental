import Navbar from "@/components/Navbar";
import AppointmentsClient from "@/components/appointments/AppointmentsClient";
import { currentUser } from "@clerk/nextjs/server";

async function AppointmentsPage() {
  return (
    <>
      <Navbar />
      <AppointmentsClient />
    </>
  );
}

export default AppointmentsPage;
