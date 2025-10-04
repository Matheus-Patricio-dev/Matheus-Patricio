import { Check, Globe, House } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex items-center justify-between w-full flex-col pb-8 px-8">
      <div className="w-full max-w-3xl">
        <div>
          <p className="text-gray-500">
            Hello, my name is Matheus Patricio and I am a Software Developer with strong experience as a Fullstack Developer.
            My aim is to deliver impactful solutions through technology — from designing robust database architectures to crafting seamless end-user experiences.
            I am specialized in ReactJS, NodeJS, Express and NextJS, with that I bring solid knowledge of PHP (including Laravel), Docker and cloud computing, having an AWS Cloud Practitioner certification. 
            With this skill set, I am capable of building high-quality, scalable applications that will contribute to your company&apos;s success.
          </p>

        </div>

        <div className="mt-12">
          <h1 className="font-medium text-gray-900 mb-4 text-lg">Experience</h1>
          <ol className="relative border-s border-gray-200">
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-green-500 rounded-full mt-1.5 -start-1.5 border "></div>
              <div className="flex flex-row items-center gap-2">
                <div className="text-md font-medium text-gray-900">
                Software Developer 
                </div>
                <div className="inline-block uppercase text-xs rounded-full px-1 py-0 border border-gray-500 text-gray-500">
                  Jan 2025 - present
                </div>
              </div>
              <div className="mb-4 text-sm font-normal text-gray-500">
                Freelancer
              </div>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border "></div>

              <div className="flex flex-row items-center gap-2">
                <div className="text-md font-medium text-gray-900">
                Front-end Developer Volunteer 
                </div>
                <div className="inline-block uppercase text-xs rounded-full px-1 py-0 border border-gray-500 text-gray-500">
                  Jun 2024 - Jun 2025
                </div>
              </div>
              <div className="mb-4 text-sm font-normal text-gray-500">
                Movimento Futuro
              </div>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border "></div>
              <div className="flex flex-row items-center gap-2">
                <div className="text-md font-medium text-gray-900">
                  Front-end Developer UI/UX Volunteer
                </div>
                <div className="inline-block uppercase text-xs rounded-full px-1 py-0 border border-gray-500 text-gray-500">
                    Jun 2024 - Dec 2024
                </div>
              </div>
              <div className="mb-4 text-sm font-normal text-gray-500">
                LAM - Lar Assistencial Matilde
              </div>
            </li>
          </ol>
        </div>

        <div className="mt-12">
          <h2 className="font-medium text-gray-900 mb-4 text-lg">Education</h2>
          <ol className="relative">
            <li className="mb-10 ms-4">
              <div className="absolute w-5 h-5 rounded-full mt-1.5 -start-2 border flex items-center justify-center">
                <Check className="w-3 h-3 text-green-500" />
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="text-md font-medium text-gray-900">
                Associate Degree in Systems Analysis and Development  
                </div>
                <div className="inline-block uppercase text-xs rounded-full px-1 py-0 border border-gray-500 text-gray-500">
                  Mar 2023 - Jul 2025
                </div>
              </div>
              <div className="mb-4 text-sm font-normal text-gray-500">
                UNOPAR
              </div>
            </li>
          </ol>
        </div>

        <div className="mt-12">
          <h3 className="font-medium text-gray-900 mb-4 text-lg">Certifications</h3>
          <ol className="relative ">
            <li className="mb-10 ms-4">
              <div className="absolute w-5 h-5 rounded-full mt-1.5 -start-2 border flex items-center justify-center">
                <Check className="w-3 h-3 text-green-500" />
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="text-md font-medium text-gray-900">
                AWS Cloud Practitioner Certified 
                </div>
                <div className="inline-block uppercase text-xs rounded-full px-1 py-0 border border-gray-500 text-gray-500">
                  2025 - 2028
                </div>
              </div>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-5 h-5 rounded-full mt-1.5 -start-2 border flex items-center justify-center">
                <Check className="w-3 h-3 text-green-500" />
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="text-md font-medium text-gray-900">
                EFSET C1 Advanced Certificate
                </div>
                <div className="inline-block uppercase text-xs rounded-full px-1 py-0 border border-gray-500 text-gray-500">
                  2025
                </div>
              </div>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-5 h-5 rounded-full mt-1.5 -start-2 border flex items-center justify-center">
                <Check className="w-3 h-3 text-green-500" />
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="text-md font-medium text-gray-900">
                ADA Front end in React
                </div>
                <div className="inline-block uppercase text-xs rounded-full px-1 py-0 border border-gray-500 text-gray-500">
                  2024
                </div>
              </div>
            </li>
          </ol>
        </div>

        <div className="mt-12">
          <h3 className="font-medium text-gray-900 mb-4 text-lg">Languages</h3>
          <ol className="relative ">
            <li className="mb-10 ms-4">
              <div className="absolute w-5 h-5 rounded-full mt-1.5 -start-2 border flex items-center justify-center">
                <House className="w-3 h-3 text-green-500" />
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="text-md font-medium text-gray-900">
                Portuguese
                </div>
                <div className="inline-block uppercase text-xs rounded-full px-1 py-0 border border-gray-500 text-gray-500">
                  Native
                </div>
              </div>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-5 h-5 rounded-full mt-1.5 -start-2 border flex items-center justify-center">
                <Globe className="w-3 h-3 text-blue-500" />
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="text-md font-medium text-gray-900">
                English
                </div>
                <div className="inline-block uppercase text-xs rounded-full px-1 py-0 border border-gray-500 text-gray-500">
                  Advanced (C1)
                </div>
              </div>
            </li>
          </ol>
        </div>

      </div>
    </div>
  );
}
