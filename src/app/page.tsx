import Background from "@/components/Background";
import PinnedRepos from "@/components/PinnedRepos";


export default function App() {
  return (
    <div>
      <Background/>
      <div className="content-center mx-auto sm:w-[900px]">
        <h1 className="py-2">Hey, I'm Leo 👋🏻</h1>
        <p className="font-semibold">A passionate software enginner in Albania. I build full stack web apps but mainly desktop apps and TUI apps.</p>
        <h1 className="py-3 text-red-400">Pinned Projects</h1>
        <section className="w-full max-w-4xl mb-10 px-6 sm:px-0">
          <PinnedRepos />
        </section>
        <footer className="text-red-400 flex w-full prose absolute bottom-0 py-4 lg:px-0 md:px-8 px-8"><p className="m-0 text-sm"><a className="text-red hover:text-red-400 duration-300 underline decoration-dotted underline-offset-4" target="_blank" rel="noreferrer" href="https://opensource.org/license/apache-2-0">Apache-2.0</a> © <a className="text-red hover:text-red-400 duration-300 underline decoration-dotted underline-offset-4" target="_blank" rel="noreferrer" href="https://github.com/kleo-dev">Kleo</a></p></footer>
      </div>
    </div>
  );
}
