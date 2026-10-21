"use client";

import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Dayjs } from "dayjs";

type DateReserveProps = {
  nameLastname: string;
  tel: string;
  venue: string;
  bookDate: Dayjs | null;
  onNameChange: (value: string) => void;
  onTelChange: (value: string) => void;
  onVenueChange: (value: string) => void;
  onDateChange: (value: Dayjs | null) => void;
};

export default function DateReserve({
  nameLastname,
  tel,
  venue,
  bookDate,
  onNameChange,
  onTelChange,
  onVenueChange,
  onDateChange,
}: DateReserveProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="grid gap-6 sm:grid-cols-2">
        <DatePicker
          label="Reservation Date"
          value={bookDate}
          onChange={(value) => onDateChange(value)}
          slotProps={{ textField: { fullWidth: true, variant: "standard" } }}
        />
        <TextField
          fullWidth
          label="Name-Lastname"
          name="Name-Lastname"
          variant="standard"
          value={nameLastname}
          onChange={(e) => onNameChange(e.target.value)}
        />
        <TextField
          fullWidth
          label="Contact-Number"
          name="Contact-Number"
          type="tel"
          variant="standard"
          value={tel}
          onChange={(e) => onTelChange(e.target.value)}
        />
        <FormControl fullWidth variant="standard">
          <InputLabel id="venue-label">Venue</InputLabel>
          <Select id="venue" labelId="venue-label" value={venue} onChange={(e) => onVenueChange(e.target.value)}>
            <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
            <MenuItem value="Spark">Spark Space</MenuItem>
            <MenuItem value="GrandTable">The Grand Table</MenuItem>
          </Select>
        </FormControl>
      </div>
    </LocalizationProvider>
  );
}
