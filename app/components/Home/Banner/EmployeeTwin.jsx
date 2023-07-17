import Image from "next/image";
import Button from "../../Commons/Button";
import UnderBar from "./Underbar";

function EmployeeTwin() {
  return (
    <div className="flex flex-col w-1/2 justify-evenly">
      <div className=" w-full justify-evenly">
        <Image
          className="m-10"
          width="500"
          height="100"
          src="/images/ET.svg"
          alt="Employee Twin"
        ></Image>
        <p className="font-bold text-xl m-10">
          Get your digital coworker activated today. Up Skill anytime.
        </p>
        <div className="flex space-x-2 m-10">
          <Button variant="primary">Get your Employee Twin</Button>
          <Button variant="secondary">Explore all the Skills</Button>
        </div>
      </div>
      <UnderBar />
    </div>
  );
}

export default EmployeeTwin;
