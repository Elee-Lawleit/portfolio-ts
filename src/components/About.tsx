import { FunctionComponent } from "react"
interface AboutProps { }
const About: FunctionComponent<AboutProps> = () => {
  return (
    <>
      <div className="bg-transparent relative mt-10" id="about">
        <div className="bg-gray-800 content-none absolute inset-0 -skew-y-3 -z-10"/>
        <div className="mx-auto max-w-7xl px-6 py-16 pt-20 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none lg:grid lg:grid-cols-2 lg:justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white  lg:text-5xl lg:row-span-1 lg:col-span-2 lg:row-start-1">About me</h1>
              <div className="mt-3 lg:mt-7 text-lg leading-8 text-white max-w-lg lg:max-w-xl lg:row-start-1">
                <p>Hello, I&apos;m a computer science student and freelancer in Pakistan who happens to love the web. I&apos;ve been ingrained in the web ecosystem from a very young age. I like to solve problems related to the web and like building solutions that scale. The web ecosystem changes quickly and forces you to adapt and explore new ways of solving problems, and that&apos;s just my forte.</p>
                <p className="mt-3">With expertise in react, next and the like, my goal is to build secure, fast and reliable web applications that scale. With knowledge about the traditional web and web 3.0, I aim to provide clients with satisfactory products.</p>
                <p className="mt-3">I currently maintain an online parent teacher meeting <span className="text-purple-500 underline"><a target="_blank" href="https://biitap.vercel.app">platform.</a></span></p>
              </div>
            </div>
            <img
              src="/about_img.svg"
              alt="image"
              className="mt-10 lg:-mt-32 aspect-[7/8] w-full max-w-lg rounded-2xl object-fit lg:ml-20
              "
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;