import { useState } from "react";

type Props = {
  onSuccess: (token: string, user: { name: string; email: string }) => void;
  onCancel?: () => void;
};

export default function Signup({ onSuccess, onCancel }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();
      setLoading(false);

      if (!res.ok) return setError(data.message || "Signup failed");

      const loginRes = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const loginData = await loginRes.json();
      if (!loginRes.ok) return setError(loginData.message || "Login after signup failed");

      localStorage.setItem("token", loginData.token);
      localStorage.setItem("user", JSON.stringify(loginData.user));
      onSuccess(loginData.token, loginData.user);
    } catch (err: any) {
      setLoading(false);
      setError(err.message || "Network error");
    }
  };

  const wrapperStyle: React.CSSProperties = {
    maxWidth: 400,
    margin: "50px auto",
    padding: 20,
    border: "1px solid #ddd",
    borderRadius: 8,
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: 10,
    marginBottom: 10,
    borderRadius: 4,
    border: "1px solid #ccc",
    fontSize: 16,
  };

  const buttonStyle: React.CSSProperties = {
    width: "100%",
    padding: 10,
    borderRadius: 4,
    border: "none",
    backgroundColor: "#4f46e5",
    color: "#fff",
    fontSize: 16,
    cursor: "pointer",
  };

  const cancelButtonStyle: React.CSSProperties = {
    width: "100%",
    padding: 10,
    borderRadius: 4,
    border: "1px solid #ccc",
    backgroundColor: "#fff",
    fontSize: 16,
    cursor: "pointer",
    marginTop: 5,
  };

  const errorStyle: React.CSSProperties = {
    color: "red",
    marginBottom: 10,
  };

  const footerStyle: React.CSSProperties = {
    marginTop: 15,
    textAlign: "center",
    fontSize: 14,
  };

  const linkStyle: React.CSSProperties = {
    color: "#4f46e5",
    cursor: "pointer",
    textDecoration: "underline",
  };

  return (
    <div style={wrapperStyle}>
      <h2 style={{ textAlign: "center", marginBottom: 10 }}>Create an Account ✨</h2>


      <form onSubmit={submit}>
        <input
          required
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          style={inputStyle}
        />

        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          style={inputStyle}
        />

        <input
          required
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          style={inputStyle}
        />

        {error && <div style={errorStyle}>{error}</div>}

        <button type="submit" style={buttonStyle} disabled={loading}>
          {loading ? "Signing up..." : "Sign up"}
        </button>

      </form>

      <div style={footerStyle}>
        Already have an account?{" "}
        <span
          style={linkStyle}
          onClick={(e) => {
            e.preventDefault();
            if (onCancel) onCancel();
          }}
        >
          Log in
        </span>
      </div>
    </div>
  );
}
