import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useUser } from '../../hooks/useUser';
import { update } from '../../redux/user/userOperations';
import main from '../App.module.css';
import Modal from 'react-modal';

export const DailyCaloriesForm = () => {
    const dispatch = useDispatch();
    const { isLoggedIn } = useUser();
    const [formData, setFormData] = useState({});
    const [modal, setModal] = useState(false);
    const modalForm = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          padding: "0px",
          backgroundColor:"var(--white)",
          borderColor: "var(--gray)",
          zIndex: 1000,
        },
        overlay: {
          backgroundColor:"var(--overlay)",
          zIndex: 1000,
        }
      }

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        const height = Number(form.elements.height.value);
        const age = Number(form.elements.age.value);
        const weight = Number(form.elements.weight.value);
        const desired = Number(form.elements.desired.value);
        const blood = form.elements.blood.value;
        const intake = 10 * weight + 6.25 * height - 5 * age - 161 - 10 * (desired);
        setFormData({ height, age, weight, desired, blood, intake });
        setModal(true);
        form.reset();
      };
    return !isLoggedIn &&
        <>
            <form className={main.form} onSubmit={handleSubmit} autoComplete="off">
                {/* <label className={main.label} style={{color:"var(--orange)",height:"4em"}}>PUBLIC DAILY CALORIES FORM</label> */}
                <label className={main.tag}>Calculate your daily calorie<br />intake right now</label>
                <div className={main.row}>
                    <label className={main.label}>Height *
                        <input type="number" name="height" autoComplete="height" required />
                    </label>
                    <label className={main.label}>Desired weight *
                        <input type="number" name="desired" autoComplete="desired" required />
                    </label>
                </div>
                <div className={main.row}>
                    <label className={main.label}>Age *
                        <input type="number" name="age" autoComplete="age" required />
                    </label>
                    <label className={main.label}>Blood type *
                        <input type="text" name="blood" autoComplete="blood" disabled="disabled" />
                    </label>
                </div>
                <div className={main.row}>
                    <label className={main.label}>Current weight *
                        <input type="number" name="weight" autoComplete="weight" required />
                    </label>
                    <div className={main.radio}>
                        <div className={main.radioItem}><input type="radio" name="option" value="o" defaultChecked={true} /><label className={main.radioLabel}>O</label></div>
                        <div className={main.radioItem}><input type="radio" name="option" value="a" /><label className={main.radioLabel}>A</label></div>
                        <div className={main.radioItem}><input type="radio" name="option" value="b" /><label className={main.radioLabel}>B</label></div>
                        <div className={main.radioItem}><input type="radio" name="option" value="ab" /><label className={main.radioLabel}>AB</label></div>
                    </div>
                </div>
                <div className={main.weightWrapper}>
                    <button type="submit" id={main.weight}>Start losing weight</button>
                </div>
            </form>
            <Modal
                isOpen={modal}
                onRequestClose={()=>{setModal(false)}}
                contentLabel="Daily Calorie Intake"
                style={modalForm}
                shouldCloseOnOverlayClick={false}
                shouldCloseOnEsc={true}
            >
                <div className={main.modal}>
                    <div className={main.closeWrapper}>
                        <button className={main.close} onClick={()=>{setModal(!modal)}}>
                            <img src={require("../../images/close.png")} />
                        </button>
                    </div>
                    <p className={main.tag}>Your recommended daily<br />calorie intake is</p>
                        <p className={main.intake}>{formData.intake} <sub style={{fontSize:"20px"}}>kcal</sub></p>
                        <hr className={main.hr} />
                    <div className={main.recommend} style={{height:"220px",paddingLeft:"150px"}}>
                        <p className={main.title}>Foods you should not eat</p>
                        <p className={main.caption}>Flour products</p>
                        <p className={main.caption}>Milk</p>
                        <p className={main.caption}>Read meat</p>
                        <p className={main.caption}>Smoked meats</p>
                    </div>
                    <button type="submit" id={main.weightModal}>Start losing weight</button>
                </div>
            </Modal>
        </>
};