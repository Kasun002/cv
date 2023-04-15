import { useEffect, useState } from "react";
import resumeReact from "./config/react-new/react";

import "./styles.scss";

const CVReactNew = () => {
  const [resumeConfig, setResumeConfig] = useState(resumeReact);

  useEffect(() => {
    setResumeConfig(resumeReact);
  }, [resumeReact]);

  const printPage = () => {
    window.print();
  };

  return (
    <>
      <section id="app" className="container-fluid">
        <header className="header position-relative">
          <div className="headLine position-absolute"></div>
          <div className="row">
            <div className="col">
              <h1 className="firstName text-break">{resumeConfig.firstName}</h1>
              <h2 className="lastName text-nowrap">{resumeConfig.lastName}</h2>
              <p className="jobTitle">
                <i className="bi bi-circle-fill"></i>
                <span className="text-break">{resumeConfig.jobTitle}</span>
              </p>
            </div>
            <div className="col-auto d-none d-lg-block d-print-block">
              <img
                src={resumeConfig.photo}
                className="photo border border-2 border-dark rounded-circle img-fluid float-end img-thumbnail"
              ></img>
            </div>
          </div>
          <div className="middleLine position-absolute"></div>
        </header>

        <section className="content">
          <div className="row">
            <div className="col personal-details me-4">
              <div className="row list-item me-5">
                <div className="col-auto">
                  <div className="icon d-flex justify-content-center">
                    <i
                      className="bi bi-geo-alt-fill"
                      role="img"
                      aria-label="Location"
                    ></i>
                  </div>
                </div>
                <div className="col" style={{ whiteSpace: "pre-line" }}>
                  <p>{`${resumeConfig.city} ${resumeConfig.country} ${resumeConfig.postalCode}`}</p>
                </div>
              </div>
              <div className="row list-item me-5">
                <div className="col-auto align-self-center">
                  <div className="icon d-flex justify-content-center">
                    <i
                      className="bi bi-telephone-fill"
                      role="img"
                      aria-label="Telephone"
                    ></i>
                  </div>
                </div>
                <div className="col">
                  <a
                    href={`tel:${resumeConfig.phone}`}
                    className="text-decoration-none"
                  >
                    <p className="link-color">{resumeConfig.phone}</p>
                  </a>
                </div>
              </div>
              <div className="row list-item me-5">
                <div className="col-auto align-self-center">
                  <div className="icon d-flex justify-content-center">
                    <i
                      className="bi bi-envelope-fill"
                      role="img"
                      aria-label="Email"
                    ></i>
                  </div>
                </div>
                <div className="col">
                  <a
                    href={`mailto:${resumeConfig.email}`}
                    className="text-decoration-none"
                  >
                    <p className="link-color">{resumeConfig.email}</p>
                  </a>
                </div>
              </div>
              <div className="row list-item me-5">
                <div className="col-auto align-self-center">
                  <div className="icon d-flex justify-content-center">
                    <i
                      className="bi bi-linkedin"
                      role="img"
                      aria-label={resumeConfig.linkedin.label}
                    ></i>
                  </div>
                </div>
                <div className="col">
                  <a
                    target="_blank"
                    href={resumeConfig.linkedin.link}
                    className="text-decoration-none"
                  >
                    <p className="link-color">{resumeConfig.linkedin.name}</p>
                  </a>
                </div>
              </div>
              <div className="row list-item me-5">
                <div className="col-auto align-self-center">
                  <div className="icon d-flex justify-content-center">
                    <i
                      className="bi bi-calendar"
                      role="img"
                      aria-label="DOB"
                    ></i>
                  </div>
                </div>
                <div className="col">
                  <a className="text-decoration-none">
                    <p>{resumeConfig.dob}</p>
                  </a>
                </div>
              </div>
              <div className="row mt-5 me-5">
                <div className="col">
                  <p className="title">Education</p>
                </div>
              </div>
              {resumeConfig.education.map(
                (educationRow: any, educationRowIndex: number) => {
                  return (
                    <div className="row record" key={educationRowIndex}>
                      <div className="col-auto bullet">
                        <i className="bi bi-record-circle"></i>
                      </div>
                      <div className="col">
                        <p className="fw-bold">{educationRow.degree}</p>
                        <p className="fw-bold ">
                          {educationRow.school} {educationRow.graduationDate}
                        </p>
                        <p>{educationRow.description}</p>
                      </div>
                    </div>
                  );
                }
              )}

              <div className="row mt-5 me-5">
                <div className="col p-0">
                  <p className="title">Technical skills</p>
                </div>
              </div>
              {resumeConfig.technicalSkills.map(
                (skill: any, skillIndex: number) => {
                  return (
                    <div className="row" key={skillIndex}>
                      <div className="col">
                        <ul className="ms-2">
                          <li
                            className="pb-2"
                            dangerouslySetInnerHTML={{ __html: skill }}
                          ></li>
                        </ul>
                      </div>
                    </div>
                  );
                }
              )}

              <div className="row mt-5 me-5">
                <div className="col p-0">
                  <p className="title">Soft Skills</p>
                </div>
              </div>
              {resumeConfig.professionalSkills.map(
                (skill: any, skillIndex: number) => {
                  return (
                    <div className="row" key={skillIndex}>
                      <div className="col">
                        <ul className="ms-2">
                          <li className="pb-2">{skill}</li>
                        </ul>
                      </div>
                    </div>
                  );
                }
              )}
              <p
                style={{ pageBreakBefore: "always", paddingTop: "11.8297rem" }}
              ></p>
              <div className="row mt-5 me-5">
                <div className="col p-0">
                  <p className="title">Links</p>
                </div>
              </div>
              {resumeConfig.links.map((link: any, linkIndex: number) => {
                return (
                  <div className="row record me-4" key={linkIndex}>
                    <div className="col-auto bullet mb-5">
                      <i className="bi bi-record-circle"></i>
                    </div>
                    <div className="col">
                      <p>
                        {link.label}:&nbsp;
                        <a
                          className="text-reset"
                          target="_blank"
                          href={link.link}
                        >
                          {link.name}
                        </a>
                      </p>
                    </div>
                  </div>
                );
              })}
              <div className="row mt-5 me-5">
                <div className="col p-0">
                  <p className="title">Languages</p>
                </div>
              </div>
              {resumeConfig.languages.map(
                (language: any, languageIndex: number) => {
                  return (
                    <div className="row" key={languageIndex}>
                      <div className="col">
                        <ul className="ms-2">
                          <li className="pb-2">{language}</li>
                        </ul>
                      </div>
                    </div>
                  );
                }
              )}

              <div className="row mt-5 me-5">
                <div className="col p-0">
                  <p className="title">Interests</p>
                </div>
              </div>
              {resumeConfig.interests.map(
                (interest: any, interestIndex: number) => {
                  return (
                    <div className="row" key={interestIndex}>
                      <div className="col">
                        <ul className="ms-2">
                          <li
                            className="pb-2"
                            dangerouslySetInnerHTML={{ __html: interest }}
                          ></li>
                        </ul>
                      </div>
                    </div>
                  );
                }
              )}
              <div className="row mt-5 me-5">
                <div className="col p-0">
                  <p className="title">References</p>
                </div>
              </div>
              {resumeConfig.referees.map(
                (referee: any, refereeIndex: number) => {
                  return (
                    <div className="row" key={refereeIndex}>
                      <div className="col">
                        <ul className="ms-2">
                          <li
                            className="pb-2"
                            dangerouslySetInnerHTML={{ __html: referee }}
                          ></li>
                        </ul>
                      </div>
                    </div>
                  );
                }
              )}
            </div>

            <div className="col col-8">
              <div className="row bullet">
                <div className="col-auto pt-2">
                  <i className="bi bi-circle-fill"></i>
                </div>
                <div className="col">
                  <p className="title">About Me</p>
                </div>
              </div>
              <div className="row record bullet">
                <div className="col-auto">
                  <i className="bi bi-record-circle"></i>
                </div>
                <div className="col">
                  {resumeConfig.professionalSummary.map(
                    (summaryLine: any, summaryIndex: number) => {
                      return (
                        <p className="mb-0" key={summaryIndex}>
                          {summaryLine}
                        </p>
                      );
                    }
                  )}
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-auto bullet pt-2">
                  <i className="bi bi-circle-fill"></i>
                </div>
                <div className="col">
                  <p className="title">Work Experience</p>
                </div>
              </div>
              {resumeConfig.employmentHistory.map(
                (employment: any, employmentIndex: number) => {
                  return (
                    <div
                      className="row record mb-4 bullet"
                      key={employmentIndex}
                    >
                      <div className="col-auto">
                        <i className="bi bi-record-circle"></i>
                      </div>
                      <div className="col">
                        <p className="text-uppercase fw-bold position-relative">
                          {employment.jobTitle}
                          <span>
                            &nbsp;|&nbsp;{employment.startDate} -{" "}
                            {employment.endDate}
                          </span>
                        </p>
                        <p className="fst-italic fw-bold">
                          {employment.employer}, {employment.city}
                        </p>
                      </div>
                    </div>
                  );
                }
              )}
              <div className="row mt-5">
                <div className="col-auto bullet pt-2">
                  <i className="bi bi-circle-fill"></i>
                </div>
                <div className="col">
                  <p className="title">Project Experience</p>
                </div>
              </div>
              {resumeConfig.projectHistory.map(
                (project: any, projectIndex: number) => {
                  return (
                    <>
                      <div
                        className="row record mb-4 bullet"
                        key={projectIndex}
                      >
                        <div className="col-auto">
                          <i className="bi bi-record-circle"></i>
                        </div>
                        <div className="col">
                          <p className="text-uppercase fw-bold position-relative">
                            {project.projectTitle}
                            <span>
                              &nbsp;|&nbsp;{project.startDate} -{" "}
                              {project.endDate}
                            </span>
                          </p>
                          <p className="fst-italic fw-bold float-right">
                            {project.role}
                          </p>
                          {project.achievements.map(
                            (achievement: any, achievementsIndex: number) => {
                              return (
                                <p className="mb-0" key={achievementsIndex}>
                                  • {achievement}
                                </p>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {projectIndex === 1 ? (
                        <p
                          style={{
                            pageBreakBefore: "always",
                            paddingTop: "15.8297rem",
                          }}
                        ></p>
                      ) : (
                        <></>
                      )}
                    </>
                  );
                }
              )}
            </div>
          </div>
        </section>
      </section>
      <div className="btn-group-fab d-print-none">
        <div>
          <button
            onClick={printPage}
            type="button"
            className="btn btn-main btn-primary"
            title="Print"
          >
            <i className="bi bi-printer fs-3"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default CVReactNew;
