import footerImg from "/src/assets/images/logoFooter.png";

function Footer() {
  return (
    <div className="footer">
      <img src={footerImg} alt="footer kasa" className="footer-img" />
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
}
  
  export default Footer;