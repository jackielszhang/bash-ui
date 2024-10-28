"use client";
import { Clock, Lightning, MapPin, Phone } from "@phosphor-icons/react/dist/ssr";
import { useState } from 'react';


export default function AddressCard() {

    const [isVisible, setIsVisible] = useState(false); // State to manage visibility


    const toggleVisibility = () => {
        setIsVisible(!isVisible); // Toggle function
    };


  return (
    //Main container
    <div onClick={toggleVisibility}
        className="flex flex-col gap-1 self-stretch 
                    w-[343px] relative
                    bg-background-primary 
                    px-4 pt-4 pb-3
                    rounded-lg border border-border-secondary
                    hover:border-border-tertiary hover:cursor-pointer transition duration-150 "
        >

        {/*Heading and address*/}
        <div className="flex flex-col gap-1 self-stretch">
            <span className="font-semibold text-lg leading-[18px] text-content.primary">Markham Victoria Wharf</span>
            <span className="font-normal text-sm leading-[18px] text-content.secondary">Cnr Adderley &amp; Strand Streets, Golden Acre Shopping Centre, Cape Town, 8001</span>
        </div>

        {/*Location tag*/}
        <div className="flex items-center gap-2 self-stretch">
            <div className="flex items-center gap-2 grow rounded-sm">
                <div className="flex items-center gap-1">
                <div className="w-[18px] h-[18px]">
                     <MapPin size={18} />
                </div>
                    <span className="font-bold text-sm leading-[14px] text-center text-content-secondary">10 km</span>
                </div>
            </div>

            <div className="flex justify-center items-center gap-2.5">
                <span className="font-normal text-sm leading-[18px] text-right underline text-content.primary">Store details</span>
            </div>
        </div>

        {/*Tag*/}
        <div className="flex flex-col w-fit absolute top-[-4px] right-[-4px]">
            <div className="flex flex-col justify-end">
                <div className="flex justify-center items-center gap-1 bg-background-accent px-1.5 py-1 rounded-sm">
                <div className="w-[9px] h-[9px]">
                    <Lightning size={9} className="text-white"/>
                </div>
                <span className="font-semibold text-xxsm leading-[10px] text-white">FASTEST</span>
                </div>
            </div>
        </div>


        {/*extension*/}
        <div className={`overflow-show transition-all duration-500 ease-in-out
                ${isVisible ? 'max-h-[500px]' : 'max-h-0'}`}>
            
            {/* Only render content if not transitioning */}
            {isVisible && ( 
                <div className="flex flex-col gap-4 self-stretch pt-3.5">
                    <div className="w-full h-10 flex items-end gap-2">

                        {/*Direction Btn*/}
                        <button className="flex">
                            <div className="h-10 flex justify-center items-center gap-2 bg-button-bg-grey px-6 rounded-[40px]"> 
                                <div>
                                    <MapPin size={24} weight="fill"/>
                                </div>
                                <span className="font-bold text-lg text-onyx-Black">Directions</span> 
                            </div>
                        </button>

                        <div className="flex">
                            <div className="h-10 flex justify-center items-center gap-2 bg-button-bg-grey px-6 rounded-[40px]"> {/* Updated to use button-bg.grey */}
                                <div className="">
                                <Phone size={24} weight="fill"/>
                                </div>
                                <span className="font-semibold text-lg leading-[18px] text-onyx.Black">Call</span> {/* Updated font size */}
                            </div>
                        </div>

                    </div>

                    <div className="gap-2">
                        {/*Phone number*/}
                        <div className="w-full h-fit flex items-center gap-2">
                            <div className="flex flex-col bg-button-bg-grey p-2 rounded-full"> 
                                <div>
                                    <Phone size={24} weight="light"/>
                                </div>
                            </div>
                            <div className="flex flex-col flex-grow justify-center self-stretch">
                                <span className="font-bold text-base leading-[16px] text-onyx.Black">Phone</span>
                                <span className="font-normal text-base text-onyx.Black">021 417 4603</span> 
                            </div>
                        </div>

                        {/*Divider line*/}
                        <div className="h-px w-full bg-onyx-100 my-4"></div> 

                        {/*Operating times*/}
                        <div className="w-full h-fit items-start flex gap-2">
                            <div className="flex flex-col align bg-button-bg-grey p-2 rounded-full"> 
                                <div>
                                    <Clock size={24} />
                                </div>
                            </div>
                            <div className="flex items-start grow text-base">
                                <div className="flex flex-col items-start gap-2 grow">
                                    <span className="font-semibold text-onyx.Black">Operating times</span> 

                                    <div className="flex flex-col gap-0.5">
                                        <OperatingHours day="Monday" hours="8:30 AM – 7:00 PM" />
                                        <OperatingHours day="Tuesday" hours="8:30 AM – 7:00 PM" />
                                        <OperatingHours day="Wednesday" hours="8:30 AM – 7:00 PM" />
                                        <OperatingHours day="Thursday" hours="8:30 AM – 7:00 PM" />
                                        <OperatingHours day="Friday" hours="8:30 AM – 7:00 PM" />
                                        <OperatingHours day="Saturday" hours="8:30 AM – 7:00 PM" />
                                        <OperatingHours day="Sunday" hours="8:30 AM – 7:00 PM" />
                                    </div>
                                    <span className="font-normal text-onyx-400">Public holidays might affect hours.</span> 
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className="flex w-full p-5 bg-content-primary text-button-text-primary rounded-md
                        text-base font-bold items-center justify-center 
                        hover:outline hover:outline-4 hover:outline-[rgba(0,0,0,0.25)]
                        transition-all"> 
                        Collect from this store
                    </button>

                </div>
            )}
        </div>

        
  </div>
  );
}

const OperatingHours = (props: { day: string; hours: string }) => { 
    return (
        <div className="flex items-start gap-6">
            <span className="w-[90px] font-normal text-onyx.Black">{props.day}</span> {/* Accessing day directly */}
            <span className="font-normal text-onyx.Black">{props.hours}</span> {/* Accessing hours directly */}
        </div>
    );
};