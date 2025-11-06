import React from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Slider,
} from "@mui/material";

function Filter() {
  return (
    <Box
      sx={{
        position: "absolute", // 🔥 Sayfa içeriğini itmeden üstte gösterir
        top: "220px", // butonun biraz altına
        left: "0",
        zIndex: 1000, // her şeyin üstünde olsun
        p: 3,
        borderRadius: "12px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
        backgroundColor: "#fff",
        width: "320px",
        animation: "slideDown 0.3s ease-in-out",
      }}
    >
      <Typography variant="h6" sx={{ mb: 2, fontWeight: "600" }}>
        Filtre Seçenekleri
      </Typography>

      {/* Cinsiyet */}
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Cinsiyet</InputLabel>
        <Select defaultValue="">
          <MenuItem value="erkek">Erkek</MenuItem>
          <MenuItem value="kadin">Kadın</MenuItem>
          <MenuItem value="unisex">Unisex</MenuItem>
        </Select>
      </FormControl>

      {/* Fiyat */}
      <Typography gutterBottom>Fiyat Aralığı (₺)</Typography>
      <Slider
        defaultValue={[100, 500]}
        valueLabelDisplay="auto"
        min={0}
        max={1000}
        sx={{ mb: 3 }}
      />

      {/* İndirim */}
      <Typography gutterBottom>İndirim Oranı (%)</Typography>
      <Slider
        defaultValue={[10, 50]}
        valueLabelDisplay="auto"
        min={0}
        max={80}
        sx={{ mb: 3 }}
      />

      {/* Marka */}
      <FormControl fullWidth sx={{ mb: 1 }}>
        <InputLabel>Marka</InputLabel>
        <Select defaultValue="">
          <MenuItem value="amazon">Amazon</MenuItem>
          <MenuItem value="hepsiburada">HepsiBurada</MenuItem>
          <MenuItem value="trendyol">Trendyol</MenuItem>
        </Select>
      </FormControl>
      <Button>Filtrele</Button>
    </Box>
  );
}

export default Filter;
