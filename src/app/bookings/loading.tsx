import {
  SkeletonBookingItem,
  SkeletonCalendarContainer,
} from "@/components/loaders/Loader";

export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center ml-32">
      <header className="flex p-5 justify-between space-x-3 items-center text-center w-full h-min">
        <div className="animate-pulse bg-gray-100 h-7 w-44 rounded-md" />
        <div className="animate-pulse bg-gray-100 h-7 w-40 rounded-md" />
      </header>

      <div className="overflow-y-scroll bg-white border shadow-md border-gray-100 p-4 rounded-lg mt-6 text-black flex flex-col w-238 h-150">
        <SkeletonBookingItem />
        <SkeletonBookingItem />
        <SkeletonBookingItem />
        <SkeletonBookingItem />
      </div>

      <SkeletonCalendarContainer />
    </div>
  );
}
