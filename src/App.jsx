import BarChart from './components/BarChart';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import SmallImg from './assets/small-girl.png';
import LargeImg from './assets/large-girl.png';
import './styles/style.scss';
import { LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import InterviewInfo from './components/InterviewInfo';
import Jobs from './components/Jobs';
import CandidateInfo from './components/CandidateInfo';
import Upcoming from './components/Upcoming';
import Activity from './components/Activity';
import Hiring from './components/Hiring';

function App() {
  return (
    <>
      <Header />
      <div className='d-flex wrapper'>
        <Sidebar />
        <main className='main'>
          <div className="page-content">
            <h4>HR Employee</h4>
            <p>Enjoy your selecting potential candidates Tracking and Management System.</p>
          </div>
          <section className="d-flex gap_40 app-info">
            <div className="flex_50">
              <BarChart />              
            </div>
            <div className="flex_50">
              <div className="assesment">
                <div className="d-flex">
                  <div className="flex_50">
                    <div className="list-icon">
                      <svg width="59" height="81" viewBox="0 0 59 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M56.2345 80.1867H2.76512C1.48431 80.1867 0.456055 79.1404 0.456055 77.8777V3.12157C0.456055 1.8588 1.50235 0.8125 2.76512 0.8125H46.9982C47.2327 0.8125 47.4673 0.902698 47.6296 1.08309L58.273 11.7265C58.4353 11.8888 58.5436 12.1233 58.5436 12.3578V77.8777C58.5436 79.1404 57.4973 80.1867 56.2345 80.1867ZM2.76512 2.61646C2.47649 2.61646 2.26001 2.85097 2.26001 3.12157V77.8596C2.26001 78.1483 2.49453 78.3647 2.76512 78.3647H56.2165C56.5051 78.3647 56.7216 78.1302 56.7216 77.8596V12.7367L46.6194 2.61646H2.76512Z" fill="#091316"/>
                        <path d="M57.642 13.2598H48.3877C47.1249 13.2598 46.0967 12.2316 46.0967 10.9688V1.71448C46.0967 1.20937 46.4936 0.8125 46.9987 0.8125C47.5038 0.8125 47.9006 1.20937 47.9006 1.71448V10.9688C47.9006 11.2394 48.1171 11.4559 48.3877 11.4559H57.642C58.1471 11.4559 58.544 11.8527 58.544 12.3578C58.544 12.863 58.1471 13.2598 57.642 13.2598Z" fill="#091316"/>
                        <path d="M41.4776 37.3784H17.5391C16.0778 37.3784 14.9053 36.1878 14.9053 34.7446V18.96C14.9053 17.5168 16.0778 16.3442 17.521 16.3442H41.5137C42.9569 16.3442 44.1294 17.5168 44.1294 18.96V34.7446C44.1114 36.1878 42.9208 37.3784 41.4776 37.3784ZM17.503 18.1482C17.052 18.1482 16.6912 18.509 16.6912 18.96V34.7266C16.6912 35.1956 17.07 35.5564 17.521 35.5564H41.4596C41.9286 35.5564 42.2894 35.1776 42.2894 34.7266V18.9419C42.2894 18.491 41.9286 18.1302 41.4776 18.1302L17.503 18.1482Z" fill="#0A66C2"/>
                        <path d="M34.8397 18.1484C34.3346 18.1484 33.9377 17.7515 33.9377 17.2464V11.7083H25.0442V17.2464C25.0442 17.7515 24.6473 18.1484 24.1422 18.1484C23.6371 18.1484 23.2402 17.7515 23.2402 17.2464V11.7083C23.2402 10.7161 24.052 9.9043 25.0442 9.9043H33.9377C34.9299 9.9043 35.7417 10.7161 35.7417 11.7083V17.2464C35.7417 17.7515 35.3448 18.1484 34.8397 18.1484Z" fill="#0A66C2"/>
                        <path d="M43.2099 24.9314H15.7897C15.2846 24.9314 14.8877 24.5345 14.8877 24.0294C14.8877 23.5243 15.2846 23.1274 15.7897 23.1274H43.2099C43.715 23.1274 44.1119 23.5243 44.1119 24.0294C44.1119 24.5345 43.715 24.9314 43.2099 24.9314Z" fill="#0A66C2"/>
                        <path d="M29.5 30.5958C27.5157 30.5958 25.9102 28.9903 25.9102 27.006V24.0294C25.9102 23.5243 26.307 23.1274 26.8121 23.1274C27.3172 23.1274 27.7141 23.5243 27.7141 24.0294V27.006C27.7141 27.9981 28.5259 28.7919 29.5 28.7919C30.4922 28.7919 31.286 27.9801 31.286 27.006V24.0294C31.286 23.5243 31.6828 23.1274 32.1879 23.1274C32.693 23.1274 33.0899 23.5243 33.0899 24.0294V27.006C33.0899 28.9903 31.4844 30.5958 29.5 30.5958Z" fill="#0A66C2"/>
                        <path d="M11.3877 50.7462C11.1532 50.7462 10.9187 50.656 10.7563 50.4756L8.95238 48.6716C8.60962 48.3108 8.60962 47.7516 8.95238 47.3908C9.29513 47.03 9.8724 47.03 10.2332 47.3908L11.3877 48.5454L15.7533 44.1798C16.0961 43.819 16.6733 43.819 17.0341 44.1798C17.3769 44.5406 17.3769 45.0998 17.0341 45.4606L12.0371 50.4576C11.8568 50.638 11.6222 50.7462 11.3877 50.7462Z" fill="#0A66C2"/>
                        <path d="M49.4152 48.2385H21.1832C20.6781 48.2385 20.2812 47.8417 20.2812 47.3366C20.2812 46.8314 20.6781 46.4346 21.1832 46.4346H49.4152C49.9203 46.4346 50.3172 46.8314 50.3172 47.3366C50.3172 47.8417 49.9023 48.2385 49.4152 48.2385Z" fill="#091316"/>
                        <path d="M11.3877 60.8121C11.1532 60.8121 10.9187 60.7219 10.7563 60.5415L8.95238 58.7376C8.60962 58.3768 8.60962 57.8175 8.95238 57.4567C9.29513 57.0959 9.8724 57.0959 10.2332 57.4567L11.3877 58.6113L15.7533 54.2457C16.0961 53.8849 16.6733 53.8849 17.0341 54.2457C17.3769 54.6065 17.3769 55.1657 17.0341 55.5265L12.0371 60.5235C11.8387 60.7399 11.6222 60.8121 11.3877 60.8121Z" fill="#0A66C2"/>
                        <path d="M49.4152 58.3225H21.1832C20.6781 58.3225 20.2812 57.9256 20.2812 57.4205C20.2812 56.9154 20.6781 56.5186 21.1832 56.5186H49.4152C49.9203 56.5186 50.3172 56.9154 50.3172 57.4205C50.3172 57.9256 49.9023 58.3225 49.4152 58.3225Z" fill="#091316"/>
                        <path d="M11.3877 70.8966C11.1532 70.8966 10.9187 70.8064 10.7563 70.626L8.95238 68.822C8.60962 68.4612 8.60962 67.902 8.95238 67.5412C9.29513 67.1804 9.8724 67.1804 10.2332 67.5412L11.3877 68.6957L15.7533 64.3302C16.0961 63.9694 16.6733 63.9694 17.0341 64.3302C17.3769 64.691 17.3769 65.2502 17.0341 65.611L12.0371 70.6079C11.8568 70.8064 11.6222 70.8966 11.3877 70.8966Z" fill="#0A66C2"/>
                        <path d="M49.4152 68.407H21.1832C20.6781 68.407 20.2812 68.0101 20.2812 67.505C20.2812 66.9999 20.6781 66.603 21.1832 66.603H49.4152C49.9203 66.603 50.3172 66.9999 50.3172 67.505C50.3172 68.0101 49.9023 68.407 49.4152 68.407Z" fill="#091316"/>
                      </svg>
                    </div>
                    <h2>0033</h2>
                    <h4>New Assessment{'`'}s</h4>
                  </div>
                  <div className="flex_50 text-right">
                    <div className="d-flex img_align">
                      <div><img src={SmallImg} alt="small" /></div>
                      <div className='large'><img src={LargeImg} alt="large" /></div>
                    </div>
                    <button className='view-btn'>VIEW DETAILS</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className='d-flex gap_30'>
            <div className="flex_70">
              <InterviewInfo />
              <Jobs />
              <CandidateInfo />
            </div>
            <div className="flex_30">
              <section>
                <div className="date-picker">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <StaticDatePicker defaultValue={dayjs('2022-04-17')} />
                  </LocalizationProvider>
                </div>
              </section>
              <Upcoming />
              <Activity />
              <Hiring />
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
