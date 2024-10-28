import AddressCard from "./components/AddressCard";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col 
                    items-center justify-center
                    p-24 gap-4 w-fit h-fit 
                    transition-all duration-500">
       <AddressCard/>
       <AddressCard/>
       <AddressCard/>
    </div>
  );
}
