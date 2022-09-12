import { useState } from 'react';
import resumeReact from './config/angular';
import './styles.scss';

const CVReact = () => {
  const [resumeConfig, setResumeConfig] = useState(resumeReact);

  const printPage = () => {
    window.print()
  }

  return (
    <>
      <section id="app" className="container-fluid">
        <header className="header position-relative">
          <div className="headLine position-absolute"></div>
          <div className="row">
            <div className="col">
              <h1 className="firstName text-break">
                {resumeConfig.firstName}
              </h1>
              <h2 className="lastName text-nowrap">
                {resumeConfig.lastName}
              </h2>
              <p className="jobTitle">
                <i className="bi bi-circle-fill"></i>
                <span className="text-break">
                  {resumeConfig.jobTitle}
                </span>
              </p>
            </div>
            <div v-if="!!photo" className="col-auto d-none d-lg-block d-print-block">
              <img src={resumeConfig.photo} className="photo border border-2 border-dark rounded-circle img-fluid float-end img-thumbnail"></img>
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
                    <i className="bi bi-geo-alt-fill" role="img" aria-label="Location"></i>
                  </div>
                </div>
                <div className="col" style={{ whiteSpace: 'pre-line' }}>
                  <p>Colombo, Sri Lanka</p>
                </div>
              </div>
              <div className="row list-item me-5">
                <div className="col-auto align-self-center">
                  <div className="icon d-flex justify-content-center">
                    <i className="bi bi-telephone-fill" role="img" aria-label="Telephone"></i>
                  </div>
                </div>
                <div className="col">
                  <a href="'tel:'+ phone" className="text-decoration-none">
                    <p>{resumeConfig.phone}</p>
                  </a>
                </div>
              </div>
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
                  <p style={{ whiteSpace: 'pre-line' }}>{resumeConfig.professionalSummary}</p>
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
              {resumeConfig.employmentHistory.map((employment: any, employmentIndex: number) => {
                return (
                  <div className="row record mb-4 bullet" key={employmentIndex}>
                    <div className="col-auto">
                      <i className="bi bi-record-circle"></i>
                    </div>
                    <div className="col">
                      <p className="text-uppercase fw-bold position-relative">
                        {employment.jobTitle}
                        <span>&nbsp;|&nbsp;{employment.startDate} - {employment.endDate}</span>
                      </p>
                      <p className="text-lowercase fst-italic fw-bold">
                        {employment.employer}, {employment.city}
                      </p>
                      {employment.achievements.map((achievement: any, achievementsIndex: number) => {
                        <p className="mb-0" key={achievementsIndex } >
                          • {achievement}
                        </p>
                      })}

                    </div>
                  </div>
                )
              })}

            </div>

          </div>
        </section>

      </section>
      <div className="btn-group-fab d-print-none">
        <div>
          <button onClick={printPage} type="button" className="btn btn-main btn-primary" title="Print">
            <i className="bi bi-printer fs-3"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default CVReact;
