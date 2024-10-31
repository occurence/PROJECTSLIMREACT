import { Link } from 'react-router-dom';
import main from '../App.module.css';
import Modal from 'react-modal';
Modal.setAppElement('#root');

export const DailyCalorieIntake = ({modal, setModal, formData}) => {
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
    return (
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
                    <img src={require("../../images/close.png")} alt="close button" />
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
            <Link to="/register" className={main.weight}>Start losing weight</Link>
        </div>
    </Modal>
    )
}