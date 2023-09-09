import Image from "next/image";
import Link from "next/link";

export function HomeComponent() {
  return (
    <>
      <div id="home" className="bg-blue-600 mt-24 p-6 lg:mt-0 h-full min-h-screen flex flex-col  lg:flex-row items-center justify-center">
        <div className="flex flex-col lg:w-2/5 gap-6 w-full">
          <h2 className="text-white font-semibold text-5xl leading-tight w-full text-start">Deixe sua casa mais limpa</h2>
          <span className="text-white/70 font-extralight text-justify  w-full">  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&rsquo;s standard dummy text ever since the 1500s
          </span>
          <div className="hidden lg:flex w-full justify-between md:justify-start md:gap-4 gap-2">
            <Link className="grid place-items-center gap-2 bg-white text-blue-600 font-medium w-1/2 p-4 rounded-md hover:bg-white/90" href="login">Sou diarista</Link>
            <Link className="grid place-items-center gap-2 bg-white text-blue-600 font-medium w-1/2 p-4 rounded-md hover:bg-white/90" href="login">Sou cliente</Link>
          </div>
        </div>
        <Image className="w-full lg:w-1/2" src="/assets/home.svg" alt="vetor" width={500}
          height={500} />
        <div className="flex  lg:hidden w-full justify-between md:justify-start md:gap-4 gap-2">
          <Link className="grid place-items-center gap-2 bg-white text-blue-600 font-medium w-1/2 p-4 rounded-md hover:bg-white/90" href="login">Sou diarista</Link>
          <Link className="grid place-items-center gap-2 bg-white text-blue-600 font-medium w-1/2 p-4 rounded-md hover:bg-white/90" href="login">Sou cliente</Link>
        </div>

      </div>
    </>
  )
}