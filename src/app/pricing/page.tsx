import { faCheck, faCode, faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Pricing() {
  return (
    <div>
      {/* <Background /> */}
      <div className="content-center w-full lg:mx-auto pt-16 lg:pt-0 relative z-20 pb-16 md:pb-0 animate-fadeIn">
        <div className="w-full max-w-screen-lg mx-auto px-4 md:px-10">
          <h1 className="pt-10 w-max mx-auto text-red-400">Choose a plan</h1>
          <div className="pt-10 h-full grid grid-cols-1 lg:grid-cols-2 grid-rows-2 gap-8">
            <div className="h-full rounded-xl bg-transparent-ish border border-red p-9">
              <FontAwesomeIcon
                className="w-max mx-auto text-red-600"
                icon={faCode}
                width={35}
              />
              <h1 className="w-max mx-auto text-red-400">Standard</h1>
              <h2 className="text-2xl w-max mx-auto text-red">$25</h2>
              <ul className="pt-4 list-none space-y-2">
                <li className="flex items-center">
                  <FontAwesomeIcon
                    className="text-green-500 mr-2"
                    icon={faCheck}
                    width={14}
                  />
                  Up to a day
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon
                    className="text-green-500 mr-2"
                    icon={faCheck}
                    width={14}
                  />
                  Simple projects or tasks (e.g., bug fixes)
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon
                    className="text-green-500 mr-2"
                    icon={faCheck}
                    width={14}
                  />
                  Response via Email or Discord
                </li>
              </ul>
            </div>

            <div className="h-full rounded-xl bg-transparent-ish border border-red p-9">
              <FontAwesomeIcon
                className="w-max mx-auto text-red-600"
                icon={faRocket}
                width={35}
              />
              <h1 className="w-max mx-auto text-red-400">Premium</h1>
              <h2 className="text-2xl w-max mx-auto text-red">$50</h2>
              <ul className="pt-4 list-none space-y-2">
                <li className="flex items-center">
                  <FontAwesomeIcon
                    className="text-green-500 mr-2"
                    icon={faCheck}
                    width={14}
                  />
                  Up to a week
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon
                    className="text-green-500 mr-2"
                    icon={faCheck}
                    width={14}
                  />
                  Complex projects
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon
                    className="text-green-500 mr-2"
                    icon={faCheck}
                    width={14}
                  />
                  Large tasks (e.g., refractoring, bug hunting)
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon
                    className="text-green-500 mr-2"
                    icon={faCheck}
                    width={14}
                  />
                  Documenting
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
