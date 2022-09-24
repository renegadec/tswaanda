import { card } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

const AppFeatures = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Get everything integrated <br className='sm:block hidden' /> in one place.</h2>

      <p className={`${styles.paragraph} max-w-[590px] mt-5`}>
        From analysis, to your banking, all integrated in one place! The Tswaanda ecosystem is one that gives you convenience and peace of mind so you can focus on important issues
      </p>

      <Button styles="mt-10" />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="" className='w-[100%] h-[100%]' />
    </div>
  </section>
)

export default AppFeatures