import { profile } from "../profile"

describe("profile data", () => {
  it("should have required personal fields", () => {
    expect(profile.name).toBe("Abdulrahman Eldeeb")
    expect(profile.title).toContain("Backend Developer")
    expect(profile.location).toBe("Fayoum, Egypt")
    expect(profile.email).toContain("@")
    expect(profile.github).toContain("github.com")
    expect(profile.linkedin).toContain("linkedin.com")
  })

  it("should have non-empty experience array", () => {
    expect(profile.experience.length).toBeGreaterThan(0)
    profile.experience.forEach((exp) => {
      expect(exp.company).toBeTruthy()
      expect(exp.title).toBeTruthy()
      expect(exp.dates).toBeTruthy()
      expect(exp.achievements.length).toBeGreaterThan(0)
    })
  })

  it("should have skills in all categories", () => {
    expect(profile.skills.technical.length).toBeGreaterThan(0)
    expect(profile.skills.domain.length).toBeGreaterThan(0)
    expect(profile.skills.soft.length).toBeGreaterThan(0)
  })

  it("should have education entries", () => {
    expect(profile.education.length).toBeGreaterThan(0)
    profile.education.forEach((edu) => {
      expect(edu.degree).toBeTruthy()
      expect(edu.institution).toBeTruthy()
      expect(edu.year).toBeTruthy()
    })
  })

  it("should have certifications", () => {
    expect(profile.certifications.length).toBeGreaterThan(0)
    profile.certifications.forEach((cert) => {
      expect(cert.name).toBeTruthy()
      expect(cert.issuer).toBeTruthy()
      expect(cert.year).toBeTruthy()
    })
  })

  it("should have projects with required fields", () => {
    expect(profile.projects.length).toBeGreaterThan(0)
    profile.projects.forEach((proj) => {
      expect(proj.name).toBeTruthy()
      expect(proj.description).toBeTruthy()
      expect(proj.tech.length).toBeGreaterThan(0)
    })
  })

  it("should have competitive programming entries", () => {
    expect(profile.competitiveProgramming.length).toBeGreaterThan(0)
    profile.competitiveProgramming.forEach((cp) => {
      expect(cp.title).toBeTruthy()
      expect(cp.stat).toBeTruthy()
      expect(cp.label).toBeTruthy()
    })
  })
})
