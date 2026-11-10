// src/BadgeSkill.jsx
import React from "react";

function BadgeSkill({ namaSkill, level }) {
  // Menentukan warna latar belakang dan teks secara dinamis berdasarkan level
  let bgColor = "#E1E4E8";
  let textColor = "#333333";

  if (level === "Pemula") {
    bgColor = "#FFF3CD";
    textColor = "#856404";
  } else if (level === "Menengah") {
    bgColor = "#CCE5FF";
    textColor = "#004085";
  } else if (level === "Mahir") {
    bgColor = "#D4EDDA";
    textColor = "#155724";
  }

  return (
    <div style={{ display: "inline-block", margin: "4px" }}>
      <span
        style={{
          backgroundColor: bgColor,
          color: textColor,
          padding: "6px 12px",
          borderRadius: "16px",
          fontSize: "12px",
          fontWeight: "bold",
          display: "inline-flex",
          alignItem: "center",
          gap: "6px",
        }}
      >
        {namaSkill} ({level})
      </span>
    </div>
  );
}

export default BadgeSkill;
