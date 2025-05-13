import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { insertContactSchema } from '@shared/schema';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Map from './3d/Map';

const contactFormSchema = insertContactSchema;

export default function Contact() {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      serviceType: "",
      message: ""
    }
  });
  
  const contactMutation = useMutation({
    mutationFn: async (data: z.infer<typeof contactFormSchema>) => {
      return apiRequest('POST', '/api/contacts', data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We'll get back to you soon.",
        variant: "default",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    }
  });
  
  function onSubmit(data: z.infer<typeof contactFormSchema>) {
    contactMutation.mutate(data);
  }

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 8:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 6:00 PM" },
    { day: "Sunday", hours: "By Appointment" }
  ];
  
  return (
    <section id="contact" className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-secondary mb-3">Contact Us</h2>
          <p className="text-lg text-neutral-800 max-w-2xl mx-auto">Reach out to us for inquiries, bookings, or support</p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2 animate-on-scroll">
            <div className="bg-white p-4 rounded-lg shadow-md h-96 relative">
              {/* Simplified Map Component */}
              <Map />
              
              {/* Animated Location Pin */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-accent text-5xl animate-bounce">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-md">
                <h3 className="font-heading font-semibold text-secondary mb-2">Our Location</h3>
                <p className="text-neutral-800">Main Showroom: Block 7, Gulshan-e-Iqbal, Karachi, Pakistan</p>
                <div className="mt-2 flex space-x-4">
                  <a 
                    href="https://maps.google.com/?q=Block+7+Gulshan+e+Iqbal+Karachi+Pakistan" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm bg-secondary text-white px-3 py-1 rounded-full"
                  >
                    Get Directions
                  </a>
                  <button className="text-sm bg-primary text-secondary px-3 py-1 rounded-full">
                    View Branches
                  </button>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              {/* Address */}
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="text-secondary text-2xl mb-2">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <h4 className="font-heading font-medium text-lg text-secondary mb-1">Address</h4>
                <p className="text-sm text-neutral-800">
                  Block 7, Gulshan-e-Iqbal,<br />
                  Karachi, Pakistan
                </p>
              </div>
              
              {/* Phone */}
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="text-secondary text-2xl mb-2">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <h4 className="font-heading font-medium text-lg text-secondary mb-1">Phone</h4>
                <p className="text-sm text-neutral-800">
                  <a href="tel:+923331234567" className="hover:text-accent transition">+92 333 1234567</a><br />
                  <a href="tel:+922134567890" className="hover:text-accent transition">+92 21 34567890</a>
                </p>
              </div>
              
              {/* Email */}
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="text-secondary text-2xl mb-2">
                  <i className="fas fa-envelope"></i>
                </div>
                <h4 className="font-heading font-medium text-lg text-secondary mb-1">Email</h4>
                <p className="text-sm text-neutral-800">
                  <a href="mailto:contact@mehranshahautos.com" className="hover:text-accent transition">
                    contact@mehranshahautos.com
                  </a><br />
                  <a href="mailto:info@mehranshahautos.com" className="hover:text-accent transition">
                    info@mehranshahautos.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 animate-on-scroll" data-delay="100">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-heading font-semibold text-xl text-secondary mb-4">Quick Contact Form</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="mobile"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mobile</FormLabel>
                        <FormControl>
                          <Input placeholder="03XX-XXXXXXX" {...field} />
                        </FormControl>
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
                          <Input placeholder="your@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="serviceType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service Type</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          value={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select service type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="rental">Car Rental</SelectItem>
                            <SelectItem value="leasing">Car Leasing</SelectItem>
                            <SelectItem value="maintenance">Maintenance</SelectItem>
                            <SelectItem value="corporate">Corporate Solutions</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
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
                            rows={4}
                            placeholder="How can we help you?"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-accent hover:bg-accent-dark text-white font-medium py-3 rounded transition"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? (
                      <span className="flex items-center">
                        <div className="animate-spin mr-2 h-4 w-4 border-2 border-b-transparent rounded-full border-white"></div>
                        Submitting...
                      </span>
                    ) : (
                      "Submit"
                    )}
                  </Button>
                </form>
              </Form>
              
              <div className="mt-6">
                <h4 className="font-heading font-medium text-secondary mb-2">Business Hours</h4>
                <div className="space-y-1 text-sm">
                  {businessHours.map((item, index) => (
                    <div key={index} className="flex justify-between">
                      <span>{item.day}:</span>
                      <span>{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
