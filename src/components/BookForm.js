import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from "../api";


export default function BookingForm() {
  let today = new Date();
  let availableTimes = fetchAPI(today);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    date: today,
    timeChoosen: "",
    guests: 1,
    occasion: "",
  });

  const handleDateChange = (e) => {
    let choosenDate = new Date(e.target.value);
    setForm({ ...form, date: choosenDate });
  };

  availableTimes = fetchAPI(form.date);

  const validateForm = () => {
    const { date, timeChoosen, guests } = form;

    if (
      !date ||
      date === "" ||
      !timeChoosen ||
      timeChoosen === "" ||
      guests === 0
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = () => {
    submitAPI(form);
    navigate("/completed", { replace: true });
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form
        style={{
          display: "flex",
          maxWidth: "200px",
          gap: "20px",
          flexDirection: "column",
        }}
      >
        <h2 style={{textAlign:"center"}}>Booking form</h2>
        <label htmlFor="res-date">Choose date</label>
        <input required onChange={handleDateChange} type="date" id="res-date" />
        <label htmlFor="res-time">Choose time</label>
        <select 
          onChange={(e) => setForm({ ...form, timeChoosen: e.target.value })}
          required
          id="res-time "
        >
          {availableTimes.map((time) => (
            <option key={time}>{time}</option>
          ))}
        </select>
         
        <label htmlFor="guests">Number of guests</label>
        <input
          onChange={(e) => setForm({ ...form, guests: e.target.value })}
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          onChange={(e) => setForm({ ...form, occasion: e.target.value })}
          id="occasion"
        >
          <option value="">Not Specified</option>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <button
          disabled={validateForm()}
          onClick={handleSubmit}
          id="subtn"
          type="submit"
        >
          Make Your reservation
        </button>
      </form>
    </div>
  );
}
