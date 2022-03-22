import React from "react";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import SummaryItem from "../../Components/SummaryItem/SummaryItem";

function Checkout() {
  return (
    <div className="bg-[#F2F2F2] px-6 md:px-12 xl:px-40">
      <p className="pt-5 pb-5 text-black opacity-50">Go Back</p>
      <div className="pt-3 pb-12 xl:flex xl:gap-4">
        <div className="bg-white px-5 py-4 rounded-md xl:w-8/12">
          <h1 className="uppercase font-bold text-2xl ">Checkout</h1>
          <div className="pt-4">
            <p
              className="uppercase font-bold text-[#D87D4A] pt-3"
              style={{ fontSize: "13px", letterSpacing: "0.928571px" }}
            >
              Billing Details
            </p>
            <Input name="Name" placeholder="Alexei Ward" type="text" />
            <Input
              name="Email Address"
              placeholder="alexei@mail.com"
              type="email"
            />
            <Input
              name="Phone Number"
              placeholder="+1 202-555-0136"
              type="number"
            />
          </div>
          <div className="pt-4">
            <p
              className="uppercase font-bold text-[#D87D4A] pt-3"
              style={{ fontSize: "13px", letterSpacing: "0.928571px" }}
            >
              Shipping info
            </p>
            <Input
              name="Your Address"
              placeholder="1137 Williams Avenue"
              type="text"
            />
            <Input name="ZIP Code" placeholder="10001" type="number" />
            <Input name="City" placeholder="New York" type="text" />
            <Input name="Country" placeholder="United States" type="text" />
          </div>
          <div>
            <p
              className="uppercase font-bold text-[#D87D4A] pt-3 pb-3"
              style={{ fontSize: "12px", letterSpacing: "0.928571px" }}
            >
              Payment Details
            </p>
            <p
              className="font-bold pt-2"
              style={{ fontSize: "13px", letterSpacing: "-0.214286px" }}
            >
              Payment Method
            </p>
            <Input
              name="e-Money Number"
              placeholder="238521993"
              type="number"
            />
            <Input name="e-Money PIN" placeholder="6891" type="number" />
          </div>
        </div>
        <div className="py-6 pb-8 xl:w-4/12 xl:py-0">
          <div className="bg-white px-5 py-4 rounded-md">
            <h1 className="uppercase font-bold text-2xl ">Summary</h1>
            <div className="py-4">
              <SummaryItem />
            </div>
            <div className="flex justify-between items-center py-2">
              <p
                className="uppercase text-black opacity-50"
                style={{ fontSize: "15px" }}
              >
                Total
              </p>
              <p className="uppercase font-bold" style={{ fontSize: "18px" }}>
                $ 5,396
              </p>
            </div>
            <div className="flex justify-between items-center py-2">
              <p
                className="uppercase text-black opacity-50"
                style={{ fontSize: "15px" }}
              >
                SHIPPING
              </p>
              <p className="uppercase font-bold" style={{ fontSize: "18px" }}>
                $ 50
              </p>
            </div>
            <div className="flex justify-between items-center py-2">
              <p
                className="uppercase text-black opacity-50"
                style={{ fontSize: "15px" }}
              >
                VAT (INCLUDED)
              </p>
              <p className="uppercase font-bold" style={{ fontSize: "18px" }}>
                $ 1,079
              </p>
            </div>
            <div className="flex justify-between items-center py-2">
              <p
                className="uppercase text-black opacity-50"
                style={{ fontSize: "15px" }}
              >
                Grand Total
              </p>
              <p
                className="uppercase font-bold text-[#D87D4A]"
                style={{ fontSize: "18px" }}
              >
                $ 5,446
              </p>
            </div>
            <div className="flex justify-center items-center py-5">
              <Button
                bgcolor="#D87D4A"
                color="white"
                name="Continue & Pay"
                width="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
