import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Skill({skill, icon, mt}: {skill: string, icon: IconProp, mt?: string}) {
  return (
    <div className="skill">
      <FontAwesomeIcon icon={icon} width={40} className={`text-red ${mt}`} />
      <span className="tooltip absolute bg-transparent-ish">
        {skill}
      </span>
    </div>
  );
}