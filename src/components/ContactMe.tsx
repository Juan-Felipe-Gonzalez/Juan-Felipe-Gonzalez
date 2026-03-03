import { useApp } from "../context/AppContext";
import { translations } from "../data/translations";
import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import linkedinImg from "../assets/img/Logos/LinkedIn.webp";
import github from "../assets/img/Logos/github.webp";
import resumePdf from "../assets/pdf/Juan Felipe Gonzalez Desarrollador Backend.pdf";

export default function ContactMe() {
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_KEY);

  const { language } = useApp();
  const translation = translations[language];
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    description: "",
  });

  const handlePreSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedSubject = subject.trim();
    const trimmedDescription = description.trim();

    const newErrors = {
      name: "",
      email: "",
      subject: "",
      description: "",
    };

    if (trimmedName.length < 2 || trimmedName.length > 100) {
      newErrors.name = "Name must be between 2 and 100 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail) || trimmedEmail.length > 100) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (trimmedSubject.length < 5 || trimmedSubject.length > 150) {
      newErrors.subject = "Subject must be between 5 and 150 characters.";
    }

    if (trimmedDescription.length < 10 || trimmedDescription.length > 1000) {
      newErrors.description = "Message must be between 10 and 1000 characters.";
    }

    if (Object.values(newErrors).some((msg) => msg !== "")) {
      setErrors(newErrors);
      return;
    }

    setErrors(newErrors);
    handleSubmit(e);
  };

  return (
    <div className="w-[95%] max-w-[1200px] mx-auto lg:w-full mt-12">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] items-start">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white">
            {translation.contact.contact}
          </h2>
          <p className="text-white text-[1.3rem] md:text-[1.6rem] leading-relaxed">
            {translation.developer.contactMessage}
          </p>

          <ul className="flex flex-col">
            <li className="flex gap-8 list-none mb-3 md:mb-0">
              <a
                href="https://www.linkedin.com/in/juan-felipe-gonzalez-fullstack/"
                target="_blank"
                className="flex items-center justify-center h-22 w-22 shrink-0 p-4 bg-[#1e2022]/50 rounded-2xl"
              >
                <img
                  src={linkedinImg}
                  alt="LinkedIn Logo"
                  className="max-h-full max-w-full w-auto object-contain"
                  height="50"
                  width="50"
                />
              </a>
              <a
                href="https://github.com/Juan-Felipe-Gonzalez"
                target="_blank"
                className="flex items-center justify-center h-22 w-22 shrink-0 p-4 bg-[#1e2022]/50 rounded-2xl"
              >
                <img
                  src={github}
                  alt="github logo"
                  className="max-h-full max-w-full w-auto object-contain"
                  height="50"
                  width="50"
                />
              </a>
              <a
                href="https://wa.me/573214984686"
                target="_blank"
                className="flex items-center justify-center h-22 w-22 shrink-0 p-4 bg-[#1e2022]/50 rounded-2xl text-white font-bold text-3xl"
              >
                <i className="fa-brands fa-whatsapp text-[#25d366] text-5xl"></i>
              </a>
              <a
                href="mailto:felgart22@gmail.com"
                target="_blank"
                className="flex items-center justify-center h-22 w-22 shrink-0 p-4 bg-[#1e2022]/50 rounded-2xl"
              >
                <i className="fa-solid fa-at text-white text-5xl"></i>
              </a>
              <a
                href={resumePdf}
                target="_blank"
                className="flex items-center justify-center h-22 w-22 shrink-0 p-4 bg-[#1e2022]/50 rounded-2xl text-white font-bold text-3xl"
              >
                CV
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full border border-[#2a2c30] rounded-2xl bg-[#1e2022]/50 p-6 md:p-8 shadow-xl shadow-black/40">
          {state.succeeded == false ? (
            <form
              onSubmit={event => handlePreSubmit(event)}
              className="flex flex-col gap-4 md:gap-5"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-name"
                    className="text-white font-medium text-xl md:text-2xl"
                  >
                    {translation.contact.name}
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    name="contact-name"
                    onChange={(e) => setName(e.target.value)}
                    required
                    minLength={2}
                    maxLength={100}
                    className="w-full px-4 py-3 rounded-xl bg-[#232528] border border-[#2a2c30] text-white placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#1d88b9] focus:border-transparent text-xl md:text-2xl"
                    placeholder={translation.contact.name}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm">{errors.name}</p>
                  )}
                  <ValidationError
                    prefix={translation.contact.name}
                    field="contact-name"
                    errors={state.errors}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-email"
                    className="text-white font-medium text-xl md:text-2xl"
                  >
                    {translation.contact.email}
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    name="contact-email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    maxLength={100}
                    className="w-full px-4 py-3 rounded-xl bg-[#232528] border border-[#2a2c30] text-white placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#1d88b9] focus:border-transparent text-xl md:text-2xl"
                    placeholder={translation.contact.email}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm">{errors.email}</p>
                  )}
                  <ValidationError
                    prefix={translation.contact.email}
                    field="contact-email"
                    errors={state.errors}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-subject"
                  className="text-white font-medium text-xl md:text-2xl"
                >
                  {translation.contact.subject}
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={subject}
                  name="contact-subject"
                  onChange={(e) => setSubject(e.target.value)}
                  required
                  minLength={5}
                  maxLength={150}
                  className="w-full px-4 py-3 rounded-xl bg-[#232528] border border-[#2a2c30] text-white placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#1d88b9] focus:border-transparent text-xl md:text-2xl"
                  placeholder={translation.contact.subject}
                />
                {errors.subject && (
                  <p className="text-red-400 text-sm">{errors.subject}</p>
                )}
                <ValidationError
                  prefix={translation.contact.subject}
                  field="contact-subject"
                  errors={state.errors}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-description"
                  className="text-white font-medium text-xl md:text-2xl"
                >
                  {translation.contact.description}
                </label>
                <textarea
                  id="contact-description"
                  value={description}
                  name="contact-description"
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  minLength={10}
                  maxLength={1000}
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl bg-[#232528] border border-[#2a2c30] text-white placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#1d88b9] focus:border-transparent text-lg md:text-xl resize-y min-h-[80px]"
                  placeholder={translation.contact.description}
                />
                {errors.description && (
                  <p className="text-red-400 text-sm">{errors.description}</p>
                )}
                <ValidationError
                  prefix={translation.contact.description}
                  field="contact-description"
                  errors={state.errors}
                />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full px-8 py-3 md:py-4 mt-1 rounded-xl bg-[#1d88b9] text-white font-bold text-xl md:text-2xl hover:bg-[#167099] focus:outline-none focus:ring-2 focus:ring-[#1d88b9] focus:ring-offset-2 focus:ring-offset-[#232528] transition-colors"
              >
                {state.submitting ?
                  (<>{translation.contact.submitting}</>) :
                  (<>{translation.contact.contact}</>)
                }
              </button>
            </form>
          ) : (
            <p className="font-bold text-3xl text-white">
              {translation.contact.succes}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
