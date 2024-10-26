import { BarLoader } from 'react-spinners';

export const Loader = () => {
    return(
            <BarLoader
                color="#FC842D"
                height={10}
                speedMultiplier={1}
                width={300}
            />
    )
}