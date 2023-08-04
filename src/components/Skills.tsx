import { FunctionComponent } from "react"
import Image from "next/image"

interface SkillsProps {

}

interface skills {
    name: string,
    experience: string,
    projects: number
}

const skills = [
    { name: "NextJS", experience: "1 year", projects: "3" },
    { name: "ReactJS", experience: "1 year", projects: "4" },
    { name: "ExpressJS", experience: "1 year", projects: "3" },
]

const Skills: FunctionComponent<SkillsProps> = () => {
    return <div className="bg-white" id="skills">
        <div className="relative isolate overflow-hidden mt-11 ">
            <div className="mx-auto max-w-7xl px-6 py-16 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-none text-center">
                    <div>
                        <h1 className="text-4xl font-bold text-slate-900 lg:text-5xl lg:row-span-1 lg:col-span-2 lg:row-start-1">Skills</h1>

                        <p className="text-center mt-4 xl:text-lg">I&apos;ve got a these skills up my ace!</p>

                    </div>
                    <div className="min-w-full py-5 text-gray-900">
                        <div>
                            <p className="text-center italic font-bold text-xl sm:text-2xl">Front-End</p>
                            <div className="flex flex-col gap-10 mt-10 sm:flex-row">
                                <Image src={"/logo/tailwind/Tailwind CSS.svg"} alt="tailwind logo" objectFit="contain" height={145} width={145} className="mx-auto" title="Tailwind CSS" />
                                <Image src={"/logo/mantine/mantine ui.svg"} alt="mantine logo" objectFit="contain" height={137} width={137} title="Mantine UI" className="mx-auto" />
                                <Image src={"/logo/react/React.svg"} alt="reactjs logo" height={150} width={150} className="mx-auto" title="React.js" />
                            </div>
                        </div>

                        <div className="mt-10">
                            <p className="text-center italic font-bold text-xl sm:text-2xl">Back-End/Full-Stack</p>
                            <div className="flex flex-col gap-10 mt-10 sm:flex-row">
                                <Image src={"/logo/next/Next.js Logo Vector.svg"} alt="nextjs logo" height={150} width={150} className="mx-auto" title="Next.js" />
                                <Image src={"/logo/express/Express.svg"} alt="expressjs logo" height={150} width={150} className="mx-auto" title="Express.js" />
                                <Image src={"/logo/node/Node JS.svg"} alt="nodejs logo" height={160} width={160} className="mx-auto" title="Node.js" />
                            </div>
                        </div>

                        <div className="mt-10">
                            <p className="text-center italic font-bold text-xl sm:text-2xl">Web 3.0</p>
                            <div className="flex flex-col gap-10 mt-10 sm:flex-row">
                                <Image src={"/logo/solidity/Solidity.svg"} alt="solidity logo" height={150} width={170} className="mx-auto" title="Solidity" />
                                <Image src={"/logo/eth/Eth.svg"} alt="Ethereum logo" height={200} width={200} className="mx-auto" title="Ethereum" />
                                <Image src={"/logo/hardhat/Hardhat.svg"} alt="hardhat logo" height={130} width={130} className="mx-auto" title="Hardhat.js" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Skills;