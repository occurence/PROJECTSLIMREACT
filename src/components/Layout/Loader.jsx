import { BarLoader } from 'react-spinners';

export const Loader = () => {
    return(
        <div style={{justifyContent:"center",alignContent:"start"}}>
            <BarLoader
                color="#FC842D"
                height={10}
                speedMultiplier={1}
                width={800}
            />
        </div>
    )
}