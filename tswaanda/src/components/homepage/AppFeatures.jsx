import { card } from '../../assets/homepage';
import styles, { layout } from '../../style';
import Button from './Button';

const AppFeatures = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Sit Down With Us <br className='sm:block hidden' /></h2>

      <p className={`${styles.paragraph} max-w-[590px] mt-5`}>
        Farm wisely by consulting with us on - 
          <ul>
            <li className='pt-4'>
                <strong className='text-gradient'>1. Investment Development</strong>
                <p>Achieve your commercial supremacy using go-to market strategies and effective sales executions</p>
            </li>
            <li className='pt-4'>
              <strong className='text-gradient'>2. Digital Development</strong>
              <p>Reduce your supply chain costs using Tswaanda dApp to better plan, track and manage your operations</p>
            </li>
            <li className='pt-4'>
                <strong className='text-gradient'>3. Agricultural Development</strong>
                <p>innovative thinking and fore-casting near-term changes in the agriculture ecosystem volatility</p>
            </li>
          </ul>
      </p>

      <Button styles="mt-10" />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="card" className='w-[100%] h-[100%]' />
    </div>
  </section>
)

export default AppFeatures