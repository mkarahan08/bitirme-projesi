import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const endpoint = isSignup ? "http://localhost:3000/api/auth/register" : "http://localhost:3000/api/auth/login";
      const payload = isSignup ? { name, email, password } : { email, password };
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || (isSignup ? "Kayıt başarısız" : "Giriş başarısız"));
      }
      const data = await res.json();
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/");
    } catch (err) {
      setError(err.message || "Bir hata oluştu");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="auth-tabs" style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
          <button
            type="button"
            onClick={() => { setIsSignup(false); setError(""); }}
            style={{
              padding: "8px 16px",
              borderRadius: "8px",
              border: "1px solid #ddd",
              background: !isSignup ? "#111827" : "#fff",
              color: !isSignup ? "#fff" : "#111827",
              cursor: "pointer"
            }}
          >
            Giriş Yap
          </button>
          <button
            type="button"
            onClick={() => { setIsSignup(true); setError(""); }}
            style={{
              padding: "8px 16px",
              borderRadius: "8px",
              border: "1px solid #ddd",
              background: isSignup ? "#111827" : "#fff",
              color: isSignup ? "#fff" : "#111827",
              cursor: "pointer"
            }}
          >
            Kayıt Ol
          </button>
        </div>
        <h2>{isSignup ? "Kayıt Ol" : "Kullanıcı Girişi"}</h2>
        {isSignup && (
          <label>
            İsim
            <input
              type="text"
              placeholder="Adınız Soyadınız"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        )}
        <label>
          Email
          <input
            type="email"
            placeholder="ornek@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Şifre
          <input
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        {error && <div className="login-error">{error}</div>}
        <button type="submit" disabled={loading}>
          {loading ? (isSignup ? "Kayıt yapılıyor..." : "Giriş yapılıyor...") : (isSignup ? "Kayıt Ol" : "Giriş Yap")}
        </button>
        
      </form>
    </div>
  );
}

export default Login;


