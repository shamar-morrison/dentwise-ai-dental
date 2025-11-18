"use server";

import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "../prisma";

export async function syncUser() {
  try {
    const user = await currentUser();
    if (!user) {
      console.log("No user found in syncUser - user not authenticated");
      return null;
    }

    // Validate required user data
    if (!user.emailAddresses?.[0]?.emailAddress) {
      console.error("User missing required email address", { clerkId: user.id });
      throw new Error("User email address is required");
    }

    const existingUser = await prisma.user.findUnique({
      where: { clerkId: user.id }
    });

    if (existingUser) {
      console.log("User already exists in database", { clerkId: user.id });
      return existingUser;
    }

    const dbUser = await prisma.user.create({
      data: {
        clerkId: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.emailAddresses[0].emailAddress,
        phone: user.phoneNumbers[0]?.phoneNumber,
      },
    });

    return dbUser;
  } catch (error) {
    console.error("Error in syncUser server action:", {
      error: error instanceof Error ? error.message : String(error),
      errorType: error?.constructor?.name,
      stack: error instanceof Error ? error.stack : undefined,
    });
    throw error; // Re-throw to surface the error instead of suppressing it
  }
}
