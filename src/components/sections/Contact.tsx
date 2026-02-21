import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, PhoneCall, Clock } from "lucide-react";
import { toast } from "sonner";
import confetti from "canvas-confetti";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { COMPANY_INFO } from "@/lib/site-content";
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});
type ContactFormValues = z.infer<typeof contactSchema>;
export function Contact() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", phone: "", email: "", message: "" },
  });
  const onSubmit = async (values: ContactFormValues) => {
    try {
      // Simulate API call
      console.log("Form values:", values);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#0ea5e9", "#10b981", "#ffffff"]
      });
      toast.success("Request Sent Successfully!", {
        description: "A Filter Renew specialist will call you within 24 hours.",
      });
      form.reset();
    } catch (error) {
      toast.error("Submission failed", {
        description: "Please try again or call us directly."
      });
    }
  };
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-[3rem] p-8 md:p-16 lg:p-20 overflow-hidden relative shadow-2xl">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            <div className="text-white space-y-8">
              <h2 className="text-4xl md:text-5xl font-display font-bold">Ready for a breath of fresh air?</h2>
              <p className="text-primary-foreground/70 text-lg leading-relaxed max-w-md">
                Contact us today for a free estimate or to schedule your first filter renewal. No hidden fees, no long-term contracts.
              </p>
              <div className="space-y-6 pt-4">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-2xl">
                    <PhoneCall className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold opacity-70">Direct Line</p>
                    <p className="text-xl font-bold">{COMPANY_INFO.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-2xl">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold opacity-70">Response Time</p>
                    <p className="text-xl font-bold">Under 24 Hours</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-[2rem] p-8 shadow-xl">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} className="bg-secondary/50" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="940-000-0000" {...field} className="bg-secondary/50" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" {...field} className="bg-secondary/50" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>How can we help?</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your home or business..."
                            className="bg-secondary/50 min-h-[100px] resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full rounded-xl h-12 text-lg font-bold"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? "Sending..." : "Send Request"}
                    <Send className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}