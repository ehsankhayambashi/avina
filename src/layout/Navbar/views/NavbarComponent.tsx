"use client";

import { useNavbarComponent } from "../hooks/useNavbarcomponent";

export default function NavbarComponent() {
  const { date, personalData } = useNavbarComponent();
  return (
    <>
      <header className="w-full bg-asiatech-darkblue-903">
        <nav
          className="flex justify-between items-center text-white px-6 pt-8 pb-2"
          dir="rtl"
        >
          <section>
            <p>داشبورد</p>
            <p>
              امروز
              <span className="mr-1">{date.day}</span>
              <span className="mx-1">{date.month.name}</span>
              <span>{date.year}</span>
            </p>
          </section>
          <section className="flex items-start">
            {/* <div className="w-6 h-6 rounded-50 bg-gray-600 flex justify-center items-center">0</div> */}
            <div>
              <p>
                <span>احسان خیام باشی</span>
                <span>{personalData?.first_name}</span>
                <span>{personalData?.last_name}</span>
              </p>
              <p></p>
            </div>
          </section>
        </nav>
      </header>
    </>
  );
}
