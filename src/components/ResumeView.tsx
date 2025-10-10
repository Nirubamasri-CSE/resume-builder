import { Mail, Phone, Github, Linkedin } from 'lucide-react';
import { ResumeData } from '../types/resume';

interface ResumeViewProps {
  data: ResumeData;
}

export default function ResumeView({ data }: ResumeViewProps) {
  const { profile, education, internships, projects, skills, codingPlatforms, certifications } = data;

  return (
    <div className="max-w-5xl mx-auto bg-white shadow-lg p-8 md:p-12">
      {/* Header */}
      <header className="border-b-4 border-slate-800 pb-6 mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">{profile.fullName}</h1>
        <div className="flex flex-wrap gap-4 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>{profile.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <a href={`mailto:${profile.email}`} className="hover:text-blue-600">
              {profile.email}
            </a>
          </div>
          {profile.githubUrl && (
            <div className="flex items-center gap-2">
              <Github size={16} />
              <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                GitHub
              </a>
            </div>
          )}
          {profile.linkedinUrl && (
            <div className="flex items-center gap-2">
              <Linkedin size={16} />
              <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                LinkedIn
              </a>
            </div>
          )}
        </div>
      </header>

      {/* Education */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-slate-800 border-b-2 border-slate-300 pb-2 mb-4">EDUCATION</h2>
        <div className="space-y-3">
          {education.map((edu) => (
            <div key={edu.id} className="flex justify-between items-start">
              <div>
                <span className="font-semibold text-slate-900">{edu.degree}</span>
                <span className="text-slate-600"> – {edu.institution}</span>
              </div>
              <div className="text-right">
                <div className="font-semibold text-slate-700">{edu.score}</div>
                <div className="text-sm text-slate-600">
                  {edu.startYear}-{edu.endYear}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Internships */}
      {internships.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-800 border-b-2 border-slate-300 pb-2 mb-4">INTERNSHIP</h2>
          <div className="space-y-4">
            {internships.map((internship) => (
              <div key={internship.id}>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-slate-900">
                    {internship.company} – {internship.role}
                  </h3>
                  <span className="text-sm text-slate-600">
                    {internship.startDate} – {internship.endDate}
                  </span>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">{internship.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-800 border-b-2 border-slate-300 pb-2 mb-4">PROJECTS</h2>
          <div className="space-y-4">
            {projects.map((project) => (
              <div key={project.id}>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-slate-900">{project.title}</h3>
                  <span className="text-sm text-slate-600">{project.year}</span>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed mb-2">{project.description}</p>
                <p className="text-sm text-slate-600">
                  <span className="font-semibold">Technologies & Tools:</span> {project.technologies}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-800 border-b-2 border-slate-300 pb-2 mb-4">SKILLS</h2>
          <div className="space-y-2">
            {skills.map((skill) => (
              <div key={skill.id}>
                <span className="font-semibold text-slate-900">{skill.category}:</span>{' '}
                <span className="text-slate-700">{skill.skillsList}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Coding Platforms */}
      {codingPlatforms.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-800 border-b-2 border-slate-300 pb-2 mb-4">CODING PLATFORMS</h2>
          <div className="space-y-2">
            {codingPlatforms.map((platform) => (
              <div key={platform.id} className="flex items-center gap-2">
                <a
                  href={platform.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600 hover:underline"
                >
                  {platform.platform}
                </a>
                <span className="text-slate-600">
                  {platform.rank} | {platform.problemsSolved}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Certifications */}
      {certifications.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-800 border-b-2 border-slate-300 pb-2 mb-4">CERTIFICATIONS</h2>
          <div className="space-y-2">
            {certifications.map((cert) => (
              <div key={cert.id} className="flex justify-between">
                <div>
                  <span className="text-slate-900">{cert.title}</span>
                  {cert.issuer && <span className="text-slate-600"> – {cert.issuer}</span>}
                </div>
                <span className="text-slate-600">{cert.year}</span>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}