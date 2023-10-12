import {
  Box,
  Grid,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import Image from "next/image";
import React from "react";

function Header() {
  return (
    <header>
      <Grid container spacing={1}>
        <Grid item md xs={12}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", sm: "center", md: "flex-start" },
            }}
          >
            <Image
              src="https://cdn.icon-icons.com/icons2/3041/PNG/512/trello_logo_icon_189227.png"
              alt="logo"
              width={40}
              height={40}
            />
            <Typography sx={{ fontWeight: "bold", fontSize: "24px" }}>
              Trello
            </Typography>
          </Box>
        </Grid>
        <Grid item md={3} xs={12}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center" },
            }}
          >
            <TextField
              label="Search"
              id="outlined-start-adornment"
              sx={{ m: 1, width: "20ch" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
            />
            <Image
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              alt="user"
              width={40}
              height={40}
            />
          </Box>
        </Grid>
      </Grid>
    </header>
  );
}

export default Header;
