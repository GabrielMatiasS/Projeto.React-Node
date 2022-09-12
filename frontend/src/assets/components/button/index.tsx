import icon from '../../components/img/notification-icon.svg'
import './style.css'

function button() {
  return (
    <>
      <div className="dsmeta-red-btn">
        <img src={icon} alt="Notificar" />
      </div>
    </>
  )
}

export default button;
