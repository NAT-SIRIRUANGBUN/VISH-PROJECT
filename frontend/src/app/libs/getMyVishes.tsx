"use server";

export default async function getMyVishes(token: string) {
  const BACKEND_URL = process.env.BACKEND_URL;

  const response = await fetch(`${BACKEND_URL}/api/vish/getmyvish`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to get my vishes");
  }

  return await response.json();
}