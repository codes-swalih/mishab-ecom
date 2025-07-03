// pages/privacy-policy.js

import React from "react";

// MUI
import { Container, Box } from "@mui/material";

// Components
import MenuOne from "@/components/Header/Menu/MenuOne";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  const htmlFile = `
    <div class="space-y-6 text-gray-800 text-base leading-relaxed">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
      <p><strong>Last updated:</strong> May 31, 2025</p>
      <p>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>
      <p>We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.</p>
      
      <h2 class="text-2xl font-semibold mt-10">Interpretation and Definitions</h2>
      <h3 class="text-xl font-medium mt-6">Interpretation</h3>
      <p>The words with capitalized letters have meanings defined below...</p>

      <h3 class="text-xl font-medium mt-6">Definitions</h3>
      <ul class="list-disc pl-6 space-y-2">
        <li><strong>Account:</strong> A unique account created for You to access our Service.</li>
        <li><strong>Affiliate:</strong> Entity that controls or is under common control with a party.</li>
        <li><strong>Company:</strong> Refers to shoppinglala.</li>
        <li><strong>Cookies:</strong> Small files stored on Your device that track browsing history.</li>
        <li><strong>Country:</strong> Kerala, India</li>
        <li><strong>Device:</strong> Any device used to access the Service like a computer or phone.</li>
        <li><strong>Personal Data:</strong> Any information that relates to an identified person.</li>
        <li><strong>Service:</strong> Refers to the Website.</li>
        <li><strong>Service Provider:</strong> Any person processing data on behalf of the Company.</li>
        <li><strong>Usage Data:</strong> Data collected automatically from the Service usage.</li>
        <li><strong>Website:</strong> shoppinglala (<a class="text-blue-600 underline" href="http://www.shoppinglala.com" target="_blank">shoppinglala.com</a>)</li>
        <li><strong>You:</strong> The individual accessing or using the Service.</li>
      </ul>

      <h2 class="text-2xl font-semibold mt-10">Collecting and Using Your Personal Data</h2>
      <h3 class="text-xl font-medium mt-6">Types of Data Collected</h3>

      <h4 class="text-lg font-semibold mt-4">Personal Data</h4>
      <ul class="list-disc pl-6">
        <li>Email address</li>
        <li>Usage Data</li>
      </ul>

      <h4 class="text-lg font-semibold mt-4">Usage Data</h4>
      <p>Automatically collected, including IP address, browser type, pages visited, etc.</p>

      <h4 class="text-lg font-semibold mt-4">Tracking Technologies and Cookies</h4>
      <p>We use cookies and similar technologies like beacons, tags, and scripts for analytics and improvement.</p>
      <ul class="list-disc pl-6">
        <li><strong>Browser Cookies:</strong> Stored on your device. Can be disabled via browser settings.</li>
        <li><strong>Web Beacons:</strong> Tiny files that track user behavior on pages and emails.</li>
      </ul>

      <h3 class="text-xl font-medium mt-6">Use of Your Personal Data</h3>
      <ul class="list-disc pl-6">
        <li>To maintain and monitor the Service</li>
        <li>To manage user accounts</li>
        <li>To perform contracts and transactions</li>
        <li>To contact You (email, SMS, notifications)</li>
        <li>To provide offers or marketing (unless opted out)</li>
        <li>To respond to requests</li>
        <li>To analyze and improve service</li>
      </ul>

      <h3 class="text-xl font-medium mt-6">Sharing of Personal Data</h3>
      <ul class="list-disc pl-6">
        <li>With service providers</li>
        <li>During business transfers</li>
        <li>With affiliates and partners</li>
        <li>With other users (public posts)</li>
        <li>With consent</li>
      </ul>

      <h3 class="text-xl font-medium mt-6">Retention and Deletion</h3>
      <p>We retain personal data as long as necessary and delete upon request unless legally required to keep it.</p>

      <h3 class="text-xl font-medium mt-6">Transfer of Data</h3>
      <p>Your data may be transferred to other jurisdictions. We ensure it’s handled securely with legal compliance.</p>

      <h3 class="text-xl font-medium mt-6">Children’s Privacy</h3>
      <p>We do not knowingly collect data from anyone under 13. If you are a parent and find your child has submitted data, please contact us to remove it.</p>

      <h3 class="text-xl font-medium mt-6">External Links</h3>
      <p>Our site may contain links to external websites. We are not responsible for their privacy practices.</p>

      <h3 class="text-xl font-medium mt-6">Changes to This Policy</h3>
      <p>We may update this policy. Users will be notified on this page with a revised date.</p>

      <h3 class="text-xl font-medium mt-6">Contact Us</h3>
      <p>Email us at <a class="text-blue-600 underline" href="mailto:shoppinglala@gmail.com">shoppinglala@gmail.in</a></p>
    </div>
  `;

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <MenuOne props="bg-white" />
      <Container maxWidth="md" sx={{ my: 6, marginTop: 10 }}>
        <Box
          sx={{
            backgroundColor: "#f9fafb",
            borderRadius: 2,
            p: { xs: 3, md: 5 },
            boxShadow: 1,
          }}
        >
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: htmlFile }} />
        </Box>
      </Container>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
