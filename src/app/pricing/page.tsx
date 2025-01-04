import Background from "@/components/Background";
import { faCheck, faCode, faDatabase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Pricing() {
    return (
        <div>
            <Background/>
            <div className="content-center w-full lg:mx-auto pt-16 lg:pt-0 relative z-20 pb-16 md:pb-0">
            <div className="w-full max-w-screen-lg mx-auto">
                <div className="px-8 md:px-10 lg:px-15 xl:px-24"></div>
                    <h1 className="pt-10 w-max mx-auto text-red-400">Choose a plan</h1>
                    <div className="px-24 pt-10 h-full grid grid-cols-1 lg:grid-cols-2 grid-rows-2 gap-8">
                        <div className="h-full rounded-xl bg-transparent-ish border border-red p-9">
                            <FontAwesomeIcon className="w-max mx-auto text-red-600" icon={faCode} width={35}/>
                            <h1 className="w-max mx-auto text-red-400">Standard</h1>
                            <h2 className="text-2xl w-max mx-auto text-red">$25</h2>
                            <ul className="pt-4 list-none space-y-2">
                                <li className="flex items-center">
                                    <FontAwesomeIcon className="text-green-500 mr-2" icon={faCheck} width={14} />
                                    Up to 4 hours
                                </li>
                                <li className="flex items-center">
                                    <FontAwesomeIcon className="text-green-500 mr-2" icon={faCheck} width={14} />
                                    Simple projects or tasks (e.g., bug fixes)
                                </li>
                                <li className="flex items-center">
                                    <FontAwesomeIcon className="text-green-500 mr-2" icon={faCheck} width={14} />
                                    Response via Email or Discord
                                </li>
                            </ul>
                        </div>
                        
                        <div className="h-full rounded-xl bg-transparent-ish border border-red p-9">
                            <FontAwesomeIcon className="w-max mx-auto text-red-600" icon={faCode} width={35}/>
                            <h1 className="w-max mx-auto text-red-400">Premium</h1>
                            <h2 className="text-2xl w-max mx-auto text-red">$60</h2>
                            <ul className="pt-4 list-none space-y-2">
                                <li className="flex items-center">
                                    <FontAwesomeIcon className="text-green-500 mr-2" icon={faCheck} width={14} />
                                    Up to a day
                                </li>
                                <li className="flex items-center">
                                    <FontAwesomeIcon className="text-green-500 mr-2" icon={faCheck} width={14} />
                                    Simple to medium projects
                                </li>
                                <li className="flex items-center">
                                    <FontAwesomeIcon className="text-green-500 mr-2" icon={faCheck} width={14} />
                                    Larger tasks (e.g., refractoring, bug hunting)
                                </li>
                            </ul>
                        </div>

                        <div className="h-full rounded-xl bg-transparent-ish border border-red p-9">
                            <FontAwesomeIcon className="w-max mx-auto text-red-600" icon={faDatabase} width={35}/>
                            <h1 className="w-max mx-auto text-red-400">Enterprise</h1>
                            <h2 className="text-2xl w-max mx-auto text-red">$150</h2>
                            <ul className="pt-4 list-none space-y-2">
                                <li className="flex items-center">
                                    <FontAwesomeIcon className="text-green-500 mr-2" icon={faCheck} width={14} />
                                    Up to a week
                                </li>
                                <li className="flex items-center">
                                    <FontAwesomeIcon className="text-green-500 mr-2" icon={faCheck} width={14} />
                                    Complex projects
                                </li>
                                <li className="flex items-center">
                                    <FontAwesomeIcon className="text-green-500 mr-2" icon={faCheck} width={14} />
                                    Large tasks (e.g., refractoring, bug hunting)
                                </li>
                                <li className="flex items-center">
                                    <FontAwesomeIcon className="text-green-500 mr-2" icon={faCheck} width={14} />
                                    Documenting
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="px-8 md:px-10 lg:px-15 xl:px-24 text-red-400 prose absolute bottom-0 py-4"><p className="m-0 text-sm"><a className="text-red hover:text-red-400 duration-300 underline decoration-dotted underline-offset-4" target="_blank" rel="noreferrer" href="https://opensource.org/license/apache-2-0">Apache-2.0</a> © <a className="text-red hover:text-red-400 duration-300 underline decoration-dotted underline-offset-4" target="_blank" rel="noreferrer" href="https://github.com/kleo-dev">Kleo</a></p></footer>
        </div>
    )
}