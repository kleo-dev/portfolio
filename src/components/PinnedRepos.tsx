type PinnedRepo = {
  author: string,
  name: string,
  description: string,
  language: string,
  stars: number,
  forks: number,
  href?: string,
};

export function Repo({name, description: desc, language: lang, stars, forks, href}: PinnedRepo) {
  return (
    <div
      className={`
        group
        relative
        flex
        size-full
        overflow-hidden
        rounded-xl
        h-full
        border
        border-red
        hover:shadow-md
        transition-shadow
        duration-300
        bg-transparent-ish
        backdrop-blur-xl
        `}
    >
      <div className="w-full">
        <div className="rounded-xl border text-card-foreground shadow h-full bg-transparent border-none flex flex-col">
          <div className="flex flex-col space-y-1.5 p-6 flex-grow">
            <h3 className="tracking-tight text-base sm:text-lg font-semibold text-red-400">
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
                style={{ cursor: 'pointer' }}
              >
                {name}
              </a>
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 line-clamp-2 mt-1">
              {desc}
            </p>
          </div>
          <div className="p-6 pt-0 mt-auto">
            <div className="flex flex-wrap justify-between items-center gap-2">
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="flex items-center gap-1 text-xs sm:text-sm" data-state="closed">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-star text-yellow-500 h-3 w-3 sm:h-4 sm:w-4"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <span className="text-gray-300">{stars}</span>
                </div>
                <div className="flex items-center gap-1 text-xs sm:text-sm" data-state="closed">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-git-fork text-gray-500 h-3 w-3 sm:h-4 sm:w-4"
                  >
                    <circle cx="12" cy="18" r="3" />
                    <circle cx="6" cy="6" r="3" />
                    <circle cx="18" cy="6" r="3" />
                    <path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9" />
                    <path d="M12 12v3" />
                  </svg>
                  <span className="text-gray-300">{forks}</span>
                </div>
              </div>
              <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground text-xs bg-red-600/10 border-red-600" data-sentry-component="Badge" data-sentry-source-file="badge.tsx">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-code-xml h-3 w-3 mr-1"
                >
                  <path d="m18 16 4-4-4-4" />
                  <path d="m6 8-4 4 4 4" />
                  <path d="m14.5 4-5 16" />
                </svg>
                {lang}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default async function PinnedRepos() {
  const pinned: PinnedRepo[] = await (await fetch('https://pinned.berrysauce.dev/get/kleo-dev')).json();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 bg-transparent">
      {pinned.map((repo, i) => (
        <Repo
          key={i}
          author={repo.author}
          name={repo.name}
          description={repo.description}
          language={repo.language}
          stars={repo.stars}
          forks={repo.forks}
          href={`https://github.com/${repo.author}/${repo.name}`}/>
      ))}
    </div>
  )
}