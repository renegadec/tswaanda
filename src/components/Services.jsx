import { apple, bill, google } from '../assets';
import styles, { layout } from '../style';

const Services = () => (
  <section id="services" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className='w-[100%] h-[100%] relative z-[5]' />

      <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />
      <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full green__gradient' />

    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Download and use <br className='sm:block hidden' /> Tswaanda dApp</h2>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Easily track your transactions and activities in one place using Tswaanda dApp for scalable progress checks, and save yourself time. Download now!
      </p>

      <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
        <img src={apple} alt="apple_store" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer ' />
        <img src={google} alt="google_play" className='w-[128px] h-[42px] object-contain cursor-pointer ' />
      </div>
    </div>
  </section>
)


export default Services