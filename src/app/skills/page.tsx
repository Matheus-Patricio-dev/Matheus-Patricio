import Skills from "./_components/tabMenuSkill";

export default function Page() {
  return (
    <div  className="flex items-center justify-between w-full flex-col pb-8 px-8">
      <div className="w-full max-w-3xl">
      <h1 className="font-medium text-gray-900 mb-4 text-lg">Skills</h1>

      <Skills />
      </div>
    </div>
  );
}
