import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({ date, setDate }) => {

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse w-1/2">
                <img src={chair} alt='' />
                <div className='mr-32'>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    ></DayPicker>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;