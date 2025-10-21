import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Skill({
  skill,
  icon,
  classInsert,
}: {
  skill: string;
  icon: IconProp;
  classInsert?: string;
}) {
  return (
    <div className="relative flex items-center justify-center group">
      <span
        className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2
                   bg-black text-white text-sm px-2 py-1 rounded
                   opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
      >
        Skilled in {skill}
      </span>

      <FontAwesomeIcon
        icon={icon}
        width={40}
        className={`text-slate-300 ${classInsert} cursor-pointer`}
      />
    </div>
  );
}
