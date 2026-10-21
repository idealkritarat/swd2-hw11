"use client";

import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

export default function DateReserve() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="grid gap-6 sm:grid-cols-2">
        <DatePicker
          label="Reservation Date"
          slotProps={{ textField: { fullWidth: true, variant: "standard" } }}
        />
        <TextField
          fullWidth
          label="Name-Lastname"
          name="Name-Lastname"
          variant="standard"
        />
        <TextField
          fullWidth
          label="Contact-Number"
          name="Contact-Number"
          type="tel"
          variant="standard"
        />
        <FormControl fullWidth variant="standard">
          <InputLabel id="venue-label">Venue</InputLabel>
          <Select id="venue" labelId="venue-label" defaultValue="">
            <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
            <MenuItem value="Spark">Spark Space</MenuItem>
            <MenuItem value="GrandTable">The Grand Table</MenuItem>
          </Select>
        </FormControl>
      </div>
    </LocalizationProvider>
  );
}
