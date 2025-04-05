import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useMutation } from '@tanstack/react-query';
import { queryClient } from '@/lib/queryClient';
import { apiRequest } from '@/lib/queryClient';
import { insertContactFormSchema } from '@shared/schema';
import { useToast } from '@/hooks/use-toast';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// Extend the schema with validation rules
const contactFormSchema = insertContactFormSchema.extend({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(1, 'Please select a subject'),
  message: z.string().min(10, 'Message must be at least 10 characters')
});

export function ContactForm() {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  });
  
  const mutation = useMutation({
    mutationFn: async (values: z.infer<typeof contactFormSchema>) => {
      const res = await apiRequest('POST', '/api/contact', values);
      return res.json();
    },
    onSuccess: (data) => {
      toast({
        title: 'Message Sent',
        description: data.message || 'Thank you for your message! We will get back to you soon.',
      });
      
      // Reset form on success
      form.reset();
      
      // Invalidate any queries that fetch contact submissions
      queryClient.invalidateQueries({ queryKey: ['/api/contact'] });
    },
    onError: (error) => {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to send message. Please try again.',
        variant: 'destructive'
      });
    }
  });
  
  function onSubmit(values: z.infer<typeof contactFormSchema>) {
    mutation.mutate(values);
  }
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="bg-cream bg-opacity-70 rounded-lg p-6 shadow-lg border border-gold border-opacity-20">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormLabel className="block text-sm font-montserrat font-semibold text-dark mb-2">Name</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="w-full px-4 py-2 bg-cream border border-gold border-opacity-30 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormLabel className="block text-sm font-montserrat font-semibold text-dark mb-2">Email</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  className="w-full px-4 py-2 bg-cream border border-gold border-opacity-30 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormLabel className="block text-sm font-montserrat font-semibold text-dark mb-2">Subject</FormLabel>
              <Select 
                onValueChange={field.onChange} 
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger className="w-full px-4 py-2 bg-cream border border-gold border-opacity-30 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent">
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Booking Inquiry">Booking Inquiry</SelectItem>
                  <SelectItem value="Collaboration Proposal">Collaboration Proposal</SelectItem>
                  <SelectItem value="Media Request">Media Request</SelectItem>
                  <SelectItem value="Fan Mail">Fan Mail</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
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
            <FormItem className="mb-6">
              <FormLabel className="block text-sm font-montserrat font-semibold text-dark mb-2">Message</FormLabel>
              <FormControl>
                <Textarea 
                  {...field} 
                  rows={4} 
                  className="w-full px-4 py-2 bg-cream border border-gold border-opacity-30 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button 
          type="submit" 
          disabled={mutation.isPending}
          className="w-full py-3 bg-maroon text-cream font-montserrat font-semibold rounded-md shadow-md hover:bg-opacity-90 transition"
        >
          {mutation.isPending ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </Form>
  );
}
