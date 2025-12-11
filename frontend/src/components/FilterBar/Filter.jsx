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

function Filter({ value, onChange, onApply, priceRange, discountRange, categories = [], sites = [] }) {
  const local = value || { category: '', site: '', price: priceRange || [0, 0], discount: discountRange || [0, 0] };
  const setField = (key, val) => onChange && onChange({ ...local, [key]: val });

  return (
    <Box
      sx={{
        position: "absolute",
        top: "220px",
        left: "0",
        zIndex: 1000,
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

      {/* Kategori */}
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Kategori</InputLabel>
        <Select value={local.category} label="Kategori" onChange={(e) => setField('category', e.target.value)}>
          <MenuItem value="">Tümü</MenuItem>
          {categories.map((c) => (
            <MenuItem key={c} value={c}>{c}</MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Fiyat */}
      <Typography gutterBottom>Fiyat Aralığı (₺)</Typography>
      <Slider
        value={local.price || priceRange}
        valueLabelDisplay="auto"
        min={(priceRange && priceRange[0]) || 0}
        max={(priceRange && priceRange[1]) || 0}
        onChange={(_, val) => setField('price', val)}
        sx={{ mb: 3 }}
      />

      {/* İndirim */}
      <Typography gutterBottom>İndirim Oranı (%)</Typography>
      <Slider
        value={local.discount || discountRange}
        valueLabelDisplay="auto"
        min={(discountRange && discountRange[0]) || 0}
        max={(discountRange && discountRange[1]) || 0}
        onChange={(_, val) => setField('discount', val)}
        sx={{ mb: 3 }}
      />

      {/* Site */}
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Site</InputLabel>
        <Select value={local.site} label="Site" onChange={(e) => setField('site', e.target.value)}>
          <MenuItem value="">Tümü</MenuItem>
          {sites.map((s) => (
            <MenuItem key={s} value={s}>{s}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <Button variant="contained" onClick={onApply} sx={{ width: '100%', mt: 1 }}>Filtrele</Button>
    </Box>
  );
}

export default Filter;
