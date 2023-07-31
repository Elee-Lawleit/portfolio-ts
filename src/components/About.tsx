export default function About() {
  return (
    <>
      <div className="bg-white" id="/">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none lg:grid lg:grid-cols-2 lg:justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900  lg:text-5xl lg:row-span-1 lg:col-span-2 lg:row-start-1">About me</h1>
              <div className="mt-3 lg:mt-7 text-lg leading-8 text-gray-600 max-w-lg lg:max-w-xl lg:row-start-1">
                <p>I&apos;m a computer science student and freelancer in Pakistan who happens to aboslutely love the web. I like to dip my toes in everything (related to technology). I also like to eat neutella off of women&apos;s feet (not related to technology), but that&apos;s besides the point. What I <span className="uppercase text-black">really</span> like is building web solutions.</p>
                <p className="mt-3">My goal is to build secure, fast and reliable web applications that scale. With knowledge about the traditional web and web 3.0, I aim to provide clients with satisfactory products.</p>
                <p className="mt-3">I currently maintain an online parent teacher meeting <span className="text-purple-600 underline"><a target="_blank" href="https://biitap.vercel.app">platform.</a></span></p>
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
