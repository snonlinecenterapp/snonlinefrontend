import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Card } from "../../Component/Card/Card";
import { companyImg, gstImg, passportSevaImg } from "../../helper/icon-path";
import { fetchSubService } from "../../Service/GetServices";
import "./home.scss";
const Home = () => {
  const [data, setdata] = useState([]);
  const [subService, setsubService] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  let serviceId = searchParams.get("service");

  useEffect(() => {
    const subService = fetchSubService();
    console.log(subService.then((res)=>res));
    subService.then((res) => console.log(res));
    setsubService(() => data?.filter((item) => item.mainService == serviceId));
  }, [serviceId]);
  console.log(subService);

  return (
    <div className="home">
      {subService.map((item, index) => {
        return <Card title={item?.name} key={index} image={companyImg} />;
      })}
    </div>
  );
};

export default Home;
