import { card } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

const AppFeatures = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Sit Down With Us <br className='sm:block hidden' /></h2>

      <p className={`${styles.paragraph} max-w-[590px] mt-5`}>
      Farm wisely by consulting with us on - Investment (achieve your commercial supremacy using go-to market strategies and effective sales executions); Digital (reduce your supply chain costs using tswaanda dApp to better plan, track and manage your operations), agricultural development (innovative thinking and fore-casting near-term changes in the agriculture ecosystem volatility).
      </p>

      <Button styles="mt-10" />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="" className='w-[100%] h-[100%]' />
    </div>
  </section>
)

export default AppFeatures