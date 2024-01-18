"use client"
import { Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export const CustomMenu = () => {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const [selected, setSelected] = useState('Chandigarh')

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleItem = (value: string) => {
        setSelected(value);
        handleClose();
    }

  
    return (
      <div className="w-full relative mt-8">
        <span
          className="w-full flex justify-between border-b border-b-slate-400 pb-1"
          onClick={handleClick}
        >
          <p className="absolute -top-6 left-0 text-xs text-gray-400">State where property is located</p>
          {selected}
          <IoIosArrowDown />
        </span>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          sx={{
            ".MuiList-root": {
              background: "white",
              minWidth: "100%",
            },
          }}
          MenuListProps={{
            sx: { width: anchorEl && anchorEl.offsetWidth },
          }}
        >
          <MenuItem onClick={() => handleItem("Chandigarh")}>Chandigarh</MenuItem>
          <MenuItem onClick={() => handleItem("Chattisgarh")}>Chattisgarh</MenuItem>
          <MenuItem onClick={() => handleItem("Delhi")}>Delhi</MenuItem>
          <MenuItem onClick={() => handleItem("Haryana")}>Haryana</MenuItem>
          <MenuItem onClick={() => handleItem("Jharkhand")}>Jharkhand</MenuItem>
          <MenuItem onClick={() => handleItem("Karnataka")}>Karnataka</MenuItem>
          <MenuItem onClick={() => handleItem("Madhya")}>Madhya Pardesh</MenuItem>
        </Menu>
      </div>
    );
  }