import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    try {
        const dataModule = await import("@/models/projects");
        const projectData = dataModule.projectsData;

        return NextResponse.json({ data: projectData, status: 200 }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong when querying the API", status: 500 }, { status: 500 });
    }
};
