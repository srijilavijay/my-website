import React from 'react'

function Footer1() {
  const footerStyle = {
    color:"white",
    backgroundColor:"black",
    fontSize:"14px",
    height:"150px",
    padding:"20px"
  };
  return (
    <div style={footerStyle}>
      <p>The Nature Conservancy is a nonprofit, tax-exempt charitable organization (tax identification number 53-0242652) under Section 501(c)(3) of the U.S. Internal Revenue Code. Donations are tax-deductible as allowed by law. Global sites represent either regional branches of The Nature Conservancy or local affiliates of The Nature Conservancy that are separate entities. This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
     <br />
      <p>© 2023 The Nature Conservancy Terms of Use | Privacy Statement | Charitable Solicitation Disclosures | Mobile Terms & Conditions | Notice of Nondiscrimination</p>
    </div>
  )
}

export default Footer1