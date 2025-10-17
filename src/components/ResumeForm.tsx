import { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { ResumeData, Education, Internship, Project, Skill, CodingPlatform, Certification } from '../types/resume';

interface ResumeFormProps {
  onSubmit: (data: ResumeData) => void;
  initialData?: ResumeData;
}

export default function ResumeForm({ onSubmit, initialData }: ResumeFormProps) {
  const [formData, setFormData] = useState<ResumeData>(
    initialData || {
      profile: {
        id: '1',
        fullName: '',
        email: '',
        phone: '',
        githubUrl: '',
        linkedinUrl: '',
      },
      education: [],
      internships: [],
      projects: [],
      skills: [],
      codingPlatforms: [],
      certifications: [],
    }
  );

  const handleProfileChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      profile: { ...prev.profile, [field]: value },
    }));
  };

  const addEducation = () => {
    setFormData((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        { id: Date.now().toString(), degree: '', institution: '', score: '', startYear: '', endYear: '' },
      ],
    }));
  };

  const updateEducation = (index: number, field: keyof Education, value: string) => {
    setFormData((prev) => ({
      ...prev,
      education: prev.education.map((edu, i) => (i === index ? { ...edu, [field]: value } : edu)),
    }));
  };

  const removeEducation = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index),
    }));
  };

  const addInternship = () => {
    setFormData((prev) => ({
      ...prev,
      internships: [
        ...prev.internships,
        { id: Date.now().toString(), company: '', role: '', description: '', startDate: '', endDate: '' },
      ],
    }));
  };

  const updateInternship = (index: number, field: keyof Internship, value: string) => {
    setFormData((prev) => ({
      ...prev,
      internships: prev.internships.map((int, i) => (i === index ? { ...int, [field]: value } : int)),
    }));
  };

  const removeInternship = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      internships: prev.internships.filter((_, i) => i !== index),
    }));
  };

  const addProject = () => {
    setFormData((prev) => ({
      ...prev,
      projects: [
        ...prev.projects,
        { id: Date.now().toString(), title: '', description: '', technologies: '', year: '' },
      ],
    }));
  };

  const updateProject = (index: number, field: keyof Project, value: string) => {
    setFormData((prev) => ({
      ...prev,
      projects: prev.projects.map((proj, i) => (i === index ? { ...proj, [field]: value } : proj)),
    }));
  };

  const removeProject = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      projects: prev.projects.filter((_, i) => i !== index),
    }));
  };

  const addSkill = () => {
    setFormData((prev) => ({
      ...prev,
      skills: [...prev.skills, { id: Date.now().toString(), category: '', skillsList: '' }],
    }));
  };

  const updateSkill = (index: number, field: keyof Skill, value: string) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.map((skill, i) => (i === index ? { ...skill, [field]: value } : skill)),
    }));
  };

  const removeSkill = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index),
    }));
  };

  const addCodingPlatform = () => {
    setFormData((prev) => ({
      ...prev,
      codingPlatforms: [
        ...prev.codingPlatforms,
        { id: Date.now().toString(), platform: '', profileUrl: '', rank: '', problemsSolved: '' },
      ],
    }));
  };

  const updateCodingPlatform = (index: number, field: keyof CodingPlatform, value: string) => {
    setFormData((prev) => ({
      ...prev,
      codingPlatforms: prev.codingPlatforms.map((plat, i) => (i === index ? { ...plat, [field]: value } : plat)),
    }));
  };

  const removeCodingPlatform = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      codingPlatforms: prev.codingPlatforms.filter((_, i) => i !== index),
    }));
  };

  const addCertification = () => {
    setFormData((prev) => ({
      ...prev,
      certifications: [
        ...prev.certifications,
        { id: Date.now().toString(), title: '', issuer: '', year: '' },
      ],
    }));
  };

  const updateCertification = (index: number, field: keyof Certification, value: string) => {
    setFormData((prev) => ({
      ...prev,
      certifications: prev.certifications.map((cert, i) => (i === index ? { ...cert, [field]: value } : cert)),
    }));
  };

  const removeCertification = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      certifications: prev.certifications.filter((_, i) => i !== index),
    }));
  };

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const { profile } = formData;

  if (
    profile?.fullName === "NIRUBAMA SRI R" ||
    profile?.email === "nirubamasrir@email.com" ||
    profile?.phone === "9342840231" ||
    profile?.githubUrl === "https://github.com/Nirubamasri-CSE" ||
    profile?.linkedinUrl === "https://www.linkedin.com/in/nirubama-sri-r-408723227"
  ) {
    alert("⚠️ Please update your personal details, GitHub, and LinkedIn URLs before continuing!");
    return;
  }

  onSubmit(formData);
};



  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-8 p-6">
      {/* Profile Section */}
      <section className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Personal Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full Name *"
            value={formData.profile.fullName}
            onChange={(e) => handleProfileChange('fullName', e.target.value)}
            required
            className="px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email *"
            value={formData.profile.email}
            onChange={(e) => handleProfileChange('email', e.target.value)}
            required
            className="px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="tel"
            placeholder="Phone"
            value={formData.profile.phone}
            onChange={(e) => handleProfileChange('phone', e.target.value)}
            className="px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="url"
            placeholder="GitHub URL"
            value={formData.profile.githubUrl}
            onChange={(e) => handleProfileChange('githubUrl', e.target.value)}
            className="px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="url"
            placeholder="LinkedIn URL"
            value={formData.profile.linkedinUrl}
            onChange={(e) => handleProfileChange('linkedinUrl', e.target.value)}
            className="px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2"
          />
        </div>
      </section>

      {/* Education Section */}
      <section className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-slate-800">Education</h2>
          <button
            type="button"
            onClick={addEducation}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            <Plus size={20} />
            Add Education
          </button>
        </div>
        <div className="space-y-4">
          {formData.education.map((edu, index) => (
            <div key={edu.id} className="p-4 border border-slate-200 rounded-md relative">
              <button
                type="button"
                onClick={() => removeEducation(index)}
                className="absolute top-2 right-2 text-red-600 hover:text-red-800"
              >
                <Trash2 size={20} />
              </button>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Degree *"
                  value={edu.degree}
                  onChange={(e) => updateEducation(index, 'degree', e.target.value)}
                  required
                  className="px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Institution *"
                  value={edu.institution}
                  onChange={(e) => updateEducation(index, 'institution', e.target.value)}
                  required
                  className="px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Score (e.g., CGPA: 8.5)"
                  value={edu.score}
                  onChange={(e) => updateEducation(index, 'score', e.target.value)}
                  className="px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Start Year"
                    value={edu.startYear}
                    onChange={(e) => updateEducation(index, 'startYear', e.target.value)}
                    className="flex-1 px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="End Year"
                    value={edu.endYear}
                    onChange={(e) => updateEducation(index, 'endYear', e.target.value)}
                    className="flex-1 px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Internships Section */}
      <section className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-slate-800">Internships</h2>
          <button
            type="button"
            onClick={addInternship}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            <Plus size={20} />
            Add Internship
          </button>
        </div>
        <div className="space-y-4">
          {formData.internships.map((internship, index) => (
            <div key={internship.id} className="p-4 border border-slate-200 rounded-md relative">
              <button
                type="button"
                onClick={() => removeInternship(index)}
                className="absolute top-2 right-2 text-red-600 hover:text-red-800"
              >
                <Trash2 size={20} />
              </button>
              <div className="grid grid-cols-1 gap-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Company *"
                    value={internship.company}
                    onChange={(e) => updateInternship(index, 'company', e.target.value)}
                    required
                    className="px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Role *"
                    value={internship.role}
                    onChange={(e) => updateInternship(index, 'role', e.target.value)}
                    required
                    className="px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <textarea
                  placeholder="Description"
                  value={internship.description}
                  onChange={(e) => updateInternship(index, 'description', e.target.value)}
                  rows={3}
                  className="px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Start Date"
                    value={internship.startDate}
                    onChange={(e) => updateInternship(index, 'startDate', e.target.value)}
                    className="px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="End Date"
                    value={internship.endDate}
                    onChange={(e) => updateInternship(index, 'endDate', e.target.value)}
                    className="px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-slate-800">Projects</h2>
          <button
            type="button"
            onClick={addProject}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            <Plus size={20} />
            Add Project
          </button>
        </div>
        <div className="space-y-4">
          {formData.projects.map((project, index) => (
            <div key={project.id} className="p-4 border border-slate-200 rounded-md relative">
              <button
                type="button"
                onClick={() => removeProject(index)}
                className="absolute top-2 right-2 text-red-600 hover:text-red-800"
              >
                <Trash2 size={20} />
              </button>
              <div className="grid grid-cols-1 gap-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Project Title *"
                    value={project.title}
                    onChange={(e) => updateProject(index, 'title', e.target.value)}
                    required
                    className="px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Year"
                    value={project.year}
                    onChange={(e) => updateProject(index, 'year', e.target.value)}
                    className="px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <textarea
                  placeholder="Description"
                  value={project.description}
                  onChange={(e) => updateProject(index, 'description', e.target.value)}
                  rows={3}
                  className="px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Technologies (comma-separated)"
                  value={project.technologies}
                  onChange={(e) => updateProject(index, 'technologies', e.target.value)}
                  className="px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-slate-800">Skills</h2>
          <button
            type="button"
            onClick={addSkill}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            <Plus size={20} />
            Add Skill Category
          </button>
        </div>
        <div className="space-y-4">
          {formData.skills.map((skill, index) => (
            <div key={skill.id} className="p-4 border border-slate-200 rounded-md relative">
              <button
                type="button"
                onClick={() => removeSkill(index)}
                className="absolute top-2 right-2 text-red-600 hover:text-red-800"
              >
                <Trash2 size={20} />
              </button>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Category (e.g., Programming Languages) *"
                  value={skill.category}
                  onChange={(e) => updateSkill(index, 'category', e.target.value)}
                  required
                  className="px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Skills (e.g., Java | Python | C++) *"
                  value={skill.skillsList}
                  onChange={(e) => updateSkill(index, 'skillsList', e.target.value)}
                  required
                  className="px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Coding Platforms Section */}
      <section className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-slate-800">Coding Platforms</h2>
          <button
            type="button"
            onClick={addCodingPlatform}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            <Plus size={20} />
            Add Platform
          </button>
        </div>
        <div className="space-y-4">
          {formData.codingPlatforms.map((platform, index) => (
            <div key={platform.id} className="p-4 border border-slate-200 rounded-md relative">
              <button
                type="button"
                onClick={() => removeCodingPlatform(index)}
                className="absolute top-2 right-2 text-red-600 hover:text-red-800"
              >
                <Trash2 size={20} />
              </button>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Platform Name *"
                  value={platform.platform}
                  onChange={(e) => updateCodingPlatform(index, 'platform', e.target.value)}
                  required
                  className="px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="url"
                  placeholder="Profile URL"
                  value={platform.profileUrl}
                  onChange={(e) => updateCodingPlatform(index, 'profileUrl', e.target.value)}
                  className="px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Rank"
                  value={platform.rank}
                  onChange={(e) => updateCodingPlatform(index, 'rank', e.target.value)}
                  className="px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Problems Solved"
                  value={platform.problemsSolved}
                  onChange={(e) => updateCodingPlatform(index, 'problemsSolved', e.target.value)}
                  className="px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-slate-800">Certifications</h2>
          <button
            type="button"
            onClick={addCertification}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            <Plus size={20} />
            Add Certification
          </button>
        </div>
        <div className="space-y-4">
          {formData.certifications.map((cert, index) => (
            <div key={cert.id} className="p-4 border border-slate-200 rounded-md relative">
              <button
                type="button"
                onClick={() => removeCertification(index)}
                className="absolute top-2 right-2 text-red-600 hover:text-red-800"
              >
                <Trash2 size={20} />
              </button>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <input
                  type="text"
                  placeholder="Certification Title *"
                  value={cert.title}
                  onChange={(e) => updateCertification(index, 'title', e.target.value)}
                  required
                  className="md:col-span-2 px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Year"
                  value={cert.year}
                  onChange={(e) => updateCertification(index, 'year', e.target.value)}
                  className="px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Issuer"
                  value={cert.issuer}
                  onChange={(e) => updateCertification(index, 'issuer', e.target.value)}
                  className="md:col-span-3 px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Submit Button */}
      <div className="flex justify-center">
        <button
          type="submit"
          className="px-8 py-3 bg-green-600 text-white text-lg font-semibold rounded-md hover:bg-green-700 transition shadow-lg"
        >
          Generate Resume
        </button>
      </div>
    </form>
  );
}