
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import React from "react";

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import AnimatedSection from './animated-section';
import { sendContactEmail, type ContactFormState } from '@/actions/send-email'; // Import the server action

// Zod schema for client-side validation (matches server action)
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }).max(500, {
    message: "Message must not exceed 500 characters.",
  }),
})

export default function ContactSection() {
  const { toast } = useToast();
  // State to manage the loading status during form submission
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  // Optional: State to store server response message if needed for display
  const [serverMessage, setServerMessage] = React.useState<string | null>(null);

  // Initialize react-hook-form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  // Form submission handler that calls the server action
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setServerMessage(null); // Clear previous server message

    // Create FormData object to send to the server action
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      // Call the server action
      const result: ContactFormState = await sendContactEmail(null, formData); // Pass null as prevState initially

      // Handle the response from the server action
      if (result.success) {
        toast({
          title: "Message Sent!",
          description: result.message,
        });
        form.reset(); // Reset form fields on success
      } else {
        toast({
          variant: "destructive",
          title: "Submission Error",
          description: result.message || "Failed to send message. Please try again.",
        });
        setServerMessage(result.message); // Store error message if needed
      }
    } catch (error) {
      // Handle unexpected errors during the action call
      console.error("Error calling sendContactEmail action:", error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem sending your message. Please try again.",
      });
      setServerMessage("An unexpected error occurred.");
    } finally {
      setIsSubmitting(false); // Re-enable the submit button
    }
  }

  return (
    <AnimatedSection id="contact">
      <div className="container-max space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Get In Touch</h2>
        <div className="max-w-xl mx-auto">
          <Form {...form}>
            {/* Bind the onSubmit handler to the form */}
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      {/* Disable input while submitting */}
                      <Input placeholder="Your Name" {...field} disabled={isSubmitting} />
                    </FormControl>
                    {/* Display validation errors */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="your.email@example.com" {...field} disabled={isSubmitting} />
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
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell me how I can help you..."
                        className="resize-none"
                        rows={5}
                        {...field}
                        disabled={isSubmitting}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Display server-side error message if it exists */}
              {serverMessage && !form.formState.isValid && (
                <p className="text-sm font-medium text-destructive">{serverMessage}</p>
              )}
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {/* Change button text based on submission state */}
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </AnimatedSection>
  );
}
