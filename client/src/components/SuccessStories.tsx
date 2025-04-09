
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    quote: "The AI Validator helped us identify critical gaps in our business model that we hadn't considered. Their insights saved us months of trial and error.",
    author: "Sarah Johnson",
    role: "Founder",
    company: "TechStart",
    avatarUrl: "public/lovable-uploads/5bff521e-9d48-49c6-a5c6-6c718152a0a3.png"
  },
  {
    quote: "Incredibly thorough analysis. We pivoted our entire approach based on the validation report and secured funding within two months.",
    author: "Michael Chen",
    role: "CEO",
    company: "NexusAI",
    avatarUrl: "public/lovable-uploads/6aa9f677-0bfc-4a46-bc2b-623fa215fdbe.png"
  },
  {
    quote: "The market insights were far beyond what we expected. Worth every penny for the clarity it provided about our target customers.",
    author: "Emma Rodriguez",
    role: "Co-founder",
    company: "Datalytics",
    avatarUrl: "public/lovable-uploads/d01d3f60-2267-402c-a368-e30f90c09770.png"
  }
];

const SuccessStories = () => {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">Success Stories</h2>
        <p className="text-gray-300 text-lg">Hear from founders who validated their startup ideas with our platform</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            quote={testimonial.quote}
            author={testimonial.author}
            role={testimonial.role}
            company={testimonial.company}
            avatarUrl={testimonial.avatarUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default SuccessStories;
