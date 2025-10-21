import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const username = "kleo-dev";
  const token = process.env.GITHUB_TOKEN;

  const query = `
    query {
      user(login: "${username}") {
        contributionsCollection {
          contributionCalendar {
            totalContributions
          }
        }
      }
    }
  `;

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ query }),
  });

  const data = await response.json();
  const total =
    data.data.user.contributionsCollection.contributionCalendar
      .totalContributions;

  return NextResponse.json({ total }, { status: 200 });
}
