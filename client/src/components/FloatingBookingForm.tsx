import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { insertBookingSchema } from '@shared/schema';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { VehicleType } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

// Create a custom schema that properly types the form data
const bookingFormSchema = insertBookingSchema.extend({
  pickupDate: z.string().min(1, { message: "Please select a pick-up date" }),
  returnDate: z.string().min(1, { message: "Please select a return date" })
})
.refine((data) => {
  // No validation if either date is missing
  if (!data.pickupDate || !data.returnDate) return true;
  
  // Compare dates
  return new Date(data.returnDate) >= new Date(data.pickupDate);
}, { 
  message: "Return date must be after or equal to pick-up date",
  path: ["returnDate"] // This specifies which field the error belongs to
});

export default function FloatingBookingForm() {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof bookingFormSchema>>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      vehicleType: "",
      pickupDate: "",
      returnDate: ""
    }
  });
  
  const bookingMutation = useMutation({
    mutationFn: async (data: z.infer<typeof bookingFormSchema>) => {
      return apiRequest('POST', '/api/bookings', data);
    },
    onSuccess: () => {
      toast({
        title: "Booking Request Submitted",
        description: "We'll get back to you shortly to confirm your booking.",
        variant: "default",
      });
      form.reset();
      // Close form after successful submission
      setIsOpen(false);
    },
    onError: (error) => {
      toast({
        title: "Failed to submit booking",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    }
  });
  
  function onSubmit(data: z.infer<typeof bookingFormSchema>) {
    bookingMutation.mutate(data);
  }
  
  // Get today's date in YYYY-MM-DD format for min attribute
  const today = new Date().toISOString().split('T')[0];
  
  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 w-full max-w-xs sm:max-w-sm" id="booking">
      <div className="shadow-2xl rounded-lg overflow-hidden">
        <div 
          className="bg-secondary text-white p-3 md:p-4 flex justify-between items-center cursor-pointer hover:bg-secondary-dark transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h3 className="font-heading font-semibold flex items-center">
            <i className="fas fa-calendar-alt mr-2"></i>
            <span className="hidden xs:inline">Instant Booking</span>
            <span className="xs:hidden">Book Now</span>
          </h3>
          <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'} transition-transform duration-300`}></i>
        </div>
        
        {isOpen && (
          <div className="bg-white p-4 booking-form border-t border-gray-200">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <FormField
                    control={form.control}
                    name="pickupDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm">Pick-up Date</FormLabel>
                        <FormControl>
                          <Input 
                            type="date" 
                            min={today}
                            placeholder="Select date" 
                            {...field} 
                            className="text-sm"
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="returnDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm">Return Date</FormLabel>
                        <FormControl>
                          <Input 
                            type="date" 
                            min={form.watch('pickupDate') || today}
                            placeholder="Select date" 
                            {...field} 
                            className="text-sm"
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="vehicleType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm">Vehicle Type</FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="text-sm">
                            <SelectValue placeholder="Select vehicle type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="economy">Economy</SelectItem>
                          <SelectItem value="luxury">Luxury</SelectItem>
                          <SelectItem value="suv">SUV</SelectItem>
                          <SelectItem value="commercial">Commercial</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm">Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} className="text-sm" />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="mobile"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm">Contact Number</FormLabel>
                        <FormControl>
                          <Input placeholder="03XX-XXXXXXX" {...field} className="text-sm" />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your@email.com" {...field} className="text-sm" />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                
                <div className="pt-2">
                  <Button 
                    type="submit" 
                    className="w-full bg-accent hover:bg-accent-dark text-white font-medium py-2 px-4 rounded transition"
                    disabled={bookingMutation.isPending}
                  >
                    {bookingMutation.isPending ? (
                      <span className="flex items-center justify-center">
                        <div className="animate-spin mr-2 h-4 w-4 border-2 border-b-transparent rounded-full border-white"></div>
                        Processing...
                      </span>
                    ) : (
                      "Check Availability"
                    )}
                  </Button>
                </div>
                
                {/* Quick info */}
                <div className="text-xs text-neutral-500 pt-2">
                  <p className="flex items-center">
                    <i className="fas fa-shield-alt text-green-500 mr-1"></i> 
                    Secure booking, no cancellation fees
                  </p>
                </div>
              </form>
            </Form>
          </div>
        )}
      </div>
    </div>
  );
}
