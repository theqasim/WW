"use client";
import Header from "@/components/header";
import SubmitButton from "@/components/submit";
import TextAreaField from "@/components/textarea";
import InputField from "@/components/input";
import MyDialog from "@/components/popup";
import { useState, FormEvent, ChangeEvent } from "react";
import { useRouter } from "next/navigation";

const initState = {
  name: "",
  skill: "",
  email: "",
  message: "",
};

export default function Home() {
  const [data, setData] = useState(initState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log(JSON.stringify(data));

    const { name, skill, email, message } = data;

    const res = await fetch("/api/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        skill,
        email,
        message,
      }),
    });

    if (!res.ok) {
      console.error("Error submitting form:", await res.text());
      return;
    }
    localStorage.setItem("formSubmitted", "true");

    const result = await res.json();

    setIsSubmitting(false);
    router.push(`/registered`);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const name = e.target.name;

    setData((prevData) => ({
      ...prevData,
      [name]: e.target.value,
    }));
  };

  const canSave = [...Object.values(data)].every(Boolean);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12 bg-gradient-to-t from-violet-600 to-cyan-300">
      <div className="flex flex-col items-center justify-center lg:w-2/4 shadow-lg p-5 bg-white rounded-md font-mons">
        <Header />
        <MyDialog />
        <div className="flex items-center justify-center w-3/4 mt-10">
          <form onSubmit={handleSubmit} className="w-full max-w-md">
            <InputField
              label="Preferred name:"
              onChange={handleChange}
              value={data.name}
              id="fname"
              name="name"
              type="text"
            />
            <InputField
              label="Skillset:"
              onChange={handleChange}
              value={data.skill}
              id="fskill"
              name="skill"
              type="text"
            />
            <InputField
              label="Email:"
              onChange={handleChange}
              value={data.email}
              id="femail"
              name="email"
              type="email"
            />
            <TextAreaField
              label="Message:"
              onChange={handleChange}
              value={data.message}
              name="message"
              id="fmessage"
              rows={5}
              placeholder="How can you provide value.."
            />
            <div className="flex items-center justify-center">
              <SubmitButton>
                {isSubmitting ? "Submitting.." : "Submit"}
              </SubmitButton>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
