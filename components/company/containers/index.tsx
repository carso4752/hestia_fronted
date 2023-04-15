import { FC, useRef } from "react";
import FormRegister from "../components/FormRegister";
import { Company } from "../models";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { selectCompany } from "@/redux/slices/company/selector";
import { useAppDispatch } from "@/redux/store";
import { getCompanysAsync } from "@/redux/slices/company/slice";

const Company: FC<Company> = ({ children }) => {
  const companyRef = useRef(false);
  const { values, loading } = useSelector(selectCompany);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (companyRef.current === false) {
      dispatch(getCompanysAsync());
    }

    return () => {
      companyRef.current = true;
    };
  }, []);
  return (
    <>
      <FormRegister />
      {values?.map((item: any, index: number) => {
        return <ul key={index}>{item.nombre}</ul>;
      })}
    </>
  );
};

export default Company;
