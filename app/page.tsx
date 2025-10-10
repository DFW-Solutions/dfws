import Image from 'next/image'

export default function Home() {
  return (<>
    <main className="flex min-h-screen flex-col items-center justify-around p-8 md:p-16 lg:p-24">
      <header className="flex flex-col items-center text-center">
        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] after:overflow-hidden before:overflow-hidden before:w-full after:w-full before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/dfws-logo.png"
            alt="Digital Frontier Web Solutions Logo"
            width={180}
            height={37}
            priority
          />
        </div>
        <h1 className="text-gray-800 text-3xl flex w-full justify-center pb-6 pt-4 dark:from-inherit lg:static lg:w-auto">
            Custom Websites & Web Apps for Small Businesses
          </h1>
      </header>
      <div className="z-10 max-w-3xl w-full lg:flex space-y-8 lg:space-y-0 lg:space-x-12 mb-12">
        <p className="w-full text-lg leading-relaxed text-gray-800 dark:text-gray-200">
          At <strong className="font-semibold">DFW Solutions</strong>, we build fast, secure,
          and easy-to-manage websites and web tools so you can focus on running your business.
        </p>
        <ul className="w-full list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300">
          <li>Responsive marketing sites</li>
          <li>Member portals & dashboards</li>
          <li>Ongoing support & maintenance</li>
        </ul>
      </div>

      <div className="mb-12 text-center lg:mb-0 lg:text-left max-w-fit text-lg">
        <p>Want to chat?</p>
        <a href="mailto:contact@dfwsolutions.dev?subject=Contact From DFW Solutions Site"
          className="font-semibold"
          target="_blank"
          rel="noopener noreferrer"
        >Email us</a> and we'll get back to you within one business day.
      </div>
    </main>
  </>)
}
