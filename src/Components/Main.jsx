import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Fab, IconButton, Typography } from "@mui/material";
//import React from "react";


const AndroidCompact = () => {
  return (
    <Box display="flex" justifyContent="center" width="100%" bgcolor="white">
      <Box width={412} height={917} position="relative" bgcolor="white">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          p={4}
          position="absolute"
          top={64}
          left={0}
          bgcolor="rgba(0, 0, 0, 0.0)"
          width={120}
        >
          <Typography variant="h6" fontWeight={500} color="textPrimary" noWrap>
            Заказы
          </Typography>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          position="absolute"
          top={0}
          left={0}
          width={412}
          bgcolor="rgba(0, 0, 0, 0.0)"
        >
          <Box
            display="flex"
            flexDirection="column"
            width="100%"
            bgcolor="white"
          >
            <Box display="flex" alignItems="center" px={6} py={0} width="100%">
              <Box
                display="flex"
                alignItems="center"
                gap={4}
                flexGrow={1}
                minHeight={64}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  p={2}
                  bgcolor="#bbdefb"
                  borderRadius="50%"
                  overflow="hidden"
                  flexGrow={1}
                >
                  <SearchIcon />
                </Box>
              </Box>
              <Box display="flex" alignItems="center">
                <IconButton>
                  <DeleteIcon />
                </IconButton>
                <IconButton>
                  <FilterListIcon />
                </IconButton>
                <IconButton>
                  <AccountCircleIcon />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>
        <Fab
          color="primary"
          aria-label="add"
          position="absolute"
          top={847}
          left={256}
          sx={{ boxShadow: 6 }}
        >
          <AddIcon />
          <Typography variant="button" fontWeight={500} color="white" ml={1}>
            СОЗДАТЬ
          </Typography>
        </Fab>
      </Box>
    </Box>
  );
};
export default AndroidCompact;
