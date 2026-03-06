import { EtherealShadow } from "@/components/ui/etheral-shadow";
import styles from "@/styles/legal.module.css";

export const metadata = {
    title: "Terms of Service — Cashiro",
    description: "Terms and conditions for using the Cashiro open-source application.",
};

export default function TermsPage() {
    return (
        <div className={styles.legalPage}>
            <section className={styles.header}>
                <div className={styles.heroBackground}>
                    <EtherealShadow
                        color="rgba(255, 255, 255, 0.1)"
                        animation={{ scale: 40, speed: 20 }}
                        noise={{ opacity: 0.3, scale: 0.5 }}
                        sizing="fill"
                    />
                </div>
                <div className="container">
                    <div className={styles.headerContent}>
                        <h1>Terms of Service</h1>
                        <p className={styles.lastUpdated}>Last Updated: March 2026</p>
                    </div>
                </div>
                <div className={styles.scallopDivider}></div>
            </section>

            <section className={styles.content}>
                <div className="container">
                    <div className={styles.legalBody}>
                        <h2>1. Acceptance of Terms</h2>
                        <p> By downloading or using the Cashiro application, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use the application.</p>

                        <h2>2. Open Source License</h2>
                        <p>Cashiro is open-source software licensed under the <strong>GPL-3.0 License</strong>. You are free to use, modify, and distribute the application in accordance with the terms of that license.</p>

                        <h2>3. No Warranty</h2>
                        <p>THE APPLICATION, CASHIRO IS PROVIDED BY RITESH KANWAR (THE DEVELOPER) "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>

                        <h2>4. Use of the Application</h2>
                        <p>You are responsible for maintaining the confidentiality of your device and any data exported from the application. We recommend using device-level encryption and biometrics to secure your local data.</p>

                        <h2>5. Limitation of Liability</h2>
                        <p>Cashiro is a tool for personal financial management. The creators of Cashiro are not responsible for any financial decisions made based on the data presented in the app, nor for any loss of data occurring on your device. Any statistics displayed in the Application may be incomplete or incorrect; you are responsible for verifying information before relying on it. Cashiro is for informational purposes only and does not provide financial, tax, or legal advice. </p>

                        <h2>6. Governing Law</h2>
                        <p>These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which the user resides, as the software is distributed globally as an open-source project.</p>

                        <h2>7. Termination</h2>
                        <p>These Terms remain in effect until terminated. You may stop using the Application at any time. The developer reserves the right to terminate your access to the Application at any time, without prior notice or explanation.</p>

                        <h2>8. Updates, Availability and Support</h2>
                        <p>The Developer may modify, suspend, or discontinue any part of the Application at any time, including features and supported integrations, and may release updates without obligation to continue supporting prior versions.</p>



                    </div>
                </div>
            </section>
        </div>
    );
}
