import { Error, Loader, SongCard } from '../components';
import { genres } from '../assets/constants'

const Discover = () => {
    return(
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h2 className='font-bold text-3xl text-white text-left'>Discover</h2>
                <select></select>
            </div>
        </div>
    )
}

export default Discover;

const styles ={
    container:`flex flex-col`,
    wrapper:`w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10`
}