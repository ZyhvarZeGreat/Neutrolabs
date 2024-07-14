"use client";
// import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

export const Rea_Home_Slider = () => {
  const [sliderValue, setSliderValue] = useState<number>(0);
  return (
    <div className="flex w-full gap-[40px] flex-col items-center justify-center rounded-[25px]  bg-[#F0EBFF]">
      <h2
        className=" py-6 text-center text-xl font-bold xs:text-2xl  sm:py-0 sm:pb-[55px] sm:pt-[60px] sm:text-[32px]    lg:text-start lg:text-[40px]">
        {" "}
        We make it easy for you in just a few steps
      </h2>

      <div className=" relative flex w-full flex-col items-center justify-around  px-6 lg:h-[899px]  lg:flex-row">
        {/* <div className="  hidden transition-all duration-500 lg:basis-1/2 xl:block">
          {sliderValue === 100 && (
            <motion.div
              animate={
                sliderValue === 100 ? { opacity: 1 } : { opacity: 0 }
              }
              transition={{ duration: 2 }}
            >
              <Image

                height={918}
                width={478}
                src={iphone_desktop_1}
                alt="image"
              />
            </motion.div>
          )}
          {sliderValue === 45 && (
            <motion.div
              animate={sliderValue === 45 ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 2 }}
            >
              <Image

                height={918}
                width={478}
                src={iphone_desktop_2}
                alt="image"
              />
            </motion.div>
          )}

          {sliderValue === 0 && (
            <motion.div
              animate={sliderValue === 0 ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 2 }}
            >
              <Image

                height={918}
                width={478}
                src={iphone_desktop_3}
                alt="image"
              />
            </motion.div>
          )}
        </div>
        <div className="  transition-all duration-500 lg:block lg:basis-1/2 xl:hidden">
          {sliderValue === 100 && (
            <motion.div
              animate={
                sliderValue === 100 ? { opacity: 1 } : { opacity: 0 }
              }
              transition={{ duration: 2 }}
            >
              <Image

                height={617}
                width={325}
                src={iphone_tablet_1}
                alt="image"
              />
            </motion.div>
          )}
          {sliderValue === 45 && (
            <motion.div
              animate={sliderValue === 45 ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 2 }}
            >
              <Image

                height={617}
                width={325}
                src={iphone_tablet_2}
                alt="image"
              />
            </motion.div>
          )}

          {sliderValue === 0 && (
            <motion.div
              animate={sliderValue === 0 ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 2 }}
            >
              <Image

                height={617}
                width={325}
                src={iphone_tablet_3}
                alt="image"
              />
            </motion.div>
          )}
        </div> */}

        <div className="absolute hidden h-3/5 w-full lg:block">
          {/*<Slider*/}
          {/*  size="sm"*/}
          {/*  className="mr-16 h-full  "*/}
          {/*  step={1}*/}
          {/*  maxValue={100}*/}
          {/*  value={sliderValue}*/}
          {/*  minValue={0}*/}
          {/*  orientation="vertical"*/}
          {/*  aria-label="slider"*/}
          {/*  defaultValue={0}*/}
          {/*  showOutline*/}
          {/*  classNames={{*/}
          {/*    base: [*/}
          {/*      "rotate-180",*/}
          {/*      "transition-all ring-[#4E23CB]  ease-in",*/}
          {/*    ],*/}
          {/*    filler: ["bg-[#8459FF]", "transition-all  ease-in"],*/}
          {/*    track: ["w-2"],*/}
          {/*  }}*/}
          {/*  renderThumb={(props) => (*/}
          {/*    <div*/}
          {/*      {...props}*/}
          {/*      className="group top-1/2 ml-[4px] cursor-grab rounded-full bg-[#4E23CB] p-3 shadow-medium transition-all ease-in"*/}
          {/*    >*/}
          {/*      <span className="mx-auto block h-4 w-4 rounded-full bg-[#8459FF]  shadow-small transition-transform" />*/}
          {/*    </div>*/}
          {/*  )}*/}
          {/*/>*/}
        </div>

        <div className=" hidden w-full flex-row items-center justify-center gap-2 self-center px-8 py-4 xs:flex-col sm:z-50 sm:flex sm:max-w-2xl    sm:items-start sm:justify-between sm:gap-8 sm:px-0 sm:py-0  lg:h-3/5 lg:max-w-full  lg:basis-1/2  lg:py-12">
          <div className=" xl:w-[90%] self-center  flex w-full items-start justify-start gap-8  ">
            <Button
              onClick={() => {
                setSliderValue(0);
              }}
              className={cn(
                " hover:[#4e23cb] min-w-8 self-start rounded-lg border-[2.8px] border-[#4E23CB] bg-transparent px-2.5 py-1 text-3xl font-semibold text-[#4E23CB]  hover:border-black hover:bg-[#4E23CB]   hover:text-white sm:px-5 sm:py-2",
                sliderValue === 0 &&
                "border-black bg-[#4e23cb] text-white ",
              )}
            >
              1
            </Button>
            <div className=" hidden flex-col gap-4 xs:flex ">
              <h3 className=" text-lg font-bold sm:text-2xl lg:text-[28px]">
                Browse through Rea properties
              </h3>
              <p className=" text-sm sm:text-lg text-[#6d6d6d]">
                Discover high-quality, income-generating properties
                handpicked for you.
              </p>
            </div>
          </div>
          <div className=" xl:w-[90%] self-center flex w-full items-start justify-start gap-8  ">
            <Button
              onClick={() => {
                setSliderValue(45);
              }}
              className={cn(
                " hover:[#4e23cb] min-w-8 self-start rounded-lg border-[2.8px] border-[#4E23CB] bg-transparent px-2 py-1 text-3xl font-semibold text-[#4E23CB]  hover:border-black hover:bg-[#4E23CB]   hover:text-white sm:px-5 sm:py-2",
                sliderValue === 45 &&
                "border-black bg-[#4e23cb] text-white ",
              )}
            >
              2
            </Button>
            <div className=" hidden flex-col gap-4 xs:flex   ">
              <h3 className=" text-lg font-bold sm:text-2xl lg:text-[28px]">
                Buy desired shares of property
              </h3>
              <p className=" text-sm sm:text-lg text-[#6d6d6d]">
                Invest in fractions of properties effortlessly, tailored to
                your budget.
              </p>
            </div>
          </div>
          <div className=" xl:w-[90%] self-center  flex w-full items-start justify-start gap-8  ">
            <Button
              onClick={() => {
                setSliderValue(100);
              }}
              className={cn(
                " self-start min-w-8 rounded-lg border-[2.8px] border-[#4E23CB] bg-transparent px-2 py-1 text-3xl font-semibold text-[#4E23CB]  hover:border-black  hover:bg-[#4e23cb]  hover:text-white sm:px-5 sm:py-2",
                sliderValue === 100 &&
                "border-black bg-[#4e23cb] text-white ",
              )}
            >
              3
            </Button>
            <div className=" hidden flex-col gap-4 xs:flex  ">
              <h3 className=" text-lg font-bold sm:text-2xl lg:text-[28px]">
                Start Earning from the Property
              </h3>
              <p className=" text-sm sm:text-lg text-[#6d6d6d]">
                Sit back and watch your investment grow as you earn passive
                income.
              </p>
            </div>
          </div>
        </div>
        <div className="  py-6 flex sm:hidden items-center justify-center justify-around  w-full">
          <Button
            onClick={() => {
              setSliderValue(0);
            }}
            className={cn(
              " hover:[#4e23cb] min-w-8 text-base xs:text-lg self-start rounded-lg border-[2.8px] border-[#4E23CB] bg-transparent font-semibold text-[#4E23CB]  hover:border-black hover:bg-[#4E23CB]   hover:text-white sm:px-5 sm:py-2",
              sliderValue === 0 &&
              "border-black bg-[#4e23cb] text-white ",
            )}
          >
            1
          </Button>

          <Button
            onClick={() => {
              setSliderValue(45);
            }}
            className={cn(
              " hover:[#4e23cb] min-w-8 text-base xs:text-lg self-start rounded-lg border-[2.8px] border-[#4E23CB] bg-transparent   font-semibold text-[#4E23CB]  hover:border-black hover:bg-[#4E23CB]   hover:text-white sm:px-5 sm:py-2",
              sliderValue === 45 &&
              "border-black bg-[#4e23cb] text-white ",
            )}
          >
            2
          </Button>
          <Button
            onClick={() => {
              setSliderValue(100);
            }}
            className={cn(
              " hover:[#4e23cb] min-w-8 text-base xs:text-lg self-start rounded-lg border-[2.8px] border-[#4E23CB] bg-transparent   font-semibold text-[#4E23CB]  hover:border-black hover:bg-[#4E23CB]   hover:text-white sm:px-5 sm:py-2",
              sliderValue === 100 &&
              "border-black bg-[#4e23cb] text-white ",
            )}
          >
            3
          </Button>
        </div>
        <div
          className=" flex px-[10px] py-8 w-full flex-row items-center justify-between gap-12 self-center sm:px-8 sm:py-8  xs:flex-col     sm:z-50 sm:hidden sm:items-start  sm:px-0 sm:py-0  lg:h-3/5  lg:basis-1/2">
          {sliderValue === 0 && (
            <div className=" flex w-full items-center justify-center  ">
              <div className=" flex-col gap-6 text-center xs:flex ">
                <h3 className=" text-lg font-bold sm:text-2xl lg:text-[28px]">
                  Browse through Rea properties
                </h3>
                <p className=" text-sm sm:text-lg text-[#6d6d6d]">
                  Discover high-quality, income-generating properties
                  handpicked for you.
                </p>
              </div>
            </div>
          )}
          {sliderValue === 45 && (
            <div className=" flex w-full items-center justify-center gap-8 ">
              <div className=" flex-col  gap-6 text-center xs:flex   ">
                <h3 className=" text-lg font-bold sm:text-2xl lg:text-[28px]">
                  Buy desired shares of property
                </h3>
                <p className=" text-sm sm:text-lg text-[#6d6d6d]">
                  Invest in fractions of properties effortlessly, tailored
                  to your budget.
                </p>
              </div>
            </div>
          )}
          {sliderValue === 100 && (
            <div className=" flex w-full items-center justify-center gap-8 ">
              <div className=" flex-col gap-6 text-center xs:flex  ">
                <h3 className=" text-lg font-bold sm:text-2xl lg:text-[28px]">
                  Start Earning from the Property
                </h3>
                <p className=" text-sm sm:text-lg text-[#6d6d6d]">
                  Sit back and watch your investment grow as you earn
                  passive income.
                </p>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};