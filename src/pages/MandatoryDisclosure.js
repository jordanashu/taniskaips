import React from 'react';
import { Link } from 'react-router-dom';
import {  FaDownload, FaCheckCircle,FaFilePdf } from 'react-icons/fa';

const PageHeader = ({ title, subtitle, breadcrumb }) => (
  <div className="page-header">
    <div className="container" style={{position:'relative',zIndex:1}}>
      <h1 className="mb-2">{title}</h1>
      <p className="mb-3">{subtitle}</p>
      <nav>
        <ol className="breadcrumb justify-content-center breadcrumb-custom mb-0">
          <li className="breadcrumb-item"><Link to="/" style={{color:'rgba(255,255,255,0.7)'}}>Home</Link></li>
          {breadcrumb.map((b, i) => (
            <li key={i} className={`breadcrumb-item ${i===breadcrumb.length-1?'active':''}`}>{b}</li>
          ))}
        </ol>
      </nav>
    </div>
  </div>
);

const DisclosureTable = ({ title, rows }) => (
  <div className="disclosure-table-wrapper mb-4">
    <div className="disclosure-table-header">{title}</div>
    <div className="table-responsive">
      <table className="table table-custom table-hover mb-0">
        <thead>
          <tr>
            <th style={{width:'50px'}}>S.No.</th>
            <th>Information</th>
            <th>Details</th>
            {rows[0]?.doc && <th style={{width:'140px'}}>Document</th>}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              <td>{i+1}</td>
              <td style={{fontWeight:500}}>{row.info}</td>
              <td>{row.detail}</td>
              {row.doc !== undefined && (
                <td>
                  {row.doc ? (
                    <a href={row.doc} target="_blank" rel="noreferrer" style={{
                      display:'inline-flex',alignItems:'center',gap:'5px',
                      background:'linear-gradient(135deg,#003366,#005599)',
                      color:'white',padding:'5px 12px',borderRadius:'20px',
                      fontSize:'0.78rem',fontWeight:600,textDecoration:'none'
                    }}>
                      <FaDownload size={10} /> View
                    </a>
                  ) : <span style={{color:'#aaa',fontSize:'0.82rem'}}>N/A</span>}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const MandatoryDisclosure = () => {
  const generalInfo = [
    { info: 'Name of the School', detail: 'Tanishka International Public School' },
    { info: 'Affiliation Number', detail: '1452' },
    { info: 'School Code', detail: '261452' },
    { info: 'Complete Address with Pin Code', detail: 'SAINIK COLONY PULIYA NO 1 SANJAY NAGAR ,BAREILLY, UTTAR PRADESH, BAREILLY, UTTARPRADESH - 243005'},
    { info: 'Principal Name & Qualification', detail: 'Mr.Sevendra Pal Verma, M.Sc. Physics M.Ed.' },
    { info: 'School Email ID', detail: 'deltaacademy51@gmail.com' },
    { info: 'Contact Details (Landline/Mobile)', detail: '+91 9458751691' },
  ];

  const documentsInfo = [
    { info: 'Copies of Affiliation / Upgradation Letter', detail: 'CBSE Affiliation Certificate', doc: '/documents/affiliation-letter.pdf' },
    { info: 'Copies of Societies / Trust / Company Registration', detail: 'Registration Certificate', doc: '/documents/registration-certificate.pdf' },
    { info: 'Copy of No Objection Certificate (NOC)', detail: 'NOC from State Govt', doc: '/documents/noc.pdf' },
    { info: 'Copy of Recognition Certificate', detail: 'Recognition Certificate', doc: '/documents/recognition-certificate.pdf' },
    { info: 'Copy of Valid Building Safety Certificate', detail: 'Building Safety Certificate', doc: '/documents/building-safety.pdf' },
    { info: 'Copy of Valid Fire Safety Certificate', detail: 'Fire Safety Certificate', doc: '/documents/fire-safety.pdf' },
    { info: 'Copy of the DEO Certificate submitted by the School', detail: 'DEO Certificate', doc: '/documents/deo-certificate.pdf' },
    { info: 'Copies of Valid Water, Health & Sanitation Certificates', detail: 'Health Sanitation Certificate', doc: '/documents/health-sanitation.pdf' },
  ];

  const resultInfo = [
    { info: 'Fee Structure of the School', detail: 'As per CBSE norms and school guidelines', doc: '/documents/fee-structure.pdf' },
    { info: 'Annual Academic Calendar', detail: 'Academic Year 2025-26', doc: '/documents/academic-calendar.pdf' },
    { info: 'List of School Management Committee (SMC)', detail: 'List Available', doc: '/documents/smc-list.pdf' },
    { info: 'List of Parents Teachers Association (PTA)', detail: 'List Available', doc: '/documents/pta-list.pdf' },
    { info: 'Last Three-Year Result of the Board Examination', detail: 'Board Result Data', doc: '/documents/board-results.pdf' },
  ];

  const staffInfo = [
    { info: 'Principal', detail: 'Mr.Sevendra Pal Verma' },
    { info: 'Total No. of Teachers', detail: '20' },
    { info: 'PGT Teachers', detail: '9' },
    { info: 'TGT Teachers', detail: '6' },
    { info: 'PRT Teachers', detail: '5' },
    { info: 'Teachers Section Ratio', detail: '1.5' },
    { info: 'Details of Special Educator', detail: 'Mr. SHIVAM MAURYA' },
    { info: 'Details of Counsellors', detail: 'Mr. ADITYA KUMAR' },
  ];

  const infrastructureInfo = [
    { info: 'Total Campus Area of the School (IN SQ MTR)', detail: '6200' },
    { info: 'No. & Size of Classrooms (IN SQ MTR)', detail: '35 & 4800' },
    { info: 'No. & Size of Laboratories (IN SQ MTR)', detail: '5, 600 ' },
    { info: 'Internet Facility (Y/N)', detail: 'Yes' },
    { info: 'No. of Girls Toilets', detail: '10' },
    { info: 'No. of Boys Toilets', detail: '10' },
    { info: 'LINK OF YOUTUBE VIDEO OF THE INSPECTION OF SCHOOL COVERING THE INFRASTRUCTURE OF THE SCHOOL',doc: 'https://www.youtube.com/shorts/lgYvCYF7y7Y' },
  ];


  
   

  return (
    <>
      <PageHeader
        title="Mandatory Public Disclosure"
        subtitle=""
        breadcrumb={['Mandatory Public Disclosure']}
      />

      <section className="disclosure-section">
        <div className="container">
          {/* Info Banner */}
          <div style={{
            background:'linear-gradient(135deg,rgba(0,51,102,0.05),rgba(200,169,0,0.1))',
            border:'1px solid rgba(0,51,102,0.12)',
            borderRadius:'16px',padding:'1.5rem 2rem',
            marginBottom:'2.5rem',display:'flex',gap:'16px',alignItems:'flex-start'
          }}>
            <FaCheckCircle style={{color:'#c8a900',fontSize:'1.5rem',flexShrink:0,marginTop:'2px'}} />
            <div>
              <h5 style={{color:'#003366',fontWeight:700,marginBottom:'6px'}}>Mandatory Public Disclosure (MPD)</h5>
            
              
            </div>
          </div>

          <DisclosureTable title="A. General Information" rows={generalInfo} />
          <DisclosureTable title="B. Documents & Information" rows={documentsInfo} />
          <DisclosureTable title="C. Results & Academics" rows={resultInfo} />
          <DisclosureTable title="D. Staff (Teaching)" rows={staffInfo} />

<div class="container-fluid">
  <div class="result-section">

    <h6 class="result-title">RESULT CLASS : X</h6>

    <div class="table-responsive">
      <table class="table table-bordered align-middle">
        
        <thead>
          <tr>
            <th>SL NO.</th>
            <th>YEAR</th>
            <th>NO. OF REGISTERED STUDENTS</th>
            <th>NO. OF STUDENTS PASSED</th>
            <th>PASS PERCENTAGE</th>
            <th>REMARKS</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>2025</td>
            <td>10</td>
            <td>09</td>
            <td>99</td>
            <td>-</td>
          </tr>
        </tbody>

      </table>
    </div>

  </div>
</div>

          <DisclosureTable title="E. School Infrastructure" rows={infrastructureInfo} />
         <div class="container">
    <div class="table-container">
          <h6>F:Teacher Details</h6>
           <div class="table-responsive">
            <table class="table table-bordered table-hover align-middle">
                <thead>
                    <tr>
                        <th>SL No.</th>
                        <th>Teacher Name</th>
                        <th>Designation</th>
                        <th>Qualification</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>1</td>
                        <td>SEVENDRA PAL VERMA</td>
                        <td>PRINCIPAL</td>
                        <td>M.SC, M.ED</td>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td>MANMOHAN SHARMA</td>
                        <td>PGT</td>
                        <td>M.SC, B.ED</td>
                    </tr>

                    <tr>
                        <td>3</td>
                        <td>KAMLESH KUMAR DINKAR</td>
                        <td>PGT</td>
                        <td>M.SC (Botany)</td>
                    </tr>

                    <tr>
                        <td>4</td>
                        <td>SANJAY SHARMA</td>
                        <td>PGT</td>
                        <td>M.COM</td>
                    </tr>

                    <tr>
                        <td>5</td>
                        <td>ALKA SINGHAL</td>
                        <td>PGT</td>
                        <td>MA (English)</td>
                    </tr>

                    <tr>
                        <td>6</td>
                        <td>ANITA SINGH</td>
                        <td>PGT</td>
                        <td>MA (English)</td>
                    </tr>

                    <tr>
                        <td>7</td>
                        <td>JITENDRA KUMAR</td>
                        <td>PGT</td>
                        <td>MA (English)</td>
                    </tr>

                    <tr>
                        <td>8</td>
                        <td>PRASHANT AGARWAL</td>
                        <td>PGT</td>
                        <td>M.SC (Physics)</td>
                    </tr>

                    <tr>
                        <td>9</td>
                        <td>DEEKSHA MAHESHWARI</td>
                        <td>PGT</td>
                        <td>M.SC (Maths)</td>
                    </tr>

                    <tr>
                        <td>10</td>
                        <td>VADINEE JOSHI</td>
                        <td>PGT</td>
                        <td>MBA</td>
                    </tr>

                    <tr>
                        <td>11</td>
                        <td>PRIYA</td>
                        <td>TGT</td>
                        <td>M.A (Home Science), B.ED</td>
                    </tr>

                    <tr>
                        <td>12</td>
                        <td>SANJANA MISHRA</td>
                        <td>TGT</td>
                        <td>M.SC, B.ED</td>
                    </tr>

                    <tr>
                        <td>13</td>
                        <td>SACHIN VERMA</td>
                        <td>TGT</td>
                        <td>MCA</td>
                    </tr>

                    <tr>
                        <td>14</td>
                        <td>ANITA DEVI</td>
                        <td>TGT</td>
                        <td>MA (English)</td>
                    </tr>

                    <tr>
                        <td>15</td>
                        <td>PRATIKSHA</td>
                        <td>TGT</td>
                        <td>M.SC (ZBC)</td>
                    </tr>

                    <tr>
                        <td>16</td>
                        <td>MOHAN LAL</td>
                        <td>TGT</td>
                        <td>MA (Hindi)</td>
                    </tr>

                    <tr>
                        <td>17</td>
                        <td>ASHUTOSH MISHRA</td>
                        <td>PRT</td>
                        <td>M.A, ENG.</td>
                    </tr>

                    <tr>
                        <td>18</td>
                        <td>ASHMITA GUPTA</td>
                        <td>PRT</td>
                        <td>BBA</td>
                    </tr>

                    <tr>
                        <td>19</td>
                        <td>ANIKTA GUPTA</td>
                        <td>PRT</td>
                        <td>BCA</td>
                    </tr>

                </tbody>
            </table>
        </div>
        </div>
        </div>

          
          <div style={{
            textAlign:'center',marginTop:'2.5rem',padding:'2.5rem',
            background:'white',borderRadius:'16px',
            boxShadow:'0 8px 30px rgba(0,0,0,0.08)'
          }}>
            <FaFilePdf style={{fontSize:'3rem',color:'#e63946',marginBottom:'1rem'}} />
            <h4 style={{color:'#003366',fontWeight:700,marginBottom:'0.7rem'}}>Download Complete Disclosure</h4>
            <p style={{color:'#666',fontSize:'0.9rem',marginBottom:'1.5rem',maxWidth:'480px',margin:'0 auto 1.5rem'}}>
              
            </p>
            <div style={{display:'flex',gap:'12px',justifyContent:'center',flexWrap:'wrap'}}>
              <a href="/documents/MANDATORY_PUBLIC_DISCLOSURE.pdf" target="_blank" rel="noopener noreferrer" style={{
                display:'inline-flex',alignItems:'center',gap:'8px',
                background:'linear-gradient(135deg,#003366,#005599)',
                color:'white',padding:'12px 28px',borderRadius:'50px',
                fontWeight:600,fontSize:'0.9rem',textDecoration:'none'
              }}>
                <FaDownload /> Download PDF
              </a>
              <Link to="/contact" style={{
                display:'inline-flex',alignItems:'center',gap:'8px',
                background:'linear-gradient(135deg,#c8a900,#f0d060)',
                color:'#003366',padding:'12px 28px',borderRadius:'50px',
                fontWeight:600,fontSize:'0.9rem',textDecoration:'none'
              }}>
                Contact School
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MandatoryDisclosure;
