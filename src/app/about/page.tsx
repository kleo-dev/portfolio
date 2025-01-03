import Background from "@/components/Background";

export default function About() {
    return (
        <div>
            <Background/>
            <div className="content-center w-full lg:mx-auto pt-16 lg:pt-0 lg:pl-[6%] relative z-20 pb-16 md:pb">
                <div className="p-10">
                    <div className="pb-10 pt-5 w-full max-w-screen-lg mx-auto backdrop-blur-3xl border-red border rounded-xl">
                        <div className="px-8 md:px-10 lg:px-15 xl:px-24">
                            <h1 className="py-2 text-red">Klesti Selimaj</h1>
                            <p className="font-semibold text-gray-300">A passionate software enginner in Albania. I build full stack web apps but mainly desktop apps and TUI apps.</p>
                            <div className="grid w-full grid-cols-2 gap-8 pt-10">
                                <div className="border-red border rounded-xl p-4 bg-transparent-ish">
                                    <h2 className="text-xl text-red">Skills</h2>
                                    <ul className="list-disc list-inside text-gray-300">
                                        <li>Rust, OSUI</li>
                                        <li>TypeScript, React, Next.js, Tailwind</li>
                                        <li>Go, Python</li>
                                    </ul>
                                </div>
                                <div className="border-red border rounded-xl p-4 bg-transparent-ish">
                                    <h2 className="text-xl text-red">Experience</h2>
                                    <ul className="list-disc list-inside text-gray-300">
                                        <li>OSUI</li>
                                        <li>Orus</li>
                                        <li>Personal projects</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="px-8 md:px-10 lg:px-15 xl:px-24 text-red-400 prose absolute bottom-0 py-4"><p className="m-0 text-sm"><a className="text-red hover:text-red-400 duration-300 underline decoration-dotted underline-offset-4" target="_blank" rel="noreferrer" href="https://opensource.org/license/apache-2-0">Apache-2.0</a> © <a className="text-red hover:text-red-400 duration-300 underline decoration-dotted underline-offset-4" target="_blank" rel="noreferrer" href="https://github.com/kleo-dev">Kleo</a></p></footer>
        </div>
    )
}