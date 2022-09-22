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
                    <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
                        The Easiest and <br className="sm:block hidden" /> <span className="text-gradient">Profitable</span> way to 
                        <br className="sm:block hidden" /> Invest in Agriculture.
                    </h1>

                    <div className="ss:flex hidden md:mr-0 mr-0">
                        <GetStarted />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero