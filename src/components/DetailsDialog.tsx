"use client";

import React from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { HelpCircle } from "lucide-react";
import Image from "next/image";

type Props = {};

const DetailsDialog = (props: Props) => {
    return (
        <Dialog>
            <DialogTrigger>
        <span className="flex items-center px-2 py-1 text-white rounded-md bg-slate-800">
          Learn More
          <HelpCircle className="w-5 h-5 ml-1"/>
        </span>
            </DialogTrigger>
            <DialogContent className="w-[70vw] max-w-[100vw] md:w-[50vw]">
                <DialogHeader>
                    <DialogTitle className="text-xl">Welcome to SaplingsAI!</DialogTitle>
                    <DialogDescription>
                        <p className="text-2xl my-2 mt-4 ">
                            Unlock Infinite Knowledge with AI-Driven Quizzes 🤯 Use the <b>Create Quiz</b> tab to create a
                            quiz. View all your past quizzes in the <b>History</b> tab.
                            Be sure to look at the <b>Hot Topics</b> to see what is trending right now 🧑‍🎓
                        </p>
                        <hr/>
                        <p className="my-2 font-semibold">
                            <h4 className="text-base font-semibold">Built with</h4>
                            <div className="grid justify-around grid-cols-4 mt-2 gap-y-3">
                                <div className="flex items-center gap-2">
                                    <Image
                                        alt="postgres"
                                        src="/postgres.png"
                                        width={35}
                                        height={35}
                                    />
                                    <span className="">PostgreSQL</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Image
                                        alt="nextjs"
                                        src="/nextjs.png"
                                        width={35}
                                        height={35}
                                    />
                                    <span className="">Next.js</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Image
                                        alt="tailwind"
                                        src="/tailwind.png"
                                        width={35}
                                        height={35}
                                    />
                                    <span className="">Tailwind</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Image
                                        alt="nextauth"
                                        src="/nextauth.png"
                                        width={30}
                                        height={30}
                                    />
                                    <span className="">NextAuth</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Image
                                        alt="openai"
                                        src="/openai.png"
                                        width={30}
                                        height={30}
                                    />
                                    <span className="">OpenAI</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <Image
                                        alt="react query"
                                        src="/react-query.png"
                                        width={30}
                                        height={30}
                                    />
                                    <span className="">React Query</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Image
                                        alt="primsa"
                                        src="/prisma.png"
                                        width={30}
                                        height={30}
                                    />
                                    <span className="">Prisma</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Image
                                        alt="typescript"
                                        src="/typescript.png"
                                        width={30}
                                        height={30}
                                    />
                                    <span className="">TypeScript</span>
                                </div>
                            </div>
                        </p>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default DetailsDialog;
