import Image from 'next/image';
import Banner from './components/Home/Banner/Banner';
import MeetEmployeeTwin from './components/MeetEmployeeTwin';
import SmarterIntelligence from './components/Home/SmarterIntelligence';
import PlanContainer from './components/Home/PlanContainer';

export default function Home() {
  return (
    <>
      <Banner />
      <MeetEmployeeTwin />
      <SmarterIntelligence />
      <PlanContainer />
    </>
  );
}
