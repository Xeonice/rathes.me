import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const Legal = ({ data }) => (
  <Layout className="p-4 md:p-8">
    <SEO title="Legal Information" />
    <section className="md:max-w-570px md:text-lg">
      <h1 className="text-3xl font-bold leading-none text-white break-words xs:text-4xl">
        Legal Information
      </h1>
      <h2 className="mt-8 font-bold leading-none text-white">
        Pursuant to § 5 TMG:
      </h2>
      <p>
        Rathes Sachchithananthan <br />
        Braderijstraat 5 <br />
        9000 Gent, Belgium
      </p>
      <h2 className="mt-8 font-bold leading-none text-white">Contact</h2>
      <p>
        Phone: +32 483 463 944 <br />
        E-Mail: sachchi@rathes.de
      </p>
      <h2 className="mt-8 text-xl font-bold leading-normal text-white">
        Disclaimer
      </h2>
      <h3 className="mt-4 text-sm font-bold leading-none text-white">
        Google Analytics
      </h3>
      <p className="mt-2">
        This website uses Google Analytics, a web analytics service provided by
        Google, Inc. (“Google”). Google Analytics uses “cookies”, which are text
        files placed on your computer, to help the website analyze how users use
        the site. The information generated by the cookie about your use of the
        website will be transmitted to and stored by Google on servers in the
        United States .
      </p>
      <p>
        In case IP-anonymisation is activated on this website, your IP address
        will be truncated within the area of Member States of the European Union
        or other parties to the Agreement on the European Economic Area. Only in
        exceptional cases the whole IP address will be first transfered to a
        Google server in the USA and truncated there. The IP-anonymisation is
        active on this website.
      </p>
      <p>
        Google will use this information on behalf of the operator of this
        website for the purpose of evaluating your use of the website, compiling
        reports on website activity for website operators and providing them
        other services relating to website activity and internet usage.
      </p>
      <p>
        The IP-address, that your Browser conveys within the scope of Google
        Analytics, will not be associated with any other data held by Google.
        You may refuse the use of cookies by selecting the appropriate settings
        on your browser, however please note that if you do this you may not be
        able to use the full functionality of this website. You can also opt-out
        from being tracked by Google Analytics with effect for the future by
        downloading and installing Google Analytics Opt-out Browser Addon for
        your current web browser:{" "}
        <a
          className="text-white underline"
          href="http://tools.google.com/dlpage/gaoptout?hl=en"
        >
          http://tools.google.com/dlpage/gaoptout?hl=en
        </a>
        .
      </p>
      <h2 className="mt-8 text-xl font-bold leading-normal text-white">
        Limitation of liability for internal content
      </h2>
      <p>
        The content of our website has been compiled with meticulous care and to
        the best of our knowledge. However, we cannot assume any liability for
        the up-to-dateness, completeness or accuracy of any of the pages.
      </p>
      <p>
        Pursuant to section 7, para. 1 of the TMG (Telemediengesetz – Tele Media
        Act by German law), we as service providers are liable for our own
        content on these pages in accordance with general laws. However,
        pursuant to sections 8 to 10 of the TMG, we as service providers are not
        under obligation to monitor external information provided or stored on
        our website. Once we have become aware of a specific infringement of the
        law, we will immediately remove the content in question. Any liability
        concerning this matter can only be assumed from the point in time at
        which the infringement becomes known to us.
      </p>
      <h3 className="mt-4 text-sm font-bold leading-none text-white">
        Limitation of liability for external links
      </h3>
      <p>
        Our website contains links to the websites of third parties (“external
        links”). As the content of these websites is not under our control, we
        cannot assume any liability for such external content. In all cases, the
        provider of information of the linked websites is liable for the content
        and accuracy of the information provided. At the point in time when the
        links were placed, no infringements of the law were recognisable to us.
        As soon as an infringement of the law becomes known to us, we will
        immediately remove the link in question.
      </p>
      <h3 className="mt-4 text-sm font-bold leading-none text-white">
        Copyright
      </h3>
      <p>
        The content and works published on this website are governed by the
        copyright laws of Germany. Any duplication, processing, distribution or
        any form of utilisation beyond the scope of copyright law shall require
        the prior written consent of the author or authors in question.
      </p>
      <h3 className="mt-4 text-sm font-bold leading-none text-white">
        Data protection
      </h3>
      <p>
        A visit to our website can result in the storage on our server of
        information about the access (date, time, page accessed). This does not
        represent any analysis of personal data (e.g., name, address or e-mail
        address). If personal data are collected, this only occurs – to the
        extent possible – with the prior consent of the user of the website. Any
        forwarding of the data to third parties without the express consent of
        the user shall not take place.
      </p>
      <p>
        We would like to expressly point out that the transmission of data via
        the Internet (e.g., by e-mail) can offer security vulnerabilities. It is
        therefore impossible to safeguard the data completely against access by
        third parties. We cannot assume any liability for damages arising as a
        result of such security vulnerabilities.
      </p>
      <p>
        The use by third parties of all published contact details for the
        purpose of advertising is expressly excluded. We reserve the right to
        take legal steps in the case of the unsolicited sending of advertising
        information; e.g., by means of spam mail.
      </p>
      <p className="text-sm mt-12">
        Source:{" "}
        <a
          className="text-white underline"
          href="http://www.mustervorlage.net/disclaimer-muster#Englisch"
        >
          English Disclaimer on Mustervorlage.net
        </a>
      </p>
    </section>
  </Layout>
)

export default Legal
