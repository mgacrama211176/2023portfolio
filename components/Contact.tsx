import React, { useState } from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/20/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";
import axios from "axios";
import { Inputs } from "./types";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    try {
      await axios.post("/api/email", formData);
      setIsSuccess(true);
      setIsError(false);
      reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      setIsError(true);
      setIsSuccess(false);
      setTimeout(() => setIsError(false), 5000);
    }
  };

  return (
    <section className="h-full bg-white relative">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#00255e]/5" />
        <div className="absolute -bottom-0 -left-40 w-96 h-96 rounded-full bg-[#CB890D]/5" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold mb-6"
          >
            Let&apos;s <span className="text-[#CB890D]">Connect</span>
          </motion.h2>
          <p className="text-gray-600 text-lg">
            Looking for a Web/Mobile Developer? I&apos;d love to hear about your
            project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-[#00255e]">
                Contact Information
              </h3>
              <div className="space-y-6">
                <motion.a
                  href="tel:+639396810206"
                  className="flex items-center group"
                  whileHover={{ x: 8 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-[#00255e] flex items-center justify-center">
                    <PhoneIcon className="h-5 w-5 text-white" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="text-lg font-medium text-gray-900 group-hover:text-[#CB890D] transition-colors">
                      +63 939 681 0206
                    </p>
                  </div>
                </motion.a>

                <motion.div className="flex items-center" whileHover={{ x: 8 }}>
                  <div className="w-12 h-12 rounded-lg bg-[#00255e] flex items-center justify-center">
                    <MapPinIcon className="h-5 w-5 text-white" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="text-lg font-medium text-gray-900">
                      Cebu City, Philippines
                    </p>
                  </div>
                </motion.div>

                <motion.a
                  href="mailto:maruronu@gmail.com"
                  className="flex items-center group"
                  whileHover={{ x: 8 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-[#00255e] flex items-center justify-center">
                    <EnvelopeIcon className="h-5 w-5 text-white" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-lg font-medium text-gray-900 group-hover:text-[#CB890D] transition-colors">
                      maruronu@gmail.com
                    </p>
                  </div>
                </motion.a>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h4 className="text-lg font-semibold text-[#00255e] mb-2">
                Available for Opportunities
              </h4>
              <p className="text-gray-600">
                I&apos;m currently open to freelance projects and full-time
                positions. Let&apos;s discuss how I can contribute to your team.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 shadow-[0_0_50px_-12px_rgb(0,0,0,0.12)]"
          >
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    className="w-full px-4 h-12 bg-gray-50 rounded-lg border border-gray-200 focus:bg-white focus:border-[#CB890D] focus:ring-1 focus:ring-[#CB890D] transition-all duration-200"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className="w-full px-4 h-12 bg-gray-50 rounded-lg border border-gray-200 focus:bg-white focus:border-[#CB890D] focus:ring-1 focus:ring-[#CB890D] transition-all duration-200"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  {...register("subject", { required: "Subject is required" })}
                  className="w-full px-4 h-12 bg-gray-50 rounded-lg border border-gray-200 focus:bg-white focus:border-[#CB890D] focus:ring-1 focus:ring-[#CB890D] transition-all duration-200"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:bg-white focus:border-[#CB890D] focus:ring-1 focus:ring-[#CB890D] transition-all duration-200 resize-none"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-[#00255e] text-white font-medium rounded-lg hover:bg-[#00255e]/90 focus:ring-4 focus:ring-[#00255e]/20 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                {isSuccess && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 text-sm text-green-600 text-center font-medium"
                  >
                    Message sent successfully! I&apos;ll get back to you soon.
                  </motion.p>
                )}

                {isError && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 text-sm text-red-500 text-center font-medium"
                  >
                    Failed to send message. Please try again later.
                  </motion.p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
