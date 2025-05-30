import Articles from "./_components/articles";

export default function Page() {
  return (
    <div className="flex items-center justify-between w-full flex-col pb-8 px-8">
      <div className="w-full max-w-3xl">
        <h1 className="font-medium text-gray-900 mb-4 text-lg">Articles</h1>
        < Articles/>
      </div>
    </div>
  );
}
