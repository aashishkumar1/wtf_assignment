import './Dashboard.scss'
import pic1 from '../../assets/pic1.png'
import pic2 from '../../assets/pic2.png'
// import pic from '../../assets/pic.png'

const Dashboard = () => {
    return (
      <div className="dashboard">
        <div className="dashboard-word powered">Powered</div>
        <div className="dashboard-word gym_word">GYM</div>
        <img src={pic1} alt="logo"  className="pic1"/> 
        <img src={pic2} alt="logo"  className="pic2"/>  
      </div>
    );
  }
  
  export default Dashboard;
  