"use client";

import { useState } from "react";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";

import "@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function DateUtil() {
  const [value, onChange] = useState<Value>([new Date(), new Date()]);

  return (
    <div>
      <DateRangePicker
        onChange={onChange}
        value={value}
        clearIcon={null}
        calendarIcon={null}
        dayPlaceholder="dd"
        monthPlaceholder="mm"
        yearPlaceholder="yy"
      />
    </div>
  );
}

export default DateUtil;
