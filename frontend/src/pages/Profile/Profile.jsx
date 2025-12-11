import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }
    (async () => {
      try {
        const res = await fetch("http://localhost:3000/api/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) throw new Error("Unauthorized");
        const data = await res.json();
        setUser(data.user);
      } catch (err) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
      } finally {
        setLoading(false);
      }
    })();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (loading) {
    return (
      <div className="profile-page">
        <div className="profile-card">Yükleniyor...</div>
      </div>
    );
  }

  return (
    <div className="profile-page">
      <div className="profile-card">
        <h2>Profil</h2>
        {user && (
          <>
            <div className="profile-row">
              <span>İsim</span>
              <strong>{user.name}</strong>
            </div>
            <div className="profile-row">
              <span>Email</span>
              <strong>{user.email}</strong>
            </div>
          </>
        )}
        <button className="logout-btn" onClick={handleLogout}>
          Çıkış Yap
        </button>
      </div>
    </div>
  );
}

export default Profile;


