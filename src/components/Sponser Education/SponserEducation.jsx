import React from "react";
// import qrCode from "../../assets/Images/QRCode/Qrcode_Jogula_Foundation.jpeg";
import qrCodeNew from "../../assets/Images/QRCode/qrcode Jogula Foundation.jpg";
import "./SponserEducation.css";

const SponserEducation = () => {
  return (
    <div className="sponseredu flex flex-col gap-14">
      {/* Hero Section */}
      <div className="h-40 px-4 md:px-20 flex flex-col justify-center gap-5 items-start bg-slate-950">
        <h1 className="text-white font-bold text-3xl">SPONSER EDUCATION</h1>
        <button className="bg-white py-2 px-5">Donate Now</button>
      </div>

      {/* Main Content */}
      <div className="sponserMain flex flex-col items-center px-4">
        <div className="sponserChild flex flex-col lg:flex-row border w-full lg:w-[80%] gap-4">
          {/* Requirements Table */}
          <div className="table1 w-full lg:w-[70%] border border-black">
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <th className="uppercase text-left px-4 py-2 border-b border-black">
                    REQUIREMENTS OF CHILDREN
                  </th>
                </tr>
              </thead>
              <tbody className="border-t border-black">
                <tr className="border-b">
                  <td className="px-4 py-2 border-r border-black">
                    1. School Bags
                  </td>
                  <td className="px-4 py-2">11. Playthings*</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 border-r border-black">
                    2. Shoes, Socks, Slippers
                  </td>
                  <td className="px-4 py-2">12. General Knowledge Book</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 border-r border-black">
                    3. Note Books
                  </td>
                  <td className="px-4 py-2">13. Drawing Books</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 border-r border-black">
                    4. Geometry Box
                  </td>
                  <td className="px-4 py-2">14. Colour Pencils (Crayons)</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 border-r border-black">
                    5. Stationeries
                  </td>
                  <td className="px-4 py-2">15. Pencils & Rubbers</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 border-r border-black">
                    6. Uniforms
                  </td>
                  <td className="px-4 py-2">16. Pens</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 border-r border-black">
                    7. Plates & Glass
                  </td>
                  <td className="px-4 py-2">17. Tables Books</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 border-r border-black">
                    8. Blankets & Sweaters
                  </td>
                  <td className="px-4 py-2">18. Towels & Handkerchiefs</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 border-r border-black">9. Mat</td>
                  <td className="px-4 py-2">19. Mosquito Net</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 border-r border-black">
                    10. Computer & Tables
                  </td>
                  <td className="px-4 py-2">20. Chairs</td>
                </tr>
              </tbody>
            </table>
            <p className="text-sm px-4 py-2 border-t border-black">
              * (Bat & Ball, Volleyball, Carom Board, Badminton set, Chess
              Board, Skipping)
            </p>
          </div>

          {/* QR Code Section */}
          <div className="qrcode w-full lg:w-[30%] border shadow-xl border-black p-4">
            <p className="text-2xl text-justify mb-4">
              Fund a child’s education for one full year. Help them with
              opportunity to gain knowledge and skills that will benefit them
              for the rest of their lives
            </p>
            <img src={qrCodeNew} alt="QR Code" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponserEducation;
