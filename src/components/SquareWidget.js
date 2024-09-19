import React from 'react';

const SquareWidget = ({ onClose }) => {
  const openBookingWidget = () => {
    const bookingUrl = 'https://square.site/appointments/buyer/widget/v9kqy1po23009t/LRYCBHBPJ8CYC';
    window.open(bookingUrl, '_blank');
  };

  return (
    <div className="bg-white p-6 rounded-lg relative">
      <button 
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-3xl font-light"
      >
        &times;
      </button>
      <h2 className="text-2xl font-bold mb-4 text-center pt-6">Book Appointment</h2>
      <p className="mb-4 text-gray-600 dark:text-gray-300 text-center">
        You will be directed to the Square Booking page. Please select the plan and date you wish to book.
      </p>
      <div className="flex justify-center">
        <button
          onClick={openBookingWidget}
          className= "bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-8 rounded-full font-semibold ">
          Open Booking Tab
        </button>
      </div>
    </div>
  );
};

export default SquareWidget;