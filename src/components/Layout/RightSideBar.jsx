import main from '../App.module.css';
import { useToday } from '../../hooks/useToday';

export const RightSideBar = () => {
    const { day } = useToday();
    return (
        <>
            <div className={main.summary}>
                <p className={main.title}>Summary for {day}</p>
                <table>
                    <tbody>
                        <tr><td>Left</td><td>000 kcal</td></tr>
                        <tr><td>Consumed</td><td>000 kcal</td></tr>
                        <tr><td>Daily rate</td><td>000 kcal</td></tr>
                        <tr><td>n% of normal</td><td>000 kcal</td></tr>
                    </tbody>
                </table>
            </div>
            <div className={main.recommend}>
                <p className={main.title}>Food not recommended</p>
                <p className={main.caption}>Your diet will be displayed here</p>
                <p className={main.caption}>Flour products</p>
                <p className={main.caption}>Milk</p>
                <p className={main.caption}>Read meat</p>
                <p className={main.caption}>Smoked meats</p>
            </div>
        </>
    )
}