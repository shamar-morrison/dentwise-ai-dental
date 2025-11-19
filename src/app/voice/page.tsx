import Navbar from "@/components/Navbar";
import FeatureCards from "@/components/voice/FeatureCards";
import ProPlanRequired from "@/components/voice/ProPlanRequired";
import VapiWidget from "@/components/voice/VapiWidget";
import WelcomeSection from "@/components/voice/WelcomeSection";
import { auth, currentUser } from "@clerk/nextjs/server";

async function VoicePage() {
  const { has } = await auth();
  const user = await currentUser();
  const isAdmin = user?.emailAddresses?.[0]?.emailAddress === process.env.ADMIN_EMAIL;

  const hasProPlan = has({ plan: "ai_basic" }) || has({ plan: "ai_pro" });

  if (!hasProPlan) return <ProPlanRequired isAdmin={isAdmin} />;

  return (
    <div className="min-h-screen bg-background">
      <Navbar isAdmin={isAdmin} />

      <div className="max-w-7xl mx-auto px-6 py-8 pt-24">
        <WelcomeSection />
        <FeatureCards />
      </div>

      <VapiWidget />
    </div>
  );
}

export default VoicePage;
