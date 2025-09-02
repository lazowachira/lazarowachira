import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'lwachira742@gmail.com',
      href: 'mailto:lwachira742@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+254 793 710 788',
      href: 'tel:+254793710788'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Nairobi, Kenya',
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Lazowachira',
      color: 'hover:text-foreground'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/lazarus-wachira-b2302230b/',
      color: 'hover:text-primary'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Ready to work together? I'd love to hear from you. Send me a message and I'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 bg-card-gradient border-border animate-fade-in">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-secondary border-border focus:border-primary"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-secondary border-border focus:border-primary"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="bg-secondary border-border focus:border-primary"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-secondary border-border focus:border-primary min-h-[120px]"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-left">
            <Card className="p-8 bg-card-gradient border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-center space-x-4">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 bg-card-gradient border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6">Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 rounded-xl bg-secondary transition-all duration-300 hover:scale-110 ${social.color} group`}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
              <p className="text-muted-foreground mt-4">
                Connect with me on social media for updates on my latest projects and tech insights.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;