import { Facebook, Instagram, Music2 } from "lucide-react"; // استيراد الأيقونات

export default function Footer() {
  return (
    <footer
      style={{
        background: "#111",
        color: "#fff",
        padding: "30px",
        textAlign: "center",
        marginTop: "40px",
      }}
    >
      {/* عنوان نهاية المنيو - تم تكبيره وجعله عريضاً */}
      <h1 style={{ 
  marginBottom: "15px", 
  fontSize: "clamp(20px, 6vw, 40px)",   // 🔥 Responsive
  fontWeight: "900",
  width: "100%",
  textTransform: "uppercase",
  letterSpacing: "1px",
  lineHeight: "1.3"                     // يخلي الشكل أريح في الموبايل
}}>
  Menu is over <br /> 
  <span style={{ fontSize: "clamp(24px, 7vw, 48px)" }}>
    المنيو انتهى
  </span>
</h1>

      <p style={{ margin: "15px 0" }}>للتواصل:</p>

      {/* قسم السوشيال ميديا */}
      <div style={{ 
        display: "flex", 
        justifyContent: "center", 
        gap: "20px", 
        marginBottom: "20px" 
      }}>
        {/* فيسبوك */}
        <a href="https://www.facebook.com/Roof409" target="_blank" rel="noopener noreferrer" style={{ color: "#fff" }}>
          <Facebook size={28} />
        </a>

        {/* إنستجرام */}
        <a href="https://www.instagram.com/roof.409/" target="_blank" rel="noopener noreferrer" style={{ color: "#fff" }}>
          <Instagram size={28} />
        </a>

        {/* تيك توك */}
        <a href="https://www.tiktok.com/@roof.4098?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" style={{ color: "#fff" }}>
          <Music2 size={28} />
        </a>
      </div>

      {/* العنوان الجغرافي */}
      <p style={{ lineHeight: "1.6" }}>
        Qena - Naqa Hammadi - third floor above the Agricultural Club <br />
        قنا - نجع حمادي - الدور الثالث اعلى نادي الزراعيين
      </p>

      {/* رقم التليفون - رابط مباشر للاتصال */}
      <p style={{ marginTop: "15px" }}>
        <a 
          href="tel:+201202521270" 
          style={{ 
            color: "#fff", 
            textDecoration: "none", 
            display: "inline-flex", 
            alignItems: "center", 
            gap: "8px",
            fontSize: "18px",
            fontWeight: "bold"
          }}
        >
           +2001202521270   
        </a>
      </p>

      {/* حقوق الملكية */}
      <p style={{ marginTop: "25px", fontSize: "14px", opacity: 0.6 }}>
        Copyright Roof 409 © 2022 - 2026 <br /><br />
        Powered by Mostafa Abdo _01032339894
      </p>
    </footer>
  );
}