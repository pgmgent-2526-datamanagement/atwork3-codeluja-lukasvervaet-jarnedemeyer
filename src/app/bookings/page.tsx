export default function Bookings() {
  return (
    <div>
      <h1>Your Bookings</h1>
      <p>Bekijk en beheer uw boekingen</p>

      <div className="overflow-x-auto bg-white p-4 rounded-lg shadow-md mt-6 text-black flex flex-col justify-center items-center m-auto w-6xl">
        {/* Hier zou je een lijst van boekingen kunnen weergeven */}
        <table className="border-separate border-spacing-2 border border-gray-400 dark:border-gray-500 table-auto w-full max-w-7xl">
          <thead>
            <tr>
              <th className="border border-black">Booking Name</th>
              <th className="border border-black">Experience</th>
              <th className="border border-black">Date</th>
              <th className="border border-black">Start uur</th>
              <th className="border border-black">Eind uur</th>
              <th className="border border-black">Spelers</th>
              <th className="border border-black">Nodig Personeel</th>
              <th className="border border-black">B2B</th>
              <th className="border border-black">Food</th>
              <th className="border border-black">Hosts</th>
              <th className="border border-black">Opmerkingen</th>
            </tr>
          </thead>
          <tbody className="text-center ">
            <tr>
              <td className="border-x border-black px-2">John Doe</td>
              <td className="border-x border-black px-2">Escape Room</td>
              <td className="border-x border-black px-2">2024-07-15</td>
              <td className="border-x border-black px-2">14:00</td>
              <td className="border-x border-black px-2">15:00</td>
              <td className="border-x border-black px-2">4</td>
              <td className="border-x border-black px-2">2</td>
              <td className="border-x border-black px-2">Ja</td>
              <td className="border-x border-black px-2">Vegetarisch</td>
              <td className="border-x border-black px-2">
                Anna, Mark, mauro, kevin
              </td>
              <td className="border-x border-black">Geen opmerkingen</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
