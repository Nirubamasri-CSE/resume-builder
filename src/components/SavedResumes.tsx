import { useEffect, useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useNavigate } from "react-router-dom";
import { FileText, PlusCircle } from "lucide-react";
import ResumeView from "./ResumeView";
import { ResumeData } from "../types/resume";

interface Resume {
  _id: string;
  data: ResumeData;
  createdAt: string;
}

// ✅ Added onEdit prop
interface SavedResumesProps {
  onEdit: (data: ResumeData) => void;
}

const SavedResumes: React.FC<SavedResumesProps> = ({ onEdit }) => {
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchResumes = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/resumes/list", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setResumes(res.data);
      } catch (err: any) {
        setError(err.response?.data?.error || "Failed to load resumes");
      } finally {
        setLoading(false);
      }
    };

    fetchResumes();
  }, []);

  const downloadPDF = async (resumeData: ResumeData) => {
    // Create a temporary container
    const container = document.createElement("div");
    container.style.position = "fixed";
    container.style.top = "-9999px";
    container.style.width = "800px";
    container.style.padding = "20px";
    document.body.appendChild(container);

    // ✅ React 18 createRoot API
    const { createRoot } = await import("react-dom/client");
    const root = createRoot(container);
    root.render(<ResumeView data={resumeData} />);

    setTimeout(async () => {
      const canvas = await html2canvas(container, { scale: 2 });
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: [canvas.width, canvas.height],
      });
      pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
      pdf.save(`${resumeData.profile.fullName || "resume"}.pdf`);

      // Clean up
      root.unmount();
      document.body.removeChild(container);
    }, 100);
  };

  if (loading)
    return (
      <div
        style={{
          textAlign: "center",
          padding: "40px",
          fontSize: "1.2rem",
          color: "#555",
        }}
      >
        Loading saved resumes...
      </div>
    );

  if (error)
    return (
      <div
        style={{
          textAlign: "center",
          color: "red",
          fontSize: "1rem",
          padding: "20px",
        }}
      >
        {error}
      </div>
    );

  return (
    <div
      style={{
        minHeight: "80vh",
        background: "linear-gradient(to bottom right, #f8fafc, #e2e8f0)",
        padding: "40px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          color: "#1e293b",
          marginBottom: "30px",
        }}
      >
        📄 Saved Resumes
      </h2>

      {resumes.length === 0 ? (
        <p style={{ fontSize: "1.1rem", color: "#475569" }}>
          No resumes saved yet.
        </p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "20px",
            width: "100%",
            maxWidth: "1000px",
          }}
        >
          {resumes.map((resume) => (
            <div
              key={resume._id}
              style={{
                background: "#fff",
                borderRadius: "16px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                padding: "20px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow =
                  "0 6px 16px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 12px rgba(0,0,0,0.1)";
              }}
            >
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#64748b",
                  marginBottom: "10px",
                }}
              >
                <strong>Created:</strong>{" "}
                {new Date(resume.createdAt).toLocaleString()}
              </p>
              <div
                style={{
                  borderTop: "1px solid #e2e8f0",
                  paddingTop: "10px",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                    color: "#1e293b",
                    marginBottom: "6px",
                  }}
                >
                  {resume.data?.profile?.fullName || "Unnamed Resume"}
                </h3>
                <p style={{ fontSize: "0.95rem", color: "#475569" }}>
                  📧 {resume.data?.profile?.email}
                </p>
                <p style={{ fontSize: "0.95rem", color: "#475569" }}>
                  📱 {resume.data?.profile?.phone}
                </p>

                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    marginTop: "10px",
                    flexWrap: "wrap",
                  }}
                >
                  {/* ✅ Use onEdit prop instead of navigate directly */}
                  <button
                    onClick={() => onEdit(resume.data)}
                    style={{
                      minWidth: "120px",
                      padding: "8px 14px",
                      borderRadius: "8px",
                      backgroundColor: "#2563eb",
                      color: "white",
                      border: "none",
                      cursor: "pointer",
                      fontWeight: "500",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "6px",
                      transition: "background 0.3s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = "#1d4ed8")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "#2563eb")
                    }
                  >
                    <FileText size={16} /> View / Edit
                  </button>

                  <button
                    onClick={() => downloadPDF(resume.data)}
                    style={{
                      minWidth: "120px",
                      padding: "8px 14px",
                      borderRadius: "8px",
                      backgroundColor: "#10b981",
                      color: "white",
                      border: "none",
                      cursor: "pointer",
                      fontWeight: "500",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "6px",
                      transition: "background 0.3s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = "#059669")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "#10b981")
                    }
                  >
                    <PlusCircle size={16} /> Download PDF
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedResumes;
