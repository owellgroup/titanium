import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import logo from "@/assets/logo.png";

const formSchema = z.object({
  businessName: z.string().min(1, "Business name is required").max(100),
  businessDescription: z.string().min(1, "Business description is required").max(500),
  contactPerson: z.string().min(1, "Contact person is required").max(100),
  country: z.string().min(1, "Country is required").max(100),
  phoneNumber: z.string().min(1, "Phone number is required").max(20),
  email: z.string().email("Invalid email address").max(255),
  physicalAddress: z.string().min(1, "Physical address is required").max(300),
  servicesRequired: z.array(z.string()).min(1, "Please select at least one service"),
  otherService: z.string().max(100).optional(),
  howCanWeHelp: z.string().min(1, "Please describe how we can help").max(1000),
});

type FormData = z.infer<typeof formSchema>;

const BookUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessName: "",
      businessDescription: "",
      contactPerson: "",
      country: "",
      phoneNumber: "",
      email: "",
      physicalAddress: "",
      servicesRequired: [],
      otherService: "",
      howCanWeHelp: "",
    },
  });

  const serviceOptions = [
    { id: "customs", label: "Customs Clearing" },
    { id: "freight", label: "Freight Forwarding" },
    { id: "transport", label: "Transport" },
    { id: "advisory", label: "Import/Export Advisory" },
    { id: "other", label: "Other" },
  ];

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Here we'll call the edge function to send the email
      toast({
        title: "Request Submitted!",
        description: "We'll get back to you shortly.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-card shadow-xl rounded-lg p-8 md:p-12">
          <div className="text-center mb-8">
            <img src={logo} alt="Titanium Logistics" className="h-28 mx-auto mb-6" />
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">BOOK OUR SERVICES</h1>
            <p className="text-muted-foreground">Please complete the form below so we can serve you better</p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="businessName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Business Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your business name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="businessDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Short Description of your business *</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Describe your business" rows={3} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="contactPerson"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contact Person *</FormLabel>
                      <FormControl>
                        <Input placeholder="Full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Country *</FormLabel>
                      <FormControl>
                        <Input placeholder="Country" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number *</FormLabel>
                      <FormControl>
                        <Input placeholder="+264 ..." {...field} />
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
                      <FormLabel>Email Address *</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="physicalAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Physical Address *</FormLabel>
                    <FormControl>
                      <Input placeholder="Street, City, Postal Code" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="servicesRequired"
                render={() => (
                  <FormItem>
                    <FormLabel>Type of Service Required *</FormLabel>
                    <div className="space-y-3 mt-2">
                      {serviceOptions.map((service) => (
                        <FormField
                          key={service.id}
                          control={form.control}
                          name="servicesRequired"
                          render={({ field }) => (
                            <FormItem className="flex items-center space-x-2 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(service.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, service.id])
                                      : field.onChange(
                                          field.value?.filter((value) => value !== service.id)
                                        );
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal cursor-pointer">{service.label}</FormLabel>
                            </FormItem>
                          )}
                        />
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {form.watch("servicesRequired")?.includes("other") && (
                <FormField
                  control={form.control}
                  name="otherService"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Please specify other service</FormLabel>
                      <FormControl>
                        <Input placeholder="Describe the service" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

              <FormField
                control={form.control}
                name="howCanWeHelp"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>How can we help you? *</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Tell us about your needs..." rows={4} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary-dark transition-all hover:scale-105" 
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "SUBMIT"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default BookUs;
