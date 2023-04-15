"use client";

import Company from "@/components/company/containers";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Company>
      <>Hola children</>
    </Company>
  );
};

export default Home;
