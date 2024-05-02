import NavBar from '@/components/navigation/NavbarContainer';

export default function PrivacyPolicy() {
    const h2Style = { paddingTop: '2rem' };
    return (
        <>      
            <NavBar domain="www.wiki-science.com/" menuPath='./NavigationMenu' />
            <main>
                <h1>Privacy Policy of Wiki-Science.com</h1>
                
                <p>
                    Welcome to Wiki-Science.com. Your privacy is important to us. This Privacy Policy explains how we collect, use, protect, and in certain circumstances, share your personal and usage information when you visit our website.
                </p>

                <h2 style={h2Style}>Data Collected</h2>
                <p>
                    At Wiki-Science.com, we collect standard usage data through Google Analytics and cookies used for advertising purposes. This data includes information such as browser type, visited pages, time spent on each page, and IP address. We do not collect personal information for our internal use.
                </p>

                <h2 style={h2Style}>Use of Google Analytics and Advertising Cookies</h2>
                <p>
                    We use Google Analytics and advertising cookies to better understand how our visitors interact with the site and to serve relevant ads. Google Analytics collects data about your interaction with the site but does not gather personally identifiable information. For more details on how Google processes data, please visit <a href="https://policies.google.com/technologies/partner-sites">Google Analytics privacy policy</a>. To opt out of personalized advertising, you can use <a href="https://www.google.com/settings/ads">Google&apos;s Ads Settings</a>.
                </p>

                <h2 style={h2Style}>User Consent and Choices</h2>
                <p>
                    By using our site, you consent to the use of cookies and similar technologies for analytics and advertising. You have the option to refuse the use of cookies by changing your browser settings or by using privacy-enhancing tools and extensions.
                </p>

                <h2 style={h2Style}>GDPR Compliance</h2>
                <p>
                    For users in the European Union, we adhere to the General Data Protection Regulation (GDPR). You have the right to access, correct, or delete your data collected by us or Google Analytics. 
                </p>

                <h2 style={h2Style}>Data Security</h2>
                <p>
                    We implement security measures to protect our site and the integrity of usage data. While we do not store personal data, we take the protection of user information seriously.
                </p>

                <h2 style={h2Style}>External Links</h2>
                <p>
                    Our site may contain links to other websites. We are not responsible for the privacy practices of these external sites.
                </p>

                <h2 style={h2Style}>Changes to the Privacy Policy</h2>
                <p>
                    Wiki-Science.com reserves the right to modify this privacy policy at any time. We recommend reviewing it periodically. Changes will take effect immediately upon their posting on the site.
                </p>

                <h2 style={h2Style}>Contact</h2>
                <p>
                    If you have any questions or concerns about our privacy policy, please contact us at wikisciencemx@gmail.com.
                </p>
            </main>
        </>
    );
}
