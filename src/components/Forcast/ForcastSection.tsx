import { getForcast } from "@/Services/ForcastApi";
import { Bell, Grid2X2, MapPinIcon, Search, Settings } from "lucide-react";
import { Fragment, useEffect, useState } from "react";
import Spinner2 from "../Spinner/Spinner";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import type { general } from "@/interface/Forcast";
import { Classic } from "../ui/classic";
import { Avatar } from "@heroui/react";
import avatar from "../../../public/gradient-3v8o14vm.jpg";

export default function ForcastSection() {
  let root = document.getElementById("html");

  const today = new Date();
  const date = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
  let [toggeled, setToggeled] = useState(true);
  let [forcast, setForcast] = useState<general | null>(null);
  let [searchValue, setValue] = useState("");
  let [loading, setLoading] = useState(true);
  async function getData() {
    let data = await getForcast();
    console.log(data);
    setForcast(data);
    setLoading(false);
  }

  async function search() {
    let data = await getForcast(searchValue);

    setForcast(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <header className=" w-full hidden md:flex items-center gap-3 sm:gap-4">
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            type="button"
            aria-label="Apps"
            className="grid size-11 shrink-0 cursor-pointer place-items-center rounded-full bg-[#242329] text-white transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dbeafa] focus-visible:ring-offset-2 focus-visible:ring-offset-[#101015]"
          >
            <Grid2X2 size={17} aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Notifications"
            className="grid size-11 shrink-0 cursor-pointer place-items-center rounded-full bg-[#242329] text-white transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dbeafa] focus-visible:ring-offset-2 focus-visible:ring-offset-[#101015]"
          >
            <Bell size={17} aria-hidden="true" />
          </button>
        </div>

        <div className="relative ml-auto min-w-0 flex-1 sm:ml-10">
          <input
            value={searchValue}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            type="text"
            placeholder="Search City...."
            aria-label="Search city"
            className="placeholder:text-[#c6c5cc] focus:outline-none flex h-11 w-full items-center gap-3 rounded-full bg-[#242329]  pl-5 text-[#c6c5cc]"
          />
          <button
            onClick={async () => {
              if (searchValue == "") {
                return 0;
              } else {
                search();
              }
            }}
            className="absolute top-1/2 right-2 flex size-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-[#c6c5cc] text-black transition-all duration-150 active:scale-[0.98]"
          >
            <Search size={19} className="-translate-x-px" />
          </button>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <div className="hidden md:flex min-w-0 max-w-44 items-center gap-2 text-base font-medium text-[#1e1e21] dark:text-white">
            <MapPinIcon size={17} aria-hidden="true" className="shrink-0" />
            <span className="truncate">
              {forcast == null ? (
                ""
              ) : (
                <>
                  {" "}
                  {forcast?.location.name} , {forcast?.location.country}
                </>
              )}
            </span>
          </div>
          <button
            type="button"
            aria-label="Settings"
            className="hidden size-11 shrink-0 cursor-pointer place-items-center rounded-full bg-[#242329] text-[#b9b6c0] transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dbeafa] focus-visible:ring-offset-2 focus-visible:ring-offset-[#101015] sm:grid"
          >
            <Settings size={20} aria-hidden="true" />
          </button>
          <Classic
            onClick={() => {
              root?.classList.toggle("dark");
              setToggeled(!toggeled);
            }}
            className="grid size-11 shrink-0 active:scale-[0.98] cursor-pointer place-items-center rounded-full dark:bg-white bg-black dark:text-[#11131b] text-white transition-all duration-150 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dbeafa] focus-visible:ring-offset-2 focus-visible:ring-offset-[#101015]"
          />
          <Avatar>
            <Avatar.Image src={avatar} />
          </Avatar>
        </div>
      </header>

      <header className="flex flex-col items-center justify-center md:hidden w-full  gap-4 sm:gap-4">
        <div className="flex w-full justify-between">
          <Avatar>
            <Avatar.Image src={avatar} />
          </Avatar>
          <button
            type="button"
            aria-label="Apps"
            className="grid size-11 shrink-0 cursor-pointer place-items-center rounded-full bg-[#242329] text-white transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dbeafa] focus-visible:ring-offset-2 focus-visible:ring-offset-[#101015]"
          >
            <Grid2X2 size={17} aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Notifications"
            className="grid size-11 shrink-0 cursor-pointer place-items-center rounded-full bg-[#242329] text-white transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dbeafa] focus-visible:ring-offset-2 focus-visible:ring-offset-[#101015]"
          >
            <Bell size={17} aria-hidden="true" />
          </button>

          <button
            type="button"
            aria-label="Settings"
            className=" size-11 shrink-0 cursor-pointer place-items-center rounded-full bg-[#242329] text-[#b9b6c0] transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dbeafa] focus-visible:ring-offset-2 focus-visible:ring-offset-[#101015] sm:grid"
          >
            <Settings size={20} aria-hidden="true" />
          </button>
          <Classic
            onClick={() => {
              root?.classList.toggle("dark");
              setToggeled(!toggeled);
            }}
            className="grid size-11 shrink-0 active:scale-[0.98] cursor-pointer place-items-center rounded-full dark:bg-white bg-black dark:text-[#11131b] text-white transition-all duration-150 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dbeafa] focus-visible:ring-offset-2 focus-visible:ring-offset-[#101015]"
          />
        </div>

        <div className="relative w-full ml-auto min-w-0 flex-1 ">
          <input
            value={searchValue}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            type="text"
            placeholder="Search City...."
            aria-label="Search city"
            className="placeholder:text-[#c6c5cc] focus:outline-none flex h-11 w-full items-center gap-3 rounded-full bg-[#242329]  pl-5 text-[#c6c5cc]"
          />
          <button
            onClick={async () => {
              if (searchValue == "") {
                return 0;
              } else {
                search();
              }
            }}
            className="absolute top-1/2 right-2 flex size-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-[#c6c5cc] text-black transition-all duration-150 active:scale-[0.98]"
          >
            <Search size={19} className="-translate-x-px" />
          </button>
        </div>
      </header>

      <div className=" flex mt-6 md:hidden min-w-0 max-w-44 items-center gap-2 text-base font-medium text-[#1e1e21] dark:text-white">
        <MapPinIcon size={17} aria-hidden="true" className="shrink-0" />
        <span className="truncate w-full">
          {forcast == null ? (
            ""
          ) : (
            <>
              {" "}
              {forcast?.location.name} , {forcast?.location.country}
            </>
          )}
        </span>
      </div>

      <nav className="mt-2 md:mt-9 flex gap-7 text-base font-medium dark:text-white text-[#77757e]">
        <p>7 Days Forecast</p>
      </nav>

      {loading ? (
        <div className="w-full h-full flex items-center justify-center ">
          <Spinner2 />
        </div>
      ) : (
        <>
          {" "}
          {forcast == null ? (
            <section
              role="alert"
              className="relative mt-7 overflow-hidden rounded-[28px] border border-[#34343c] bg-[#18181e] px-5 py-5 shadow-[0_16px_40px_rgba(0,0,0,0.18)] sm:px-7 sm:py-6"
            >
              <div
                className="absolute -right-10 -top-16 size-52 rounded-full border border-[#dbeafa]/10"
                aria-hidden="true"
              />
              <div
                className="absolute -right-2 -top-8 size-36 rounded-full border border-[#dbeafa]/10"
                aria-hidden="true"
              />

              <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-4">
                  <div className="grid size-12 shrink-0 place-items-center rounded-2xl border border-[#dbeafa]/20 bg-[#dbeafa]/10 text-[#dbeafa]">
                    <Search size={22} aria-hidden="true" />
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#dbeafa]">
                        No forecast found
                      </p>
                      <span className="rounded-full bg-[#292930] px-2 py-1 text-[10px] text-[#96949e]">
                        Search error
                      </span>
                    </div>

                    <h2 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-white sm:text-2xl">
                      No weather for{" "}
                      <span className="text-[#dbeafa]">“{searchValue}”</span>
                    </h2>

                    <p className="mt-2 max-w-127.5 text-sm leading-5 text-[#aaa7b3]">
                      Try a nearby city or check the spelling. You can search by
                      city, region, or country.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setValue("");
                    getData();
                  }}
                  className="relative shrink-0 rounded-full bg-[#dbeafa] px-5 py-3 text-xs font-semibold text-[#15151a] transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dbeafa] focus-visible:ring-offset-2 focus-visible:ring-offset-[#18181e]"
                >
                  Try another search
                </button>
              </div>
            </section>
          ) : (
            <div className="mt-5 grid gap-3 w-full">
              <div className="flex gap-3 w-full overflow-auto scrollbar-none">
                <>
                  <div className="flex gap-3 py-2 overflow-auto scrollbar-none">
                    <article className="relative min-w-55 rounded-[24px] bg-linear-to-b from-[#bfe0f4] to-[#d4e8f5] py-5 px-4 text-[#131923] ">
                      <div className="flex justify-between text-sm font-semibold">
                        <span>Today</span>
                        <span>
                          {new Date(
                            forcast.location.localtime.replace(" ", "T"),
                          ).toLocaleTimeString("en-US", {
                            hour: "numeric",
                            minute: "2-digit",
                            hour12: true,
                          })}
                        </span>
                      </div>
                      <div className="mt-7 flex items-center justify-between">
                        <strong className="text-[48px] font-normal tracking-[-4px]">
                          {forcast.current.temp_c}°
                        </strong>
                        <div className="flex flex-col items-center gap-1">
                          <WeatherIcon
                            code={forcast.current.condition.code}
                            isDay={forcast.current.is_day}
                            className="size-14"
                          />
                          <p className="max-w-24 text-center text-[11px] font-medium leading-tight text-[#66717c]">
                            {forcast.current.condition.text}
                          </p>
                        </div>
                      </div>
                      <div className="flex mt-2 items-center justify-between gap-2 ">
                        <div className="  text-[9px] leading-4 text-[#66717c]">
                          Real feel {forcast.current.feelslike_c}°
                          <br />
                          Wind: N-E, 5-8 km/h
                          <br />
                          Pressure: 1000MB
                        </div>
                        <div className=" text-[9px] leading-4 text-[#66717c]">
                          Sunrise:{" "}
                          {forcast.forecast.forecastday[0].astro.sunrise}
                          <br />
                          Sunset: {forcast.forecast.forecastday[0].astro.sunset}
                          <br />
                          Humidity: {forcast.current.humidity}%
                        </div>
                      </div>
                    </article>
                    {forcast.forecast.forecastday.map((day, i) => {
                      return (
                        <Fragment key={i}>
                          {day.date == date ? (
                            ""
                          ) : (
                            <>
                              {" "}
                              <article
                                key={i}
                                className="group flex min-w-40 flex-col rounded-[24px] border border-[#2b2b32] bg-linear-to-b from-[#24242a] to-[#1a1a1f] p-4 text-[#eeedf1] shadow-[0_8px_20px_rgba(0,0,0,0.12)] transition-transform hover:-translate-y-1 "
                              >
                                <div className="flex items-start justify-between">
                                  <div>
                                    <span className="block text-sm font-semibold">
                                      {new Date(
                                        `${day.date}T00:00:00`,
                                      ).toLocaleDateString("en-US", {
                                        weekday: "long",
                                      })}
                                    </span>
                                    <span className="mt-1 block text-[10px] text-[#85828c]">
                                      {new Date(
                                        `${day.date}T00:00:00`,
                                      ).toLocaleDateString("en-US", {
                                        month: "long",
                                        day: "numeric",
                                      })}
                                    </span>
                                  </div>
                                  <WeatherIcon
                                    code={day.day.condition.code}
                                    className="size-9 self-center"
                                  />
                                </div>
                                <div className="mt-5 flex items-end gap-1">
                                  <strong className="text-[30px] font-normal tracking-[-2px]">
                                    {day.day.maxtemp_c}°
                                  </strong>
                                  <span className="mb-1 text-[11px] text-[#85828c]">
                                    / {day.day.mintemp_c}°
                                  </span>
                                </div>
                                <span className="mt-1 text-[10px] font-medium text-[#d7d6dc]">
                                  {day.day.condition.text}
                                </span>
                                <div className="mt-4 space-y-1 border-t border-[#303036] pt-3 text-[9px] text-[#85828c]">
                                  <p>
                                    Max Wind Speed {day.day.maxwind_kph} km/h
                                  </p>
                                  <p>Humidity {day.day.avghumidity}%</p>
                                </div>
                              </article>
                            </>
                          )}
                        </Fragment>
                      );
                    })}
                  </div>
                </>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
