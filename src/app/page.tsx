import Background from "@/components/Background";
import PinnedRepos from "@/components/PinnedRepos";


export default function App() {
  return (
    <div>
      <Background/>
      <div className="content-center w-full lg:mx-auto pt-16 lg:pt-0 lg:pl-[6%] relative z-20 pb-16 md:pb-0">
        <div className="w-full max-w-screen-lg mx-auto">
          <div className="px-8 md:px-10 lg:px-15 xl:px-24">
            <h1 className="py-2 text-gray-300">Hey, I'm Leo 👋🏻</h1>
            <p className="font-semibold text-gray-300">A passionate software enginner in Albania. I build full stack web apps but mainly desktop apps and TUI apps.</p>
            <h1 className="pt-20 py-3 text-red-400">Pinned Projects</h1>
            <section className="mb-10">
              <PinnedRepos />
            </section>
          </div>
        </div>
      </div>
      <footer className="px-8 md:px-10 lg:px-15 xl:px-24 text-red-400 prose absolute bottom-0 py-4"><p className="m-0 text-sm"><a className="text-red hover:text-red-400 duration-300 underline decoration-dotted underline-offset-4" target="_blank" rel="noreferrer" href="https://opensource.org/license/apache-2-0">Apache-2.0</a> © <a className="text-red hover:text-red-400 duration-300 underline decoration-dotted underline-offset-4" target="_blank" rel="noreferrer" href="https://github.com/kleo-dev">Kleo</a></p></footer>
    </div>
  );
}
