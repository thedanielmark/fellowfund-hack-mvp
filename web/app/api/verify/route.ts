// pages/api/worldcoin.js
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  // Get the proof from the request body

  const { proof } = await req.json();
  console.log(proof);
  const app_id = "app_staging_b4e3cc90f84b70162485819950f0df07";
  const action = "verify_human";

  try {
    // Make a POST request to Worldcoin's API to verify the proof
    const response = await fetch(
      `https://developer.worldcoin.org/api/v2/verify/${app_id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...proof, action: action }),
      }
    );

    console.log(response.json());

    // If the verification is successful, return the verified status
    if (response.ok) {
      return Response.json({ verified: true });
    } else {
      return Response.json({ verified: false });
    }
  } catch (error) {
    // Handle any errors from the API call
    console.error("Verification error:", error);
    return Response.json(
      { error: "Error verifying Worldcoin proof" },
      { status: 500 }
    );
  }
}
