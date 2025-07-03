// pages/terms-and-conditions.js

import React from "react";

// components
import MenuOne from "@/components/Header/Menu/MenuOne";
import Footer from "@/components/Footer";

const TermsAndConditions = () => {
  const htmlFile = `
    <div class="max-w-screen-xl mx-auto px-6 py-10">
      <h1 class="text-4xl font-bold mb-4">Terms and Conditions</h1>
      <p class="mb-4">Welcome to shoppinglala! These terms and conditions outline the rules and regulations for the use of shoppinglala's Website.</p>
      <p class="mb-4">By accessing this website we assume you accept these terms and conditions. Do not continue to use shoppinglala if you do not agree to take all of the terms and conditions stated on this page.</p>

      <h2 class="text-2xl font-semibold mt-6 mb-2">License</h2>
      <p class="mb-4">Unless otherwise stated, shoppinglala and/or its licensors own the intellectual property rights for all material on shoppinglala. All intellectual property rights are reserved. You may access this from shoppinglala for your own personal use subjected to restrictions set in these terms and conditions.</p>

      <h2 class="text-2xl font-semibold mt-6 mb-2">User Comments</h2>
      <p class="mb-4">Certain parts of this website offer the opportunity for users to post and exchange opinions and information in certain areas of the website. shoppinglala does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of shoppinglala, its agents, and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions.</p>

      <h2 class="text-2xl font-semibold mt-6 mb-2">Hyperlinking to our Content</h2>
      <p class="mb-4">The following organizations may link to our Website without prior written approval:</p>
      <ul class="list-disc list-inside mb-4">
        <li>Government agencies</li>
        <li>Search engines</li>
        <li>News organizations</li>
        <li>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses</li>
        <li>System-wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site</li>
      </ul>

      <h2 class="text-2xl font-semibold mt-6 mb-2">iFrames</h2>
      <p class="mb-4">Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.</p>

      <h2 class="text-2xl font-semibold mt-6 mb-2">Content Liability</h2>
      <p class="mb-4">We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.</p>

      <h2 class="text-2xl font-semibold mt-6 mb-2">Your Privacy</h2>
      <p class="mb-4">Please read our Privacy Policy.</p>

      <h2 class="text-2xl font-semibold mt-6 mb-2">Reservation of Rights</h2>
      <p class="mb-4">We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amend these terms and conditions and it’s linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.</p>

      <h2 class="text-2xl font-semibold mt-6 mb-2">Removal of links from our website</h2>
      <p class="mb-4">If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.</p>

      <h2 class="text-2xl font-semibold mt-6 mb-2">Disclaimer</h2>
      <p class="mb-4">To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:</p>
      <ul class="list-disc list-inside mb-4">
        <li>limit or exclude our or your liability for death or personal injury;</li>
        <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
        <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
        <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
      </ul>
      <p class="mb-4">The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.</p>
      <p class="mb-4">As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.</p>
    </div>
  `;

  return (
    <div>
      <MenuOne props="bg-white"/>
      <div dangerouslySetInnerHTML={{ __html: htmlFile }} />
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
