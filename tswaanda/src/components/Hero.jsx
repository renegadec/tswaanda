import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from './GetStarted'

const Hero = () => {
    return (
        <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
            <div className={`flex-1  ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
                <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2"
                >
                    <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
                    <p className={`${styles.paragraph} ml-2`}>
                        <span className="text-white">15%</span> Discount For {" "}
                        <span className="text-white">The First 2 Months</span>
                    </p>
                </div>

                <div className="flex flex-row justify-between items-center w-full">
                    <h1 className="flex-1 font-poppins font-semibold ss:text-[56px] text-[52px] text-white ss:leading-[75px] leading-[75px]">
                        The Easiest and <br className="sm:block hidden" /> <span className="text-gradient">Profitable</span> way to 
                    </h1>

                    <div className="ss:flex hidden md:mr-1 mr-0">
                        <GetStarted />
                    </div>
                </div>

                <h1 className="font-poppins font-semibold ss:text-[56px] text-[52px] text-white ss:leading-[75px] leading-[75px] w-full"
                >Invest in Agriculture.</h1>

                <p className={`${styles.paragraph} max-w-[760px] mt-5`}>
                    Increasing food security through empowering mid-scale farmers in Africa.
                    Africa has diverse farming activities that are ineffectively run such that there is no transparency  
                    - We are here to change that!
                </p>
            </div>

            <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
                <img src={robot} alt="cards" className="w-[100%] relative z-[5]" />
                <div className="absolute z-[0] w-[40%] h-[35%] top-0 green__gradient " />
                <div className="absolute z-[1] w-[80%] h-[85%] rounded-full bottom-40 white__gradient " />
                <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 green__gradient " />
            </div>

            <div className={`ss:hidden ${styles.flexCenter}`}>
                <GetStarted />
            </div>
        </section>
    )
}

export default Hero