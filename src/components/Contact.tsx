import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import confetti from "canvas-confetti";

const Contact = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    honeypot: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessAnim, setShowSuccessAnim] = useState(false);

  // Handle input updates
  const handleChange = (e: any) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  // Submit form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Spam bot check
    if (formData.honeypot !== "") return;

    try {
      const form = new FormData();
      form.append("name", formData.name);
      form.append("email", formData.email);
      form.append("message", formData.message);

      await fetch(
        "https://script.google.com/macros/s/AKfycbxz4JWZyGGaVmdcvAgpyV8qKAXWICkIjlqj17VPChwyuWe6JDfkazFCIFFDoM9IXoB7yw/exec",
        { method: "POST", body: form }
      );

      // Notification
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });

      // Reset form fields
      setFormData({ name: "", email: "", message: "", honeypot: "" });

      // Show GIF success popup
      setShowSuccessAnim(true);
      setTimeout(() => setShowSuccessAnim(false), 2500);

      // Fire confetti
      confetti({
        particleCount: 200,
        spread: 70,
        origin: { y: 0.6 },
      });

    } catch (err) {
      console.error(err);
      toast({
        title: "Error",
        description: "Message failed. Try again later.",
        variant: "destructive",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-gray-950 text-white relative">

      {/* SUCCESS GIF POPUP */}
      {showSuccessAnim && (
  <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-[9999]">
    <div className="text-4xl font-semibold text-white">
      Success!
    </div>
  </div>
)}


      {/* CONTENT */}
      <div className="container px-6 md:px-12 max-w-3xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Invisible spam trap */}
          <input
            name="honeypot"
            className="hidden"
            value={formData.honeypot}
            onChange={handleChange}
          />

          <Input
            name="name"
            placeholder="Name"
            className="bg-gray-900 border-gray-700"
            onChange={handleChange}
            value={formData.name}
            required
          />

          <Input
            name="email"
            type="email"
            placeholder="Email"
            className="bg-gray-900 border-gray-700"
            onChange={handleChange}
            value={formData.email}
            required
          />

          <Textarea
            name="message"
            placeholder="Message"
            rows={4}
            className="bg-gray-900 border-gray-700"
            onChange={handleChange}
            value={formData.message}
            required
          />

          <Button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-4"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
