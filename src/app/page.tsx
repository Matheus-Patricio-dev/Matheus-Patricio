export default function Home() {
  return (
    <div className="flex items-center justify-between w-full flex-col pb-8 px-8">
      <div className="w-full max-w-3xl">
        <div>
          <p className="text-gray-500">
            I am a Software developer with experience in modern full-stack development. I work with languages
            like Javascript/Typescript, using leading frameworks such as React and NodeJS. Also, Im preparing 
            myself to AWS Certified Cloud Practitioner. These skills enable me to create high-quality web applications with a positive impact.
          </p>
        </div>

        <div className="mt-12">
          <h1 className="font-medium text-gray-900 mb-4 text-lg">Experience</h1>
          <ol className="relative border-s border-gray-200">
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-500 rounded-full mt-1.5 -start-1.5 border "></div>
              <div className="flex flex-row items-center gap-2">
                <div className="text-md font-medium text-gray-900">
                Software Developer 
                </div>
                <div className="inline-block uppercase text-xs rounded-full px-1 py-0 border border-gray-500 text-gray-500">
                  present
                </div>
              </div>
              <div className="mb-4 text-sm font-normal text-gray-500">
                Freelancer
              </div>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border "></div>
              <div className="text-md font-medium text-gray-900">
                Front-end Developer Volunteer
              </div>
              <div className="mb-4 text-sm font-normal text-gray-500">
                Movimento Futuro
              </div>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border "></div>
              <div className="text-md font-medium text-gray-900">
                Front-end Developer UI/UX Volunteer
              </div>
              <div className="mb-4 text-sm font-normal text-gray-500">
                LAM - Lar Assistencial Matilde
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
