import { useState, useEffect } from "react";
import { FileText, PlusCircle, User, LogOut } from "lucide-react";
import ResumeForm from "./components/ResumeForm";
import { nirubamaResume } from "./data/sampleResume";
import { ResumeData } from "./types/resume";
import Login from "./pages/login";
import Signup from "./pages/signup";
import SavedResumes from "./components/SavedResumes";
import "./index.css";

type View = "login" | "signup" | "home" | "create" | "preview" | "sample" | "saved";

function App() {
  const [currentView, setCurrentView] = useState<View>("login");
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  // Prefill resumeData from localStorage if coming from View/Edit
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    const savedUser = localStorage.getItem("user");
    if (savedToken && savedUser) {
      setToken(savedToken);
      setUser(JSON.parse(savedUser));
      setCurrentView("home");
    } else {
      setCurrentView("login");
    }

    const savedResume = localStorage.getItem("resumeData");
    if (savedResume) {
      setResumeData(JSON.parse(savedResume));
      setCurrentView("create");
      localStorage.removeItem("resumeData");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setUser(null);
    setCurrentView("login");
  };

  const handleLoginSuccess = (newToken: string, newUser: { name: string; email: string }) => {
    setToken(newToken);
    setUser(newUser);
    localStorage.setItem("token", newToken);
    localStorage.setItem("user", JSON.stringify(newUser));
    setCurrentView("home");
  };

  const handleSignupSuccess = () => {
    setCurrentView("login");
  };

  const handleFormSubmit = async (data: ResumeData) => {
    setResumeData(data);
    setCurrentView("preview");

    try {
      const token = localStorage.getItem("token");
      await fetch("http://localhost:5000/api/resumes/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
      console.log("Saved resume to backend ✅");
    } catch (err) {
      console.error("Error saving resume:", err);
    }
  };

  // Show Login/Signup if not logged in
  if (!token && (currentView === "login" || currentView === "signup")) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "#f1f5f9" }}>
        {currentView === "login" ? (
          <Login onSuccess={handleLoginSuccess} onCancel={() => setCurrentView("signup")} />
        ) : (
          <Signup onSuccess={handleSignupSuccess} onCancel={() => setCurrentView("login")} />
        )}
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(to bottom right, #f8fafc, #f1f5f9)" }}>
      {/* Header */}
      <header
        style={{
          background: "#fff",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          padding: "15px 30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {user && (
          <>
            <span style={{ color: "#475569", fontWeight: "500" }}>
              Welcome, {user.name}
            </span>

            <button
              onClick={handleLogout}
              style={{
                background: "none",
                border: "none",
                color: "#dc2626",
                cursor: "pointer",
                fontWeight: "500",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <LogOut size={18} /> Logout
            </button>
          </>
        )}
      </header>

      {/* Home Page */}
      {currentView === "home" && (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "80vh", padding: "20px" }}>
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <h1 style={{ fontSize: "48px", fontWeight: "bold", color: "#0f172a", marginBottom: "10px" }}>Resume Builder</h1>
            <p style={{ fontSize: "18px", color: "#475569", maxWidth: "600px", margin: "0 auto" }}>
              Create professional, customizable resumes in minutes. Build your resume or view a sample.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "25px", maxWidth: "1000px", width: "100%" }}>
            {/* Create Resume */}
            <button
              onClick={() => setCurrentView("create")}
              style={cardStyle}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              {iconBox(<PlusCircle size={32} color="#2563eb" />, "#dbeafe")}
              <h2 style={cardTitle}>Create Resume</h2>
              <p style={cardText}>Build your professional resume from scratch</p>
            </button>

            {/* View Sample */}
            <button
              onClick={() => setCurrentView("sample")}
              style={cardStyle}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              {iconBox(<User size={32} color="#16a34a" />, "#dcfce7")}
              <h2 style={cardTitle}>View Sample</h2>
              <p style={cardText}>See a complete resume example</p>
            </button>

            {/* Edit Sample */}
            <button
              onClick={() => {
                setResumeData(nirubamaResume);
                setCurrentView("create");
              }}
              style={cardStyle}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              {iconBox(<FileText size={32} color="#f59e0b" />, "#fef3c7")}
              <h2 style={cardTitle}>Edit Sample</h2>
              <p style={cardText}>Start with a pre-filled template</p>
            </button>

            {/* View Saved */}
            <button
              onClick={() => setCurrentView("saved")}
              style={cardStyle}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              {iconBox(<FileText size={32} color="#e91e63" />, "#ffd6e7")}
              <h2 style={cardTitle}>View Saved</h2>
              <p style={cardText}>Access all resumes you’ve saved earlier</p>
            </button>
          </div>
        </div>
      )}

      {/* Create/Edit */}
      {currentView === "create" && (
        <div style={{ padding: "30px" }}>
          <button onClick={() => setCurrentView("home")} style={backButton}>← Back to Home</button>
          <ResumeForm
            onSubmit={handleFormSubmit}
            initialData={resumeData || undefined}
          />
        </div>
      )}

      {/* Saved */}
{currentView === "saved" && (
  <div style={{ padding: "30px" }}>
    <button onClick={() => setCurrentView("home")} style={backButton}>← Back to Home</button>
    <SavedResumes
      onEdit={(data: ResumeData) => {
        setResumeData(data); // set the data to edit
        setCurrentView("create"); // switch to create/edit page
      }}
    />
  </div>
)}


      {/* Sample */}
      {currentView === "sample" && (
        <div style={{ padding: "30px" }}>
          <button onClick={() => setCurrentView("home")} style={backButton}>← Back to Home</button>
        </div>
      )}
    </div>
  );
}

/* Inline Styles */
const cardStyle: React.CSSProperties = {
  backgroundColor: "#fff",
  borderRadius: "20px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  padding: "30px",
  transition: "all 0.3s ease",
  cursor: "pointer",
  textAlign: "center",
};

const cardTitle: React.CSSProperties = {
  fontSize: "22px",
  fontWeight: "bold",
  color: "#1e293b",
  marginBottom: "6px",
};

const cardText: React.CSSProperties = {
  color: "#475569",
};

const iconBox = (icon: JSX.Element, bgColor: string) => (
  <div
    style={{
      width: "70px",
      height: "70px",
      backgroundColor: bgColor,
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto 15px",
    }}
  >
    {icon}
  </div>
);

const backButton: React.CSSProperties = {
  color: "#475569",
  fontWeight: "500",
  background: "none",
  border: "none",
  cursor: "pointer",
  marginBottom: "20px",
};

export default App;
