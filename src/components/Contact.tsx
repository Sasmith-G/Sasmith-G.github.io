"use client";

import Image from "next/image";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { Mail, Phone } from "lucide-react";
import { Card } from "@/components/ui";
import { GithubIcon, GmailIcon, LinkedinIcon, WhatsappIcon } from "@/components/icons";

const contactInfo = [
  { title: "Mail", kind: "mail", arr: ["gsasmith456@gmail.com"] },
  { title: "Phone", kind: "phone", arr: ["+91 7671979406"] },
];
const social = {
  whatsapp: "https://wa.me/917671979406",
  linkedin: "https://www.linkedin.com/in/sasmith-g-379405284/",
  github: "https://github.com/Sasmith-G",
  // Opens Gmail's compose window addressed to me; the visitor writes the subject
  gmail: "https://mail.google.com/mail/?view=cm&fs=1&to=gsasmith456@gmail.com",
};

const FORMSPREE_URL = "https://formspree.io/f/xovngpgr";

const empty = { name: "", email: "", subject: "", message: "" };
const inputClass =
  "px-3 py-2 w-full bg-gradient-to-r from-[rgb(45,45,45)] via-[rgb(35,35,35)] to-[rgb(30,30,30)] rounded-xl";

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    setStatus("");
    try {
      // Formspree uses `email` as the reply-to address and `_subject` as the email subject
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...form, _subject: form.subject }),
      });
      if (res.ok) {
        setStatus("Message sent successfully!");
        setForm(empty);
      } else {
        const data = await res.json().catch(() => null);
        setStatus(data?.errors?.[0]?.message || "Failed to send message.");
      }
    } catch (err) {
      console.log(err);
      setStatus("Failed to send message.");
    }
    setSending(false);
  };

  return (
    <section className="w-full h-full flex flex-col gap-5 mb-20 scroll-mt-32" id="contact">
      <Card className="relative flex w-full flex-col gap-5 max-h-full xl:col-span-2">
        <Image
          src="/dropstar.svg"
          alt="dropstar"
          width={20}
          height={100}
          className="absolute top-0 right-5 w-[4vw] sm:w-[30px] md:w-[40px] min-w-[20px]"
        />
        <div className="flex flex-col w-[75%]">
          <p className="text-2xl md:text-3xl">Let&apos;s</p>
          <p className="text-2xl text-blue-500 md:text-3xl">Connect.</p>
        </div>
        <form onSubmit={onSubmit} className="flex flex-col gap-3">
          <input type="text" name="name" placeholder="Name *" className={inputClass} value={form.name} onChange={onChange} required />
          <input type="email" name="email" placeholder="Email *" className={inputClass} value={form.email} onChange={onChange} required />
          <input type="text" name="subject" placeholder="Your Subject *" className={inputClass} value={form.subject} onChange={onChange} required />
          <textarea name="message" rows={10} placeholder="Your Message *" className={inputClass} value={form.message} onChange={onChange} required />
          <button type="submit" className="bg-[rgb(65,64,64)] px-5 py-2 rounded-xl" disabled={sending}>
            {sending ? "Sending..." : "Send Message"}
          </button>
          {status && <p className="text-white">{status}</p>}
        </form>
      </Card>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col items-center w-full gap-5">
          <h1 className="uppercase">Contact Info</h1>
          <div className="grid grid-cols-1 gap-5">
            {contactInfo.map((info) => (
              <div key={info.title} className="flex w-full gap-3">
                <div className="bg-gradient-to-br from-[rgb(40,40,40)] to-[rgb(20,20,20)] p-5 rounded-xl flex justify-center items-center">
                  {info.kind === "phone" ? (
                    <Phone className="brightness-75 text-white" />
                  ) : (
                    <Mail className="brightness-75 text-white" />
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <p className="uppercase text-sm brightness-50">{info.title}</p>
                  <div className="brightness-75">
                    {info.arr.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center gap-5">
          <h1 className="uppercase">Social Info</h1>
          <div className="text-white flex justify-evenly w-full">
            <a href={social.whatsapp} target="_blank" className="p-3 rounded-full bg-[rgb(45,45,45)] cursor-pointer">
              <div className="brightness-75 hover:brightness-100">
                <WhatsappIcon width={24} height={24} />
              </div>
            </a>
            <a href={social.linkedin} target="_blank" className="p-3 rounded-full bg-[rgb(45,45,45)] cursor-pointer">
              <div className="brightness-75 hover:brightness-100">
                <LinkedinIcon width={24} height={24} />
              </div>
            </a>
            <a href={social.github} target="_blank" className="p-3 rounded-full bg-[rgb(45,45,45)] cursor-pointer">
              <div className="brightness-75 hover:brightness-100">
                <GithubIcon width={24} height={24} />
              </div>
            </a>
            <a href={social.gmail} target="_blank" className="p-3 rounded-full bg-[rgb(45,45,45)] cursor-pointer">
              <div className="brightness-75 hover:brightness-100">
                <GmailIcon width={24} height={24} className="p-[1px]" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
