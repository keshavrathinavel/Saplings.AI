import React from "react";
import {getAuthSession} from "@/lib/nextauth";
import {redirect} from "next/navigation";
import QuizCreation from "@/components/forms/QuizCreation";

export const metadata = {
    title: "SaplingsAI",
    description: "Quiz yourself on anything!",
};

interface Props {
    searchParams: {
        topic?: string;
    };
}

const Quiz = async ({searchParams}: Props) => {
    const session = await getAuthSession();
    if (!session?.user || session.user.role !== "TEACHER") {
        redirect("/");
    }

    return <QuizCreation topic={searchParams.topic ?? ""}/>;
};

export default Quiz;
