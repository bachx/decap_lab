'use client';
import { useEffect } from "react";
import Script from "next/script";

interface NetlifyIdentity {
  on: (event: string, callback: (user: any) => void) => void; // Update here
  // Add other properties and methods as needed
}

declare global {
  interface Window {
    netlifyIdentity: NetlifyIdentity;
  }
}

const CMSPage: React.FC = () => {
  useEffect(() => {
    // Initialize Netlify Identity
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", (user) => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }

      // Dynamically add the decap-cms script in the body
      // const script = document.createElement("script");
      // script.src = "https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js";
      // script.async = true;
      // document.body.appendChild(script);

      // return () => {
      //   document.body.removeChild(script);
      // };
  }, []);

  return (
    <>
      <Script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js" />
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
      <main id="cms" />
    </>
  );
};

export default CMSPage;