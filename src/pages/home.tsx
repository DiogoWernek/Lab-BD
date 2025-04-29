import { Sidebar } from "../components/sidebar";

export function Home() {
  return (
    <div className="w-full h-full flex gap-16">
      <div className="max-w-[256px] w-full">
        <Sidebar />
      </div>

      <div>
        <h1>Content</h1>
      </div>
    </div>
  );
}
