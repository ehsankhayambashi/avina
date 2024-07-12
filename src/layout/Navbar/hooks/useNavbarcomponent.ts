import { useEffect, useState } from "react";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { DateObject } from "react-multi-date-picker";
import { meData } from "../helpers/controller";
import { IMeData } from "../interface";

export const useNavbarComponent = () => {
  const date = new DateObject({ calendar: persian, locale: persian_fa });

  const [personalData, setPersonalData] = useState<IMeData>();
  useEffect(() => {
    meData(setPersonalData);
  }, []);

  return {
    personalData,
    setPersonalData,
    date,
  };
};
