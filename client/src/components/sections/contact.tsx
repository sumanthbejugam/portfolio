import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RESUME_DATA } from "@/lib/constants";
import { fadeIn } from "@/lib/animations";
import { Mail, Phone } from "lucide-react";
import { FiLinkedin } from "react-icons/fi"

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <a href={`mailto:${RESUME_DATA.email}`}>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="flex items-center gap-4 p-6">
                  <Mail className="h-6 w-6" />
                  <span className="text-sm">{RESUME_DATA.email}</span>
                </CardContent>
              </Card>
            </a>

            <a href={`tel:${RESUME_DATA.phone}`}>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="flex items-center gap-4 p-6">
                  <Phone className="h-6 w-6" />
                  <span className="text-sm">{RESUME_DATA.phone}</span>
                </CardContent>
              </Card>
            </a>

            <a href={`https://${RESUME_DATA.linkedin}`} target="_blank" className="md:col-span-2">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="flex items-center gap-4 p-6">
                  <FiLinkedin className="h-6 w-6" />
                  <span className="text-sm">{RESUME_DATA.linkedin}</span>
                </CardContent>
              </Card>
            </a>
          </div>

          <iframe
            src="https://us19.list-manage.com/contact-form?u=c98b8789c071c32bfba4f3e27&form_id=8d6fba78d0a4c4d6d6fa284e100f3f0b"
            title="Contact Form"
            style={{
              width: "100%",
              height: "100rem",
              border: "none",
              overflow: "hidden",
            }}
            allowFullScreen
          ></iframe>

          {false && (<div id="mc_embed_shell">
            <link
              href="//cdn-images.mailchimp.com/embedcode/classic-061523.css"
              rel="stylesheet"
              type="text/css"
            />
            <style>
              {`
              #mc_embed_signup {
                background: #fff;
                clear: left;
                font: 14px Helvetica, Arial, sans-serif;
                width: 600px;
              }`}
            </style>
            <div id="mc_embed_signup">
              <form
                action="https://gmail.us19.list-manage.com/subscribe/post?u=c98b8789c071c32bfba4f3e27&amp;id=656a6542d6&amp;f_id=00dfc2e1f0"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate"
                target="_blank"
              >
                <div id="mc_embed_signup_scroll">
                  <div className="indicates-required">
                    <span className="asterisk">*</span> indicates required
                  </div>
                  <div className="mc-field-group">
                    <label htmlFor="mce-EMAIL">
                      Email Address <span className="asterisk">*</span>
                    </label>
                    <input
                      type="email"
                      name="EMAIL"
                      className="required email"
                      id="mce-EMAIL"
                      required
                    />
                  </div>
                  <div className="mc-field-group">
                    <label htmlFor="mce-FNAME">Full Name</label>
                    <input type="text" name="FNAME" className="text" id="mce-FNAME" />
                  </div>
                  <div className="mc-field-group">
                    <label htmlFor="mce-LNAME">Message</label>
                    <input type="text" name="LNAME" className="text" id="mce-LNAME" />
                  </div>
                  <div className="mc-field-group">
                    <label htmlFor="mce-COMPANY">Company</label>
                    <input type="text" name="COMPANY" className="text" id="mce-COMPANY" />
                  </div>
                  <div id="mce-responses" className="clear foot">
                    <div className="response" id="mce-error-response" style={{ display: "none" }}></div>
                    <div className="response" id="mce-success-response" style={{ display: "none" }}></div>
                  </div>
                  <div
                    aria-hidden="true"
                    style={{ position: "absolute", left: "-5000px" }}
                  >
                    <input
                      type="text"
                      name="b_c98b8789c071c32bfba4f3e27_656a6542d6"
                      tabIndex={-1}
                      value=""
                    />
                  </div>
                  <div className="optionalParent">
                    <div className="clear foot">
                      <input
                        type="submit"
                        name="subscribe"
                        id="mc-embedded-subscribe"
                        className="button"
                        value="Submit"
                      />
                      <p style={{ margin: "0px auto" }}>
                        <a
                          href="http://eepurl.com/jaUd56"
                          title="Mailchimp - email marketing made easy and fun"
                        >
                          <span
                            style={{
                              display: "inline-block",
                              backgroundColor: "transparent",
                              borderRadius: "4px",
                            }}
                          >
                            <img
                              className="refferal_badge"
                              src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg"
                              alt="Intuit Mailchimp"
                              style={{
                                width: "220px",
                                height: "40px",
                                display: "flex",
                                padding: "2px 0px",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            />
                          </span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>) }


          {/* <form className="space-y-6">
            <Input placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <Textarea placeholder="Your Message" className="min-h-[150px]" />
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form> */}

        </motion.div>
      </div>
    </section>
  );
}
