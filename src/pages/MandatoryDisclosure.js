import React from 'react';
import { Link } from 'react-router-dom';
import { FaFilePdf, FaDownload, FaCheckCircle } from 'react-icons/fa';

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
    { info: 'Affiliation Number', detail: 'XXXXXXXX' },
    { info: 'School Code', detail: 'XXXXXX' },
    { info: 'Complete Address with Pin Code', detail: 'Tanishka International Public School, Your City, State – PIN Code, India' },
    { info: 'Principal Name & Qualification', detail: 'Dr. Ramesh Sharma, Ph.D. in Education' },
    { info: 'School Email ID', detail: 'info@tanishkaips.com' },
    { info: 'Contact Details (Landline/Mobile)', detail: '+91 12345 67890 / +91 09876 54321' },
  ];

  const documentsInfo = [
    { info: 'Copies of Affiliation / Upgradation Letter', detail: 'CBSE Affiliation Certificate', doc: '#' },
    { info: 'Copies of Societies / Trust / Company Registration', detail: 'Registration Certificate', doc: '#' },
    { info: 'Copy of No Objection Certificate (NOC)', detail: 'NOC from State Govt', doc: '#' },
    { info: 'Copy of Recognition Certificate', detail: 'Recognition Certificate', doc: '#' },
    { info: 'Copy of Valid Building Safety Certificate', detail: 'Building Safety Certificate', doc: '#' },
    { info: 'Copy of Valid Fire Safety Certificate', detail: 'Fire Safety Certificate', doc: '#' },
    { info: 'Copy of the DEO Certificate submitted by the School', detail: 'DEO Certificate', doc: '#' },
    { info: 'Copies of Valid Water, Health & Sanitation Certificates', detail: 'Health Sanitation Certificate', doc: '#' },
  ];

  const resultInfo = [
    { info: 'Fee Structure of the School', detail: 'As per CBSE norms and school guidelines', doc: '#' },
    { info: 'Annual Academic Calendar', detail: 'Academic Year 2025-26', doc: '#' },
    { info: 'List of School Management Committee (SMC)', detail: 'List Available', doc: '#' },
    { info: 'List of Parents Teachers Association (PTA)', detail: 'List Available', doc: '#' },
    { info: 'Last Three-Year Result of the Board Examination', detail: 'Board Result Data', doc: '#' },
  ];

  const staffInfo = [
    { info: 'Principal', detail: 'Dr. Ramesh Sharma' },
    { info: 'Total No. of Teachers', detail: '80+' },
    { info: 'PGT Teachers', detail: '25' },
    { info: 'TGT Teachers', detail: '35' },
    { info: 'PRT Teachers', detail: '20+' },
    { info: 'Teachers Section Ratio', detail: '1:30' },
    { info: 'Details of Special Educator', detail: 'Available' },
    { info: 'Details of Counsellors', detail: 'Available' },
  ];

  const infrastructureInfo = [
    { info: 'Total Campus Area of the School', detail: 'As per CBSE norms (in sq. mtrs.)' },
    { info: 'No. & Size of Classrooms', detail: '50+ Classrooms (as per norms)' },
    { info: 'No. & Size of Laboratories', detail: '5 Laboratories (Science, Computer, Language, etc.)' },
    { info: 'Internet Facility (Y/N)', detail: 'Yes – High Speed Broadband' },
    { info: 'No. of Girls Toilets', detail: 'As per norms' },
    { info: 'No. of Boys Toilets', detail: 'As per norms' },
    { info: 'Link of YouTube Video of the Inspection of School Covering', detail: 'Available on Request', doc: '#' },
  ];

  return (
    <>
      <PageHeader
        title="Mandatory Public Disclosure"
        subtitle="Transparency and accountability — information disclosed as per CBSE norms"
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
              <p style={{color:'#555',fontSize:'0.88rem',lineHeight:'1.7',margin:0}}>
                As per CBSE guidelines, schools are required to publicly disclose the following information. This page is updated regularly to ensure transparency and accountability to all stakeholders including parents, students, and regulatory bodies. All information provided here is as per the latest CBSE affiliation norms.
              </p>
            </div>
          </div>

          <DisclosureTable title="A. General Information" rows={generalInfo} />
          <DisclosureTable title="B. Documents & Information" rows={documentsInfo} />
          <DisclosureTable title="C. Results & Academics" rows={resultInfo} />
          <DisclosureTable title="D. Staff (Teaching)" rows={staffInfo} />
          <DisclosureTable title="E. School Infrastructure" rows={infrastructureInfo} />

          {/* Download All */}
          <div style={{
            textAlign:'center',marginTop:'2.5rem',padding:'2.5rem',
            background:'white',borderRadius:'16px',
            boxShadow:'0 8px 30px rgba(0,0,0,0.08)'
          }}>
            <FaFilePdf style={{fontSize:'3rem',color:'#e63946',marginBottom:'1rem'}} />
            <h4 style={{color:'#003366',fontWeight:700,marginBottom:'0.7rem'}}>Download Complete Disclosure</h4>
            <p style={{color:'#666',fontSize:'0.9rem',marginBottom:'1.5rem',maxWidth:'480px',margin:'0 auto 1.5rem'}}>
              Download the complete mandatory disclosure document as required by CBSE for affiliated schools.
            </p>
            <div style={{display:'flex',gap:'12px',justifyContent:'center',flexWrap:'wrap'}}>
              <a href="#!" onClick={e=>e.preventDefault()} style={{
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
