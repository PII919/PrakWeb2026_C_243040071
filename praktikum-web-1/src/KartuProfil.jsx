// src/KartuProfil.jsx
import React from "react";

// Komponen Functional menerima properti (props) melalui parameter fungsi
function KartuProfil({ nama, npm, kelas, status, fotoUrl }) {
  return (
    <div className="kartu-profil">
      {/* Foto & Info */}
      <div className="kartu-profil__body">
        <div className="kartu-profil__foto-wrap">
          <img
            src={fotoUrl || "https://via.placeholder.com/110"}
            alt={`Foto ${nama}`}
            className="kartu-profil__foto"
          />
          <span
            className={`kartu-profil__status-dot ${
              status === "Aktif" ? "dot--aktif" : "dot--nonaktif"
            }`}
          />
        </div>
        <div className="kartu-profil__info">
          <h3 className="kartu-profil__nama">{nama}</h3>
          <p className="kartu-profil__detail">
            <span className="kartu-profil__label">NPM</span>
            <strong>{npm}</strong>
          </p>
          <p className="kartu-profil__detail">
            <span className="kartu-profil__label">Kelas</span>
            {kelas}
          </p>
          <span
            className={`badge-status ${
              status === "Aktif" ? "badge-status--aktif" : "badge-status--nonaktif"
            }`}
          >
            ● Status: {status}
          </span>
        </div>
      </div>
    </div>
  );
}

export default KartuProfil;
