import { partners } from "../constants";
import styles from "../style";

const Partners = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {partners.map((partner) => (
        <div key={partner.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}>
          <img src={partner.logo} alt="client_logo" className="sm:w-[192px] w-[100px] object-contain" />
        </div>
      ))}
    </div>
  </section>
);

export default Partners;
