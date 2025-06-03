import React, { useState } from 'react';

function VillaBookingForm() {
  const [bookingData, setBookingData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    areaCode: '',
    phone: '',
    nights: '',
    checkIn: { day: '', month: '', year: '' },
    checkOut: { day: '', month: '', year: '' },
    rooms: '',
    adults: '',
    children: '',
    specialRequest: '',
    acceptConditions: false,
  });

  const [total, setTotal] = useState(0);

  const roomPrices = {
    'Room 1': 100,
    'Room 2': 100,
    'Room 3': 150,
    'Room 5': 150,
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === 'acceptConditions') {
      setBookingData({ ...bookingData, [name]: checked });
    } else {
      setBookingData({ ...bookingData, [name]: value });
    }

    if (name === 'rooms') {
      setTotal(roomPrices[value] || 0);
    }
  };

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const years = [2024, 2025, 2026];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-md my-10">
      <h2 className="text-3xl font-bold text-center mb-4">Villa Booking</h2>
      <p className="text-center text-gray-600 mb-8">Reserve your dates today</p>

      <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label className="block font-semibold">First Name</label>
          <input type="text" name="firstName" onChange={handleChange} className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block font-semibold">Last Name</label>
          <input type="text" name="lastName" onChange={handleChange} className="w-full p-2 border rounded" />
        </div>

        {/* Email */}
        <div className="sm:col-span-2">
          <label className="block font-semibold">E-mail</label>
          <input type="email" name="email" placeholder="ex: myname@example.com" onChange={handleChange} className="w-full p-2 border rounded" />
        </div>

        {/* Address */}
        <div className="sm:col-span-2">
          <label className="block font-semibold">Street Address</label>
          <input type="text" name="address1" onChange={handleChange} className="w-full p-2 border rounded mb-2" />
          <input type="text" name="address2" placeholder="Street Address Line 2" onChange={handleChange} className="w-full p-2 border rounded" />
        </div>

        <div>
          <label className="block font-semibold">City</label>
          <input type="text" name="city" onChange={handleChange} className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block font-semibold">State / Province</label>
          <input type="text" name="state" onChange={handleChange} className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block font-semibold">Postal / Zip Code</label>
          <input type="text" name="zip" onChange={handleChange} className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block font-semibold">Country</label>
          <input type="text" name="country" onChange={handleChange} className="w-full p-2 border rounded" />
        </div>

        {/* Phone */}
        <div>
          <label className="block font-semibold">Area Code</label>
          <input type="text" name="areaCode" onChange={handleChange} className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block font-semibold">Phone Number</label>
          <input type="text" name="phone" onChange={handleChange} className="w-full p-2 border rounded" />
        </div>

        {/* Nights */}
        <div className="sm:col-span-2">
          <label className="block font-semibold">No. of Nights</label>
          <input type="number" name="nights" onChange={handleChange} className="w-full p-2 border rounded" />
        </div>

        {/* Dates */}
        <div>
          <label className="block font-semibold">Check In</label>
          <div className="flex gap-2">
            <select name="checkInDay" className="p-2 border rounded w-1/3">
              {days.map((d) => <option key={d}>{d}</option>)}
            </select>
            <select name="checkInMonth" className="p-2 border rounded w-1/3">
              {months.map((m) => <option key={m}>{m}</option>)}
            </select>
            <select name="checkInYear" className="p-2 border rounded w-1/3">
              {years.map((y) => <option key={y}>{y}</option>)}
            </select>
          </div>
        </div>
        <div>
          <label className="block font-semibold">Check Out</label>
          <div className="flex gap-2">
            <select name="checkOutDay" className="p-2 border rounded w-1/3">
              {days.map((d) => <option key={d}>{d}</option>)}
            </select>
            <select name="checkOutMonth" className="p-2 border rounded w-1/3">
              {months.map((m) => <option key={m}>{m}</option>)}
            </select>
            <select name="checkOutYear" className="p-2 border rounded w-1/3">
              {years.map((y) => <option key={y}>{y}</option>)}
            </select>
          </div>
        </div>
        <div className="sm:col-span-2 bg-gray-100 p-4 rounded">
  <p className="font-semibold mb-2">Room Pricing:</p>
  <ul className="text-sm text-gray-700 list-disc ml-5">
    <li>Room 1 – $100.00</li>
    <li>Room 2 – $100.00</li>
    <li>Room 3 – $150.00</li>
    <li>Room 5 – $150.00</li>
  </ul>
</div>

        {/* Rooms */}
        <div>
          <label className="block font-semibold">Room</label>
          <select name="rooms" onChange={handleChange} className="w-full p-2 border rounded">
            <option>Please Select</option>
            <option>Room 1</option>
            <option>Room 2</option>
            <option>Room 3</option>
            <option>Room 5</option>
          </select>
        </div>
        <div>
          <label className="block font-semibold">Adults</label>
          <select name="adults" onChange={handleChange} className="w-full p-2 border rounded">
            <option>Please Select</option>
            {[...Array(6)].map((_, i) => <option key={i}>{i + 1}</option>)}
          </select>
        </div>
        <div>
          <label className="block font-semibold">Children</label>
          <select name="children" onChange={handleChange} className="w-full p-2 border rounded">
            <option>Please Select</option>
            {[...Array(6)].map((_, i) => <option key={i}>{i}</option>)}
          </select>
        </div>

        {/* Conditions */}
        <div className="sm:col-span-2 flex items-center gap-2">
          <input type="checkbox" name="acceptConditions" onChange={handleChange} />
          <label className="text-sm text-gray-700">I have read and accept the booking conditions</label>
        </div>

        {/* Special Requests */}
        <div className="sm:col-span-2">
          <label className="block font-semibold">Special Requests</label>
          <textarea name="specialRequest" rows="3" onChange={handleChange} className="w-full p-2 border rounded"></textarea>
        </div>

        {/* Total + Submit */}
        <div className="sm:col-span-2 text-right">
          <p className="text-xl font-bold mb-4">Total: ${total}.00</p>
          <button type="submit" className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default VillaBookingForm;
