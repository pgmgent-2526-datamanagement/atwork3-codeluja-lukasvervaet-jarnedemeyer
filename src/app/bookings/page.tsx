"use server";
import AddBookingButton from "@/components/AddBookingButton";

export default async function Bookings() {
  const bookings = true;
  return (
    <div>
      <header className="flex flex-col p-5 justify-between space-y-3">
        <h1 className="mt-3 text-2xl font-semibold flex justify-center items-center underline -underline-offset-[-3px] saira-font">
          Your Bookings
        </h1>
        <p className="bg-gray-200 items-center text-sm p-1 rounded-md shadow-md flex m-auto w-max text-slate-800">
          Bekijk en beheer uw boekingen
        </p>
      </header>
      <AddBookingButton />

      {/*  */}
      <div className="overflow-y-scroll bg-white border shadow-md border-gray-100 p-4 rounded-lg  mt-6 text-black flex flex-col flex-row-2  m-auto w-312 h-128">
        {bookings ? (
          <div>
            <div className="flex flex-col w-full justify-start border border-gray-100 p-4 rounded-md space-y-2 shadow-sm mt-2">
              <div className="flex justify-between items-center w-full">
                <h2 className="text-xl font-semibold">Jarne De Meyer</h2>
                <select
                  name="status"
                  id="status"
                  className="border border-gray-300 rounded-md p-2 h-10 w-40"
                >
                  <option value="completed">Completed</option>
                  <option value="pending">Pending</option>
                  <option value="canceled">Canceled</option>
                </select>
              </div>

              <div className="flex justify-between w-[50%] text-gray-500">
                <p>email@example.com</p>
                <p>04/12/2025</p>
                <p>14:00 - 15:00</p>
              </div>

              <div>
                <p>
                  <span className="font-bold">Service: </span>VR ROOM
                </p>
              </div>
            </div>
            <div className="flex flex-col w-full justify-start border border-gray-100 p-4 rounded-md space-y-2 shadow-sm mt-2">
              <div className="flex justify-between items-center w-full">
                <h2 className="text-xl font-semibold">Jarne De Meyer</h2>
                <select
                  name="status"
                  id="status"
                  className="border border-gray-300 rounded-md p-2 h-10 w-40"
                >
                  <option value="completed">Completed</option>
                  <option value="pending">Pending</option>
                  <option value="canceled">Canceled</option>
                </select>
              </div>

              <div className="flex justify-between w-[50%] text-gray-500">
                <p>email@example.com</p>
                <p>04/12/2025</p>
                <p>14:00 - 15:00</p>
              </div>

              <div>
                <p>
                  <span className="font-bold">Service: </span>VR ROOM
                </p>
              </div>
            </div>
            <div className="flex flex-col w-full justify-start border border-gray-100 p-4 rounded-md space-y-2 shadow-sm mt-2">
              <div className="flex justify-between items-center w-full">
                <h2 className="text-xl font-semibold">Jarne De Meyer</h2>
                <select
                  name="status"
                  id="status"
                  className="border border-gray-300 rounded-md p-2 h-10 w-40"
                >
                  <option value="completed">Completed</option>
                  <option value="pending">Pending</option>
                  <option value="canceled">Canceled</option>
                </select>
              </div>

              <div className="flex justify-between w-[50%] text-gray-500">
                <p>email@example.com</p>
                <p>04/12/2025</p>
                <p>14:00 - 15:00</p>
              </div>

              <div>
                <p>
                  <span className="font-bold">Service: </span>VR ROOM
                </p>
              </div>
            </div>
            <div className="flex flex-col w-full justify-start border border-gray-100 p-4 rounded-md space-y-2 shadow-sm mt-2">
              <div className="flex justify-between items-center w-full">
                <h2 className="text-xl font-semibold">Jarne De Meyer</h2>
                <select
                  name="status"
                  id="status"
                  className="border border-gray-300 rounded-md p-2 h-10 w-40"
                >
                  <option value="completed">Completed</option>
                  <option value="pending">Pending</option>
                  <option value="canceled">Canceled</option>
                </select>
              </div>

              <div className="flex justify-between w-[50%] text-gray-500">
                <p>email@example.com</p>
                <p>04/12/2025</p>
                <p>14:00 - 15:00</p>
              </div>

              <div>
                <p>
                  <span className="font-bold">Service: </span>VR ROOM
                </p>
              </div>
            </div>
            <div className="flex flex-col w-full justify-start border border-gray-100 p-4 rounded-md space-y-2 shadow-sm mt-2">
              <div className="flex justify-between items-center w-full">
                <h2 className="text-xl font-semibold">Jarne De Meyer</h2>
                <select
                  name="status"
                  id="status"
                  className="border border-gray-300 rounded-md p-2 h-10 w-40"
                >
                  <option value="completed">Completed</option>
                  <option value="pending">Pending</option>
                  <option value="canceled">Canceled</option>
                </select>
              </div>

              <div className="flex justify-between w-[50%] text-gray-500">
                <p>email@example.com</p>
                <p>04/12/2025</p>
                <p>14:00 - 15:00</p>
              </div>

              <div>
                <p>
                  <span className="font-bold">Service: </span>VR ROOM
                </p>
              </div>
            </div>
            <div className="flex flex-col w-full justify-start border border-gray-100 p-4 rounded-md space-y-2 shadow-sm mt-2">
              <div className="flex justify-between items-center w-full">
                <h2 className="text-xl font-semibold">Jarne De Meyer</h2>
                <select
                  name="status"
                  id="status"
                  className="border border-gray-300 rounded-md p-2 h-10 w-40"
                >
                  <option value="completed">Completed</option>
                  <option value="pending">Pending</option>
                  <option value="canceled">Canceled</option>
                </select>
              </div>

              <div className="flex justify-between w-[50%] text-gray-500">
                <p>email@example.com</p>
                <p>04/12/2025</p>
                <p>14:00 - 15:00</p>
              </div>

              <div>
                <p>
                  <span className="font-bold">Service: </span>VR ROOM
                </p>
              </div>
            </div>
            <div className="flex flex-col w-full justify-start border border-gray-100 p-4 rounded-md space-y-2 shadow-sm mt-2">
              <div className="flex justify-between items-center w-full">
                <h2 className="text-xl font-semibold">Jarne De Meyer</h2>
                <select
                  name="status"
                  id="status"
                  className="border border-gray-300 rounded-md p-2 h-10 w-40"
                >
                  <option value="completed">Completed</option>
                  <option value="pending">Pending</option>
                  <option value="canceled">Canceled</option>
                </select>
              </div>

              <div className="flex justify-between w-[50%] text-gray-500">
                <p>email@example.com</p>
                <p>04/12/2025</p>
                <p>14:00 - 15:00</p>
              </div>

              <div>
                <p>
                  <span className="font-bold">Service: </span>VR ROOM
                </p>
              </div>
            </div>
            <div className="flex flex-col w-full justify-start border border-gray-100 p-4 rounded-md space-y-2 shadow-sm mt-2">
              <div className="flex justify-between items-center w-full">
                <h2 className="text-xl font-semibold">Jarne De Meyer</h2>
                <select
                  name="status"
                  id="status"
                  className="border border-gray-300 rounded-md p-2 h-10 w-40"
                >
                  <option value="completed">Completed</option>
                  <option value="pending">Pending</option>
                  <option value="canceled">Canceled</option>
                </select>
              </div>

              <div className="flex justify-between w-[50%] text-gray-500">
                <p>email@example.com</p>
                <p>04/12/2025</p>
                <p>14:00 - 15:00</p>
              </div>

              <div>
                <p>
                  <span className="font-bold">Service: </span>VR ROOM
                </p>
              </div>
            </div>
          </div>
        ) : (
          <p>No bookings available.</p>
        )}
      </div>
    </div>
  );
}
